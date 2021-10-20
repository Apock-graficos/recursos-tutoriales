function tabs(elemento){
    let el = document.getElementById(elemento);

    /* botone */
    let botone = el.querySelectorAll('.botones-tabs .tab-btn');
    botone.forEach(item => {
        item.addEventListener('click', ()=>{
            for(var i = 0, length1 = botone.length; i < length1; i++){
                botone[i].classList.remove('activo');
            }
            item.classList.add('activo');

            /* get data-id */
            let dataId = item.getAttribute('data-id');
            let tabContenedores = el.querySelectorAll('.contenedor-tabs .tab-contenido');
            for(var i = 0, length2 = tabContenedores.length; i < length2; i++){
                if (tabContenedores[i].id === dataId) {
                    tabContenedores[i].classList.add('activo');
                } else {
                    tabContenedores[i].classList.remove('activo');
                }
            }
        });
    });
}