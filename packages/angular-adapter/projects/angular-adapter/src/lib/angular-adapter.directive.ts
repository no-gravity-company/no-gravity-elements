import { Directive, HostBinding, Input } from '@angular/core';

import { TypographySizes, IconSizes, IconNames, ButtonTypes } from '@no-gravity-elements/types';

  
@Directive({
  selector: 'nge-button',
})
export class ButtonDirective {
  @HostBinding('attr.type') @Input() type?: ButtonTypes;
  @HostBinding('attr.icon') @Input() icon?: IconNames;
}

    
@Directive({
  selector: 'nge-card',
})
export class CardDirective {
}

    
@Directive({
  selector: 'nge-icon',
})
export class IconDirective {
  @HostBinding('attr.name') @Input() name: IconNames;
  @HostBinding('attr.size') @Input() size?: IconSizes;
}

    
@Directive({
  selector: 'nge-link',
})
export class LinkDirective {
  @HostBinding('attr.href') @Input() href?: string;
  @HostBinding('attr.size') @Input() size?: TypographySizes;
}

    
@Directive({
  selector: 'nge-typography',
})
export class TypographyDirective {
  @HostBinding('attr.tag') @Input() tag: string;
  @HostBinding('attr.size') @Input() size: TypographySizes;
}

    
@Directive({
  selector: 'nge-info-box',
})
export class InfoBoxDirective {
  @HostBinding('attr.label') @Input() label: string;
  @HostBinding('attr.testProp') @Input() testProp?: string;
  @HostBinding('attr.coolProp') @Input() coolProp?: number;
  @HostBinding('attr.isInformative') @Input() isInformative?: boolean;
}

    