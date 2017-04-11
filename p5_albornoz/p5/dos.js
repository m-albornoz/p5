var ingredientes = [
  "Pan con Queso",
  "Pan Solo",
  "Pan con Tomate",
  "Pan con Quesillo",
  "Pan con Huevo",
  "Pan con Mermelada",
  "Pan con Mantequilla",
  "Pan con Palta",
  "Otros",
]

var panes = [6,6,7,5,6,8,5,11,6]

//movies.push("Matrix");
//oscars.push(4);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('tiposdepanes');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(10,35,69);
  noStroke ();
  for(var x = 0; x <= ingredientes.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(13,255,24,150);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    textSize((panes[x]*3));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    rect((height/1.8),  ((height/(ingredientes.length+1.5))*(x+1)), panes[x]*30, 26);
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(ingredientes[x],((height/7)+12) , ((height/(ingredientes.length+1.2))*(x+1)),((windowWidth/2)-50),100);
  }
}
