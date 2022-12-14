import React from 'react';
import { RULES } from '../../pages/Signup/Signup';
import Input from './Input';
import './HintInput.scss';

const HintInput = ({ name, value = '', ...others }) => {
  const isValid = RULES[name].pattern(value);

  return (
    <div className="message">
      <Input name={name} value={value} {...others} />
      {!isValid && <p>{RULES[name].message}</p>}
    </div>
  );
};

export default HintInput;
