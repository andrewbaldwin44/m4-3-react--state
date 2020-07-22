import React from 'react';

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
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />

      <button onClick={() => setInput('')}>Clear</button>
    </>
  )
}

export default Typeahead;
