import useMoveLightDomChildren from '@hooks/useMoveLightDomChildren';
import { Fragment, FunctionComponent, h } from 'preact';
import React, { Children, useEffect, useRef } from 'preact/compat';
import { MutableRef, Ref } from 'preact/hooks';

/**
 * <nge-section>
 *
 *  Section component
 *
 * @element nge-section
 *
 * @example
 * <nge-section>
 *  <h1>Title</h1>
 *  <p>Description</p>
 * </nge-section>
 */
const Section: FunctionComponent<h.JSX.IntrinsicElements['section']> = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useMoveLightDomChildren(sectionRef);

    return (
        <Fragment>
            <section ref={sectionRef} className="nge-section"></section>
        </Fragment>
    );
};

Section.useShadowDom = false;

export default Section;
