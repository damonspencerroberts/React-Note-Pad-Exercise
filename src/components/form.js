import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import Input from "./input";
import TextBox from "./textbox";

const Form = (props) => {
  return (
    <StyledForm {...props}>
      <Input type="text" placeholder="Your Name" style={{ marginBottom: 10 }} />
      <Input type="date" style={{ marginBottom: 10 }} />
      <TextBox placeholder="Your Note" style={{ marginBottom: 10 }} />
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
