import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.css']
})
export class PhoneDirectoryComponent {
  contactForm: FormGroup;
  contactList: { name: string; mobileNumber: string; email: string }[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      mobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      email:[]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      const { name, mobileNumber, email } = this.contactForm.value;
      this.contactList.push({ name, mobileNumber, email });
      this.contactForm.reset();
    }
  }
}
