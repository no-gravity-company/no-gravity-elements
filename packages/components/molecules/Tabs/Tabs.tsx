import { FunctionComponent, h, useCallback, useEffect, useState } from 'preact';
import { StringBoolean } from '@no-gravity-elements/types';
import classNames from 'classnames';
import type { TabsProps, Tab } from './types';

import './Tabs.modules.scss';

/**
 * <nge-tabs>
 *
 * Tabs component with switching functionality
 *
 * @element nge-tabs
 *
 * @prop {Tab[]} tabs - Array of tab objects with label and content
 * @prop {number} [activeIndex] - Initially active tab index
 * @prop {'primary'|'secondary'} [variant] - Visual variant of the tabs
 * @prop {'horizontal'|'vertical'} [orientation] - Layout orientation
 * @prop {'small'|'medium'|'large'} [size] - Size variant
 * @prop {StringBoolean} [disabled] - Disables all tabs
 *
 * @fires tab-change - Emitted when tab changes with detail { index: number }
 *
 * @cssproperty --nge-tabs-bg - Background color. Default #ffffff.
 * @cssproperty --nge-tabs-text-color - Text color. Default #333333.
 * @cssproperty --nge-tabs-active-bg - Active tab background. Default #007bff.
 * @cssproperty --nge-tabs-active-color - Active tab text color. Default #ffffff.
 * @cssproperty --nge-tabs-disabled-color - Disabled color. Default #cccccc.
 * @cssproperty --nge-tabs-border - Border style. Default 1px solid #dddddd.
 * @cssproperty --nge-tabs-padding - Tab padding. Default 12px 24px.
 * @cssproperty --nge-tabs-font-size - Font size. Default 16px.
 * @cssproperty --nge-tabs-gap - Gap between tabs. Default 0px.
 * @cssproperty --nge-tabs-transition - Transition. Default background-color 0.2s ease, color 0.2s ease.
 *
 * @example
 * <nge-tabs 
 *   tabs='[{"label":"Tab1","content":"Content1"},{"label":"Tab2","content":"Content2"}]'
 *   activeIndex='0'
 *   variant='primary'
 *   orientation='horizontal'
 *   size='medium'
 *   disabled='false'>
 * </nge-tabs>
 */

const Tabs: FunctionComponent<TabsProps> = ({
  tabs = [],
  activeIndex: propActiveIndex = 0,
  variant = 'primary',
  orientation = 'horizontal',
  size = 'medium',
  disabled = StringBoolean.FALSE,
}) => {
  const [activeIndex, setActiveIndex] = useState(propActiveIndex);

  const isDisabled = disabled === StringBoolean.TRUE;

  useEffect(() => {
    setActiveIndex(propActiveIndex);
  }, [propActiveIndex]);

  const handleTabClick = useCallback((index: number, event: MouseEvent) => {
    const tab = tabs[index];
    if (isDisabled || !tab || tab.disabled === StringBoolean.TRUE) {
      return;
    }

    setActiveIndex(index);

    const customEvent = new CustomEvent('tab-change', {
      detail: { index },
      bubbles: true,
      composed: true,
    });
    event.currentTarget?.dispatchEvent(customEvent);
  }, [tabs, isDisabled]);

  const containerClass = classNames(
    'nge-tabs',
    orientation,
    `variant-${variant}`,
    `size-${size}`,
    { disabled: isDisabled }
  );

  const headersClass = classNames('tabs-headers', orientation);

  return (
    <div className={containerClass}>
      <div className={headersClass} role="tablist" aria-orientation={orientation}>
        {tabs.map((tab: Tab, index: number) => {
          const isTabActive = activeIndex === index;
          const isTabDisabled = tab.disabled === StringBoolean.TRUE || isDisabled;
          return (
            <button
              key={index}
              id={`tab-${index}`}
              className={classNames('tab', {
                active: isTabActive,
                disabled: isTabDisabled,
              })}
              role="tab"
              aria-selected={isTabActive}
              aria-controls={`panel-${index}`}
              disabled={isTabDisabled}
              onClick={(event) => handleTabClick(index, event as MouseEvent)}
              tabIndex={isTabActive ? 0 : -1}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="tabs-panels">
        {tabs.map((tab: Tab, index: number) => (
          <div
            key={index}
            id={`panel-${index}`}
            role="tabpanel"
            tabIndex={0}
            className={classNames('tab-panel', {
              active: activeIndex === index,
            })}
            aria-labelledby={`tab-${index}`}
            hidden={activeIndex !== index}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;