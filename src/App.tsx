import IndicatorWeather from './components/IndicatorWeather';
import './App.css'

// Grid version 2
import Grid from '@mui/material/Grid2' 
function App() {

  return (
    <Grid container spacing={5}>

       	  {/* Indicadores */}
           <Grid size={{xs:12, xl:3}}>
           <IndicatorWeather title={'IndicatorWeather 1'} subtitle={'Unidad 1'} value={1.23} /> 
          </Grid>
           <Grid size={{xs:12, xl:3}}>
           <IndicatorWeather title={'IndicatorWeather 2'} subtitle={'Unidad 2'} value={3.12} />
          </Grid>
           <Grid size={{xs:12, xl:3}}>
           <IndicatorWeather title={'IndicatorWeather 3'} subtitle={'Unidad 3'} value={2.31} />
          </Grid>
           <Grid size={{xs:12, xl:3}}>
           <IndicatorWeather title={'IndicatorWeather 4'} subtitle={'Unidad 4'} value={3.21} />
          </Grid>
		      
           {/* Tabla */}
           <Grid size={{xs:12, xl:8}}>Elemento: Tabla</Grid>
		      
           {/* Gráfico */}
           <Grid size={{xs:12, xl:4}}>Elemento: Gráfico 1</Grid>
		  
       </Grid>
  )
}

export default App