import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomFormInput from "@/components/CustomFormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/utils/authSchema";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CustomPressable from "@/components/CustomPressable";
import { Link } from "expo-router";

const SignUp = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFCE99" }}>
      <View style={styles.topContainer}>
        <MaterialCommunityIcons
          name="account-plus"
          size={150}
          color="#562F00"
        />
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#562F00" }}>
          Sign Up
        </Text>
      </View>
      <View style={styles.formContainer}>
        <CustomFormInput
          control={control}
          name={"email"}
          placeholder={"E-mail"}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          inputStyle={styles.textInputStyle}
        />
        <CustomFormInput
          control={control}
          name={"password"}
          placeholder={"Password"}
          secureTextEntry
          inputStyle={styles.textInputStyle}
        />
        <CustomFormInput
          control={control}
          name={"confirmPassword"}
          placeholder={"Confirm Password"}
          secureTextEntry
          inputStyle={styles.textInputStyle}
        />
        <CustomPressable
          title={"Register"}
          onPress={handleSubmit(onSubmit)}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
        />
        <Link href="/sign-in" style={{ alignSelf: "flex-end" }}>
          Do you have an already account?
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1 / 2,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    padding: 15,
  },
  textInputStyle: {
    borderRadius: 10,
    marginVertical: 5,
    fontSize: 15,
  },
  button: {
    borderRadius: 15,
    backgroundColor: "#562F00",
    marginVertical: 15,
  },
  buttonTitle: {
    fontSize: 25,
    marginVertical: 10,
    color: "#FFFDF1",
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
