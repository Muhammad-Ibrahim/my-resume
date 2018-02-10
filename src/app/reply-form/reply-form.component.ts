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
  selector: 'reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.css']
})
export class ReplyFormComponent implements OnInit {

  user: Array<{image:string, name:string, password:string}>;
  now:Date = new Date();

  @Input() reply: string;

  constructor(private data:DataService) {}
  
  ngOnInit() {
    this.data.currentUser.subscribe(user => this.user = user);
  }

}