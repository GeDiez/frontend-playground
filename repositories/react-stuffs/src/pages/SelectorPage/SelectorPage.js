import React from 'react';
import { Box, Tag, Panel, PanelHeading, PanelBlock } from 'bloomer';

import { Example } from './example';
import { Example2 } from './example2';

export const SelectorPage = () => (
  <div className="explanation">
    <h2 className="subtitle is-4">Selector component</h2>
    <Box>
      <summary className="column -is-small">
        Selector is a wrapper component, it uses <a href="https://reactjs.org/docs/render-props.html" target="_blank" rel="noopener noreferrer">render props pattern</a> in order to handle logic about multiples options<br/>
      </summary>
      <p className="column has-text-danger">
        notice: if you are using Pure components, it doesn't work fine <a href="https://reactjs.org/docs/render-props.html" target="_blank" rel="noopener noreferrer">see documentaiion for render props</a>.
      </p>
    </Box>
    <h3 className="subtitle is-5">Step one</h3>
    <summary>
      Create a object schema as follow, it is an object of objects in order to access to them with dot notation <Tag isColor='light'>items.myCustomKey</Tag> also you can add more fields and they just require in every object must contain the isSelected key of type boolean.
    </summary>
    <pre className="lang-javascript prettyprint">
      {`
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
      `}
    </pre>
    <h3 className="subtitle is-5"> Step two </h3>
    <summary>
      it is necesary validating what we hope about Select does, i mean,
      if prop validation is <i>null</i> then the Select does anything since Select only handle the state but
      it not contain any validation by default, keep in mind it allow you keep an clean interface
      and dont have validations you dont need also this is simple to undertand.
    </summary>
    <pre className="lang-javascript prettyprint">
      {`
const beforeUpdate = ({ items, key, item, selectedItems }) => {
  const prevKey = selectedItems[0]
  const prevItem = items[prevKey];

  return prevKey !== key ? {
    ...items,
    [key]: item,
    [prevKey]: {...prevItem, isSelected: false}
  } : items;
}
      `}
    </pre>
    <h3 className="subtitle is-5">Step three</h3>
    <summary>
      so now, we have an schema and validate function, they are params for Selector component, pass this props in Select Component and render it as follow, that is it.
    </summary>
    <pre className="lang-javascript prettyprint">
      {`
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
      `}
    </pre>
    <h3 className="subtitle is-5">It should looks like this</h3>
    <div className="example">
      <Example />
    </div>
    <p className="column is-small">
      In these cases we use <a href="https://bloomer.js.org" target="_blank" rel="noopener noreferrer">Bloomer</a> in order to create Tabs with React.
    </p>
    <p className="column is-small">Another example, now with pagination component, see full code <a href="https://github.com/GeDiez/frontend-playground/tree/master/repositories/react-stuffs/src/pages/SelectorPage/example2">here</a></p>
    <div className="example">
      <Example2 />
    </div>
    <h3 className="subtitle is-5">API Reference</h3>
    <Panel className="is-inline-block">
      <PanelHeading>API summary for render function</PanelHeading>
      <PanelBlock>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>params</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>selects <br/><Tag>object</Tag></td>
              <td>-</td>
              <td>same object as initialList prop but contains the current state</td>
            </tr>
            <tr>
              <td>select <br/> <Tag isColor="danger">function</Tag></td>
              <td>key <br/><Tag isColor="info">string</Tag></td>
              <td>mark as select the item with the given key</td>
            </tr>
            <tr>
              <td>unselect <br/> <Tag isColor="danger">function</Tag></td>
              <td>key <br/><Tag isColor="info">string</Tag></td>
              <td>mark as unselect the item with the given key</td>
            </tr>
            <tr>
              <td>toggle <br/><Tag isColor="danger">function</Tag></td>
              <td>key <br/> <Tag isColor="info">string</Tag></td>
              <td>mark as select/unselect the item with the given key</td>
            </tr>

          </tbody>
        </table>
      </PanelBlock>
    </Panel>
  </div>
);
