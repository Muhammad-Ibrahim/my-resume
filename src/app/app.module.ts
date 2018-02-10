import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  import { HttpClientModule } from '@angular/common/http';

  import { AppComponent } from './app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { routes } from './app.routes';
  import { DataService } from './data.service';
  import { UsersService } from './users.service';
  import { AccountFormComponent } from './account-form/account-form.component';
  import { CommentFormComponent } from './comment-form/comment-form.component';
  import { ReplyFormComponent } from './reply-form/reply-form.component';
  import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { MibrahimComponent } from './mibrahim/mibrahim.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountFormComponent,
    CommentFormComponent,
    ReplyFormComponent,
    MibrahimComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [ReplyFormComponent, CommentFormComponent]
})
export class AppModule { }
