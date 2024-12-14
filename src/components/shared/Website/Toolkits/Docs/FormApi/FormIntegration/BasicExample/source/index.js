export const source = `
import React, { useState } from "react";
import { useForm } from "@basetoolkit/ui/form";
import { cssInjection as styled } from "@basetoolkit/ui";

const StyledForm = styled("form")\`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
\`;

const StyledInputWrapper = styled("div")\`
  margin-bottom: 15px;
\`;

const StyledLabel = styled("label")\`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
\`;

const StyledInput = styled("input")\`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  width: 280px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
\`;

const StyledSelect = styled("select")\`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
\`;

const SubmitButton = styled("input")\`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

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
  padding: 10px;
  border-radius: 4px;
  width: 320px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
\`;

const StyledResultTitle = styled("h3")\`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
\`;

const StyledResultBox = styled("div")\`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ddd;
  text-align: center;
\`;

const ErrorMessage = styled("span")\`
  color: red;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 10px;
\`;

const Input = ({ label, register, required }) => (
  <StyledInputWrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput {...register(label, { required })} />
  </StyledInputWrapper>
);

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <StyledInputWrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledSelect name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </StyledSelect>
  </StyledInputWrapper>
));

const BasicExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required />
        {errors["First Name"]?.message && (
          <ErrorMessage>{errors["First Name"]?.message}</ErrorMessage>
        )}
        <Select label="Age" {...register("Age")} />
        <SubmitButton type="submit" value="Submit" />
      </StyledForm>

      {submittedData && (
        <StyledResultBoxContainer>
          <StyledResultTitle>Submitted Values</StyledResultTitle>
          <StyledResultBox>
            <p>First Name: {submittedData["First Name"]}</p>
            <p>Age: {submittedData.Age}</p>
          </StyledResultBox>
        </StyledResultBoxContainer>
      )}
    </>
  );
};

export default BasicExample;
`