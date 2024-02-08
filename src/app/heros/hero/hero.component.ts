import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Lucas";
  public age:number = 25;


get capitalizeName():string{
  return this.name.toUpperCase();
}

Descripcion():string{

  return `${this.name} tiene ${this.age} de edad`;
}

changeHero(){
  console.log (this.name)
  this.name = 'Spiderman';
  console.log(this.name)

}

changeAge(){
  this.age = 18;
}

Reset():void{
  this.name="Lucas";
  this.age=25;
}

}
