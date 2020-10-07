import React, {useState ,useEffect} from 'react';
import './App.css';
import {Map} from 'ol';
import {tileLayer, vectorLayer, view, source} from './map';



import List from './components/List/List'

const App = () => {

  const [features, setFeatures] = useState([]);
  
  const [testy, setTesty] = useState(1);

  const [statek, setStatek] = useState([]);

  useEffect(() => {

    const map = new Map({
      layers: [tileLayer, vectorLayer],
      view: view,
      target: 'map'
    });

    
    //setFeatures(2);
    //setFeatures(source.getFeatures());

    setTesty(5);

    let i = 0;
    const prv = features;
    source.getFeatures().map(item => {
      item.setId(i);
      i++;
      setFeatures([...features, "abc"]);
      console.log(features);
    })
      
  },[])
  
  const test = () => {
    setFeatures([...features, "abc"]);
    setStatek([...statek, "again"]);
    console.log(features);
    view.animate({
      zoom: 14,
    });
    console.log(statek);
  }

  return (
    <React.Fragment>
      <div id="map"></div>
    <button onClick={() => test()}>Test</button>
      <List id={testy}/>
    <p>T {testy}</p>
    <button onClick={() => setStatek([...statek, "again"])}>Click me</button>
    </React.Fragment>
  );
}

export default App;
