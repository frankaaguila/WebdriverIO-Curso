// Practice E-Commerce Site – SDET Unicorns
// https://practice.sdetunicorns.com/



describe('Home', () => {
    // Pass Test
    /*
    it('Open URL & assert Title',() => {
        //Open URL
        browser.url('https://practice.sdetunicorns.com/');

        //Assert Title
        expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');

    });

//Fail Test
    it('Open URL & assert Title',async () => {
        //Open URL
        await browser.url('https://open.spotify.com/');

        //Assert Title
        await expect(browser).toHaveTitle('Spotify - Web Player: Music for everyone');
        //Failed Sentence
        //await expect(browser).toHaveTitle('Spotify - Web Player: Music for No one');

    });


//Find URL https://www.mercadolibre.com.mx/


    it('Open Search & assert URL',async () => {
        //Open Search Page
        await browser.url('https://open.spotify.com/search');

        //Assert Title
        await expect(browser).toHaveUrl('https://open.spotify.com/search');

    });


//Find Element

    it('Click Cart Button & assert URL',async () => {
        //Open Home Page
        await browser.url('https://www.amazon.com.mx');

        //Click Cart
        await $('#nav-cart.nav-a.nav-a-2.nav-progressive-attribute').click();

        //Assert Url contains text
        await expect(browser).toHaveUrlContaining('cart');

        //Back Home
        await $('#nav-logo').click();

    });


    it('Click Cart Button & assert URL',async () => {
        //Open Home Page
        await browser.url('https://www.amazon.com.mx');

        //Click Logo
        await $('#nav-logo').click();

        //Assert Url does not contains text
        await expect(browser).not.toHaveUrlContaining('cart');

    });

*/
//Find Header Element and Assert Text

    it('Find Header Element & Assert Text',async () => {
        //Open Home Page
        await browser.url('https://www.mercadolibre.com.mx/');

        //Find Heading element
        const headingElement = await $('.ui-recommendations-title h2');

        //Get Text
        const headingText = await headingElement.getText(); //For text manipulation

        //Assert text
        //await expect(headingText).toEqual('Oferta del día')
        await expect(headingElement).toHaveText('Oferta del día')

    });
});

