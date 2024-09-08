import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";

interface RatingTableProps {
  rating: {
    kp?: number;
    imdb?: number;
    await?: number | null;
    filmCritics?: number;
  };
}

const RatingTable: FC<RatingTableProps> = ({ rating }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">KP</TableCell>
            <TableCell align="right">IMDB</TableCell>
            <TableCell align="right">Критики</TableCell>
            <TableCell align="right">Ожидание</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="right">{rating.kp || "нет данных"}</TableCell>
            <TableCell align="right">{rating.imdb || "нет данных"}</TableCell>
            <TableCell align="right">
              {rating.filmCritics || "нет данных"}
            </TableCell>
            <TableCell align="right">{rating.await || "нет данных"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { RatingTable };
