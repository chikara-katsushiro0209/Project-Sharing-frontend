import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Login } from "../api/login";
import { currentContext } from "../components/context/currentContext";
import { ErrorBox } from "../components/error/errorBox";
import { CTextField } from "../components/forms/CTextField";
import { LoginForm } from "../types/login";

export default function Home() {
  const { control, handleSubmit } = useForm<LoginForm>();
  const [loginValidation, setLoginValidation] = useState(false);

  const { setCurrentUser } = useContext(currentContext);

  const onSubmit = (value: LoginForm) => {
    Login(Number(value.id), value.password)
      .then((data) => {
        setCurrentUser({ id: data.id, fullName: data.full_name });
        setLoginValidation(false);
      })
      .catch((err) => {
        setLoginValidation(true);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ position: "relative", height: 800, width: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "30%",
          }}>
          {loginValidation && (
            <ErrorBox width="270px">IDもしくはPasswordが違います。</ErrorBox>
          )}
          <CTextField control={control} name={"id"} label="ID" />
          <CTextField control={control} name={"password"} label="Password" />

          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ ml: 2, mt: 2 }}>
            ログイン
          </Button>
        </Box>
      </Box>
    </form>
  );
}
