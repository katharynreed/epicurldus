import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from './../member.service';
import { Member } from '../member.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})

export class MemberDetailComponent implements OnInit {
  memberId;
  memberToDisplay;
  updateFail = false;
  editClicked = false;
  member: any;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.memberService.getMember(this.memberId).subscribe(dataLastEmittedFromObserver => {
      this.memberToDisplay = dataLastEmittedFromObserver;
    });
  }

  editClick() {
    this.editClicked = true;
  }

  updateMember(newName, newPosition, newSkill) {
    if (newName && newPosition && newSkill) {
      this.memberService.updateMember(this.memberToDisplay, newName, newPosition, newSkill);
      this.editClicked = false;
    } else {
      this.updateFail = true;
      this.editClicked = false;
    }
  }

  beginDeletingMember() {
    if (confirm("Are you sure you want to kick this member off the team?")) {
      this.memberService.deleteMember(this.memberToDisplay);
      this.router.navigate(['members']);
    }
  }
}
