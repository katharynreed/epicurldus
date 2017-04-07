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
  memberId: number = null;
  member: any;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.member = this.memberService.getMember(this.memberId);
  }

  goToDetailPage(clickedId) {
    this.member = this.memberService.getMember(clickedId);
    this.router.navigate(['member', clickedId]);
  }
}
