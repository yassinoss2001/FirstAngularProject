import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  color : string="red";
  titre : string="hello";
  user={id:'',name:''}
  product={
    id:1,
    name:"iphone",
    price:10,
    quantity:5,
    image:"/assets/login.png"

  }

  acheter(){
this.product.quantity --
  }

  onColorChange(event:Event){
    this.color=(event.target as HTMLInputElement).value;
  }



}
