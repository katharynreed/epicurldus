import { Injectable } from '@angular/core';
import { Member } from './member.model';
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

  updateMember(localUpdatedMember, newName, newPosition, newSkill) {
    var memberEntryInFirebase = this.getMember(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: newName, skill: newSkill, position: newPosition});
  }

  newMember(newMember: Member) {
    this.members.push(newMember);
  }

  deleteMember(memberToDelete) {
    let memberEntryInFirebase = this.getMember(memberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
