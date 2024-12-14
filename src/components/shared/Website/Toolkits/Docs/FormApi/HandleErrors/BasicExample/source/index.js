export const source = `
import React, { useState } from "react";
import { useForm } from "@basetoolkit/ui/form";
import { cssInjection as styled } from "@basetoolkit/ui";

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

const ErrorMessage = styled("p")\`
  color: red;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 10px;
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

export default function BasicExample() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <ErrorMessage role="alert">First name is required</ErrorMessage>
          )}
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            {...register("mail", {
              required: "Email Address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email, e.g., name@example.com.",
              },
            })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && (
            <ErrorMessage role="alert">{errors.mail?.message}</ErrorMessage>
          )}
        </StyledInputWrapper>

        <SubmitButton type="submit" value="Submit" />
      </StyledForm>
      {submittedData && (
        <StyledResultBoxContainer>
          <StyledResultTitle>Submitted Values</StyledResultTitle>
          <StyledResultBox>
            <p>First Name: {submittedData.firstName}</p>
            <p>Email: {submittedData.mail}</p>
          </StyledResultBox>
        </StyledResultBoxContainer>
      )}
    </>
  );
}
`