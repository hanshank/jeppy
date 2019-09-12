import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameSetupComponent } from './components/game-setup/game-setup.component';

import { FormsModule } from '@angular/forms';
import { GameScreenComponent } from './components/game-screen/game-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameSetupComponent,
    GameScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
