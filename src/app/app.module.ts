import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
