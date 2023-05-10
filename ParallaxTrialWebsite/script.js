let text = document.getElementById('text');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');
let leaf4 = document.getElementById('leaf4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    text.style.marginTop = value * 2.5 + 'px';
    
    cloud1.style.left = value * -1.5 + 'px';
    cloud3.style.left = value * 1.5 + 'px';
    cloud2.style.left = value * 1.5 + 'px';
    leaf5.style.top = value * -1.5 + 'px';
    leaf5.style.left = value * 1.5 + 'px';
    leaf4.style.left = value * -1.5 + 'px';
    leaf4.style.top = value * -1.5 + 'px';
    });