import { IfStmt } from "@angular/compiler";
import { FormGroup, AbstractControl, ValidationErrors,ValidatorFn } from "@angular/forms";

// To validate password
// export function Passwordvalidator(): ValidatorFn {
//   return (control: AbstractControl):{ } => {
//     console.log("value")
//     const forbidden = control.value;

//   //   if(control.value != null && control.value != ''){
//   //     var temp = control.value;
//   //     var matches = temp.match(/a|A/g);
//   //     console.log('re',matches.length)
//   //     if(matches.length > 0 && matches.length % 2 != 0){
//   //       console.log('true')
//   //       return true
//   //     } else {
//   //       console.log('false')
//   //       return false
//   //     }
//   // };
//   return false
// }
// }

export class Passwordvalidator {

  static oddNumberOfS(control: AbstractControl): ValidationErrors | null {
    var  s:string = control.value as string;
    console.log((s.match(/a|A/g) || []).length); //logs 3
    return (s.match(/a|A/g) || []).length % 2 != 0 ? null : {oddNumberA:s}

  }
}
