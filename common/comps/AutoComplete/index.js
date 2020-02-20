import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import theme from './theme.css';

import { AutoCompleteContainer } from './AutoCompleteStyles';

// Imagine you have a list of numbers that you'd like to autosuggest.
const numbers = [
  {
    name: 'one',
    count: 1
  },
  {
    name: 'two',
    count: 2
  },
  {
    name: 'three',
    count: 3
  },
  {
    name: 'four',
    count: 4
  },
  {
    name: 'five',
    count: 5
  },
];

function AutoComplete({options, width, onSelectItem}) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const clearInput = () => {
      setValue('');
      setSuggestions([]);
    };
    let timer1 = setTimeout(clearInput, 1000);

    return () => clearTimeout(timer1);
  }, [onSelectItem]);

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : options.filter(option =>
      option.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

// Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );

  // Autosuggest is a controlled component.
  // This means that you need to provide an input value
  // and an onChange handler that updates this value (see below).
  // Suggestions also need to be provided to the Autosuggest,
  // and they are initially empty because the Autosuggest is closed.

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

// Autosuggest will call this function every time you need to update suggestions.
// You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

// Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: 'Search here',
    value,
    onChange
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
  const getSuggestionValue = suggestion => {
    onSelectItem(suggestion.id);
    return suggestion.name;
  };

  // Finally, render it!
  return (
    <AutoCompleteContainer width={width}>
      <Autosuggest
        theme={theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </AutoCompleteContainer>
  );
}

export default AutoComplete;