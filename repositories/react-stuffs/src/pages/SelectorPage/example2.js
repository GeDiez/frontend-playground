import React from 'react';
import { Pagination, PageList, Page, PageLink, PageEllipsis } from 'bloomer';

import { Selector } from '../../components';

const validateSelection = ({selects, key, isSelect, keysSelected}) => {
  const prevKeySelected = keysSelected[0];
  const item = selects[key];
  return key !== prevKeySelected ? {
    left: {number: item.number - 2, isSelect: false},
    center1: {number: item.number - 1, isSelect: false},
    center2: {number: item.number, isSelect: true},
    center3: {number: item.number + 1, isSelect: false},
    right: {number: item.number + 2, isSelect: false},
  } : selects;
}

export const Example2 = () => {
  const tabsItems = {
    left: {
      isSelect: true,
      number: 54,
    },
    center1: {
      isSelect: false,
      number: 55,
    },
    center2: {
      isSelect: false,
      number: 56,
    },
    center3: {
      isSelect: false,
      number: 57,
    },
    right: {
      isSelect: false,
      number: 58,
    }
  }

  return (
    <Selector initialList={tabsItems} validate={validateSelection}>
      {({selects, select}) => (
        <Pagination>
          <PageList>
              <Page><PageLink onClick={() => select('left')}>{selects.left.number}</PageLink></Page>
              <Page><PageEllipsis /></Page>
              <Page><PageLink onClick={() => select('center1')}>{selects.center1.number}</PageLink></Page>
              <Page><PageLink isCurrent onClick={() => select('center2')}>{selects.center2.number}</PageLink></Page>
              <Page><PageLink onClick={() => select('center3')}>{selects.center3.number}</PageLink></Page>
              <Page><PageEllipsis /></Page>
              <Page><PageLink onClick={() => select('right')}>{selects.right.number}</PageLink></Page>
          </PageList>
        </Pagination>
      )}
    </Selector>
  );
};
