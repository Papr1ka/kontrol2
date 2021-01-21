import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admincache',
  templateUrl: './admincache.component.html',
  styleUrls: ['./admincache.component.css']
})
export class AdmincacheComponent implements OnInit {

  data = {
    "password" : "",
    "login" : ""
  }

  info = ""

  change(data){
    let answer = prompt("введите кодовое слово")
    if (answer == "РИС"){
      localStorage.setItem("admin", JSON.stringify(data))
    }
    else{
      this.info = "кодовое слово введено неверно"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
