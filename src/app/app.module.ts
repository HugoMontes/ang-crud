import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Agregar funcionalidad para los formularios
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
