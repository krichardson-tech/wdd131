let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        logo.src = 'images/byui-logo-white.png';
        document.querySelector('h2').style.color =  'rgb(102, 179, 230)';
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.src = 'images/byui-logo-blue.webp';
        document.querySelector('h2').style.color =  'rgb(0, 94, 184';
    }
}           
                    