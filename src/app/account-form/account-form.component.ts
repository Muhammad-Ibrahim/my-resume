import { Component, OnInit, Input, Output } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  import { HttpClientModule } from '@angular/common/http';

  import { AppComponent } from '../app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { routes } from '../app.routes';
  import { UsersService } from '../users.service';
  import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
  animations: [
    trigger('selectedImg', [
      state('inactive', style({
        border: '0'
      })),
      state('active', style({
        border: '4px solid rgb(23, 121, 186)'
      })),

      transition('void => *', [
        style({transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(-30px)', opacity: '0'}))
      ])
    ]),
    trigger('alert', [
      transition('void => *', [
        style({transform: 'translateY(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateY(-30px)', opacity: '0'}))
      ])
    ]),
    trigger('profile', [
      transition('void => *', [
        style({transform: 'translateX(-60px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class AccountFormComponent implements OnInit {

  @Input() small:boolean;

  gend:boolean = true;
  contribute:boolean;
  showAcc:boolean;
  
  aForm: FormGroup;
  post:any;              // A property for our submitted form
  name:string = '';
  password:string = '';
  
  image:string;

  user:Array<{image:string, name:string, password:string}>;
  cons:any;

  constructor(fb: FormBuilder, private data:DataService) {
    this.aForm = fb.group({
      'name': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    //this.fetch();
    this.cons = this.data.cons;
  }

  addUser(post) {
    if (this.gend) this.image = '../assets/avatar.png';
    else this.image = '../assets/favatar.png';
    
    this.name = post.name;
    this.password = post.password;
    
    
    this.user = [{
      'image' : this.image,
      'name' : this.name,
      'password' : this.password
    }];
    this.newUser();

    this.contribute = true;
    this.newContribute();

    if(this.showAcc) this.newShowAcc();
  }



  /*fetch() {
    this.data.getCons()
      .subscribe( 
        data => console.log(JSON.stringify(data)),
        error => console.log(error),
        () => console.log('Finished')
      );
  }*/

  animateMale = 'active';
  animateFemale = 'inactive';
  animate(gender) {
    if (gender === 'male') {
      this.animateMale = (this.animateMale === 'inactive' ? 'active' : 'inactive');
      this.animateFemale = 'inactive';
      this.gend = true;   //male
    }
    else {
      this.animateFemale = (this.animateFemale === 'inactive' ? 'active' : 'inactive');
      this.animateMale = 'inactive';
      this.gend = false;
    }
  }

  ngOnInit() {
    this.data.currentUser.subscribe(user => this.user = user);
    this.data.currentContribute.subscribe(contribute => this.contribute = contribute);
    this.data.currentShowAcc.subscribe(showAcc => this.showAcc = showAcc);
  }

  newUser() {
    this.data.changeUser(this.user);
  }

  newContribute() {
    this.data.changeContribute(this.contribute);
  }

  newShowAcc() {
    this.showAcc = false;
    this.data.changeShowAcc(this.showAcc);
  }

}
