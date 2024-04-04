// Practice E-Commerce Site – SDET Unicorns
// https://practice.sdetunicorns.com/

//import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

describe('Home', () => {
    //Before Hook
    before(async() => {
       //await HomePage.open(); //get URL from class
       console.log('THIS COULD BE USED FOR TEST SETUP')
    })
    //Before Each Hook
    beforeEach(async() => {
        //await HomePage.open(); //get URL from class
        console.log('THIS RUNS BEFORE EACH TEST')
    })
    //After Hook
    after(async() => {
        
        console.log('THIS COULD BE USED FOR TEST CLEAN UP')
    })
    //After Each Hook
    afterEach(async() => {
        
        console.log('THIS RUNS AFTER EACH TEST')
    })
    // Pass Test 
    it('Open URL & assert Title',async () => {
        //Allure add severity
        allureReporter.addSeverity('minor')
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');
        
        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

//Fail Test
    it('Open URL & assert Title',async () => {
        //Allure add severity
        allureReporter.addSeverity('minor')
        //Open URL
        await browser.url('https://open.spotify.com/');
        //Assert Title
        //await expect(browser).toHaveTitle('Spotify - Web Player: Music for everyone');
        //Failed Sentence
        await expect(browser).toHaveTitle('Spotify - Web Player: Music for No one');

    });


//Find URL https://www.mercadolibre.com.mx/
    it('Open Search & assert URL',async () => {
        //Allure add severity
        allureReporter.addSeverity('mayor')
        //Open Search Page
        await browser.url('https://open.spotify.com/search');

        //Assert Title
        await expect(browser).toHaveUrl('https://open.spotify.com/search');

    });


//Find Element

    it('Click Cart Button & assert URL',async () => {
        //Allure add severity
        allureReporter.addSeverity('critical')
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

//Find Header Element and Assert Text

    it('Find Header Element & Assert Text',async () => {
        //Open Home Page
        await browser.url('https://www.mercadolibre.com.mx/');
        //await HomePage.open(); //get URL from class
        //Find Heading element
        const headingElement = await $('.ui-recommendations-title h2');

        //Get Text
        //const headingText = await headingElement.getText(); //For text manipulation

        //Assert text
        //await expect(headingText).toEqual('Oferta del día')
        await expect(headingElement).toHaveText('Oferta del día')

    });
});

