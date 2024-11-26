import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../usuario.service';
import { Usuario } from '../../usuario.model';
import { HttpClientModule } from '@angular/common/http';  // Importando o HttpClientModule aqui

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],  // Certifique-se de que o HttpClientModule está aqui
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
    private usuarioService: UsuarioService,  // Injeta o serviço de usuário
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

      // Chama o serviço para criar o usuário
      this.usuarioService.criarUsuario(usuario).subscribe({
        next: (response) => {
          this.alertMessage = 'Cadastro realizado com sucesso!';
          this.router.navigate(['/']);  // Redireciona para a página inicial após sucesso
        },
        error: (err) => {
          console.error(err);
          this.alertMessage = 'Erro ao realizar cadastro. Tente novamente.';
        }
      });
    } else {
      this.alertMessage = 'Por favor, preencha todos os campos obrigatórios.';
    }
  }
}
