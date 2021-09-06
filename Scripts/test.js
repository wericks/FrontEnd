//Utilizando options arguments com a função locale para internacionalizar as datas e numeros
const count = 21314.98;
const date = new Date("2021-09-05");

function log(locale) {
    console.log(
        `${new Intl.DateTimeFormat(locale).format(date)} -> ${new Intl.NumberFormat(locale).format(count)}`
    );
}

log("pt-BR");

log("en-US")

log("de-DE");