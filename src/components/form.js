import React from "react";
import styled from "styled-components";
import Input from "./input";
import TextBox from "./textbox";

const Form = () => {
  return (
    <StyledForm>
      <Input type="text" placeholder="Your Name" style={{ marginBottom: 10 }} />
      <Input type="date" style={{ marginBottom: 10 }} />
      <TextBox placeholder="Your Note" style={{ marginBottom: 10 }} />

    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
