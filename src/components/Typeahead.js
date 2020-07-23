import React from 'react';
import styled from 'styled-components';

import Suggestions from './Suggestions';

const Wrapper = styled.div`
  position: fixed;
  margin-top: 100px;
`

const Input = styled.input`
  postion: fixed;
  border: 1px solid lightgray;
  border-radius: 3px;
  height: 25px;
  padding: 10px 5px;
  margin-right: 10px;
  outline: none;

  &:focus {
    border: 1px solid blue;
  }
`;

const Button = styled.button`
  postion: fixed;
  height: 30px;
  width: 70px;
  color: white;
  background-color: #4285F4;
  border: none;
  border-radius: 4px;
`;

function Typeahead({ categories, suggestions, handleSelect }) {
  const [input, setInput] = React.useState('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(0);

  let matchedBooks = [];

  if (input.length >= 2) {
    matchedBooks = suggestions.filter(suggestion => {
      const suggestionTitle = suggestion.title.toLowerCase();

      if (suggestionTitle.includes(input)) {
        const titleComponents = {
          matched: input,
          remaining: suggestionTitle.replace(input, '')
        }
        suggestion.titleComponents = titleComponents;

        return suggestion;
      }
      else return false;
    });
  }

  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase();

    setInput(inputValue);
  }

  const handleKeyPress = e => {
    switch (e.key) {
      case "Enter":
        handleSelect(matchedBooks[selectedSuggestionIndex].title);
        break;
      case "ArrowUp":
        setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
        break;
      case "ArrowDown":
        setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
        break;
    }
  }

  return (
    <Wrapper>
      <div>
         <Input
           type="text"
           value={input}
           onChange={handleChange}
           onKeyDown={handleKeyPress}
         />

         <Button onClick={() => setInput('')}>Clear</Button>
      </div>

      {matchedBooks.length > 0 && (
        <Suggestions
          matchedBooks={matchedBooks}
          handleSelect={handleSelect}
          categories={categories}
          selectedSuggestionIndex={selectedSuggestionIndex}
          setSelectedSuggestionIndex={setSelectedSuggestionIndex}
        />
      )}
    </Wrapper>
  )
}

export default Typeahead;
