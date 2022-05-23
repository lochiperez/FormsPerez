import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  registrationForm: FormGroup;
  inputPassType: boolean = false;
  inputCheckType: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      checkpass: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    },
      { validator: this.checkPassword }
    );
  }

  ngOnInit(): void { }

  register() {
    console.log(this.registrationForm.value)
    this.registrationForm.reset()
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value
    const checkpass = group.controls.checkpass?.value
    return pass === checkpass ? null : { notSame: true }
  }

  toggleInputPassType() {
    this.inputPassType = !this.inputPassType;
  }

  toggleInputCheckType() {
    this.inputCheckType = !this.inputCheckType;
  }

}
