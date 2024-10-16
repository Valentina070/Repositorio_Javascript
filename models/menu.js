export class Menu {
    constructor(nombre = "", tipo = "", precio = 0.0) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.precio = precio;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getTipo() {
      return this.tipo;
    }
  
    setTipo(tipo) {
      this.tipo = tipo;
    }
  
    getPrecio() {
      return this.precio;
    }
  
    setPrecio(precio) {
      this.precio = precio;
    }
  
    mostrarDatos() {
      console.log("Información de menú");
      console.log("Nombre: " + this.nombre);
      console.log("Tipo: " + this.tipo);
      console.log("Precio: " + this.precio);
    }
  }
  