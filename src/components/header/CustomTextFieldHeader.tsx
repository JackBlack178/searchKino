import { FC } from "react";
import { InputAdornment, TextField } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";

interface CustomTextFieldHeaderProps {
  className?: string;
}

const CustomTextFieldHeader: FC<CustomTextFieldHeaderProps> = ({
  className,
}) => {
  return (
    <TextField
      size={"small"}
      className={className}
      placeholder={"Поиск"}
      variant="outlined"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <MovieIcon />
            </InputAdornment>
          ),
        },
      }}
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
export { CustomTextFieldHeader };