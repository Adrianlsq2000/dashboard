import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
interface Indicador {
    title?: String;
    subtitle?: String;
    value?: String;
}
export default function IndicatorWeather(config:Indicador) {
    return (
        <Paper
             sx={{
               p: 2,
               display: 'flex',
               flexDirection: 'column'
             }}
           >
             <Typography component="h2" variant="h6" 
                         color="primary" gutterBottom>
                 {config.title} 
             </Typography>
             <Typography component="p" variant="h4">
                 {config.value}
             </Typography>
             <Typography color="text.secondary" sx={{ flex: 1 }}>
                 {config.subtitle}
             </Typography>
         </Paper> 
    )
}