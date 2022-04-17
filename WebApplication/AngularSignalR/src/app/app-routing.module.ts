import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  { path: '', component: HomeComponent, pathMatch: 'full' },  
  {  
    path: 'employees',  
    component: EmployeeListComponent  
  },  
  {  
    path: 'employees/:id',  
    component: EmployeeDetailComponent  
  },  
  {  
    path: 'employees/:id/edit',  
    component: EmployeeEditComponent  
  },  
]  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  