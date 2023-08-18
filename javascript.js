
const palabras = [
  'floricultura',   // 0
  'apicultura',   // 1
  'estrabismo',      // 2
  'cordura',   // 3
  'navegar',      // 4
  'cloruro',     // 5
  'caballo',    // 6
  'tormenta',   // 7
  'terremoto',  // 8
  'electricidad', // 9
  'naranja',    // 10
  'gallina',    // 11
  'tartamudo',  // 12
  'asteroide',   // 13
  'harina',     // 14
  'abrigo',     // 15
  'esmeralda',  // 16
  'limonada',   // 17
  'multiplicar', // 18
  'tsunami',    // 19
  'hipódromo',   //20
  'lactosa',     //21
  'amperio',     //22
  'Aristóteles',   //23
  'estrecho',      //24
  'aceleración',    //25
  'concierto',     //26
  'electrolito',     //27
  'discípulo',       //28
  'favoritismo',     //29
  'pentatlón',         //30
  'insípido',        //31
  'kilómetro',        //32
  'alcohol',          //33
  'satisfecho',     //34
  'Siberia',        //35
  'Ontario',        //36
  'cántaro',        //37
  'metano',         //38 
  'jocote',         //39 
  'pimienta',       //40  
  'Júpiter',        //41 
  'Andrómeda',      //42
  'supernova',      //43
  'gastronomía',    //44
  'coordenadas',    //45
  'Apalaches',      //46
  'geometría',      //47
  'infantería',     //48
  'clorofila',       //49
  'lampiño',        //50
  'Mongolia',       //51
  'Asunción',       //52
  'Danubio',        //53
  'Támesis',        //54
  'Vesubio',        //55
  'Everest',        //56
  'Elizabeth',      //57
  'bubónica',       //58
  'guarapo',        //59
  'metamorfosis',   //60
  'estetoscopio',   //61
  'solsticio',      //62
  'plomada',        //63
  'fotosíntesis',   //64
  'potasio',        //65
  'potenciómetro',  //66
  'potable',        //67
  'anfibio',         //68
  'bicarbonato',    //69
  'Florida',        //70
  'tatarabuelo',     //71
  'incendio',       //72
  'empujón',        //73
  'voltio',         //74
  'trapiche',       //75
  'bálsamo',        //76
  'balanza',        //77
  'panacea',        //78
  'corazón',        //79
  'Antártida',      //80
  'capataz',        //81
];

