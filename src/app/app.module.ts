import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { ActionsComponent } from './components/actions/actions.component';
import { UsComponent } from './components/us/us.component';
import { DonateComponent } from './components/donate/donate.component';
import { AppActionComponent } from './components/actions/components.actions/app-action/app-action.component';
import { AppActionMainComponent } from './components/actions/components.actions/app-action-main/app-action-main.component';
import { TeamComponent } from './components/us/team/team.component';
import { AppShowActionComponent } from './components/actions/components.actions/app-show-action/app-show-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NewsComponent,
    ActionsComponent,
    UsComponent,
    DonateComponent,
    AppActionComponent,
    AppActionMainComponent,
    TeamComponent,
    AppShowActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
