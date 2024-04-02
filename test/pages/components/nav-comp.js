class NavComponent {

    get linksNavMenu(){
        return $('.nav-menu-list').$$('li[class*=nav-menu]');
    }

    get firstNavMenuList(){
        return $('.nav-menu-list');
    }
}

export default new NavComponent();