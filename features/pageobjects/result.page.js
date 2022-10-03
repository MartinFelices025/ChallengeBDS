

const Page = require('./page');

class ResultPage extends Page {

    get resultadoBusqueda () {
        const result= $("//*[contains(text(),'resultados')]"); 
        console.log(result.getText());
        return result;
    }
}

module.exports = new ResultPage();
