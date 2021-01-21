import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular'

import { AdminRoutingModule, adminRouterComponents} from './admin-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [adminRouterComponents],
  imports: [
    CommonModule,
    EditorModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
