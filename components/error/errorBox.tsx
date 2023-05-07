import { Box } from "@mui/system";

type Props = {
  children: React.ReactNode;
  width?: string;
};

export const ErrorBox = ({ children, width }: Props) => {
  return (
    <Box
      sx={{ color: "red", border: "1px solid red", my: 1, p: 1, width: width }}>
      {children}
    </Box>
  );
};
