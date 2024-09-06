import { TextField } from "@mui/material";
import { FC } from "react";

interface CustomTextFieldDialogProps {
  className?: string;
  placeHolder?: string;
  name: string;
  type: "password" | "text";
}

const CustomTextFieldDialog: FC<CustomTextFieldDialogProps> = ({
  className,
  name,
  placeHolder,
  type,
}) => {
  return (
    <TextField
      required
      size={"small"}
      className={className}
      variant="outlined"
      placeholder={placeHolder}
      name={name}
      type={type}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
              borderWidth: "0",
            },
          },
        },
      }}
    />
  );
};

export { CustomTextFieldDialog };
