//crear paleta decolores ramdom
//las paletas de colores son de  0-9 A-F

function palet() {
    let letras = '0123456789ABCDEF'.split(''); //separa las letras
    let color1 = '#'; //le añade el signo
    let color2 = '#'; //le añade el signo
    let color3 = '#'; //le añade el signo
    let color4 = '#'; //le añade el signo
    let color5 = '#'; //le añade el signo
    //ramdom decolores
    //paleta1
    for (let i = 0; i < 6; i++) {
        //floor redondea hacia abajo
        //ramdom aleatorio por la cantidad de elementos de la variable letras 
        //se divide a la mitad y se le sumapara tonosclaros
        color1 += letras[Math.floor(Math.random() * 16/2+8)];
        color2 += letras[Math.floor(Math.random() * 16/2+8)];
        color3 += letras[Math.floor(Math.random() * 16/2+8)];
        color4 += letras[Math.floor(Math.random() * 16/2+8)];
        color5 += letras[Math.floor(Math.random() * 16/2+8)];
    }
    //llamo del html el div donde ira el color
    let colores1 = document.getElementById('paleta1');
    let colores2 = document.getElementById('paleta2');
    let colores3 = document.getElementById('paleta3');
    let colores4 = document.getElementById('paleta4');
    let colores5 = document.getElementById('paleta5');

    //le cambio el color 
    colores1.setAttribute("style", ` background-color:${color1};`);
    colores2.setAttribute("style", ` background-color:${color2};`);
    colores3.setAttribute("style", ` background-color:${color3};`);
    colores4.setAttribute("style", ` background-color:${color4};`);
    colores5.setAttribute("style", ` background-color:${color5};`);

    //llamo del html el div de texto 
    let codigo1 = document.getElementById('codigo1');
    let codigo2 = document.getElementById('codigo2');
    let codigo3 = document.getElementById('codigo3');
    let codigo4 = document.getElementById('codigo4');
    let codigo5 = document.getElementById('codigo5');

    codigo1.innerHTML = ` <p id="codigo1">${color1} </p>`;
    codigo2.innerHTML = ` <p id="codigo1">${color2} </p>`;
    codigo3.innerHTML = ` <p id="codigo1">${color3} </p>`;
    codigo4.innerHTML = ` <p id="codigo1">${color4} </p>`;
    codigo5.innerHTML = ` <p id="codigo1">${color5} </p>`;

    //nota se usa = para reemplazar / si quieres q se añadan abajo seria +=

}


function palet2() {
    let letras = '0123456789ABCDEF'.split(''); //separa las letras
    let color1 = '#'; //le añade el signo
    let color2 = '#'; //le añade el signo
    let color3 = '#'; //le añade el signo
    let color4 = '#'; //le añade el signo
    let color5 = '#'; //le añade el signo
    //ramdom decolores
    //paleta1
    for (let i = 0; i < 6; i++) {
        //floor redondea hacia abajo
        //ramdom aleatorio por la cantidad de elementos de la variable letras 
        color1 += letras[Math.floor(Math.random() * 16)];
        color2 += letras[Math.floor(Math.random() * 16)];
        color3 += letras[Math.floor(Math.random() * 16)];
        color4 += letras[Math.floor(Math.random() * 16)];
        color5 += letras[Math.floor(Math.random() * 16)];
    }
    //llamo del html el div donde ira el color
    let colores1 = document.getElementById('paleta1');
    let colores2 = document.getElementById('paleta2');
    let colores3 = document.getElementById('paleta3');
    let colores4 = document.getElementById('paleta4');
    let colores5 = document.getElementById('paleta5');

    //le cambio el color 
    colores1.setAttribute("style", ` background-color:${color1};`);
    colores2.setAttribute("style", ` background-color:${color2};`);
    colores3.setAttribute("style", ` background-color:${color3};`);
    colores4.setAttribute("style", ` background-color:${color4};`);
    colores5.setAttribute("style", ` background-color:${color5};`);

    //llamo del html el div de texto 
    let codigo1 = document.getElementById('codigo1');
    let codigo2 = document.getElementById('codigo2');
    let codigo3 = document.getElementById('codigo3');
    let codigo4 = document.getElementById('codigo4');
    let codigo5 = document.getElementById('codigo5');

    codigo1.innerHTML = ` <p id="codigo1">${color1} </p>`;
    codigo2.innerHTML = ` <p id="codigo1">${color2} </p>`;
    codigo3.innerHTML = ` <p id="codigo1">${color3} </p>`;
    codigo4.innerHTML = ` <p id="codigo1">${color4} </p>`;
    codigo5.innerHTML = ` <p id="codigo1">${color5} </p>`;

    //nota se usa = para reemplazar / si quieres q se añadan abajo seria +=

}