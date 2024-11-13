import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path:'cadastro', component: CadastroComponent },
];
