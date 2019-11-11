import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { USERS} from '../user-list';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  myForm: FormGroup;

  users = USERS;
  userName: string;
  userEmail: string;
  userPassword: string;

  constructor() { 
    this.myForm = new FormGroup({

      userName : new FormControl('' , Validators.required),
      userEmail : new FormControl('' , [
        Validators.required,
        Validators.email
      ]),

      userPassword : new FormControl('' , [
        Validators.required,
        Validators.minLength(5)
      ]),
    });
  }

  addPerson() {
    this.users.push({
      name: this.userName, 
      email: this.userEmail,
      password: this.userPassword
    });
  }

  isLogged(email: string, password: string){

    const u_arr: number = this.users.length;
    for (let i = 0; i < u_arr; i++) {
    if (email === this.users[i].email && password === this.users[i].password) {
      alert('Приветствую, ' + this.users[i].name +'! ');
    } else {
      alert('Неправильный email или пароль');
    }
      
    }

  }
  ngOnInit() {
    this.userName = '';
    this.userEmail = '';
    this.userPassword = '';
 }

}
