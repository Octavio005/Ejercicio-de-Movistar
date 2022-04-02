class CelularPage {

    validar12Cuotas = () => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.texto12Cuotas).contains('12 cuotas');
        })
    }

    abrirOpcionesFinanciacion = () => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.opcionesFinanciacion).click();
        })
    }

    seleccionarCredicoopVisa = () => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.bancoEmisor).select('Credicoop');
            cy.get(locators.tarjeta).select('Visa')
        })
    }

    validarQueNoExistan60Cuotas = () => {        
        let hay60Cuotas = false;
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.elementosCuotas).each((item, index, list) => {
                let esCuota = validarCuota(item.text());
                if(esCuota){
                    if(item.text() == '60'){
                        hay60Cuotas = true;
                    }
                }
            });
        }).then(() => {
            expect(hay60Cuotas).to.be.false;
            cy.log('El modelo no permite 60 cuotas con el banco Credicoop y la tarjeta Visa')
        });
    }

    clickEnContenidoCaja = () => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.contenidoCaja).click();
        });
    }

    verificarExistenciaCargador = () => {
        let tieneCargador = false;
        cy.get('#box-content li').each((item, index, list) => {
            let hayCargador = verificarCargador(item.text());
            if(hayCargador){
                tieneCargador = true;
            }
        }).then(() => {
            expect(tieneCargador).to.be.true;
        });
    }
}

function validarCuota(item){
    if(!item.includes('%') && (!item.includes('Online'))){
        return true;
    }
    return false;
}

function verificarCargador(elemento){
    if(elemento == 'Cargador'){
        return true;
    }
    return false;
}

export default new CelularPage;