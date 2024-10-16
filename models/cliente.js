export class Cliente {
    constructor(nombre = "", preferencias = "", edad = "", contacto = "") {
      this.nombre = nombre;
      this.preferencias = preferencias;
      this.edad = edad;
      this.contacto = contacto;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getPreferencias() {
      return this.preferencias;
    }
  
    setPreferencias(preferencias) {
      this.preferencias = preferencias;
    }
  
    getEdad() {
      return this.edad;
    }
  
    setEdad(edad) {
      this.edad = edad;
    }
  
    getContacto() {
      return this.contacto;
    }
  
    setContacto(contacto) {
      this.contacto = contacto;
    }
  
    mostrarDatos() {
      console.log("Informacion de cliente");
      console.log("Nombre: " + this.nombre);
      console.log("Preferencia: " + this.preferencias);
      console.log("Edad: " + this.edad);
      console.log("Contacto: " + this.contacto);
    }
  }
  