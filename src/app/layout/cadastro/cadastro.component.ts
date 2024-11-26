import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../../usuario.model';
import { UserServiceService } from '../../Services/user-service.service';



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
  plano: 'Básico' | 'Avançado' = 'Básico';
  experiencia: string = '';
  alertMessage: string = '';
  id?: number;

  isLoading: boolean = false; // Controle de carregamento
  errorMessage: string = ''; // Mensagem de erro

  constructor(
    private router: Router,
    private userServiceService: UserServiceService
     // Injeção do serviço de usuário
  ) {}

  // Navegar para a página inicial
  voltarInicio(): void {
    this.router.navigate(['/cadastro']);
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
      // Criar objeto usuário
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

      this.isLoading = true; // Ativa indicador de carregamento
      this.errorMessage = '';

      console.log(usuario);
      // Chama o serviço para criar o usuário
      this.userServiceService.criarUsuario(usuario).subscribe({
        next: () => {
          this.alertMessage = 'Cadastro realizado com sucesso!';
          this.router.navigate(['/']); 
        }

        }
      );};
    }
}
