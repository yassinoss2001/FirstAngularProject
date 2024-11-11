import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-formuser-component',
  templateUrl: './form-user-component.component.html',
  styleUrls: ['./form-user-component.component.css']
})
export class FormUserComponentComponent {
  user: User = new User();
  listeUser: Array<User> = [];

constructor (){
  this.user.category= "customer"
}
 
  add(form: NgForm) {
    
    this.listeUser.push(this.user);
    console.log(this.listeUser);
  } 




}