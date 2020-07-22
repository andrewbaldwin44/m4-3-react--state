import React from 'react';
import styled from 'styled-components';

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

const Suggestions = styled.ul`
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

const Suggestion = styled.li`
  display: inline-block;
  line-height: 1.2;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f06292;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.span`
  font-style: italic;
  font-size: 14px;
`

const PurpleItalics = styled(Italic)`
  color: purple;
`

function Typeahead({ categories, suggestions, handleSelect }) {
  const [input, setInput] = React.useState('');

  let results = [];

  if (input.length >= 2) {
    results = suggestions.filter(suggestion => {
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

  const handleSubmit = e => {
    if (e.key === 'Enter') handleSelect(e.target.value);
  }

  return (
    <Wrapper>
      <div>
         <Input
           type="text"
           value={input}
           onChange={handleChange}
           onKeyDown={handleSubmit}
         />

         <Button onClick={() => setInput('')}>Clear</Button>
      </div>
      {results.length > 0 && (
        <Suggestions>
          {results.map(book => {
            return (
              <Suggestion
                key={book.id}
                onClick={() => handleSelect(book.title)}
                resultsLength={results.length}
              >
                <span>{book.titleComponents.matched}</span>
                <Bold>{book.titleComponents.remaining}</Bold>
                <Italic> in </Italic>
                <PurpleItalics>{categories[book.categoryId].name}</PurpleItalics>
              </Suggestion>
            )
          })}
        </Suggestions>
      )}
    </Wrapper>
  )
}

export default Typeahead;
