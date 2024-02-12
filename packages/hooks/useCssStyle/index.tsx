/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'preact/hooks';

export const useCssStyle = (componentName: string, componentStyle: string) => {
  useEffect(() => {
    const shadow = document.getElementsByTagName(componentName)[0].shadowRoot;

    if (shadow) {
      const style = document.createElement('style');
      style.textContent = componentStyle;
      shadow.appendChild(style);
    }
    return () => {
      if (shadow && shadow.innerHTML) {
        shadow.innerHTML = '';
      }
    };
  }, []);
};
