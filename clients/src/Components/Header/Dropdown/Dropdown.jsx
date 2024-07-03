
import React from 'react';
import { SectionContainer, CardContainer, NavButtons } from './dropdown.styles.js';
import Cards from '../../Crads/Cards.jsx';

const Dropdown = () => {
  return (
    <SectionContainer>
      <NavButtons>
        <button>All</button>
        <button>News</button>
        <button>Ideas</button>
        <button>Featured</button>
      </NavButtons>
      <CardContainer>
        <Cards/>
      </CardContainer>
    </SectionContainer>
  );
};

export default Dropdown;
