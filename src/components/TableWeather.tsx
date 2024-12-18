import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import Item from "../interface/Item";
import Typography from '@mui/material/Typography';

// Interfaz para las props
interface MyProp {
  itemsIn: Item[];
}
export default function TableWeather(props: MyProp) {
  // Estado para las filas
  const [rows, setRows] = useState<Item[]>([]);

  // Actualizar el estado cuando cambien las props
  useEffect(() => {
    setRows(props.itemsIn);
  }, [props.itemsIn]);

  return (
    <TableContainer component={Paper}>
      <Typography mb={1} component="h3" variant="h6" color="primary">
                    Historial Climático
                </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hora de inicio</TableCell>
            <TableCell align="right">Hora de fin</TableCell>
            <TableCell align="right">Precipitación</TableCell>
            <TableCell align="right">Humedad</TableCell>
            <TableCell align="right">Nubosidad</TableCell>
            <TableCell align="right">Velocidad del viento (m/s)</TableCell>
            <TableCell align="right">Dirección del viento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dateStart.split("T")[1]}
              </TableCell>
              <TableCell align="right">{row.dateEnd.split("T")[1]}</TableCell>
              <TableCell align="right">{row.precipitacion}</TableCell>
              <TableCell align="right">{row.humidity}</TableCell>
              <TableCell align="right">{row.clouds}</TableCell>
              <TableCell align="right">{row.windSpeed}</TableCell>
              <TableCell align="right">{row.windDirection}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>


      </Table>
    </TableContainer>
  );

}