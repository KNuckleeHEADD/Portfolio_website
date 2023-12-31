function toggleMenu(){
    const menu = document.querySelector(".menu_link");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// dark mode

const btn = document.querySelector('#mode_toggle')
const btn2 = document.querySelector('#mode_toggle2')
const theme_icons = document.querySelectorAll('.icon')
const current_theme = localStorage.getItem("theme")

if(current_theme === "dark")
{
    setDarkMode();
}

function setDarkMode(){
    document.body.setAttribute("theme" , "dark");
    localStorage.setItem("theme" , "dark");
    theme_icons.forEach((icons) =>{
        icons.src = icons.getAttribute("src-dark");
    });
}

function setLightMode(){
    document.body.removeAttribute("theme");
    localStorage.setItem("theme" , "light");
    theme_icons.forEach((icons) =>{
        icons.src = icons.getAttribute("src-light");
    });
}

btn.addEventListener("click" , () =>{
    let current_theme = document.body.getAttribute("theme");
    // console.log("1");
    if(current_theme === "dark")
    {
        setLightMode();
    }
    else
    {
        setDarkMode();
    }
});

btn2.addEventListener("click" , () =>{
    let current_theme = document.body.getAttribute("theme");
    // console.log("1");
    if(current_theme === "dark")
    {
        setLightMode();
    }
    else
    {
        setDarkMode();
    }
});