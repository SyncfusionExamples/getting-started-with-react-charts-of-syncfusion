import React from 'react';
import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, Legend,
DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';
import { salseData } from './data';
import './App.css';
function App() {
  return (
   <ChartComponent primaryXAxis={{valueType: "Category", title:"Month"}} title="Sales Analysis"
   primaryYAxis={{title:"Sales"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
     <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective dataSource={salseData} xName="month" yName="sales" type="Line" name="Sales" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
  );
}

export default App;
