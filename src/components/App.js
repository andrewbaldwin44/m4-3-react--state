import React from 'react';
import styled from 'styled-components';

import data from '../data';

import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;
`

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          handleSelect={(suggestion) => {
            window.alert(suggestion)
          }}
        />
      </Wrapper>
    </>
  );
};

export default App;
