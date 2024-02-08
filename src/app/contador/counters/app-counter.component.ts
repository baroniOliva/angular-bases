import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

<h3>El contador es ahora {{contador}}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="resetValue()">0</button>
<button (click)="increaseBy(-1)">-1</button>

  `
})

export class counterComponent  {
  contador = 10;

  increaseBy(value:any):void{
    this.contador += value;
  }

  resetValue():void{
    this.contador = 0;
  }


}
