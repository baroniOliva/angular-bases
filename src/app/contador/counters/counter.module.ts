import { NgModule } from "@angular/core";
import { counterComponent } from "./app-counter.component";


@NgModule({
  declarations:[
    counterComponent,
  ],
  exports:[
    counterComponent,
  ],

})
export class counterModule {

}
