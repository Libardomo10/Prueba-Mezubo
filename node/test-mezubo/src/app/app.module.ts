import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CreateRouletteComponent } from './modules/create-roulette/create-roulette.component';
import { ListRoulettesComponent } from './modules/list-roulettes/list-roulettes.component';
import { TabMenuComponent } from './modules/tab-menu/tab-menu.component';
import { ListBetsComponent } from './modules/list-bets/list-bets.component';
import { OpenRouletteComponent } from './modules/open-roulette/open-roulette.component';
import { FormBetComponent } from './modules/form-bet/form-bet.component';
import { PublicHttpService } from './services/public-http.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    CreateRouletteComponent,
    ListRoulettesComponent,
    TabMenuComponent,
    ListBetsComponent,
    OpenRouletteComponent,
    FormBetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TableModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    TabViewModule,
    ScrollPanelModule,
    InputTextModule,
    CheckboxModule
  ],
  providers: [PublicHttpService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
