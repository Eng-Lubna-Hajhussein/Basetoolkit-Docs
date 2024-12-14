import { useForm } from "@basetoolkit/ui/form";
import { cssInjection as styled } from "@basetoolkit/ui";
import {  useState } from "react";

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const StyledInput = styled("input")`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled("input")`
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
`;


const ErrorMessage = styled("span")`
  color: red;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 10px;
`;

const StyledResultBoxContainer = styled("div")`
  display: block;
  margin: 20px auto;
  padding: 10px;
  border-radius: 4px;
  width: 320px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
`;

const StyledResultTitle = styled("h3")`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

const StyledResultBox = styled("div")`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ddd;
  text-align: center;
`;

export default function BasicExample() {
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
        <StyledInput
          {...register("firstName", { required: true, maxLength: 20 })}
          placeholder="First Name (Required, Max 20)"
        />
        {errors?.firstName?.message && (
          <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
        )}
        <StyledInput
          {...register("lastName", { pattern: /^[A-Za-z]+$/i,required:true })}
          placeholder="Last Name (Alphabets Only)"
        />
         {errors?.lastName?.message && (
          <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
        )}
        <StyledInput
          type="number"
          {...register("age", { min: 18, max: 99 })}
          placeholder="Age (Min: 18, Max: 99)"
        />
         {errors?.age?.message && (
          <ErrorMessage>{errors?.age?.message}</ErrorMessage>
        )}
        <SubmitButton type="submit" value="Submit" />
      </StyledForm>

      {submittedData && (
        <StyledResultBoxContainer>
          <StyledResultTitle>Submitted Values</StyledResultTitle>
          <StyledResultBox>
            <p>First Name: {submittedData.firstName}</p>
            <p>Last Name: {submittedData.lastName}</p>
            <p>Age: {submittedData.age}</p>
          </StyledResultBox>
        </StyledResultBoxContainer>
      )}
    </>
  );
}
