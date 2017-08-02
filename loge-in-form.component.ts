import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loge-in-form',
  templateUrl: './loge-in-form.component.html',
  styleUrls: ['./loge-in-form.component.css']
})
export class LogeInFormComponent implements OnInit {
  logeInForm: FormGroup; 
  email:  AbstractControl;
  password:  AbstractControl;
  emailValidator(control: FormControl): { [s: string]: boolean }{
    if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
       return {invalidEmail: true}; 
    }
  }

  passwordValidator(control: FormControl): { [s: string]: boolean }{
    if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)) {     //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
       return {invalidPassword: true}; 
    }
  }



  constructor(fb: FormBuilder) {
     this.logeInForm = fb.group({
       'email': ['', Validators.compose([
          Validators.required, this.emailValidator
       ])],
       'password': ['', Validators.compose([
          Validators.required, this.passwordValidator
       ])]
      }); 
     this.email = this.logeInForm.controls["email"];
     this.password = this.logeInForm.controls["password"];
   }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  } 

}
