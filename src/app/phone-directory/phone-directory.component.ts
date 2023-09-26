import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.css']
})
export class PhoneDirectoryComponent {
  addedContact = { name: "", mobileNumber: "", email: "" };
  contactList: any[] = [];

  submitForm() {
    if (this.addedContact.name.trim() !== '' && this.addedContact.mobileNumber.trim() !== '' && this.addedContact.email.trim() !== '') {
      this.contactList.push({ ...this.addedContact });
      this.addedContact = { name: '', mobileNumber: '', email: '' };
    }
  }
}
