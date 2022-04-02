import Index from '../Ejercicio/Pages/index';
import ListaPage from '../Ejercicio/Pages/ListaPage'
import CelularPage from '../Ejercicio/Pages/CelularPage'

describe('CP001', function(){
    before(function(){
        cy.viewport(1366, 768);
        cy.visit('https://tienda.movistar.com.ar/');
        cy.url().should('include', 'https://tienda.movistar.com.ar/')
    })
    it('Ingresar al sitio indicado', function(){
        Index.buscar('A52');
        cy.screenshot('CP001/Sitio principal');
    })
    it('Clickear en el primer resultado obtenido', function(){
        ListaPage.clickearEnCelularA52();
        cy.screenshot('CP001/Sitio del equipo');
    })
    it('Validar que el celular permita 12 cuotas', function(){
        CelularPage.validar12Cuotas();
    })
})

describe('CP002', function(){
    before(function(){
        cy.viewport(1366, 768);
        cy.visit('https://tienda.movistar.com.ar/');
        cy.url().should('include', 'https://tienda.movistar.com.ar/')
    })
    it('Clickear filtro precio', function(){
        ListaPage.clickearFiltroPrecio();
    })
    it('Clickear filtro almacenamiento', function(){
        ListaPage.clickearFiltroAlmacenamiento();
    })
    it('Validar cantidad de equipos obtenidos luego de los filtros', function(){
        ListaPage.validarCantidadDeEquiposObtenidos();
        cy.screenshot('CP002/Sitio luego de filtros');
    })
})

describe('CP003', function(){
    before(function(){
        cy.viewport(1366, 768);
        cy.visit('https://tienda.movistar.com.ar/');
        cy.url().should('include', 'https://tienda.movistar.com.ar/')
    })
    it('Entrar al tercer equipo de la lista', function(){
        ListaPage.ingresarAlEquipoDeLista(3);
        cy.screenshot('CP003/Tercer equipo');
    })
    it('Abrir las opciones de financiación', function(){
        CelularPage.abrirOpcionesFinanciacion();
        CelularPage.seleccionarCredicoopVisa();
        cy.screenshot('CP003/Financiacion equipo');
    })
    it('Validar que no existan 60 cuotas para banco Credicoop y tarjeta Visa', function(){
        CelularPage.validarQueNoExistan60Cuotas();
        cy.screenshot('CP003/Cuotas financiacion equipo');
    })
})

describe('CP004: Ingresar al quinto equipo de la lista y verificar que incluya cargador', function(){
    before(function(){
        cy.viewport(1366, 768);
        cy.visit('https://tienda.movistar.com.ar/');
        cy.url().should('include', 'https://tienda.movistar.com.ar/')
    })
    after(function(){
        cy.visit('https://tienda.movistar.com.ar/');
    })
    it('Entrar al quinto equipo de la lista', function(){
        ListaPage.ingresarAlEquipoDeLista(5);
        cy.screenshot('CP004/Quinto equipo');
    })
    it('Clickear la pestaña de contenido en caja', function(){
        CelularPage.clickEnContenidoCaja();
        cy.screenshot('CP004/Contenido de caja');
    })
    it('Verificar existencia del cargador', function(){
        CelularPage.verificarExistenciaCargador();
    })
})