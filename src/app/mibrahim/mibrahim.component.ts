import { Component, OnInit, HostListener } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mibrahim',
  templateUrl: './mibrahim.component.html',
  styleUrls: ['./mibrahim.component.css'],
  animations: [
    trigger('showSec', [
      transition('void => *', [
        style({transform: 'translateX(-300px)', opacity: '1'}),
        animate('1000ms ease-in-out')
      ]),
      transition('* => void', [
        animate('1000ms ease-in-out', style({transform: 'translateX(-300px)', opacity: '0'}))
      ])
    ]),
    trigger('showBut', [
      transition('void => *', [
        style({transform: 'translateX(-300px)', opacity: '1'}),
        animate('1000ms ease-in-out')
      ]),
      transition('* => void', [
        animate('1000ms ease-in-out', style({transform: 'translateX(-300px)', opacity: '0'}))
      ])
    ])
  ]
})
export class MibrahimComponent implements OnInit {
  buttons: boolean = true;
  human: boolean = false;
  skills: boolean = false;
  objective: boolean = false;
  techie: boolean = false;
  smallButton: any;
  small: boolean;
  width: any;
  objpad:any;
  skillspad:any;
  learn:any;
  build:any;
  columns:any;

  user:Array<{image:string, name:string, password:string}>;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    if(this.width < 770 && this.width > 671) {this.columns = 'columns';}
    else if(this.width < 671 && this.width > 455) {this.columns = '';}
    else if(this.width <= 455) {this.columns = '';}
    else {this.columns = 'columns'}
    // this.learn = {'padding-left':'11.5vw'}; this.build = {'padding-left':'11.5vw'};
    //size style changings
      if(this.width < 800 && this.width > 580) {
        this.small = true; this.smallButton = {'padding':'14px 10px 10px', 'font-size':'19px', 'width':'30vw'};
        this.objpad = '11.5vw';
        this.skillspad = '11.5vw';
        //this.modalRight = (this.width - 280)/2 + 'px';
      }
      else if(this.width <= 580 && this.width > 350) {
        this.small = true; this.smallButton = {'padding':'14px 14px 10px', 'font-size':'14px', 'width':'30vw'};
        this.objpad = '11.5vw';
        this.skillspad = '11.5vw';
      }
      else if(this.width <= 350) {
        this.small = true; this.smallButton = {'padding':'14px 14px 10px', 'font-size':'14px', 'width':'30vw'};
        this.objpad = '4.5vw';
        this.skillspad = '11.5vw 0';
      }
      else {
        this.small = true; this.smallButton = {'padding':'20px 40px', 'font-size':'24px', 'width':'34vw'};
        this.objpad = '11.5vw';
        this.skillspad = '11.5vw';
        //if(this.showAcc) this.newShowAcc(false); this.small = false; this.smallWallStyle = {'margin-right':'0', 'margin-left':'60px', 'padding':'60px'};
        //this.modalRight = '25%';
      }
    //
  };
  
  constructor(private data:DataService) { }

  activSec(section) {
    //appearance
    this.buttons = false;
    setTimeout(() => {  
      switch (section) {
        case 'objective':
          this.objective = true;
          break;
        case 'techie':
          this.techie = true;
          break;
        case 'skills':
          this.skills = true;
          break;
        case 'human':
          this.human = true;
          break;
      }
    }, 900);
  }

  back(section) {
    switch (section) {
      case 'objective':
        this.objective = false;
        break;
      case 'techie':
        this.techie = false;
        break;
      case 'skills':
        this.skills = false;
        break;
      case 'human':
        this.human = false;
        break;
    };
    setTimeout(() => {  
      this.buttons = true;
    }, 900);
  }

  ngOnInit() {
    this.data.currentUser.subscribe(user => this.user = user);
    this.width = window.innerWidth;
    if(this.width < 770 && this.width > 671) {this.columns = 'columns';}
    else if(this.width < 671 && this.width > 455) {this.columns = '';}
    else if(this.width <= 455) {this.columns = '';}
    else {this.columns = 'columns'}
    //size style changings
      if(this.width < 800 && this.width > 580) {
        this.small = true; this.smallButton = {'padding':'14px 10px 10px', 'font-size':'19px', 'width':'30vw'};
        this.objpad = '11.5vw';
        this.skillspad = '11.5vw';
        //this.modalRight = (this.width - 280)/2 + 'px';
      }
      else if(this.width <= 580 && this.width > 350) {
        this.small = true; this.smallButton = {'padding':'14px 14px 10px', 'font-size':'14px', 'width':'30vw'};
        this.objpad = '11.5vw';
        this.skillspad = '11.5vw';
      }
      else if(this.width <= 350) {
        this.small = true; this.smallButton = {'padding':'14px 14px 10px', 'font-size':'14px', 'width':'30vw'};
        this.objpad = '4.5vw';
        this.skillspad = '11.5vw 0';
      }
      else {
        this.small = true; this.smallButton = {'padding':'20px 40px', 'font-size':'24px', 'width':'34vw'};
        this.objpad = '11.5vw';
        this.skillspad = '11.5vw';
        //if(this.showAcc) this.newShowAcc(false); this.small = false; this.smallWallStyle = {'margin-right':'0', 'margin-left':'60px', 'padding':'60px'};
        //this.modalRight = '25%';
      }
    //
  }

}
