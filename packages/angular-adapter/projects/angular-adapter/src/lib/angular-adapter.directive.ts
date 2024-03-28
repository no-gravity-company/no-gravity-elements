/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Directive, HostBinding, Input } from '@angular/core';

import * as Types from '@no-gravity-elements/types';

@Directive({
    selector: 'nge-typography',
})
export class TypographyDirective {
    @HostBinding('attr.size') @Input() size?: Types.TypographySizes;
    @HostBinding('attr.tag') @Input() tag?: string;
}

@Directive({
    selector: 'nge-icon',
})
export class IconDirective {
    @HostBinding('attr.name') @Input() name: Types.IconNames;
    @HostBinding('attr.size') @Input() size?: Types.IconSizes;
}
