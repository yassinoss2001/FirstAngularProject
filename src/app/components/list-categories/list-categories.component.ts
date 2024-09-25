import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
   title : string=""  
  categories : Category[]=[
    
    {"id":1,"title":"Grand électroménager",
    "image":"assets/img/clim.jpg", "description":"aaaaaa",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/img/foure.jpg", "description":"eeeeeeee",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/img/micro onde.jpg", "description":"zzzzzzzz",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/img/machine a laver.jpg",
    "description":"rrrrrrrrr", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/img/tv.jpg", "description":"tttttttttttt",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/img/frigidaire.jpg",
    "description":"pppppppppp","available":false},]

    showDesc(description:string){
      alert(description);
    }

}
