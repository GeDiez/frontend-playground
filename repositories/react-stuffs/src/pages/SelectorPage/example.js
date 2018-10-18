import React from 'react';
import { Tabs, Tab, TabList, TabLink } from 'bloomer';

import { Selector } from '../../components';

const validateSelection = ({selects, key, isSelect, keysSelected}) => {
  const prevKeySelected = keysSelected[0];
  return key !== prevKeySelected ? {
    ...selects,
    [key]: {...selects[key], isSelect},
    [prevKeySelected]: {
      ...selects[prevKeySelected],
      isSelect: false
    }
  } : selects;
}

export const Example = () => {
  const tabsItems = {
    tab1: {
      isSelect: true,
      name: 'music',
    },
    tab2: {
      isSelect: false,
      name: 'sports',
    },
    tab3: {
      isSelect: false,
      name: 'hobbies',
    },
    tab4: {
      isSelect: false,
      name: 'other things',
    }
  }

  return (
    <Selector initialList={tabsItems} validate={validateSelection}>
      {({selects, select}) => (
        <Tabs>
          <TabList>
            <Tab isActive={selects.tab1.isSelect}>
              <TabLink onClick={() => select('tab1')}>
                <span>{selects.tab1.name}</span>
              </TabLink>
            </Tab>
            <Tab isActive={selects.tab2.isSelect}>
              <TabLink onClick={() => select('tab2')}>
                <span>{selects.tab2.name}</span>
              </TabLink>
            </Tab>
            <Tab isActive={selects.tab3.isSelect}>
              <TabLink onClick={() => select('tab3')}>
                  <span>{selects.tab3.name}</span>
              </TabLink>
            </Tab>
            <Tab isActive={selects.tab4.isSelect}>
              <TabLink onClick={() => select('tab4')}>
                <span>{selects.tab4.name}</span>
              </TabLink>
            </Tab>
          </TabList>
        </Tabs>
      )}
    </Selector>
  );
};
