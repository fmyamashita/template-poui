
import { Component, OnInit } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  environmentName: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.environmentName = environment.name;
  }

  loginSubmit(formData: PoPageLogin) {
    //alert(JSON.stringify(formData));

    if(formData.login == 'wanderlei@newtech.com.br' && formData.password == '1234') {
      this.router.navigate(['/main']);
    } else {
      alert('Usuário e Senha inválido');
    }

  }

}
