import { Routes } from '@angular/router';
import { CadastroComponent } from './layout/cadastro/cadastro.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
];
