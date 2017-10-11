import { Injectable } from '@angular/core';
  import { Http } from '@angular/http';
  import { BehaviorSubject } from 'rxjs/BehaviorSubject';
  import { ReplyFormComponent } from './reply-form/reply-form.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@Injectable()
export class DataService {
  
  //Shared Variables Declarations
  //created user {} - (!)conribute - {{reply}} - (!)showReply - (!)showAcc
    private userSource = new BehaviorSubject<Array<{image:string, name:string, password:string}>>([]);
    currentUser = this.userSource.asObservable();

    private contributeSource = new BehaviorSubject<boolean>(false);
    currentContribute = this.contributeSource.asObservable();

    private replySource = new BehaviorSubject<string>('');
    currentReply = this.replySource.asObservable();

    private showReplySource = new BehaviorSubject<boolean>(false);
    currentShowReply = this.showReplySource.asObservable();

    private showAccSource = new BehaviorSubject<boolean>(false);
    currentShowAcc = this.showAccSource.asObservable();
  //

  constructor(private http:Http) {}

  //change shared variables to be affected globally  
    changeUser(user:Array<{image:string, name:string, password:string}>) {
      this.userSource.next(user);
    }

    changeContribute(contribute:boolean) {
      this.contributeSource.next(contribute);
    }

    changeReply(reply:string) {
      this.replySource.next(reply);
    }

    changeShowReply(showReply:boolean) {
      this.showReplySource.next(showReply);
    }

    changeShowAcc(showAcc:boolean) {
      this.showAccSource.next(showAcc);
    }
  //

  //initially rendered contributions 
  cons = {
    'comments' : [
      {
        'id' : 0,
        'com_id' : -1,             //this is a main sentence
        'hasReplies': true,
        'image' : './assets/muhammad-ibrahim.jpg',
        'name' : 'Muhammad Ibrahim',
        'time' : '08-09-2017',
        'sentence' : 'What is AI?'
      }
    ],
    'replies' : [
      {
        'id' : 0,
        'com_id' : 0,             //this is a reply for comment with id 0
        'image' : './assets/favatar.png',
        'name' : 'Mai Magdy',
        'time' : '10-09-2017',
        'sentence' : 'Artificial Intelligence is the science of giving the machine the ability of learning'
      },
      {
        'id' : 0,
        'com_id' : 0,             //this is a reply for comment with id 0
        'image' : './assets/avatar.png',
        'name' : 'Ahmed Saleh',
        'time' : '10-09-2017',
        'sentence' : 'That\'s right, it also enables the machine to deciding and acting according to its new thoughts'
      }
    ]
  };


  /*return this.http.get('../assets/db/users.json')
  .map(res => res.json());*/
  
}
