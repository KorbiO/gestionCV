import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvDisplayComponent } from './cv-display/cv-display.component';
import { CvUpdateComponent } from './cv-update/cv-update.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addCv', component: AddCvComponent },
  { path: 'displayCv/:idUser', component: CvDisplayComponent },
  { path: 'updateCv', component: CvUpdateComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
