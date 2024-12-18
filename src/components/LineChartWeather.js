import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const LineChartWeather = ({ selectedVariable, graficos }) => {
    const [dato, setDato] = useState([]);
    useEffect(() => {
        setDato(graficos);
    }, [graficos]);
    const colors = {
        precipitation: "#B71C1C", // Rojo más mate
        humidity: "#0D47A1", // Azul más mate
        clouds: "#F9A825" // Amarillo más mate
    };
    const data = dato.map((row) => ({
        hora: row.hour,
        precipitacion: parseFloat(row.precipitation),
        humedad: parseInt(row.humidity),
        nubosidad: parseInt(row.clouds)
    }));
    let filteredData;
    if (selectedVariable >= 0) {
        const selectedKey = ["precipitacion", "humedad", "nubosidad"][selectedVariable];
        filteredData = data.map(row => ({
            hora: row.hora,
            [selectedKey]: row[selectedKey]
        }));
    }
    else {
        filteredData = data;
    }
    return (_jsx(Paper, { sx: { p: 2, display: 'flex', flexDirection: 'column' }, children: _jsx(ResponsiveContainer, { width: "100%", height: 400, children: _jsxs(LineChart, { data: filteredData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e0e0e0" }), _jsx(XAxis, { dataKey: "hora", tick: { fill: '#212121' } }), _jsx(YAxis, { tick: { fill: '#212121' } }), _jsx(Tooltip, { contentStyle: { backgroundColor: '#f5f5f5', border: 'none' } }), _jsx(Legend, { wrapperStyle: { color: '#212121' } }), selectedVariable === -1 ? (_jsxs(_Fragment, { children: [_jsx(Line, { type: "monotone", dataKey: "precipitacion", stroke: colors.precipitation, strokeWidth: 2, activeDot: { r: 8 } }), _jsx(Line, { type: "monotone", dataKey: "humedad", stroke: colors.humidity, strokeWidth: 2, activeDot: { r: 8 } }), _jsx(Line, { type: "monotone", dataKey: "nubosidad", stroke: colors.clouds, strokeWidth: 2, activeDot: { r: 8 } })] })) : (_jsx(Line, { type: "monotone", dataKey: ["precipitacion", "humedad", "nubosidad"][selectedVariable], stroke: [colors.precipitation, colors.humidity, colors.clouds][selectedVariable], strokeWidth: 2, activeDot: { r: 8 } }))] }) }) }));
};
export default LineChartWeather;
