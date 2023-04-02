import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { LoginForm } from "../types/types";

export default function Home() {
  const { control, handleSubmit, getValues } = useForm<LoginForm>();

  const onSubmit = (value: LoginForm) => {
    console.log(value);
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
          <TextField name={"id"} label="ID" sx={{ mx: 1 }} />
          <TextField name={"password"} label="Password" />

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
