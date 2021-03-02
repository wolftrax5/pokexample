import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface Data {
    id: string,
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
  }

function createData(
  id: string,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('a1', "Cupcake", 305, 3.7, 67, 4.3),
  createData('a2', "Donut", 452, 25.0, 51, 4.9),
  createData('a3',"Eclair", 262, 16.0, 24, 6.0),
  createData('a4',"Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData('a5',"Gingerbread", 356, 16.0, 49, 3.9),
  createData('a6',"Honeycomb", 408, 3.2, 87, 6.5),
  createData('a7',"Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData('a8',"Jelly Bean", 375, 0.0, 94, 0.0),
  createData('a9',"KitKat", 518, 26.0, 65, 7.0),
  createData('a10',"Lollipop", 392, 0.2, 98, 0.0),
  createData('a11',"Marshmallow", 318, 0, 81, 2.0),
  createData('a12',"Nougat", 360, 19.0, 9, 37.0),
  createData('a13',"Oreo", 437, 18.0, 63, 4.0),
];

export const ResponsiveTable = () => (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell >Calories</TableCell>
            <TableCell >Fat (g)</TableCell>
            <TableCell >Carbs (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, name, calories, fat, carbs, protein }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell >{calories}</TableCell>
              <TableCell >{fat}</TableCell>
              <TableCell >{carbs}</TableCell>
              <TableCell >{protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
);
