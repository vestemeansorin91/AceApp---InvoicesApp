const UserCollection = require("../user/user.schema");
const {StatusCodes} = require('http-status-codes');
const joi = require('joi');
const bcrypt = require('bcrypt');

module.exports = {
    register(request, response) {
        registerFn(request.body)
            .then(newUser => {
                response.write(JSON.stringify(newUser));
                response.end();
            })
            .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
    }
}

async function registerFn(userProps) {

    const userFound = await UserCollection.findOne({
        $or: [{username: userProps.username}]
    })
    if (userFound) {
        throw new Error('Username already exist')
    }

    const validateSchema = joi.object().keys({
        username: joi.string().min(5).max(25).required(),
        fullName: joi.string().min(7).max(25).required(),
        lastName: joi.string().min(5).max(25),
        email: joi.string().min(7).max(25).required(),
        password: joi.string().min(4).required(),
        isAdmin: joi.optional(),
    });

    isSchemaValid(validateSchema, userProps)

    function isSchemaValid(schema, body) {
        const {error} = schema.validate(body);
        if (error && error.details) throw new Error(error.details[0].message);

        return null;
    }

    const salt = await bcrypt.genSalt();
    const safePassword = await bcrypt.hash(userProps.password, salt)

    const newUser = {
        ...userProps,
        salt,
        password: safePassword
    };

    await new UserCollection(newUser).save();
    return userProps;

}