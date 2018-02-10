import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  width:any;
  imgMargin:any;
  ulMargin:any;
  small:boolean;
  menuVisibility:string = 'hidden';
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    //size style changings
      if(this.width < 570) {
        this.small = true;
      }
      else if(this.width < 800 && this.width >= 570) {
        this.imgMargin = 30;
        this.ulMargin = 40;
        this.small = false;
      }
      else {
        this.imgMargin = 65;
        this.ulMargin = 80;
        this.small = false;
      }
    //
  };
  
  
  constructor() { }

  toggleMenu() {
    this.menuVisibility = (this.menuVisibility === 'hidden' ? 'visible' : 'hidden');
  }
  
  ngOnInit() {
    this.width = window.innerWidth;
    //size style changings
      if(this.width < 570) {
        this.small = true;
      }
      else if(this.width < 800 && this.width >= 570) {
        this.imgMargin = 30;
        this.ulMargin = 40;
        this.small = false;
      }
      else {
        this.imgMargin = 65;
        this.ulMargin = 80;
        this.small = false;
      }
    //
  }

}
