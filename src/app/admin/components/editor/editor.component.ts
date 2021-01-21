import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

  edit : string;

  constructor(private sanitizer : DomSanitizer) {}

  getData(){
    return this.sanitizer.bypassSecurityTrustHtml(this.edit);
  }

  ngOnInit(): void {
  }

}
