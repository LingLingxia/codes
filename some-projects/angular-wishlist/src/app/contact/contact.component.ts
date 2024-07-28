import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName : new FormControl("1"),
    senderEmail : new FormControl(""),
    senderMessage : new FormControl("")
  })


  submitForm(){
    console.log(this.contactForm.value);

  }
}
