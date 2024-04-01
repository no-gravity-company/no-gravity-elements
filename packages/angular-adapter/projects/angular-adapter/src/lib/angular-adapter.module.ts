
import { NgModule } from '@angular/core';

import { ButtonDirective, CardDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective } from './angular-adapter.directive';

@NgModule({
  declarations: [ ButtonDirective, CardDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective ],
  imports: [
  ],
  exports: [ ButtonDirective, CardDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective ]
})
export class AngularAdapterModule { }

  