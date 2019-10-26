import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ViewallsubComponent } from './viewallsub/viewallsub.component';


const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:'full'},
  {path:'login', component: LoginComponent},  
  {path:'register', component: RegisterComponent},
  {path:'user', component: EditAppComponent},
  {path:'home', component: UserhomeComponent},
  {path:'view/:id', component: ViewFormComponent},
  {path:'form/:id', component: SubmitFormComponent},
  {path:'viewall/:id', component: ViewallsubComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }