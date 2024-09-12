import React, { useState } from 'react';
import SuggestionsList from './SuggestionsList';
import { dictionary } from '../data/dictionary';

const TextInput = () => {
  const [inputText, setInputText] = useState('');
  const [misspelledWords, setMisspelledWords] = useState({});
  
  const handleChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    checkSpelling(text);
  };

  const checkSpelling = (text) => {
    const words = text.split(/\s+/);
    const misspellings = {};

    words.forEach((word) => {
      const lowerCaseWord = word.toLowerCase();
      if (dictionary[lowerCaseWord]) {
        misspellings[lowerCaseWord] = dictionary[lowerCaseWord];
      }
    });

    setMisspelledWords(misspellings);
  };

  const replaceWord = (oldWord, newWord) => {
    const newText = inputText.replace(new RegExp(`\\b${oldWord}\\b`, 'gi'), newWord);
    setInputText(newText);
    checkSpelling(newText);
  };

  return (
    <div>
      <textarea 
        value={inputText} 
        onChange={handleChange}
        style={{ width: '100%', height: '100px' }}
      />
      {Object.keys(misspelledWords).length > 0 && (
        <SuggestionsList 
          misspelledWords={misspelledWords} 
          onReplace={replaceWord} 
        />
      )}
    </div>
  );
};

export default TextInput;
