import { Injectable } from '@angular/core';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  admin = false;
  logged = false;

  people = new Array<People> (
    {
      "name": "Иван",
      "surname": "Иванов",
      "age": 1,
      "petname": "Зверобой",
    }
  )

  constructor() {
    console.log("сервис появился")
    for (let i = 0; i < 100; i++){
      if (i !== null){
        this.people.push(
          {
            "name": "Иван",
            "surname": "Иванов",
            "age": i,
            "petname": "Зверобой",
          }
        )
      }
    }
  }

  get_people(){
    return this.people;
  }

  to_login(){
    this.logged = true;
  }

  to_admin(){
    this.admin = true
  }

  isLogged(){
    return this.logged;
  }

  is_admin(){
    return this.admin;
  }


}


