import React, {useState, useEffect} from 'react';
import { async } from 'q';
import axios from 'axios';
import Frase from './component/Frase';

function App (){

  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

      obtenerFrase(resultado.data[0]);
  }

  // consulta a una rest api
  useEffect(
    () => {
      consultarAPI()
    }, []
  );

  console.log(frase)



  return (
    <div className='contenedor'>
      <Frase
        frase={frase}
      />
      <button
        onClick={consultarAPI}
      >Generar Nueva Frase</button>
    </div>
  );

};
export default App;