import { Routes } from '@angular/router';
import { CadastroComponent } from './layout/cadastro/cadastro.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule], // Verifique se o RouterModule está aqui
  exports: [RouterModule], // Certifique-se de exportar as rotas
})
export class AppRoutingModule {}