import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'position',
  pure: false
})

export class PositionPipe implements PipeTransform {

  transform(input: Member[], desiredPosition) {
    if (input){
      var output: Member[] = [];
      if (desiredPosition === "lead"){
        for (var i = 0; i < input.length; i++) {
          if(input[i].position === "Lead") {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (desiredPosition === "second"){
        for (var i = 0; i < input.length; i++) {
          if(input[i].position === "Second") {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (desiredPosition === "third"){
        for (var i = 0; i < input.length; i++) {
          if(input[i].position === "Third") {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (desiredPosition === "skip"){
        for (var i = 0; i < input.length; i++) {
          if(input[i].position === "Skip") {
            output.push(input[i]);
          }
        }
        return output;
      }
      else {
        return input;
      }
    }

  }
}
