import React from 'react';
import styled from 'styled-components';

import data from '../data';

import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

function handleSelect(suggestion) {
  window.alert(suggestion)
}

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          handleSelect={handleSelect}
          categories={data.categories}
        />
      </Wrapper>
    </>
  );
};

export default App;
