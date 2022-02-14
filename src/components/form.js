import React from "react";
import styled from "styled-components";
import Button from "./button";
import Input from "./input";
import TextBox from "./textbox";

const Form = (props) => {
  const { onExitClick = () => {} } = props;
  return (
    <StyledForm {...props}>
      <InnerForm>
        <StyledExit onClick={onExitClick}>X</StyledExit>
        <Input
          type="text"
          placeholder="Your Name"
          style={{ marginBottom: 10 }}
        />
        <Input type="date" style={{ marginBottom: 10 }} />
        <TextBox placeholder="Your Note" style={{ marginBottom: 10 }} />
        <Button type="submit">Submit</Button>
      </InnerForm>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form``;

const InnerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  position: relative;
`;

const StyledExit = styled.div`
  cursor: pointer;
  font-weight: 900;
  color: red;
  font-size: 16px;
  position: absolute;
  top: -10px;
  right: -25px;
`;
