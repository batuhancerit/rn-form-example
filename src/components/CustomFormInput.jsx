import { Text, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const CustomFormInput = ({
  name,
  control,
  placeholder,
  inputStyle,
  ...textInputProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            style={[
              {
                borderWidth: error ? 2 : 1,
                borderColor: error ? "red" : "#562F00",
              },
              inputStyle,
            ]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            multiline={false}
            {...textInputProps}
          />
          {error && <Text style={{ fontWeight: "200" }}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default CustomFormInput;
