import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { AdmincacheComponent, CitiesComponent, EditorComponent } from './components';
import { AdminComponent } from './components/admin.component';

const routes: Routes = [
  {
    path : "admin",
    component : AdminComponent,
    canActivate : [AdminGuard],
    children :[
      {
        path : "",
        children : [
          { path : "cities", component : CitiesComponent },
          { path : "editor", component : EditorComponent },
          { path : "", component : AdmincacheComponent },
        ]
      }
    ]
  },

];

export const adminRouterComponents = [
  AdminComponent,
  CitiesComponent,
  EditorComponent,
  AdmincacheComponent
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
