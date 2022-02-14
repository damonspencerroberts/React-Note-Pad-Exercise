import React, { useContext, useState } from "react";
import styled from "styled-components";
import NoteContext from "../context/NoteContext";
import Button from "./button";
import Input from "./input";
import TextBox from "./textbox";

const Form = (props) => {
  const { notes, setNotes } = useContext(NoteContext);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    note: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    date: false,
    note: false,
  });

  const handleFormChange = (event, key) => {
    const dupFormData = { ...formData };
    dupFormData[key] = event.target.value;
    setFormData(dupFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formErrorsDuplicate = [];
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") formErrorsDuplicate.push(key);
    });
    if (formErrorsDuplicate.length > 0) {
      const dupFormErrors = { ...formErrors };
      Object.keys(formErrors).forEach((key) => {
        if (formErrorsDuplicate.includes(key)) {
          dupFormErrors[key] = true;
        } else {
          dupFormErrors[key] = false;
        }
      });
      setFormErrors(dupFormErrors);
    } else {
      const dupNotes = [...notes];
      dupNotes.push(formData);
      setNotes(dupNotes);
      props.handleExitClick();
    }
  };

  return (
    <StyledForm onSubmit={handleFormSubmit} {...props}>
      <InnerForm>
        <StyledExit onClick={props.handleExitClick}>X</StyledExit>
        {formErrors.name && (
          <ErrorMessage>This field is required.</ErrorMessage>
        )}
        <Input
          type="text"
          placeholder="Your Name"
          style={{ marginBottom: 10 }}
          onChange={(e) => handleFormChange(e, "name")}
          value={formData.name}
        />
        {formErrors.date && (
          <ErrorMessage>This field is required.</ErrorMessage>
        )}
        <Input
          type="date"
          style={{ marginBottom: 10 }}
          value={formData.date}
          onChange={(e) => handleFormChange(e, "date")}
        />
        {formErrors.note && (
          <ErrorMessage>This field is required.</ErrorMessage>
        )}

        <TextBox
          placeholder="Your Note"
          style={{ marginBottom: 10 }}
          onChange={(e) => handleFormChange(e, "note")}
          value={formData.note}
        />
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 400;
`;
