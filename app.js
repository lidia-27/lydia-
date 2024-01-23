const sidebar=document.querySelector('.sidebar')
const btn =document.querySelector('button')

btn.addEventListner('click', () => {
    sidebar.classList.toggle(hide);
});