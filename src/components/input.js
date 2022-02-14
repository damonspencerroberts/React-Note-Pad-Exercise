import React from 'react'
import styled from 'styled-components';


const Input = (props) => {
  return (
    <StyledInput {...props} />
  )
}

export default Input;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid grey;
  box-shadow: 0px 4px 4px rgba(black, .5);
  background: transparent;
  color: black;
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
`