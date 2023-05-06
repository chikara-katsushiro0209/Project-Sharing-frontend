import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const CButton = styled((props: ButtonProps) => (
  <Button type={props?.type || "submit"} {...props} />
))(() => ({
  width: "100%",
  fontSize: "16px",
  background: "white",
  border: "2px solid #66CCCC",
  borderRadius: "27px",
  "&:hover": {
    backgroundColor: "#FFF4FB",
    cursor: "pointer",
  },
  "&:disabled": {
    backgroundColor: "transparent",
    color: "#E7E7E7",
    border: "2px solid #E7E7E7",
  },
  "&:active": {
    backgroundColor: "#FFF4F8",
  },
}));
