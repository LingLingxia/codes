import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  senderNameControl = new FormControl("1")
  senderEmailControl = new FormControl("");
  senderMessageControl = new FormControl("")

  submitForm(){
    console.log(this.senderEmailControl.dirty);
    if(this.senderEmailControl.dirty){
      alert("updated name");
    }
    
  }
}
