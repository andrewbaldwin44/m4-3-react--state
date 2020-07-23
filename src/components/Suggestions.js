import React from 'react';
import styled from 'styled-components';

const SuggestionList = styled.ul`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 270px;
  max-height: 100px;
  min-height: 50vh;
  margin-top: 5px;
  box-shadow: 3px 3px 10px 2px lightgray;
  overflow-y: scroll;
`;

const SuggestionItem = styled.li`
  display: inline-block;
  line-height: 1.2;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#f06292' : 'transparent'};
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.span`
  font-style: italic;
  font-size: 14px;
`;

const PurpleItalics = styled(Italic)`
  color: purple;
`;

function Suggestions({matchedBooks, handleSelect, categories,
                      selectedSuggestionIndex, setSelectedSuggestionIndex}) {
  return (
    <SuggestionList>
      {matchedBooks.map((book, index) => {
        const isSelected = index === selectedSuggestionIndex;

        return (
          <SuggestionItem
            key={book.id}
            onClick={() => handleSelect(book.title)}
            onMouseEnter={() => setSelectedSuggestionIndex(index)}
            isSelected={isSelected}
          >
            <span>{book.titleComponents.matched}</span>
            <Bold>{book.titleComponents.remaining}</Bold>
            <Italic> in </Italic>
            <PurpleItalics>{categories[book.categoryId].name}</PurpleItalics>
          </SuggestionItem>
        )
      })}
    </SuggestionList>
  )
}

export default Suggestions;
