import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
{ /* Hooks */ }
import { useRef } from 'react';
{ /* Componentes MUI */ }
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
{ /* Interfaz SelectChangeEvent */ }
import Select from '@mui/material/Select';
export default function ControlWeather({ onVariableChange }) {
    { /* Constante de referencia a un elemento HTML */ }
    const descriptionRef = useRef(null);
    { /* Variable de estado y función de actualización */ }
    { /* Arreglo de objetos */ }
    let items = [
        { "name": "Precipitación", "description": "Cantidad de agua que cae sobre una superficie en un período específico." },
        { "name": "Humedad", "description": "Cantidad de vapor de agua presente en el aire, generalmente expresada como un porcentaje." },
        { "name": "Nubosidad", "description": "Grado de cobertura del cielo por nubes, afectando la visibilidad y la cantidad de luz solar recibida." }
    ];
    { /* Arreglo de elementos JSX */ }
    let options = items.map((item, key) => _jsx(MenuItem, { value: key, children: item["name"] }, key));
    { /* Manejador de eventos */ }
    const handleChange = (event) => {
        let idx = parseInt(event.target.value);
        //alert(idx);
        onVariableChange(idx); // Emitir el valor seleccionado al padre
        { /* Modificación de la referencia descriptionRef */ }
        if (descriptionRef.current !== null) {
            descriptionRef.current.innerHTML = (idx >= 0) ? items[idx]["description"] : "";
        }
    };
    { /* JSX */ }
    return (_jsxs(Paper, { sx: {
            p: 2,
            display: 'flex',
            flexDirection: 'column'
        }, children: [_jsx(Typography, { mb: 2, component: "h3", variant: "h6", color: "primary", children: "Variables Meteorol\u00F3gicas" }), _jsx(Box, { sx: { minWidth: 120 }, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { id: "simple-select-label", children: "Variables" }), _jsxs(Select, { labelId: "simple-select-label", id: "simple-select", label: "Variables", defaultValue: '-1', onChange: handleChange, children: [_jsx(MenuItem, { value: "-1", disabled: true, children: "Seleccione una variable" }, "-1"), options] })] }) }), _jsx(Typography, { ref: descriptionRef, mt: 2, component: "p", color: "text.secondary" })] }));
}
