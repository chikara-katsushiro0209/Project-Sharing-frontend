import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { CButton } from "../../../components/buttons/CButton";
import { CTextField } from "../../../components/forms/CTextField";
import { SignUp } from "../../../types/signUp";

function index() {
  const { control, handleSubmit } = useForm<SignUp>();

  const signUp = (value: SignUp) => {
    console.log(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit(signUp)}>
        <CTextField control={control} name={"firstName"} placeholder={"山田"} />
        <CTextField control={control} name={"lastName"} placeholder={"太郎"} />
        <CTextField
          control={control}
          name={"birthday"}
          type={"number"}
          placeholder={"20010209"}
        />
        <Box sx={{ width: "200px" }}>
          <CButton>登録</CButton>
        </Box>
      </form>
    </>
  );
}

export default index;
