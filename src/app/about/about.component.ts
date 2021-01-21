import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ipsum : string;

  constructor() {
    this.ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cum beatae reiciendis, illum itaque molestiae repellendus velit iure doloremque quam alias numquam quia nam saepe optio tempora. Odit, temporibus fugiat!"
  }

  ngOnInit(): void {
  }

}
