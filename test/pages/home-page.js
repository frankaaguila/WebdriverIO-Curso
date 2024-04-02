import NavComponent from './components/nav-comp';

class HomePage {
open(){
    return browser.url('https://www.mercadolibre.com.mx/'); //Return URL
}
/* For test page 
get btnGetStarted(){
    return $('#get-started'); //to call it: HomePage.btnGetStarted.click();
}
*/
get NavComponent(){
    return NavComponent;
}

}

export default new HomePage();

