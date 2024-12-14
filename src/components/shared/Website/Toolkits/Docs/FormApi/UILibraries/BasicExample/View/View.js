import React, { useEffect } from "react";
import { useForm, Controller } from "@basetoolkit/ui/form";
import {
  Select,
  Checkbox,
  TextField as Input,
  MenuItem,
  Switch,
  Autocomplete,
  Rating,
  Slider,
  Button,
  FormLabel,
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio,
  ToggleButton,
  ToggleButtonGroup,
  SvgIcon,
} from "@basetoolkit/ui";

const BasicExample = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      iceCreamType: { label: "Strawberry", value: "strawberry" },
      Switch: true,
      Checkbox: true,
      firstName: "lubna",
      lastName: "hajhussein",
      country: "jordan",
      rating: 2.5,
      slider: 20,
      "radio-buttons-group": "male",
      "toggle-button": "center",
    },
  });

  // useEffect(() => {
  //   console.log({ errors });
  // }, [errors]);

  const onSubmit = (data) => {
    console.log([data])
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <FormLabel>Slider</FormLabel>
          <Controller
            render={({ field }) => {
              const { value, ...restField } = field;
              return (
                <Slider
                  style={{ width: 300 }}
                  tooltip
                  {...restField}
                  defaultValue={value}
                />
              );
            }}
            name="slider"
            control={control}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <FormLabel>Rating</FormLabel>
          <Controller
            render={({ field }) => {
              const { value, ...restField } = field;
              return (
                <Rating precision={0.5} {...restField} defaultValue={value} />
              );
            }}
            name="rating"
            control={control}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Controller
            label="Country"
            options={["jordan", "oman", "egypt", "greece", "qatar"]}
            getOptionLabel={(option) => option}
            render={({ field }) => {
              const { value, ...restField } = field;
              return (
                <Autocomplete
                  variant="filled"
                  {...restField}
                  defaultValue={value}
                />
              );
            }}
            name="country"
            control={control}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Controller
            render={({ field }) => {
              const { value, ...restField } = field;
              return (
                <Input
                  {...restField}
                  helperText={
                    errors["firstName"]?.message  || ""
                  }
                  error={errors["firstName"]?.message }
                  defaultValue={value}
                  required
                />
              );
            }}
            rules={{ required: true, minLength: {value:10,message:"custom msg min length should be 10"} }}
            label="First Name"
            name="firstName"
            control={control}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Controller
            render={({ field }) => {
              const { value, ...restField } = field;
              return <Input {...restField} defaultValue={value} />;
            }}
            label="Last Name"
            name="lastName"
            control={control}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Controller
            name="iceCreamType"
            render={({ field }) => {
              const { value, ...restField } = field;
              return (
                <Select
                  style={{ width: 280 }}
                  {...restField}
                  defaultValue={value}
                >
                  <MenuItem value={"chocolate"}>Chocolate</MenuItem>
                  <MenuItem value={"strawberry"}>Strawberry</MenuItem>
                  <MenuItem value={"vanilla"}>Vanilla</MenuItem>
                </Select>
              );
            }}
            label="Ice Cream Preference"
            control={control}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Controller
            name="Checkbox"
            control={control}
            render={({ field }) => {
              const { value, ...restField } = field;
              return <Checkbox {...restField} defaultChecked={field.value} />;
            }}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Controller
            name="Switch"
            control={control}
            render={({ field }) => {
              const { value, ...restField } = field;
              return <Switch {...restField} defaultChecked={field.value} />;
            }}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <FormLabel id="demo-radio-buttons-group-label" color="text.secondary">
            Gender
          </FormLabel>
          <Controller
            control={control}
            render={({ field }) => {
              const { value, ...restField } = field;
              return <RadioGroup {...restField} defaultValue={field.value} />;
            }}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </Controller>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Controller
            name="toggle-button"
            control={control}
            render={({ field }) => {
              const { value, ...restField } = field;
              return (
                <ToggleButtonGroup {...restField} defaultValue={field.value} />
              );
            }}
            exclusive
            aria-label="text alignment"
          >
            <ToggleButton type="button" value="left" aria-label="left aligned">
              <SvgIcon icon="format_align_left" />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <SvgIcon icon="format_align_center" />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <SvgIcon icon="format_align_right" />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <SvgIcon icon="format_align_justify" />
            </ToggleButton>
          </Controller>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Button fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BasicExample;
