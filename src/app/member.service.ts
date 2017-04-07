import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { routing } from './app.routing';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMember(memberId) {
    return this.angularFire.database.object('members/' + memberId);
  }

  updateMember(localUpdatedMember) {
    let frameEntryInFirebase = this.getMember(localUpdatedMember.$key);
    frameEntryInFirebase.update({name: localUpdatedMember.name, skill: localUpdatedMember.skill, detail: localUpdatedMember.detail});
  }

  newMember(newMember: Member) {
    this.members.push(newMember);
  }
}
