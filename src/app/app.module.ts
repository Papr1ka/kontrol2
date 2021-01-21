import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MockService } from './services/mock.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
