import React from 'react';
import { Field, Input, Label, Control, Select, Help } from "bloomer";
import joinString from "classnames";

import { useForm } from "../Hooks";

export const Register = ({isHidden}) => {
  const validate = ({ values }) => ({
    name: values.name === '' ? 'It is required' : '',
    email: values.email  === '' ? 'It is required' : '',
  });

  const { values, errors, touched, handleInput, handleInputTouch } = useForm({ validate })({
    values: {
      name: '',
      email: ''
    }
  });

  const handleInputName = ({target: { value }}) => {
    handleInput('name', value);
  }

  const handleInputEmail = ({target: { value }}) => {
    handleInput('email', value);
  }

  // console.log(errors, touched)

  return (
    <form action="" className={isHidden && 'is-hidden'}>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input type="text" placeholder='Your name' value={values.name} onInput={handleInputName} onBlur={() => handleInputTouch('name')}/>
        </Control>
        <Help isColor='danger'>{joinString({ [errors.name]: errors.name && touched.name })}</Help>
      </Field>

      <Field>
        <Label>Username</Label>
        <Control>
          <Input isColor='success' placeholder='You email' value={values.email} onInput={handleInputEmail} onBlur={() => handleInputTouch('email')} />
        </Control>
        <Help isColor='danger'>{joinString({ [errors.email]: errors.email && touched.email })}</Help>
      </Field>

      <Field>
        <Label>Select:</Label>
        <Control>
          <Select>
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
        </Control>
      </Field>
    </form>
  );
};
