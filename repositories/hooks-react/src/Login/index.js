import React, { useState } from 'react';
import { Field, FieldBody, Control, Input, Card, CardContent } from 'bloomer';

const useToggle = (startOpened = false) => {
  const [isOpened, setToggle] = useState(startOpened);

  return {
    open: () => setToggle(true),
    close: () => setToggle(false),
    isOpened,
  }
}

const Login = ({ isHidden }) => (
  <Card isHidden={isHidden}>
    <CardContent>
      <form action="">
        <FieldBody>
          <Field>
            <Control>
              <Input placeholder='email' />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input isColor='success' placeholder='Email' value='john@wick.com' />
            </Control>
          </Field>
        </FieldBody>
      </form>
    </CardContent>
  </Card>
);

export { Login };