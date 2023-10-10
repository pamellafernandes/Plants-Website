const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
   
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);

        if(openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content');

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }

}