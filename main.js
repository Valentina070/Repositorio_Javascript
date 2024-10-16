
import  { Restaurante }  from "./models/restaurante.js";
import  { Menu }  from "./models/menu.js";
import { Cliente }  from "./models/cliente.js";

function main() {
    
      const restaurante = new Restaurante(
      "Emilys",
      "Comida italiana",
      50,
      "Centro histórico de Cartagena",
      "300452817"
    );
  
    
     const cliente = new Cliente(
      "Daniela Zuñiga",
      "Pastas",
      "20",
      "3202235876"
    );
  
   
     const menu = new Menu(
      "Delicias de Italia",
      "plato fuerte",
      20.0
    );
  
    
    console.log("Código: 750241006");
    console.log("Valentina Zuñiga Vasquez");
    console.log("****************");
  
    console.log("");
    restaurante.mostrarDatos();
    console.log("");
    cliente.mostrarDatos();
    console.log("");
    menu.mostrarDatos();
  }
  

  main();
  