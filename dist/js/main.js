function menuFunctionality()
{
    const menuBtn       = document.querySelector(".menu-btn");
    const menu          = document.querySelector(".menu");    
    const menuNav       = document.querySelector(".menu-nav");
    const menuBranding  = document.querySelector(".menu-branding");

    const navItems      = document.querySelectorAll(".nav-item");

    //Initial state of the menu
    let showMenu = false;

    /**
     * menuButton functionality
     * 
     * If the showMenu is false, we add specified classes to necessary
     * elements and exit the function. Otherwise we remove the classes
     * from the elements.
     */
    menuBtn.addEventListener("click", function()
    {
        if(!showMenu)
        {
            addClasses();
            showMenu = true;
            return;
        }
        removeClasses();
        showMenu = false;
    });

    function addClasses()
    {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(navItem => navItem.classList.add("show"));
    }

    function removeClasses()
    {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(navItem => navItem.classList.remove("show"));
    }
    findCurrentYear();
}

/**
 * Automatically adding the current year
 */
function findCurrentYear()
{
    const copyrightElement = document.getElementById("main-footer");
    if(copyrightElement)
    {
        copyrightElement.textContent += new Date().getFullYear(); 
    }
}


menuFunctionality();