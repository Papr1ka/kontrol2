import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : MockService) {}

  info = ''
  error = 0

  data = {
    username : "",
    password : ""
  }

  check(data : any){
    console.log(this.service.logged)
    if (this.service.isLogged()){
      this.info = "вы уже вошли в учётную запись"
    }
    else{
      let jsonUser = localStorage.getItem("user")
        if (jsonUser) {
            let user = JSON.parse(jsonUser)
            let login_for_user = user["login"]
            let password_for_user = user["password"]
            if (data.username == login_for_user && data.password == password_for_user){
              this.service.to_login()
              this.info = "вы вошли";
            }
            else{
              this.error += 1
            }
        }

        let jsonAdmin = localStorage.getItem("admin")
        if (jsonAdmin) {
            let admin = JSON.parse(jsonAdmin)
            let login_for_admin = admin["login"]
            let password_for_admin = admin["password"]
            if (data.username == login_for_admin && data.password == password_for_admin){
              this.service.to_login()
              this.service.to_admin()
              this.info = "вы вошли как суперюзер";
            }
            else{
              this.error += 1
            }
        }
        if (this.error == 2){
          this.info = "неверные данные";
        }
    }
  }

  ngOnInit(): void {
  }

}
