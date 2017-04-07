import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToDetailPage(clickedMember) {
   this.router.navigate(['member', clickedMember.$key]);
 };

}
