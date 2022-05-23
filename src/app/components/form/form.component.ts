import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formularioRegistro: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      nacimiento: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      contraseña: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      checkpass: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    },
      { validator: this.checkPassword }
    );
  }

  ngOnInit(): void { }

  register() {
    console.log(this.formularioRegistro.value)
    this.formularioRegistro.reset()
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['contraseña']?.value
    const checkpass = group.controls['checkpass']?.value
    return pass === checkpass ? null : { notSame: true }
  }

}
