import { Component } from '@angular/core';
import { Member } from './member.model';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberService } from './member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MemberService]
})
export class AppComponent {
  members: FirebaseListObservable<any[]>;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }
}
