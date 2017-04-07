import { Component, OnInit } from '@angular/core';
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

  goToDetailPage(clickedMember: Member) {
   this.router.navigate(['member', clickedMember.id]);
 };

}
