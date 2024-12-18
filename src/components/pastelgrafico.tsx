import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface PieChartProps {
  graficos: Array<any>;
}

const PastelGrafico: React.FC<PieChartProps> = ({ graficos }) => {
  const ultimoDato = graficos[graficos.length - 1] || {};
  
  const data = [
    { name: 'Precipitación', value: parseFloat(ultimoDato.precipitation || 0) },
    { name: 'Humedad', value: parseInt(ultimoDato.humidity || 0) },
    { name: 'Nubosidad', value: parseInt(ultimoDato.clouds || 0) }
  ];

  const COLORS = ['#B71C1C', '#0D47A1', '#F9A825'];

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" color="primary" gutterBottom>
        Grafico Pastelde Condiciones Actuales
      </Typography>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="35%"  // Movemos el centro del pie hacia la izquierda
            cy="50%"
            innerRadius={30}  // Reducimos el radio interno
            outerRadius={60}  // Reducimos el radio externo
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => `${value}%`}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '4px',
              padding: '8px'
            }}
          />
          <Legend 
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{
              fontSize: '12px',
              paddingLeft: '10px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default PastelGrafico;
