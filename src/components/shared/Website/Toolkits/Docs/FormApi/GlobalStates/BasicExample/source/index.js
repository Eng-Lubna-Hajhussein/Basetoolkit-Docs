export const source = `
import React, { createContext, useContext, useState } from "react";
import { cssInjection as styled } from "@basetoolkit/ui";
import { useForm } from "@basetoolkit/ui/form";

const StyledForm = styled("form")\`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 20px auto;
  padding: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
\`;

const StyledInputWrapper = styled("div")\`
  margin-bottom: 20px;
\`;

const StyledLabel = styled("label")\`
  font-size: 15px;
  margin-bottom: 8px;
  color: #333;
  display: block;
  font-weight: bold;
\`;

const StyledInput = styled("input")\`
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
  transition: box-shadow 0.2s ease;
  width: 290px;
  &:focus {
    outline: none;
    box-shadow: 0 0 6px rgba(0, 123, 255, 0.5);
    border-color: #007bff;
  }
\`;

const SubmitButton = styled("input")\`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
\`;

const StyledResultBoxContainer = styled("div")\`
  display: block;
  margin: 20px auto;
  padding: 15px;
  border-radius: 6px;
  width: 350px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
\`;

const StyledResultTitle = styled("h3")\`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
  color: #007bff;
\`;

const StyledResultBox = styled("div")\`
  background-color: #ffffff;
  padding: 12px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ddd;
  text-align: left;
\`;

// Create a Context for form data
const FormContext = createContext();

// Create a Provider to manage the form state
const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "lubna",
    lastName: "hajhussein",
  });

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use form context
const useFormContext = () => {
  return useContext(FormContext);
};

function BasicExample() {
  const { formData, updateFormData } = useFormContext(); // Access context values
  const { register, handleSubmit } = useForm();
  const [blnSubmitted, setBlnSubmitted] = useState(false);

  // Submit your data into the context
  const onSubmit = (data) => {
    updateFormData(data);
    setBlnSubmitted(true);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput
            {...register("firstName")}
            defaultValue={formData?.firstName}
            placeholder="First Name"
          />
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledLabel>Last Name</StyledLabel>
          <StyledInput
            {...register("lastName")}
            defaultValue={formData?.lastName}
            placeholder="Last Name"
          />
        </StyledInputWrapper>

        <SubmitButton type="submit" value="Submit" />
      </StyledForm>

      {blnSubmitted && (
        <StyledResultBoxContainer>
          <StyledResultTitle>Submitted Values</StyledResultTitle>
          <StyledResultBox>
            <p>
              <strong>First Name:</strong> {formData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {formData.lastName}
            </p>
          </StyledResultBox>
        </StyledResultBoxContainer>
      )}
    </>
  );
}

const Root = () => (
  <FormProvider>
    <BasicExample />
  </FormProvider>
);

export default Root;
`