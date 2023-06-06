import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CertificateComponent } from './about/certificate/certificate.component';
import { EducationComponent } from './about/education/education.component';
import { ExperienceComponent } from './about/experience/experience.component';
import { HobbiesComponent } from './about/hobbies/hobbies.component';
import { SuccessComponent } from './about/success/success.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificateService } from './certificate.service';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    CertificateComponent,
    ExperienceComponent,
    HobbiesComponent,
    SuccessComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [CertificateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
