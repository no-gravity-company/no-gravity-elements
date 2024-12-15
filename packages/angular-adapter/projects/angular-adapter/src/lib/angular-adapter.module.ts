
import { NgModule } from '@angular/core';

import { ButtonDirective, CardDirective, FooterDirective, HeaderDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective, Page404Directive, SectionDirective } from './angular-adapter.directive';

@NgModule({
  declarations: [ ButtonDirective, CardDirective, FooterDirective, HeaderDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective, Page404Directive, SectionDirective ],
  imports: [
  ],
  exports: [ ButtonDirective, CardDirective, FooterDirective, HeaderDirective, IconDirective, LinkDirective, TypographyDirective, InfoBoxDirective, Page404Directive, SectionDirective ]
})
export class AngularAdapterModule { }

  