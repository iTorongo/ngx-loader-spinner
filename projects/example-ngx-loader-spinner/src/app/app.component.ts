import { Component, OnInit } from '@angular/core';
import { NgxLoaderSpinnerService } from 'ngx-loader-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private loader: NgxLoaderSpinnerService
  ) {
  }

  ngOnInit() {
    this.showLoader();
  }

  showLoader() {
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
    }, 5000);
  }
}
