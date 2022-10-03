

const Page = require('./page');

class EbayPage extends Page {

    get searchInput () {
        return $('#kw');
    }


    async ingresarArticulo (articulo) {
   
        await this.searchInput.clearValue();
        await this.searchInput.setValue(articulo);
    }   

    async buscar (){
       await  $('//*[@text="Buscar"]').click();  
      
    }

    open () {
        return super.open();
    }
}

module.exports = new EbayPage();
