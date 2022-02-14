import React from 'react'
import styled from 'styled-components';


const TextBox = (props) => {
  return (
    <StyledTextBox {...props} />
  )
}

export default TextBox;

const StyledTextBox = styled.textarea`
  width: 100%;
  border: 1px solid grey;
  box-shadow: 0px 4px 4px rgba(black, .5);
  background: transparent;
  color: black;
  font-size: 16px;
  padding-left: 12px;
`