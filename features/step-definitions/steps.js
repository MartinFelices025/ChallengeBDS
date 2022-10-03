const { Given, When, Then } = require('@wdio/cucumber-framework');

const EbayPage = require('../pageobjects/ebay.page');
const ResultPage = require('../pageobjects/result.page');


Given(/^que el usuario ingresa a la página de Ebay$/, async () => {
    await EbayPage.open();
});

When(/^busca por la barra de búsqueda el artículo (.+)$/, async (articulo) => {
    await EbayPage.ingresarArticulo(articulo);
   
});

When(/^hace click en la lupa$/, async () => {
   await EbayPage.buscar();

});

Then(/^comprueba el resultado de la búsqueda$/, async () => {
    await expect(ResultPage.resultadoBusqueda).toBeExisting();
});

