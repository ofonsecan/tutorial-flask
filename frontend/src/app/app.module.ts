import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CancionesModule } from './canciones/canciones.module';
import { HttpClientModule } from '@angular/common/http';
import { CancionesService } from './canciones/canciones.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CancionesModule,
    HttpClientModule
  ],
  providers: [CancionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
