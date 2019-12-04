import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokesComponent } from './pokes/pokes.component';

@NgModule({
  declarations: [
    AppComponent,
    PokesComponent
  ],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
