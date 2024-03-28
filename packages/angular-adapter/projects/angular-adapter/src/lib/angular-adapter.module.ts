import { NgModule } from '@angular/core';

import { IconDirective, TypographyDirective } from './angular-adapter.directive';




@NgModule({
  declarations: [
    TypographyDirective,
    IconDirective
  ],
  imports: [
  ],
  exports: [
    TypographyDirective,
    IconDirective
  ]
})
export class AngularAdapterModule { }
