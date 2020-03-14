import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxLoaderSpinnerModule } from 'ngx-loader-spinner';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLoaderSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
