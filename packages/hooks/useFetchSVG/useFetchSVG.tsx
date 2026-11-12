import { h, VNode } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const convertDocToSVGElem = (node: HTMLElement): VNode | string | null | undefined => {
  if (node.nodeType === Node.TEXT_NODE) return node.nodeValue;
  if (node.nodeType === Node.ELEMENT_NODE) {
    const children = (Array.from(node.childNodes) as HTMLElement[]).map(convertDocToSVGElem);
    const props = Object.fromEntries(
      Array.from(node.attributes).map((attr) => [attr.nodeName, attr.nodeValue]),
    );
    return h(node.nodeName, props, children);
  }
  return null;
};

const CDN_ORIGIN = 'https://cdn.no-gravity.es';
// Same bucket and key, without Cloudflare: used when the CDN is blocked (#98).
const S3_ORIGIN = 'https://s3.eu-north-1.amazonaws.com/cdn.no-gravity.es';

const fetchText = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  return response.text();
};

export const useFetchSVG = (name: string) => {
  const [svgComponent, setSVGComponent] = useState<string | VNode | null | undefined>(null);

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const key = `/no-gravity-elements/icons/${name}.svg`;
        const svgText = await fetchText(`${CDN_ORIGIN}${key}`).catch(() =>
          fetchText(`${S3_ORIGIN}${key}`),
        );
        const domParser = new DOMParser();
        const svgDoc = domParser.parseFromString(svgText, 'image/svg+xml');
        const svgElem = convertDocToSVGElem(svgDoc.documentElement);
        setSVGComponent(svgElem);
      } catch (error) {
        // eslint-disable-next-line
        console.error('Error fetching SVG:', error);
      }
    };

    if (name) fetchSVG();
  }, [name]);

  return svgComponent;
};
