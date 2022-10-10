import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
