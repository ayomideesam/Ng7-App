import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  myGroup =  new FormGroup({
    name: new FormControl('', Validators.required)
  });
  submitted = false;
  finished = false;
  success = false;
  great = false;
  successMsg: string;
  firstNameError: string;
  lastNameError: string;
  nameError: string = "Name is required";
  msgError: string;
  name: string = '';


  constructor(private formBuilder: FormBuilder) {
    this.firstNameError = "Your first name is required";
    this.lastNameError = "Your second name is required";
    this.msgError = "A message is required";
    this.successMsg ="Your form is valid!";

    this.messageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.messageForm.invalid){
      return;
    }
    this.success = true;
  }

  onSave(){
    this.finished = true;
    if(this.myGroup.invalid){
      return 'invalid content';
    }
    this.great = true;
  }

  updateName(path) {
    this.name = path;
  }

  ngOnInit() {
  }

}
