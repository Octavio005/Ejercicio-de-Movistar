class Index {
    buscar = (elemento) => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.botonBusqueda).click({force: true});
            cy.get(locators.campoBusqueda).type(elemento);
            cy.get(locators.botonBusqueda).click();
        })
    }
}

export default new Index();