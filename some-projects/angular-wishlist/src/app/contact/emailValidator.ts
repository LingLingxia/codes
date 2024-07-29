import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidEmailValidator(host:string[] = []): ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null =>{
        const value = control.value;
        if(!value) return null;
        const match = host.some(item=>value.includes(`@${item}`))
        return match? {
            invalidEmailValidator:true
        }:null;
    }
}