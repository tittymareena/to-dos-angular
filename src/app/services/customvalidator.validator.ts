
import {  AbstractControl, ValidationErrors } from "@angular/forms";

// To validate password
export class Passwordvalidator {

  static oddNumberOfS(control: AbstractControl): ValidationErrors | null {
    var  s:string = control.value as string;
    return (s.match(/a|A/g) || []).length % 2 != 0 ? null : {oddNumberA:s}

  }
}
