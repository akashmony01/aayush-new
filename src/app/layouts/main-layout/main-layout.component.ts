import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  sidebarWidth: number = 300;
  showSidebar: boolean = true;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  constructor() {
    this.hideSidebarOnMobile();
  }

  ngOnInit(): void {
    this.hideSidebarOnMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.hideSidebarOnMobile();
  }

  hideSidebarOnMobile() {
    this.showSidebar = window.innerWidth > 768;
  }

  setPaddingBasedOnWindow(padding: number){
    if(window.innerWidth > 768){
      return padding;
    }else{
      return 0;
    }
  }
}
