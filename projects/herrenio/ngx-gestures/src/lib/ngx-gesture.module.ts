import { NgModule } from '@angular/core';
import { SwipeGestureDirective } from './swipe-gesture.directive';
import { TapGestureDirective } from './tap-gesture.directive';
import { PathGestureDirective } from './path-gesture.directive';



@NgModule({
  declarations: [
    SwipeGestureDirective,
    TapGestureDirective,
    PathGestureDirective
  ],
  imports: [
  ],
  exports: [
    SwipeGestureDirective,
    TapGestureDirective,
    PathGestureDirective
  ]
})
export class NgxGestureModule { }
