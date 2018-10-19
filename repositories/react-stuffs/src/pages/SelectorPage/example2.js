import React from 'react';
import { Pagination, PageList, Page, PageLink } from 'bloomer';

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

const beforeUpdate2 = ({ items, key, item }) => {
  return {
    ...items,
    [key]: item,
  };
}

export const Example2 = () => {
  const tabsItems = {
    one: {
      isSelected: false,
      number: 1,
    },
    two: {
      isSelected: false,
      number: 2,
    },
    three: {
      isSelected: true,
      number: 3,
    },
    four: {
      isSelected: false,
      number: 4,
    },
    five: {
      isSelected: false,
      number: 5,
    }
  }

  return (
    <React.Fragment>
      <Selector items={tabsItems} beforeUpdate={beforeUpdate}>
        {({items: {one, two, three, four, five}, select}) => (
          <Pagination>
            <PageList>
                <Page><PageLink isCurrent={one.isSelected} onClick={() => select('one')}>{one.number}</PageLink></Page>
                <Page><PageLink isCurrent={two.isSelected} onClick={() => select('two')}>{two.number}</PageLink></Page>
                <Page><PageLink isCurrent={three.isSelected} onClick={() => select('three')}>{three.number}</PageLink></Page>
                <Page><PageLink isCurrent={four.isSelected} onClick={() => select('four')}>{four.number}</PageLink></Page>
                <Page><PageLink isCurrent={five.isSelected} onClick={() => select('five')}>{five.number}</PageLink></Page>
            </PageList>
          </Pagination>
        )}
      </Selector>
      <Selector items={tabsItems}>
        {({items, toggle, selectedItems}) => (
          <React.Fragment>
            <p className="column is-small">Numbers selected: {selectedItems.map(key => items[key].number).join(', ')}</p>
            <Pagination>
              <PageList>
                  <Page><PageLink isCurrent={items.one.isSelected} onClick={() => toggle('one')}>{items.one.number}</PageLink></Page>
                  <Page><PageLink isCurrent={items.two.isSelected} onClick={() => toggle('two')}>{items.two.number}</PageLink></Page>
                  <Page><PageLink isCurrent={items.three.isSelected} onClick={() => toggle('three')}>{items.three.number}</PageLink></Page>
                  <Page><PageLink isCurrent={items.four.isSelected} onClick={() => toggle('four')}>{items.four.number}</PageLink></Page>
                  <Page><PageLink isCurrent={items.five.isSelected} onClick={() => toggle('five')}>{items.five.number}</PageLink></Page>
              </PageList>
            </Pagination>
          </React.Fragment>
        )}
      </Selector>
    </React.Fragment>
  );
};
