import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 3px;
  height: 25px;
  padding: 10px 5px;
  margin-right: 10px;
  outline: none;

  &:focus {
    border: 1px solid blue;
  }
`

const Button = styled.button`
  height: 30px;
  width: 70px;
  color: white;
  background-color: #4285F4;
  border: none;
  border-radius: 4px;
`

function handleInput() {

}

function Typeahead({ suggestions, handleSelect }) {
  const [input, setInput] = React.useState('');

  const handleChange = e => setInput(e.target.value);
  const handleSubmit = e => {
    if (e.key === 'Enter') handleSelect(e.target.value);
  }


  return (
    <>
      <Input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />

      <Button onClick={() => setInput('')}>Clear</Button>
    </>
  )
}

export default Typeahead;
