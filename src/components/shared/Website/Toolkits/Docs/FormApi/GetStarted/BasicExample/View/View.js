import { useForm } from "@basetoolkit/ui/form";
import { cssInjection as styled } from "@basetoolkit/ui";

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

  &:invalid {
    border-color: red;
  }
`;

const ErrorMessage = styled("span")`
  color: red;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 10px;
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

const StyledWatchBoxContainer = styled("div")`
  display: block;
  margin: 20px auto;
  padding: 10px;
  border-radius: 4px;
  width: 320px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
`;

const StyledWatchTitle = styled("h3")`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

const StyledWatchBox = styled("div")`
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
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // Watching the "example" input value
  const exampleValue = watch("example");

  return (
    <>
      {/* Container for the watched value with a title */}
      <StyledWatchBoxContainer>
        <StyledWatchTitle>Watched Values</StyledWatchTitle>
        <StyledWatchBox>
          Current example value: {exampleValue || "Type something..."}
        </StyledWatchBox>
      </StyledWatchBoxContainer>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput defaultValue="test" {...register("example")} />

        <StyledInput {...register("exampleRequired", { required: true })} />
        {errors?.exampleRequired?.message && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}

        <SubmitButton type="submit" />
      </StyledForm>
    </>
  );
}
