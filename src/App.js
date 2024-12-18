import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IndicatorWeather from './components/IndicatorWeather';
import './App.css';
import ControlWeather from './components/ControlWeather';
// Grid version 2
import Grid from '@mui/material/Grid2';
import TableWeather from './components/TableWeather';
import LineChartWeather from './components/LineChartWeather';
import PastelGrafico from './components/pastelgrafico';
{ /* Hooks */ }
import { useEffect, useState } from 'react';
import Summary from './components/Summary';
function App() {
    { /* Variable de estado y función de actualización */ }
    let [indicators, setIndicators] = useState([]);
    { /*Variables de estado y funcion de actualización */ }
    const [items, setItems] = useState([]);
    { /* Hook: useEffect */ }
    let [selectedVariable, setSelectedVariable] = useState(-1);
    let [infoGraphic, setInfoGraphic] = useState([]);
    useEffect(() => {
        let request = async () => {
            { /* Request */ }
            let API_KEY = "65b472dd5feb7fe34312306364b9926e";
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`);
            let savedTextXML = await response.text();
            { /* XML Parser */ }
            const parser = new DOMParser();
            const xml = parser.parseFromString(savedTextXML, "application/xml");
            { /* Arreglo para agregar los resultados */ }
            let dataToIndicators = new Array();
            { /*
                   Análisis, extracción y almacenamiento del contenido del XML
                   en el arreglo de resultados
               */
            }
            let name = xml.getElementsByTagName("name")[0].innerHTML || "";
            dataToIndicators.push({ "title": "Location", "subtitle": "City", "value": name });
            let location = xml.getElementsByTagName("location")[1];
            let latitude = location.getAttribute("latitude") || "";
            dataToIndicators.push({ "title": "Location", "subtitle": "Latitude", "value": latitude });
            let longitude = location.getAttribute("longitude") || "";
            dataToIndicators.push({ "title": "Location", "subtitle": "Longitude", "value": longitude });
            let altitude = location.getAttribute("altitude") || "";
            dataToIndicators.push({ "title": "Location", "subtitle": "Altitude", "value": altitude });
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
                const windDirection = node.getElementsByTagName("windDirection")[0]?.getAttribute("code") || "N/A";
                const windSpeed = node.getElementsByTagName("windSpeed")[0]?.getAttribute("mps") || "0";
                extractedItems.push({
                    dateStart: from,
                    dateEnd: to,
                    precipitacion: precipitation,
                    humidity: humidity,
                    clouds: clouds,
                    windDirection: windDirection,
                    windSpeed: windSpeed
                });
            }
            //console.log( dataToIndicators )
            { /* Modificación de la variable de estado mediante la función de actualización */ }
            setIndicators(dataToIndicators);
            setItems(extractedItems);
            let arrayObjects = Array.from(xml.getElementsByTagName("time")).map((timeElement) => {
                let rangeHours = timeElement.getAttribute("from")?.split("T")[1] + " - " + timeElement.getAttribute("to")?.split("T")[1];
                let windDirection = timeElement.getElementsByTagName("windDirection")[0]?.getAttribute("deg") + " " + timeElement.getElementsByTagName("windDirection")[0]?.getAttribute("code");
                let precipitation = timeElement.getElementsByTagName("precipitation")[0]?.getAttribute("probability");
                let humidity = timeElement.getElementsByTagName("humidity")[0]?.getAttribute("value");
                let clouds = timeElement.getElementsByTagName("clouds")[0]?.getAttribute("all");
                return { rangeHours, windDirection, precipitation, humidity, clouds };
            });
            setInfoGraphic(arrayObjects);
        };
        request();
    }, []);
    const handleVariableChange = (value) => {
        setSelectedVariable(value);
    };
    return (_jsxs(Grid, { container: true, sx: { width: '100%', justifyContent: 'center' }, children: [_jsxs(Grid, { item: true, xs: 12, sx: { textAlign: 'center', marginBottom: 3 }, children: [_jsx("h1", { style: { whiteSpace: 'pre-line' }, children: "Clima en Guayaquil" }), _jsx("h2", { children: "Condiciones Actuales " }), _jsxs(Grid, { container: true, spacing: 2, justifyContent: "center", children: [_jsx(Grid, { sm: 4, md: 3, lg: 3, xl: 3, sx: { paddingY: 2, paddingX: 2, display: 'flex', justifyContent: 'center', zIndex: 1 }, component: "div", children: _jsx(Summary, {}) }), _jsx(Grid, { sm: 4, md: 3, lg: 3, xl: 3, sx: { paddingY: 2, paddingX: 2, display: 'flex', justifyContent: 'center', zIndex: 1 }, component: "div", children: _jsx(PastelGrafico, { graficos: infoGraphic }) })] }), _jsx("h2", { style: { whiteSpace: 'pre-line' }, children: "DETELLES DE UBICACION" })] }), _jsxs(Grid, { container: true, spacing: 5, children: [indicators
                        .map((indicator, idx) => (_jsx(Grid, { size: { xs: 12, /*md*/ xl: 3 }, children: _jsx(IndicatorWeather, { title: indicator["title"], subtitle: indicator["subtitle"], value: indicator["value"] }) }, idx))), _jsxs(Grid, { size: { xs: 12, xl: 12 }, justifyContent: "center", children: [_jsx("h2", { children: "TENDENCIAS CLIMATICAS" }), _jsx(ControlWeather, { onVariableChange: handleVariableChange }), "   ", _jsx(LineChartWeather, { selectedVariable: selectedVariable, graficos: infoGraphic }), " "] }), _jsxs(Grid, { size: { xs: 12, xl: 12 }, children: [_jsx("h2", { children: "TABLA DE DATOS METEOROLOGICOS" }), _jsx(TableWeather, { itemsIn: items })] })] })] }));
}
export default App;
