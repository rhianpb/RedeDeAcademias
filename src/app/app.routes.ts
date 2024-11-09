import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path:'cadastro', component: CadastroComponent },
    {path: '', component: HeaderComponent},
];
