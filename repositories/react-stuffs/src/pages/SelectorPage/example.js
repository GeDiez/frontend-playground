import React from 'react';
import { Tabs, Tab, TabList, TabLink } from 'bloomer';

import { Selector } from '../../components';

const beforeUpdate = ({ items, key, item, selectedItems }) => {
  const prevKey = selectedItems[0]
  const prevItem = items[prevKey];

  return prevKey !== key ? {
    ...items,
    [key]: item,
    [prevKey]: {...prevItem, isSelected: false}
  } : items;
}

export const Example = () => {
  const tabsItems = {
    tab1: {
      isSelected: true,
      name: 'music',
    },
    tab2: {
      isSelected: false,
      name: 'sports',
    },
    tab3: {
      isSelected: false,
      name: 'hobbies',
    },
    tab4: {
      isSelected: false,
      name: 'other things',
    }
  }

  return (
    <Selector items={tabsItems} beforeUpdate={beforeUpdate}>
      {({items, select}) => (
        <Tabs>
          <TabList>
            <Tab isActive={items.tab1.isSelected}>
              <TabLink onClick={() => select('tab1')}>
                <span>{items.tab1.name}</span>
              </TabLink>
            </Tab>
            <Tab isActive={items.tab2.isSelected}>
              <TabLink onClick={() => select('tab2')}>
                <span>{items.tab2.name}</span>
              </TabLink>
            </Tab>
            <Tab isActive={items.tab3.isSelected}>
              <TabLink onClick={() => select('tab3')}>
                  <span>{items.tab3.name}</span>
              </TabLink>
            </Tab>
            <Tab isActive={items.tab4.isSelected}>
              <TabLink onClick={() => select('tab4')}>
                <span>{items.tab4.name}</span>
              </TabLink>
            </Tab>
          </TabList>
        </Tabs>
      )}
    </Selector>
  );
};
