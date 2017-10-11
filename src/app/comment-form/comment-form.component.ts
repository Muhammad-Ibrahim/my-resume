import { Component, OnInit, Input } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
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
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
  animations: [
    trigger('alert', [
      transition('void => *', [
        style({transform: 'translateY(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateY(-30px)', opacity: '0'}))
      ])
    ]),
    trigger('accordion', [
      transition('void => *', [
        style({transform: 'translateY(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateY(-30px)', opacity: '0'}))
      ])
    ])
  ]
})
export class CommentFormComponent implements OnInit {
  
  user: Array<{image:string, name:string, password:string}>;
  now:Date = new Date();
  
  @Input() comment: string;

  rForm: FormGroup;
  cForm: FormGroup;

  constructor (fb: FormBuilder, private data:DataService) {
    this.rForm = fb.group({
      'reply': [null, Validators.required]
    });
    this.cForm = fb.group({
      'comment': [null, Validators.required]
    });
  }

  radded:any = [[]];
  r=0;
  rshow: boolean = false;
  first:boolean = false;
  value:string = '';

  radd(post){
    this.radded[0][this.r] = post.reply;
    console.log(this.radded);
    this.rForm.reset();
    this.r++;
    if(!this.rshow) this.rshow = true;
    if(!this.first) {this.first = true; this.value = 'Hide Replies...';};
  }
  
  animateA:boolean = false;

  openAccordion() {
    if(!this.first) {
      if(this.animateA) {this.animateA = false; this.value = 'Add a Reply';}
      else {this.animateA = true; this.value = 'Skip Replying...'}
    }
    else {
      if(this.animateA) {this.animateA = false; this.value = 'View Replies...';}
      else {this.animateA = true; this.value = 'Hide Replies...'}
    }
  }

  ngOnInit() {
    this.data.currentUser.subscribe(user => this.user = user);
  }

}
