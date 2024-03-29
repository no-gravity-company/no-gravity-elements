
import { NgModule } from '@angular/core';

import { ButtonDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective } from './angular-adapter.directive';

@NgModule({
  declarations: [ ButtonDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective ],
  imports: [
  ],
  exports: [ ButtonDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective ]
})
export class AngularAdapterModule { }

  