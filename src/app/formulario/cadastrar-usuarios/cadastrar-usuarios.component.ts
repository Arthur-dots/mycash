import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.scss']
})
export class CadastrarUsuariosComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.querySelector('html').style.background = 'liner-gradient(to right, #00934e, #67cf43, #fadf1a)';
  }

  ngOnDestroy() {
    document.querySelector('html').style.background = 'none';
  }

  backToLogin(){
    this.router.navigate(['/login']);
  }
}
