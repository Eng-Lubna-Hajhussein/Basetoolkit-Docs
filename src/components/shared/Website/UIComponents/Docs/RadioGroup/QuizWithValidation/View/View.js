import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText, FormLabel, Button } from '@basetoolkit/ui';

const QuizWithValidation = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Select an option');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === 'correct') {
      setHelperText('Great choice!');
      setError(false);
    } else if (value === 'incorrect') {
      setHelperText('Oops! Try again.');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel id="quiz-radio-group">Quick Quiz</FormLabel>
        <RadioGroup
          aria-labelledby="quiz-radio-group"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="correct" control={<Radio />} label="Correct Answer" />
          <FormControlLabel value="incorrect" control={<Radio />} label="Incorrect Answer" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default QuizWithValidation;
