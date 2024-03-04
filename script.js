/*Practicaremos cómo crear gráficas con las librerías vistas en clase
Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
En el eje X el nombre de la película
En el eje Y año de publicación
API ENDPOINT --> https://swapi.dev/api/films/
Para pintar todo esto usaremos Chartist Link a la docu: Chartist*/


fetch('https://swapi.dev/api/films/')//hago un fetch con la url para hacer la solicitud a la API
    .then(function (response) {
        return response.json();//después convierte la respuesta en formato json
    })
    .then(data => {
        let year = [];//creamos un array vacío para ir pusheando los datos obtenidos de años en los que se hicieron las películas
        let titles = [];//creamos un array vacío para ir pusheando los datos obtenidos de titulos de las películas
        let starW = data.results;//metemos en una variable el acceso al array de objetos results
        for (let i = 0; i < starW.length; i++) {//iteramos sobre el array de la propiedad results
            // console.log(starW[i]);
            titles.push(starW[i].title);//pusheamos a la variable title los títulos de las pelis
            year.push(starW[i].release_date.slice(0, 4))//pusheamos a la variable year las fechas de las pelis y cortamos los cuatros primeros números para quedarnos solo con los años
        }
        console.log(year);

        new Chartist.Line('.nameYear', {//pintamos la gráfica y le pasamos por parámetro la clase del div donde vamos a pintar la gráfica

            labels: titles, //metemos el array de títulos de las pelis
            series: [year] //metemos el array de años de las pelis
        }, {
            fullWidth: true,
            chartPadding: {
                right: 40,
                bottom: 40
            }
        });
    });

/* Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver
En el eje X el nombre del personaje
En el eje Y el número de películas en las que ha participado.
API ENDPOINT --> https://swapi.dev/api/people/ */



fetch('https://swapi.dev/api/people/')//hago un fetch con la url para hacer la solicitud a la API
    .then(function (response) {
        return response.json();//después convierte la respuesta en formato json
    })
    .then(data => {

        let personajes = [];//creamos un array vacío para ir pusheando los datos obtenidos de los personajes de las pelis
        let movies = [];//creamos un array vacío para ir pusheando los datos obtenidos de las pelis en las que salen los personajes
        let starM = data.results;//metemos en una variable el acceso al array de objetos results
        for (let i = 0; i < starM.length; i++) {//iteramos sobre el array de la propiedad results
            // console.log(starW[i]);
            personajes.push(starM[i].name);//pusheamos la variable de los personajes con los results
            movies.push(starM[i].films.length)//pusheamos a la variable movies las peliculas en las que salen los personajes
        }
        console.log();

        new Chartist.Line('.moviesName', {//pintamos la gráfica y le pasamos por parámetro la clase del div donde vamos a pintar la gráfica


            labels: personajes,//metemos el array de los personajes
            series: [movies]//metemos el array de peliculas en las que salen los personajes
        }, {
            fullWidth: true,
            high: 10,
            chartPadding: {
                right: 40,
                bottom: 40
            }
        });
    });




