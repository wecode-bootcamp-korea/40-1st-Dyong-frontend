import React from 'react';
import { RULES } from '../Signup/Signup';
import Input from './Input';

const HintInput = ({ name, value = '', ...others }) => {
  const isValid = RULES[name].pattern(value);

  return (
    <div>
      <Input name={name} value={value} {...others} />
      {!isValid && <p>{RULES[name].message}</p>}
    </div>
  );
};

export default HintInput;