const pistas = [
  'Cultivo de las flores',      // 0
  'Arte de criar abejas',       // 1
  'Defecto de la vista',       // 2
  'Prudencia, sensatez, juicio',     // 3
  'Viajar en una nave',             // 4
  'Combinación del cloro con un metal',       // 5
  'Cuadrúpedo ungulado',        // 6
  'Lluvia y truenos',           // 7
  'Frecuente en costas del Pacífico', // 8
  'Genera luz y fuerza',        // 9
  'Cítrico',                    // 10
  'Ave de corral',              // 11
  'Habla entrecortado',         // 12
  'Cuerpo celeste rocoso',       // 13
  'Para hacer pan',             // 14
  'Para el frío',               // 15
  'Piedra preciosa',            // 16
  'Refresco',                   // 17
  'Tantas veces un número',     // 18
  'Maremoto',                  // 19
  'Lugar para carrera de caballos',  //20
  'Azúcar contenido en la leche',  //21
  'Unidad de intensidad de corriente', //22
  'Filósofo de la antigua Grecia',   //23
  'De poca anchura',            //24
  'Incremento de velocidad',     //25
  'Presentación musical',        //26
  'Solución salina conductora',    //27
  'Alumno',                      //28
  'Parcialidad',                 //29
  'Atletismo de cinco pruebas',   //30
  'Falto de sabor',                //31
  'Medida de distancia',           //32
  'Producto de la fermentación',   //33
  'Complacido, contento',         //34
  'Región extensa de Rusia',       //35
  'Provincia de Canadá',          //36
  'Vasija grande de abertura angosta',  //37
  'Presente en el gas natural',   //38
  'Fruta exótica de Centroamérica', //39
  'Condimento picante',       //40
  'Planeta grande gaseoso',   //41
  'Galaxia cercana',          //42
  'Gran explosión cósmica',   //43
  'Arte de preparar buena comida',  //44
  'Longitud y latitud',       //45
  'Cadena de montañas en EE.UU.', //46
  'Matemática de las formas',   //47
  'Tropa que combate a pie',    //48
  'Pigmento verde de los vegetales',  //49
  'Que no tiene barba',       //50
  'País del centro de Asia',  //51
  'Capital de Paraguay',        //52
  'Río de Europa',            //53
  'Río de Inglaterra',        //54
  'Volcán de Italia',         //55
  'Montaña mas alta del mundo', //56
  'Nombre de mujer en inglés',  //57
  'Antigua peste en Europa',    //58
  'Jugo de la caña de azúcar',  //59
  'Transformación de una cosa en otra', //60
  'Lo usan los médicos',        //61
  'Posición del sol dos veces al año',  //62
  'Pesa metálica, señala la vertical',  //63
  'Reacción química en las hojas',  //64
  'Metal alcalino',           //65
  'Mide diferencias de potencial',  //66
  'Se puede beber',           //67
  'Se mueve por tierra y por agua', //68
  'Sal de sodio medicinal',     //69
  'Estado del sureste EE.UU.',  //70
  'Ascendiente, cuatro generaciones', //71
  'Fuego grande que se propaga',  //72
  'Impulso dado con fuerza',      //73
  'Unidad de potencial eléctrico',  //74
  'Molino de caña de azúcar',    //75
  'Resina medicinal de cierto árbol', //76 
  'Instrumento para pesar',       //77
  'Remedio para todos los males', //78 
  'Órgano vital',                 //79
  'El continente mas frío',       //80
  'Dirige a un grupo de trabajadores' //81
];



var palabraIndex;
var palabraConGuiones;
var palabra;
var haFallado;
var contadorFallos;
var letra;
var i;


document.querySelector('#letra').focus();
palabraIndex = Math.floor(Math.random() * palabras.length)

String.prototype.replaceAt=function(index, character) {
  return this.substr(0, index) + character + 
  this.substr(index+character.length); }

function main() {  // ******************************************************* main function  

palabra = palabras[palabraIndex];

document.getElementById("pista").innerHTML = ("Pista:&nbsp&nbsp" + pistas[palabraIndex]);

palabraConGuiones = palabra.replace(/./g, "_ ");
contadorFallos = 0;

document.querySelector('#output').innerHTML = palabraConGuiones;

} // final de función main()

document.querySelector('#calcular').addEventListener('click', () => 
{
  letra = document.querySelector('#letra').value;
  haFallado = true;
  for(i in  palabra) {
      if(letra == palabra[i]) {
        haFallado = false;   
        palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);           
      }
  } 

if(haFallado) {
    contadorFallos++;    
    document.querySelector('#ahorcado').style.backgroundPosition = -(100*contadorFallos) + 'px 0';    
  }

if(contadorFallos >= 6) {        
        alert("Perdiste este juego... la palabra correcta es:    " + '"' + palabra +'"' + "\n" +  
         "Favor prueba Nueva Palabra");            
    }

if(palabraConGuiones.indexOf('_') < 0) {
      alert("¡Muy bien!...ganaste.. Vamos, juega una nueva palabra");       
    }

document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#letra').value = '';
document.querySelector('#letra').focus();

});  


function newWord() {
  if (palabraIndex < palabras.length - 1) {
    palabraIndex++
  } else {
    palabraIndex = 0;
  }  
  document.querySelector('#ahorcado').style.backgroundPosition = 0;
  document.querySelector('#letra').focus();
  main();  
}


