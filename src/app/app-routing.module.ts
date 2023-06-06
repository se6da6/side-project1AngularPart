import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificateComponent } from './about/certificate/certificate.component';
import { EducationComponent } from './about/education/education.component';
import { ExperienceComponent } from './about/experience/experience.component';
import { HobbiesComponent } from './about/hobbies/hobbies.component';
import { SuccessComponent } from './about/success/success.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'buttons', component: AboutComponent },
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'hobbies', component: HobbiesComponent },
      { path: 'success', component: SuccessComponent },
      { path: 'certificate', component: CertificateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
