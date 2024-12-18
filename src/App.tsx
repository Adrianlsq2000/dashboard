import IndicatorWeather from './components/IndicatorWeather';
import './App.css'
import ControlWeather from './components/ControlWeather';
// Grid version 2
import Grid from '@mui/material/Grid2'
import TableWeather from './components/TableWeather';
import LineChartWeather from './components/LineChartWeather';
{/* Hooks */ }
import { useEffect, useState } from 'react';
import Item from './interface/Item';
interface Indicator {
  title?: String;
  subtitle?: String;
  value?: String;
}

function App() {
  {/* Variable de estado y función de actualización */ }
  let [indicators, setIndicators] = useState<Indicator[]>([])
  {/*Variables de estado y funcion de actualización */}
  const [items, setItems] = useState<Item[]> ([]); 
  {/* Hook: useEffect */ }
  useEffect(() => {

    let request = async () => {

      {/* Request */ }
      let API_KEY = "65b472dd5feb7fe34312306364b9926e"
      let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
      let savedTextXML = await response.text();

      {/* XML Parser */ }
      const parser = new DOMParser();
      const xml = parser.parseFromString(savedTextXML, "application/xml");
      {/* Arreglo para agregar los resultados */ }

      let dataToIndicators: Indicator[] = new Array<Indicator>();

      {/* 
             Análisis, extracción y almacenamiento del contenido del XML 
             en el arreglo de resultados
         */}

      let name = xml.getElementsByTagName("name")[0].innerHTML || ""
      dataToIndicators.push({ "title": "Location", "subtitle": "City", "value": name })

      let location = xml.getElementsByTagName("location")[1]

      let latitude = location.getAttribute("latitude") || ""
      dataToIndicators.push({ "title": "Location", "subtitle": "Latitude", "value": latitude })

      let longitude = location.getAttribute("longitude") || ""
      dataToIndicators.push({ "title": "Location", "subtitle": "Longitude", "value": longitude })

      let altitude = location.getAttribute("altitude") || ""
      dataToIndicators.push({ "title": "Location", "subtitle": "Altitude", "value": altitude })
       // Crear arreglo temporal para items
    const timeNodes = xml.getElementsByTagName("time");
    const extractedItems = [];

    for (let i = 0; i < Math.min(timeNodes.length, 6); i++) {
      const node = timeNodes[i];
      const from = node.getAttribute("from") || "";
      const to = node.getAttribute("to") || "";
      const precipitation = node.getElementsByTagName("precipitation")[0]?.getAttribute("probability") || "0";
      const humidity = node.getElementsByTagName("humidity")[0]?.getAttribute("value") || "0";
      const clouds = node.getElementsByTagName("clouds")[0]?.getAttribute("all") || "0";

      extractedItems.push({
        dateStart: from,
        dateEnd: to,
        precipitacion: precipitation,
        humidity: humidity,
        clouds: clouds,
      });
    }
      //console.log( dataToIndicators )
      {/* Modificación de la variable de estado mediante la función de actualización */ }
      setIndicators(dataToIndicators)
      setItems(extractedItems)
      
    }

    request();

  }, [])


  return (
    <Grid container spacing={5}>

      {/* Indicadores */}
      {/*<Grid size={{ xs: 12, xl: 3 }}>
        <IndicatorWeather title={'Indicator 1'} subtitle={'Unidad 1'} value={"1.23"} />
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <IndicatorWeather title={'Indicator 2'} subtitle={'Unidad 2'} value={"3.12"} />
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <IndicatorWeather title={'Indicator 3'} subtitle={'Unidad 3'} value={"2.31"} />
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <IndicatorWeather title={'Indicator 4'} subtitle={'Unidad 4'} value={"3.21"} />
      </Grid>
        */}
      {
        indicators
          .map(
            (indicator, idx) => (
              <Grid key={idx} size={{ xs: 12, /*md*/ xl: 3 }}>
                <IndicatorWeather
                  title={indicator["title"]}
                  subtitle={indicator["subtitle"]}
                  value={indicator["value"]} />
              </Grid>
            )
          )
      }
      
      <Grid size={{ xs: 12, xl: 12 }}>
            <ControlWeather />   {/*seleccion*/}
            <LineChartWeather /> {/*Grafico*/}
      </Grid>
      {/* Tabla */}
      <Grid size={{ xs: 12, xl: 12 }}>
            <TableWeather itemsIn={ items } />
      </Grid>


      

    </Grid>
  )
}

export default App