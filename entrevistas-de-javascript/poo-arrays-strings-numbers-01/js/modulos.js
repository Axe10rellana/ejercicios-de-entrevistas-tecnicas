/*
  Ejericicios
  27) Programa una clase llamada Pelicula.
  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
      7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
      instancias de la clase de forma automatizada e imprime la ficha técnica 
      de cada película.

  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

//ejecucion del codigo
//ejercicio 27
class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  //getters y setters
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  //metodos basicos
  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es una cadena de texto`
      );
    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (!valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`
      );
    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresador, No es un numero`
      );
    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}" ingresado, No es un arreglo`
      );

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor "${cadena}" ingresado, No es una cadena de texto`
        );
    }
    return true;
  }

  //metodos
  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`
        );
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `El año de estreno ${estreno} no es valido, debe ser un numero entero de 4 digitos`
        );
    }
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (const genero of generos) {
        //console.info(Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(`La calificacion tiene que estar en un rango de 0 a 10`)
        : (this.calificacion = calificacion.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info(
      `Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}\nAño: ${this.estreno}\nPais: ${this.pais}\nGeneros: ${this.generos}\nCalificacion: ${this.calificacion}\nIMDB id: ${this.id}"`
    );
  }
}

/* const peli = new Pelicula({
  id: "tt1234567",
  titulo: "star wars",
  director: "josh lucas",
  estreno: 2346,
  pais: ["argentina"],
  generos: ["Comedy"],
  calificacion: 8.0,
}); */
//peli.fichaTecnica();

const misPelis = [
  {
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1,
  },
  {
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
