# ngx-loader-spinner

`ngx-loader-spinner` is a loader/spinner for angular application.

## Features
* Loader with backdrop
* Show and hide method
* Can be used from any component
* Customize functionality

## Installation

* `npm install ngx-loader-spinner --save`

## Usage

* `import { NgxLoaderSpinnerModule } from 'ngx-loader-spinner';`

* add `NgxLoaderSpinnerModule` to the imports of your NgModule

```ts
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgxLoaderSpinnerModule } from 'ngx-loader-spinner';

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

```

And you are good to go...

Use it in your `app.component.html`

````
<ngx-loader-spinner></ngx-loader-spinner>
````

Inject `NgxLoaderSpinnerService` in your component constructor.<br>
Show or hide the loader by using `NgxLoaderSpinnerService.show()` and `NgxLoaderSpinnerService.hide()`