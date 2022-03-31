import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateRouletteComponent } from './modules/create-roulette/create-roulette.component';
import { PublicHttpService } from './services/public-http.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateRouletteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [PublicHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
