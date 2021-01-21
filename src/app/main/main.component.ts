import { Component, OnInit } from '@angular/core';
import { People } from '../models/people';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people : Array<People>

  constructor(db : MockService){
    setTimeout(() => {
      this.people = db.get_people();
    }, 3000)
  }

  ngOnInit(): void {
  }

}
