function menuShow() { 

    let mobileMenu = document.querySelector(".mobile-menu");
 
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
  
      document.querySelector(".icon").src = "./menu_white_36dp.svg"
    } else {
      mobileMenu.classList.add("open")
      document.querySelector(".icon").src = "./close_white_36dp.svg"
    }
}
