import { Component } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName : new FormControl("1",Validators.required),
    senderEmail : new FormControl("",[Validators.required,Validators.email]),
    senderMessage : new FormControl("",[Validators.required,Validators.minLength(10)])
  })


  submitForm(){
    console.log(this.contactForm.get("senderMessage")?.errors);

  }
}
