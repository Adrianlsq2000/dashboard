import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
const PastelGrafico = ({ graficos }) => {
    const ultimoDato = graficos[graficos.length - 1] || {};
    const data = [
        { name: 'Precipitación', value: parseFloat(ultimoDato.precipitation || 0) },
        { name: 'Humedad', value: parseInt(ultimoDato.humidity || 0) },
        { name: 'Nubosidad', value: parseInt(ultimoDato.clouds || 0) }
    ];
    const COLORS = ['#B71C1C', '#0D47A1', '#F9A825'];
    return (_jsxs(Paper, { sx: { p: 2, display: 'flex', flexDirection: 'column' }, children: [_jsx(Typography, { variant: "h6", color: "primary", gutterBottom: true, children: "Grafico Pastelde Condiciones Actuales" }), _jsx(ResponsiveContainer, { width: "100%", height: 200, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: data, cx: "35%" // Movemos el centro del pie hacia la izquierda
                            , cy: "50%", innerRadius: 30, outerRadius: 60, paddingAngle: 5, dataKey: "value", children: data.map((_, index) => (_jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`))) }), _jsx(Tooltip, { formatter: (value) => `${value}%`, contentStyle: {
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '4px',
                                padding: '8px'
                            } }), _jsx(Legend, { layout: "vertical", align: "right", verticalAlign: "middle", wrapperStyle: {
                                fontSize: '12px',
                                paddingLeft: '10px'
                            } })] }) })] }));
};
export default PastelGrafico;
