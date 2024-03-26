describe('Navigation Menu', () => {
    // Multiple Elements
    it('Get Text of Menu Items & Assert Them', async () => {
        //Open URL
        browser.url('https://www.mercadolibre.com.mx/');
        //browser.url('/');  //For Base URL

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

        //const navLinks = await $('.nav-menu-list').$$('li[class*=nav-menu-item]');
        const navLinks = await $('.nav-menu-list').$$('li[class=nav-menu-item]');
        //const navLinks = await $$('a[class=nav-menu-item-link]');
        
        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }
        
        await expect(expectedLinks).toEqual(actualLinks);
    });
});