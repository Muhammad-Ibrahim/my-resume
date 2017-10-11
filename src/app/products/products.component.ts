import { Component, OnInit, Input } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule, ViewChild, ElementRef, ViewContainerRef, HostListener } from '@angular/core';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  import { HttpClientModule } from '@angular/common/http';

  import { AppComponent } from '../app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { routes } from '../app.routes';
  import { DataService } from '../data.service';
  import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('accordion', [
      transition('void => *', [
        style({transform: 'translateY(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateY(-30px)', opacity: '0'}))
      ])
    ]),
    trigger('modal', [
      transition('void => *', [
        style({transform: 'translateY(-300px)', opacity: '0'}),
        animate('500ms ease-in-out')
      ]),
      transition('* => void', [
        animate('700ms ease-in-out', style({transform: 'translateY(-300px)', opacity: '0'}))
      ])
    ])
  ]
})


export class ProductsComponent implements OnInit {
  
  contribute:boolean;
  showAcc:boolean;
  user:Array<{image:string, name:string, password:string}>;

  smallWallStyle:any;
  modalRight:any;
  width:any;
  small:boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    //size style changings
      if(this.width < 1000 && this.width >= 800) {
        this.small = true; this.smallWallStyle = {'margin-right':'60px'};
      }
      else if(this.width < 800) {
        this.small = true; this.smallWallStyle = {'margin':'0', 'padding':'10px'};
        this.modalRight = (this.width - 280)/2 + 'px';
      }
      else {
        if(this.showAcc) this.newShowAcc(false); this.small = false; this.smallWallStyle = {'margin-right':'0', 'margin-left':'60px', 'padding':'60px'};
        this.modalRight = '25%';
      }
    //
  };
  
  rForm: FormGroup;
  showReply: boolean;
  cForm: FormGroup;
  now:Date = new Date();
  
  constructor (fb: FormBuilder, private data:DataService) {
    this.rForm = fb.group({
      'reply': [null, Validators.required]
    });
    this.cForm = fb.group({
      'comment': [null, Validators.required]
    });
  }

  cadded:any[]=[];
  radded:any = [[]];
  c=0;
  r=0;
  cshow: boolean = false;
  rshow: boolean = false;
  
  cadd(post){
    this.cadded[this.c] = post.comment;
    this.cForm.reset();
    this.c++;
    if(!this.cshow) this.cshow = true;
  }
      
  radd(post){
    this.radded[0][this.r] = post.reply;
    console.log(this.radded);
    this.rForm.reset();
    this.r++;
    if(!this.rshow) this.rshow = true;
  }
  
  animateA:any = {};
  value:any = {};

  openAccordion(con) {
    if(!this.animateA[con.id]) {
      Object.keys(this.animateA).forEach(i => {
        this.animateA[i] = false;
      });
      Object.keys(this.value).forEach(i => {
        this.value[i] = "View";
      });
      this.animateA[con.id] = true;
      this.value[con.id] = "Hide";
    }
    else {
      this.animateA[con.id] = false;
      this.value[con.id] = "View";
    }
  }
  
  //now = moment('2017-08-07 17:05:33').format('DD MMMM YYYY kk:mm');


  cons:any;

  ngOnInit() {
    this.width = window.innerWidth;
    //size style changings
      if(this.width < 1000 && this.width >= 800) {
        this.small = true; this.smallWallStyle = {'margin-right':'60px'};
      }
      else if(this.width < 800) {
        this.small = true; this.smallWallStyle = {'margin':'0', 'padding':'10px'};
        this.modalRight = (this.width - 280)/2 + 'px';
      }
      else {
        if(this.showAcc) this.newShowAcc(false); this.small = false; this.smallWallStyle = {'margin-right':'0', 'margin-left':'60px', 'padding':'60px'};
        this.modalRight = '25%';
      }
    //

    this.cons = this.data.cons;

    //shared variables watchers
      this.data.currentUser.subscribe(user => this.user = user);
      this.data.currentContribute.subscribe(contribute => this.contribute = contribute);
      this.data.currentShowReply.subscribe(showReply => this.showReply = showReply);
      this.data.currentShowAcc.subscribe(showAcc => this.showAcc = showAcc);
    //
  }

  //ask to change shared variables
    newShowReply() {
      this.data.changeShowReply(this.showReply);
    }

    newShowAcc(state) {
      this.showAcc = state;
      this.data.changeShowAcc(this.showAcc);
    }
  //

}
