import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.css',
})
export class UserRegistration {
  registrationForm: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(5)]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
          ],
        ],
        mobiles: this.fb.array([this.createMobile()]),
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  get f() {
    return this.registrationForm.controls;
  }

  get mobiles(): FormArray {
    return this.registrationForm.get('mobiles') as FormArray;
  }

  createMobile(): FormGroup {
    return this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
    });
  }

  addMobile() {
    this.mobiles.push(this.createMobile());
  }

  removeMobile(index: number) {
    if (index > 0) {
      this.mobiles.removeAt(index);
    }
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword ? { mismatch: true } : null;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submittedData = this.registrationForm.value;
      this.registrationForm.reset();
      this.mobiles.clear();
      this.mobiles.push(this.createMobile());
    }
  }

  resetForm() {
    this.registrationForm.reset();
    this.mobiles.clear();
    this.mobiles.push(this.createMobile());
    this.submittedData = null;
  }
}
