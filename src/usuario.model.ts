export interface Usuario {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    telefone: string;
    experiencia?: string;
    plano: 'Básico' | 'Avançado'; 
  }
  