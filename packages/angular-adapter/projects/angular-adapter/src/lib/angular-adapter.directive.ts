import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { TypographySizes, IconSizes, IconNames, ButtonTypes, StringBoolean, MessageBusEvents } from '@no-gravity-elements/types';

import { InfoBoxData } from '@no-gravity-elements/info-box'
  
@Directive({
  selector: 'nge-button',
})
export class ButtonDirective {
  @HostBinding('attr.value') @Input() value: string;
  @HostBinding('attr.variant') @Input() variant?: ButtonTypes;
  @HostBinding('attr.icon') @Input() icon?: IconNames;
  @HostBinding('attr.disabled') @Input() disabled?: StringBoolean;
  @HostBinding('attr.type') @Input() type?: string;
  @HostBinding('attr.loading') @Input() loading?: StringBoolean;
}

    
@Directive({
  selector: 'nge-card',
})
export class CardDirective {
}

    
@Directive({
  selector: 'nge-footer',
})
export class FooterDirective {
  @HostBinding('attr.x') @Input() x: string;
}

    
@Directive({
  selector: 'nge-header',
})
export class HeaderDirective {
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
  @Output() 'nge-info-box-button-click' = new EventEmitter<CustomEvent<InfoBoxData>>();
}

    
@Directive({
  selector: 'nge-page404',
})
export class Page404Directive {
  @HostBinding('attr.x') @Input() x: string;
}

    
@Directive({
  selector: 'nge-section',
})
export class SectionDirective {
}

    