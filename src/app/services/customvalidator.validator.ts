import { FormGroup, AbstractControl, ValidationErrors,ValidatorFn } from "@angular/forms";

// To validate password and confirm password
export function Passwordvalidator(): ValidatorFn {
  console.log("hereee")
  return (control: AbstractControl): {  } => {

    //const forbidden = name.test(control.value.toLowerCase());
    return true
  };
}
