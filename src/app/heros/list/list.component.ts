import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public HeroNames : String [] = ["Spiderman", "Hulk","She-Hulk"]
  public deletedHero?: String = '';


  public DelLastHero ():void{
   this.deletedHero = this.HeroNames.pop();

  }

}
