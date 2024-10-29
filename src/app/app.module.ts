import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SeatQuizComponent } from './seat-quiz/seat-quiz.component';


// Importamos HttpClientModule para realizar solicitudes HTTP
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from './services/question.service';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SplashScreenComponent,
    SeatQuizComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
