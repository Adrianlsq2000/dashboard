import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

interface Config {
  selectedVariable: number;
  graficos: Array<object>;
}

const LineChartWeather: React.FC<Config> = ({ selectedVariable, graficos }) => {
  const [dato, setDato] = useState<Array<object>>([]);

  useEffect(() => {
    setDato(graficos);
  }, [graficos]);

  const colors = {
    precipitation: "#B71C1C", // Rojo más mate
    humidity: "#0D47A1",     // Azul más mate
    clouds: "#F9A825"        // Amarillo más mate
  };

  const data = dato.map((row: any) => ({
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
      [selectedKey]: row[selectedKey as keyof typeof row]
    }));
  } else {
    filteredData = data;
  }

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
          <XAxis 
            dataKey="hora" 
            tick={{ fill: '#212121' }}
          />
          <YAxis 
            tick={{ fill: '#212121' }}
          />
          <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: 'none' }} />
          <Legend wrapperStyle={{ color: '#212121' }} />
          {selectedVariable === -1 ? (
            <>
              <Line type="monotone" dataKey="precipitacion" stroke={colors.precipitation} strokeWidth={2} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="humedad" stroke={colors.humidity} strokeWidth={2} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="nubosidad" stroke={colors.clouds} strokeWidth={2} activeDot={{ r: 8 }} />
            </>
          ) : (
            <Line
              type="monotone"
              dataKey={["precipitacion", "humedad", "nubosidad"][selectedVariable]}
              stroke={[colors.precipitation, colors.humidity, colors.clouds][selectedVariable]}
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default LineChartWeather;