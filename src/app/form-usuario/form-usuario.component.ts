import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  formGroup?: FormGroup;
  usuario?: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {
    const usuario: any = {};
    this.createForm(usuario);
  }

  private createForm(usuario: Usuario) {
    this.formGroup = this.formBuilder.group({
      username: [
        { value: usuario.username, disabled: usuario.id !== undefined },
        Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])
      ],
      password: [
        usuario.password,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      name: [
        usuario.name,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      email: [
        usuario.email,
        Validators.compose([Validators.required, Validators.email])
      ]
    });

    this.usuario = usuario;
  }

  salvar() {
    if (this.formGroup?.invalid) {
      this.toastr.error('Campos inválidos ou não preenchidos!');
      return;
    }

    const usuario = this.formGroup?.getRawValue() as Usuario;
    // Chama o service para salvar na API
    // const userSaved = this.serviceUser.save(usuario);
    this.toastr.success('Pode salvar!');

    //Quem faz isso é a API
    usuario.id = 1;
    usuario.dateInsert = new Date();

    // Chama novamente o create form para atualizar a tela com as informações do usuário atualizada
    this.createForm(usuario);

  }

  get username() {
    return this.formGroup?.get('username');
  }

  get password() {
    return this.formGroup?.get('password');
  }

  get name() {
    return this.formGroup?.get('name');
  }

  get email() {
    return this.formGroup?.get('email');
  }

}
