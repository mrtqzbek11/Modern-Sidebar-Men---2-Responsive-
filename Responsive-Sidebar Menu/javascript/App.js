// close

{
    // from mert özbek :)
}

const menuButton = document.querySelector('.close-btn');
const userInfo = document.querySelector('.user-name-email');
const sidebarMenu = document.querySelector('.sidebar-menu-all');
const listItemText = document.querySelectorAll('li span');
const Footer = document.querySelector('footer');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open-menu');
    userInfo.classList.toggle('close-text');
    sidebarMenu.classList.toggle('close-menu');
    listItemText.forEach(e => e.classList.toggle('close-text'));
    Footer.classList.toggle('close-text');
});
