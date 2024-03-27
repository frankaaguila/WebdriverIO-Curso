const path = require('path');

describe('Upload Text', () => {
    
    it('Simple Upload Test', async () => {
        //Open URL
        await browser.url('https://the-internet.herokuapp.com/upload');
        
        console.log(__dirname); //C:\Users\M1FALVAREZ\Documents\Cursos\Webdriver IO\wdio-course\test\specs
        
        //Store test file path
        const filePath = path.join(__dirname, '../data/berserk.jpg');

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //set file path value into the input field
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        //assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });
});