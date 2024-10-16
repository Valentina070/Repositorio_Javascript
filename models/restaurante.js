export class Restaurante {
    constructor(nombre = "", especialidad = "", capacidad = 50, ubicacion = "", contacto = "") {
      this.nombre = nombre;
      this.especialidad = especialidad;
      this.capacidad = capacidad;
      this.ubicacion = ubicacion;
      this.contacto = contacto;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getEspecialidad() {
      return this.especialidad;
    }
  
    setEspecialidad(especialidad) {
      this.especialidad = especialidad;
    }
  
    getCapacidad() {
      return this.capacidad;
    }
  
    setCapacidad(capacidad) {
      this.capacidad = capacidad;
    }
  
    getUbicacion() {
      return this.ubicacion;
    }
  
    setUbicacion(ubicacion) {
      this.ubicacion = ubicacion;
    }
  
    getContacto() {
      return this.contacto;
    }
  
    setContacto(contacto) {
      this.contacto = contacto;
    }
  
    mostrarDatos() {
      console.log("Información de restaurante");
      console.log("Nombre: " + this.nombre);
      console.log("Especialidad: " + this.especialidad);
      console.log("Capacidad: " + this.capacidad);
      console.log("Ubicación: " + this.ubicacion);
      console.log("Contacto: " + this.contacto);
    }
  }
  