import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
export default function TableWeather(props) {
    // Estado para las filas
    const [rows, setRows] = useState([]);
    // Actualizar el estado cuando cambien las props
    useEffect(() => {
        setRows(props.itemsIn);
    }, [props.itemsIn]);
    return (_jsxs(TableContainer, { component: Paper, children: [_jsx(Typography, { mb: 1, component: "h3", variant: "h6", color: "primary", children: "Historial Clim\u00E1tico" }), _jsxs(Table, { "aria-label": "simple table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Hora de inicio" }), _jsx(TableCell, { align: "right", children: "Hora de fin" }), _jsx(TableCell, { align: "right", children: "Precipitaci\u00F3n" }), _jsx(TableCell, { align: "right", children: "Humedad" }), _jsx(TableCell, { align: "right", children: "Nubosidad" }), _jsx(TableCell, { align: "right", children: "Velocidad del viento (m/s)" }), _jsx(TableCell, { align: "right", children: "Direcci\u00F3n del viento" })] }) }), _jsx(TableBody, { children: rows.map((row, idx) => (_jsxs(TableRow, { sx: { "&:last-child td, &:last-child th": { border: 0 } }, children: [_jsx(TableCell, { component: "th", scope: "row", children: row.dateStart.split("T")[1] }), _jsx(TableCell, { align: "right", children: row.dateEnd.split("T")[1] }), _jsx(TableCell, { align: "right", children: row.precipitacion }), _jsx(TableCell, { align: "right", children: row.humidity }), _jsx(TableCell, { align: "right", children: row.clouds }), _jsx(TableCell, { align: "right", children: row.windSpeed }), _jsx(TableCell, { align: "right", children: row.windDirection })] }, idx))) })] })] }));
}
