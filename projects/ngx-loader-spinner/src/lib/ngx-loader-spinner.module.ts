import { NgModule } from '@angular/core';
import { NgxLoaderSpinnerComponent } from './ngx-loader-spinner.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgxLoaderSpinnerComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgxLoaderSpinnerComponent]
})
export class NgxLoaderSpinnerModule { }
