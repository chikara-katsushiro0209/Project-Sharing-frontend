import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type Props = {
  control: Control<any, any>;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: () => void;
};

export const CTextField = ({
  control,
  name,
  type,
  placeholder,
  defaultValue = "",
  onChange,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => {
        const handleChange = (
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          field.onChange(event.target.value);
          if (onChange) {
            onChange();
          }
        };
        return (
          <TextField
            {...field}
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
            sx={{
              '& input[type="number"]': {
                "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
                  appearance: "none",
                  margin: 0,
                },
              },
            }}
          />
        );
      }}
    />
  );
};
