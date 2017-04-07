import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  members;
  filterByPosition = "allPositions";
  newMemberClicked = false;

  constructor(private router: Router, private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.getMembers().subscribe(dataLastEmittedFromObserver => {
      this.members = dataLastEmittedFromObserver;
    });
  }

  goToDetailPage(clickedMember) {
   this.router.navigate(['member', clickedMember.$key]);
 }

  onChange(optionFromMenu) {
    this.filterByPosition = optionFromMenu;
  }

  showNewMemberForm(){
    if (confirm("Are you an admin? Don't lie.")) {
      this.newMemberClicked = true;
    }
  }

  submitNewMember(newName, newPosition, newSkill){
    var newMember = new Member(newName, newPosition, newSkill);
    this.memberService.newMember(newMember);
    this.newMemberClicked = false;
  }

}
