import { Fragment, FunctionComponent, h, VNode } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { IconProps } from '@atoms/Icon/types';

import { IconSizes } from '@types';

/**
 * <nge-icon>
 *
 *  Icon component
 *
 * @element nge-icon
 *
 * @prop {'string'} [name] - Icon name
 * @prop {'extra-small'|'small'|'medium'|'regular'|'large'|'extra-large'} [size] - Icon size
 *
 * @example
 * <nge-icon name="cross"></nge-icon>
 */

const convertDocToSVGElem = (node: HTMLElement): VNode | string | null | undefined => {
  if (node.nodeType === 3) return node.nodeValue;
  if (node.nodeType === 1) {
    const children = (Array.from(node.childNodes) as HTMLElement[]).map(convertDocToSVGElem);
    const props = Object.fromEntries(
      Array.from(node.attributes).map((attr) => [attr.nodeName, attr.nodeValue]),
    );
    return h(node.nodeName, props, children);
  }
  return null;
};

const Icon: FunctionComponent<IconProps> = ({ name, size }: IconProps) => {
  const [svgComponent, setSVGComponent] = useState<string | VNode | null | undefined>(null);

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(
          `https://firebasestorage.googleapis.com/v0/b/no-gravity-76bb2.appspot.com/o/icons%2F${name}.svg?alt=media`,
        );
        const svgText = await response.text();
        //const domParser = new DOMParser();
        //const svgDoc = domParser.parseFromString(svgText, 'image/svg+xml');
        const svgElem = convertDocToSVGElem((<svg />) as any);
        setSVGComponent(svgElem);
      } catch (error) {
        // eslint-disable-next-line
        console.error('Error fetching SVG:', error);
      }
    };

    if (name) fetchSVG();
  }, [name]);

  return (
    <Fragment>
      {svgComponent && <span className={size || IconSizes.regular}>{svgComponent}</span>}
    </Fragment>
  );
};

Icon.observedAttributes = ['size', 'name'];

export default Icon;
