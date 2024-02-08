import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { counterModule } from './contador/counters/counter.module';
import { HerosModule } from './heros/heros.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    counterModule,
    HerosModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Elimina AppComponent de aquí
})
export class AppModule { }
