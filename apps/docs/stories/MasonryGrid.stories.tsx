import React from 'react';

import { MasonryGrid } from '@neat-treats/core/src';

export default {
  component: MasonryGrid,
  title: 'Components/MasonryGrid',
};

const mockData = [
  'Bacon ipsum dolor amet pig laboris elit, esse incididunt drumstick salami. Bresaola shank spare ribs, andouille porchetta consequat leberkas drumstick velit ex. Drumstick consequat chicken magna sed tempor. Cupidatat bacon filet mignon prosciutto aliquip, exercitation dolore velit shoulder kielbasa in leberkas proident biltong laborum. Consectetur fatback sausage, lorem ipsum tri-tip excepteur tempor boudin in tenderloin hamburger non sed cupim. Frankfurter kielbasa kevin corned beef qui dolor rump laborum. Magna velit tongue consectetur deserunt incididunt spare ribs.',

  'Kielbasa id spare ribs nulla, dolore pig deserunt laboris andouille ball tip cow ribeye consectetur. Do in est ipsum ex jowl et deserunt tail capicola anim. Pancetta in swine adipisicing, exercitation pork chop salami shank minim est. Ipsum voluptate spare ribs anim eiusmod pancetta. Cupidatat chicken adipisicing, pork chop corned beef sint enim. Duis ground round ex, eiusmod ut veniam ut nisi ea kevin frankfurter ipsum. Esse rump ground round labore ball tip adipisicing nisi proident aute chislic.',

  'Ham biltong flank pancetta short loin ut, pork chop consequat. Leberkas beef ad shank. In nulla kevin venison chislic, brisket jerky ut in cow. Dolor pariatur minim ipsum incididunt jerky.',
  'Bacon ipsum dolor amet pig laboris elit, esse incididunt drumstick salami. Bresaola shank spare ribs, andouille porchetta consequat leberkas drumstick velit ex. Drumstick consequat chicken magna sed tempor. Cupidatat bacon filet mignon prosciutto aliquip, exercitation dolore velit shoulder kielbasa in leberkas proident biltong laborum. Consectetur fatback sausage, lorem ipsum tri-tip excepteur tempor boudin in tenderloin hamburger non sed cupim. Frankfurter kielbasa kevin corned beef qui dolor rump laborum. Magna velit tongue consectetur deserunt incididunt spare ribs.',

  'Kielbasa id spare ribs nulla, dolore pig deserunt laboris andouille ball tip cow ribeye consectetur. Do in est ipsum ex jowl et deserunt tail capicola anim. Pancetta in swine adipisicing, exercitation pork chop salami shank minim est. Ipsum voluptate spare ribs anim eiusmod pancetta. Cupidatat chicken adipisicing, pork chop corned beef sint enim. Duis ground round ex, eiusmod ut veniam ut nisi ea kevin frankfurter ipsum. Esse rump ground round labore ball tip adipisicing nisi proident aute chislic.',

  'Ham biltong flank pancetta short loin ut, pork chop consequat. Leberkas beef ad shank. In nulla kevin venison chislic, brisket jerky ut in cow. Dolor pariatur minim ipsum incididunt jerky.',

  'Bacon ipsum dolor amet alcatra salami fatback pariatur tenderloin mollit ex venison tongue aute id beef ribs. Jerky shoulder fugiat frankfurter est flank sausage in deserunt andouille sirloin tongue. Kevin jerky short ribs hamburger turducken, ad bacon consectetur enim frankfurter mollit ball tip laboris. Jowl fatback laboris flank qui. Tongue turducken shoulder hamburger tail ground round pork loin irure doner nostrud prosciutto qui velit.',

  'Culpa ham hock tempor, laboris dolore est ad. Strip steak aliquip cow nostrud, sausage doner turducken in brisket minim. Nulla cow quis proident, ribeye ex anim aute turkey et reprehenderit ham. Lorem exercitation brisket kielbasa dolore pastrami leberkas. Excepteur biltong ex ut proident frankfurter chicken. In leberkas in, nisi hamburger velit cupim shankle turducken corned beef ex chuck. Doner ribeye jerky, elit aliquip eiusmod boudin ham ipsum turkey.',

  'Leberkas ut spare ribs ipsum chicken beef ribs, sed ullamco jowl. Sirloin capicola pariatur exercitation jerky pig. Tempor cupidatat laborum landjaeger ut, eu anim. Consequat ullamco picanha pork pariatur landjaeger strip steak sunt nisi tempor brisket jowl reprehenderit cillum dolore. Ribeye nisi pig sed. Chicken ball tip pancetta prosciutto aute short ribs, fugiat qui.',
];

const Template = (args) => {
  return (
    <>
      <h1 className="story__h1">MasonryGrid</h1>
      <p className="story__p">
        All this component needs is children. On window resize MasonryGrid does
        some behind the scenes work to make sure everything stays stacked
        nicely. If you would like to optimize performance add a minWidth and
        maxWidth prop to prevent continued rendering once the window reaches a
        certain width.
      </p>
      <MasonryGrid {...args}>
        {mockData.map((text, i) => {
          return (
            <div
              className="h"
              style={{ padding: '20px', color: '#fff' }}
              key={i}
            >
              <p style={{ margin: 'unset' }}>{text}</p>
            </div>
          );
        })}
      </MasonryGrid>
      ;
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
