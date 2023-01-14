// import { Component } from 'react';
// import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // const ratings = Object.key(options);
  console.log('feedbackOptions', options);
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => {
            console.log('click by', option);
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};
