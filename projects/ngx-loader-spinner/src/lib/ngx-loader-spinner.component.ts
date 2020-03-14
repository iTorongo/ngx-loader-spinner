import { Component, OnInit } from '@angular/core';
import { NgxLoaderSpinnerService } from './ngx-loader-spinner.service';

@Component({
  selector: 'ngx-loader-spinner',
  template: `
  <div *ngIf="isLoading" class="loader-wrapper">
    <div class="loader">
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item3"></div>
    </div>
  </div>
  `,
  styles: [`
    .loader-wrapper {
      height: 100vh;
      width: 100vw;
      background-color: rgba(255, 255, 255, 0.7);
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .loader > div {
      width: 18px;
      height: 18px;
      background-color: #d35400;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }
    .loader .item1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    .loader .item2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }

    @-webkit-keyframes sk-bouncedelay {
      0%, 80%, 100% { -webkit-transform: scale(0) }
      40% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bouncedelay {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      } 40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
    }
  `]
})

export class NgxLoaderSpinnerComponent implements OnInit {

  /**
   * Loader flag
   */
  isLoading = false;

  constructor(
    private loader: NgxLoaderSpinnerService
  ) { }

  ngOnInit() {
    this.getLoaderStatus();
  }

  /**
   * Get loader status
   */
  private getLoaderStatus() {
    this.loader
        .loaderStatus()
        .subscribe(spinning => {
          setTimeout(() => {
            this.isLoading = spinning;
          }, 10);
        });
  }

}
