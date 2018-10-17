var fechaHoy = new Date();

var fecha85 = new Date();
fecha85.setDate(fecha85.getDate() + 85);

var fecha187 = new Date();
fecha187.setDate(fecha187.getDate() - 187);

fecha85.setFullYear(fecha85.getFullYear() + 2);

fecha187.setHours(fecha187.getHours() - 24);

var fechaResto = new Date(fecha85 - fecha187);

document.write(fechaResto);