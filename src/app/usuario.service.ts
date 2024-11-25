import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Certifique-se de que o HttpClientModule está importado no seu app
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root', // Esse decorador garante que o serviço seja singleton e fornecido na raiz
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/usuarios'; // Substitua pela URL do seu back-end

  constructor(private http: HttpClient) {}

  // Função para criar o usuário
  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // Função para atualizar o usuário
  atualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

  // Função para listar os usuários
  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}
