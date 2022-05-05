const { inquirerOptions, pauseOption, readInput } = require("./helpers/inquirer");
const Searcher = require("./models/searcher");
require('colors');

const main = async () =>{

    const searcher = new Searcher();
    let option;

    do {

        option = await inquirerOptions();

        switch (option) {
            case 1:
                //Mostrar mensaje
                const place = await readInput("Lugar: ");
                searcher.searchCountry(place);
                //Buscar lugares

                //Seleccionar lugar

                //clima

                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ');
                console.log('Lat: ');
                console.log('Long: ');
                console.log('Temperaturas: ');
                console.log('Mínima: ');
                console.log('Máxima: ');
            break;
        }
        if(option !== 0) await pauseOption();

    } while (option !== 0);



}
main();