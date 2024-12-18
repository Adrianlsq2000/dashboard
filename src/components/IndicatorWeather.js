import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
export default function IndicatorWeather(config) {
    return (_jsxs(Paper, { sx: {
            p: 2,
            display: 'flex',
            flexDirection: 'column'
        }, children: [_jsx(Typography, { component: "h2", variant: "h6", color: "primary", gutterBottom: true, children: config.title }), _jsx(Typography, { component: "p", variant: "h4", children: config.value }), _jsx(Typography, { color: "text.secondary", sx: { flex: 1 }, children: config.subtitle })] }));
}
