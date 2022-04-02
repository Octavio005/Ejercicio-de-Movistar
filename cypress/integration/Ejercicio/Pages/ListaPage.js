class ListaPage {

    clickearEnCelularA52 = () => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.celularA52).click();
        })
    }

    clickearFiltroPrecio = () => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.selectFiltros).click();
            cy.get(locators.preciosFiltro).click();
        })
    }

    clickearFiltroAlmacenamiento = () => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.selectFiltros).click();
            cy.get(locators.almacenamientoFiltro).click({force: true});
        })
    }

    validarCantidadDeEquiposObtenidos = () => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.elementosVisibles).each((item, index, list) => {
                cy.log("Elementos obtenidos: " + list.length);
            });
        })
    }

    ingresarAlEquipoDeLista = (numero) => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.elementosVisibles).eq(numero-1).click();
        });
    }
}

export default new ListaPage;