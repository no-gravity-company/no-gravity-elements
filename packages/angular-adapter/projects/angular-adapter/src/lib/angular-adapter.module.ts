
import { NgModule } from '@angular/core';

import { ButtonDirective, CardDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective, SectionDirective } from './angular-adapter.directive';

@NgModule({
  declarations: [ ButtonDirective, CardDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective, SectionDirective ],
  imports: [
  ],
  exports: [ ButtonDirective, CardDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective, SectionDirective ]
})
export class AngularAdapterModule { }

  