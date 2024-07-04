import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    "email": "",
    "password": ""
  };
  http = inject(HttpClient);
  router = inject(Router);
  onLogin() {
     debugger;
    this.http.post("http://localhost:5000/api/users/login", this.loginObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert("Login success");
          this.router.navigateByUrl('dashboard');
        } else {
          alert(res.message)
        }

      })
  }

}
