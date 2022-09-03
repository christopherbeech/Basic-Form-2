import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from 'src/app/data/userSettings';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  originalUserSetting: UserSettings = {

    name: "Sam",
    email: "samfisher@gmail.com"

  }
  userSetting: UserSettings = {...this.originalUserSetting}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit: ', form.valid)
  }

}
