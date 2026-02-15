import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomPressable = ({
  title,
  buttonStyle,
  titleStyle,
  onPress,
  ...buttonProps
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        buttonStyle,
      ]}
      onPress={onPress}
      {...buttonProps}
    >
      <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default CustomPressable;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 15,
  },
  pressed: {
    opacity: 0.8,
  },
});
