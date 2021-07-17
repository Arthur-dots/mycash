import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RelatorioDespesaComponent } from './despesa/relatorio-despesa/relatorio-despesa.component';
import { LoginComponent } from './login/login.component';
import { RelatorioReceitaComponent } from './receita/relatorio-receita/relatorio-receita.component';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { CadastrarUsuariosComponent } from './formulario/cadastrar-usuarios/cadastrar-usuarios.component';
import { RecuperarSenhaComponent } from './formulario/recuperar-senha/recuperar-senha.component';
import { CadastrosComponent } from './formulario/cadastros/cadastros.component';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'relatorio-despesa', component: RelatorioDespesaComponent},
  {path: 'relatorio-receita', component: RelatorioReceitaComponent},
  {path: 'cadastrar-usuarios', component: CadastrarUsuariosComponent},
  {path: 'recuperar-senha', component: RecuperarSenhaComponent},
  {path: 'cadastros', component: CadastrosComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
    CommonModule,
    RouterModule.forRoot (routes),
             ],
    exports: [RouterModule]
})
export class AppRoutingModule {

 }
