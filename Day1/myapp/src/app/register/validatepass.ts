import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export class ValidatePassword{
     static validatePassword() :ValidatorFn{
        return(control:AbstractControl): ValidationErrors|null=>{
            return (control.value?.length>=4?null:{'msg':'Invalid password'});
        }
    }
}


