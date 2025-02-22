import { Component, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  windowScrolled = true;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }  else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    // (function smoothscroll() {
    //   const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    //   if (currentScroll > 0) {
    //     window.requestAnimationFrame(smoothscroll);
    //     window.scrollTo(0, 0);
    //   }
    // })();
    const element = document.querySelector('#home');
    element?.scrollIntoView();

  }

  ngOnInit() {}

}
