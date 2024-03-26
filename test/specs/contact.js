describe('Contact', () => {
    
    it('Fill Input Fields, Submit Form and Assert Message', async () => {
        await browser.url("/contact")
        //*****Fill out Input Fields*****//
        //addValue - add text into the input file
        //setValue - clearValue -> addValue
        await $('.contact-name input').addValue('Test Name');
        await $('.contact-email input').addValue('test@mail.com');
        await $('.contact-phone input').addValue('123456789');
        await $('.contact-message textarea').addValue('Test Message');
        await $('button[type=submit]').click();
        //Assert Message
        const successAlert = $("[role='alert']");
        await expect(successAlert).toHaveTextContaining('Thanks for contacting us!');
    });
});

