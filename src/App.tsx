import IndicatorWeather from './components/IndicatorWeather';
import './App.css'
import ControlWeather from './components/ControlWeather';
// Grid version 2
import Grid from '@mui/material/Grid2'
import TableWeather from './components/TableWeather';
import LineChartWeather from './components/LineChartWeather';
function App() {

  return (
    <Grid container spacing={5}>

      {/* Indicadores */}
      <Grid size={{ xs: 12, xl: 3 }}>
        <IndicatorWeather title={'IndicatorWeather 1'} subtitle={'Unidad 1'} value={1.23} />
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <IndicatorWeather title={'IndicatorWeather 2'} subtitle={'Unidad 2'} value={3.12} />
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <IndicatorWeather title={'IndicatorWeather 3'} subtitle={'Unidad 3'} value={2.31} />
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <IndicatorWeather title={'IndicatorWeather 4'} subtitle={'Unidad 4'} value={3.21} />
      </Grid>

      {/* Tabla */}
      <Grid size={{ xs: 12, xl: 8 }}>Elemento: Tabla</Grid>

      {/* Grid Anidado */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, xl: 3 }}>
          <ControlWeather />
        </Grid>
        <Grid size={{ xs: 12, xl: 3 }}>
          <TableWeather />
        </Grid>
        {/* Gráfico */}
        <Grid size={{ xs: 12, xl: 3 }}>
          <LineChartWeather />
        </Grid>
      </Grid>

    </Grid>
  )
}

export default App
