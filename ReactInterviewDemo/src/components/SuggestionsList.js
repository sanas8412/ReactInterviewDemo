import React from 'react';

const SuggestionsList = ({ misspelledWords, onReplace }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      {Object.keys(misspelledWords).map((word) => (
        <div key={word} style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'red' }}>{word}</strong>: 
          {misspelledWords[word].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onReplace(word, suggestion)}
              style={{ display: 'block', margin: '5px 0' }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SuggestionsList;
