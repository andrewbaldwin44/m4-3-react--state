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
  margin-top: 5px;
  min-height: 50vh;
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

function Typeahead({ suggestions, handleSelect }) {
  const [input, setInput] = React.useState('');

  let results = [];

  if (input.length >= 2) {
    results = suggestions.filter(suggestion => {
      return suggestion.title.toLowerCase().includes(input);
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
              >
                {book.title}
              </Suggestion>
            )
          })}
        </Suggestions>
      )}
    </Wrapper>
  )
}

export default Typeahead;
