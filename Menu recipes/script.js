let menuBar = document.querySelector('#toggleBar')
menuBar.addEventListener('click', toggleMenu)

function toggleMenu(){
    let menu = document.querySelector('#menu-list').style.display='none';
    if(menu == (document.querySelector('#menu-list').style.display='none')){
        document.querySelector('#menu-list').style.display='block';
    }
}

let btn_hider = document.querySelector('#hide-btn')
btn_hider.addEventListener('click', hideMenu)

function hideMenu(){
    let menu = document.querySelector('#menu-list').style.display='block';
if(menu == (document.querySelector('#menu-list').style.display='block')){
    document.querySelector('#menu-list').style.display='none';
}
}