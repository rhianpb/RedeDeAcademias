import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../usuario.service';  
import { Usuario } from '../../usuario.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  senha: string = '';
  cpf: string = '';
  telefone: string = '';
  plano: 'Básico' | 'Avançado' = 'Básico';  // Definindo o tipo do plano
  experiencia: string = '';
  alertMessage: string = '';
  id?: number; // Se precisar de um ID para atualização, deixe o campo opcional

  constructor(
    private router: Router,
  ) {}

  voltarInicio(): void {
    this.router.navigate(['/']);
  }

  // Validação do formulário
formValido(): boolean {
  return (
    this.nome.trim() !== '' &&
    this.sobrenome.trim() !== '' &&
    this.email.trim() !== '' &&
    this.senha.trim() !== '' &&
    this.cpf.trim() !== '' &&
    this.telefone.trim() !== '' &&
    this.experiencia.trim() !== ''  
  );
}


  // Submissão do formulário
  onSubmit(): void {
    if (this.formValido()) {
      const usuario: Usuario = {
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        senha: this.senha,
        cpf: this.cpf,
        telefone: this.telefone,
        plano: this.plano,
        experiencia: this.experiencia,
      };
    }
  }
}
