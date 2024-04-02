import homePage from "../pages/home-page";

describe('Navigation Menu', () => {
    // Multiple Elements
    it('Get Text of Menu Items & Assert Them', async () => {
        
        //Open URL
        //browser.url('https://www.mercadolibre.com.mx/');
        await homePage.open();
        //browser.url('/');  //For Base URL

        //Hardcoded timeout
        //browser.pause(5000)

        //Lista de Elementos de Menu
        const expectedLinks = [
            "Categorías",
            "Ofertas",
            "Historial",
            "Supermercado",
            "Moda",
            "Mercado Play",
            "Vender",
            "Ayuda",
        ];

        //Lista para comparación
        const actualLinks = [];

        //Wait Until
        await browser.waitUntil(async function(){
            //const firstText = await $('.nav-menu-list a[class*=nav-menu]').getText();
            const firstText = await homePage.NavComponent.firstNavMenuList.getText(); //with class structure
            return firstText === "Categorías";
        }, {
            timeoutMsg: "Could not verify the text"
        });

        //const navLinks = await $('.nav-menu-list').$$('li[class*=nav-menu-item]');
        const navLinks = await homePage.NavComponent.linksNavMenu; //with class structure
        //const navLinks = await $('.nav-menu-list').$$('a[class*=nav-menu]');
        //const navLinks = await $$('a[class=nav-menu-item-link]').waitForDisplayed(); //Wait For
        
        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }
        
        await expect(actualLinks).toEqual(expectedLinks);
    });
});