import { useEffect, Ref } from 'preact/hooks';

export const useMoveLightDomChildren = (ref: Ref<HTMLElement>, ignoreTags: string[] = []) => {
    useEffect(() => {

        const moveChildren = () => {
            if (!ref || !ref.current) return;
            const parentElement = ref.current?.parentNode as HTMLElement;
            if (!parentElement || !parentElement.children || parentElement.children.length === 0) return;

            const ignoreTagsUpper = [...ignoreTags.map((tag) => tag.toUpperCase()), 'STYLE', ref.current.tagName];

            Array.from(parentElement.children).forEach((node: Element) => {
                if (!ignoreTagsUpper.includes(node.tagName)) {
                    ref.current?.appendChild(node);
                }
            });
        };

        moveChildren();
    }, [ref, ignoreTags]);
};

