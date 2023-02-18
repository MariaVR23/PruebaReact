
import imagen0 from "./images/rey_atanagildo.png"
import imagen1 from "./images/rey_ervigio.png"
import imagen2 from "./images/rey_leogivildo.png"
import './App.css';


function App() {
  let nombres=["Atanagildo.png","Ervigio.png","Leogivildo.png"];
  let caja=<div>Nombre etiqueta </div>;
  return (
    <div className="contenedor">
      <div className="caja">
          <img src={imagen0} className="im"/>
         <div className="nomb">{nombres[0]}</div>
      </div>
      <div className="caja">
          <img src={imagen1} className="im"/>
         <div className="nomb">{nombres[1]}</div>
      </div>
      <div className="caja">
          <img src={imagen2} className="im"/>
         <div className="nomb">{nombres[2]}</div>
      </div>
    </div>
    
  );
}

export default App;
