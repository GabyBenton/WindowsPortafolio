// #item-1



/*---------Codigo para traer el menu de los proyectos
y cuando se presione el link va a mostrar el contenido 
de ese proyecto */
$(document).ready(function(){
    $('nav.tabs a:first').addClass('active');
    $('.info article').hide();
    $('.info article:first').show();

    $('nav.tabs a').click(function(){
        $('nav.tabs a').removeClass('active');
        $(this).addClass('active');
        $('.info article').hide();

        var activeTab = $(this).attr('href');
        // console.log(activeTab);
        $(activeTab).show();
        
        return false;
    });
});

/*-----Funcion carpetas-----*/

$(document).ready(function(){

/*-------------ESTO ES SUPER IMPORTANTEEEEEEEE--------------- */
/*-------Esta bien bonita la funcion--------- */
/*Así podemos tomar cada uno de los elementos que nos 
regresa el .query, .getElements */
    var anclas = document.querySelectorAll("nav.tabs a");
    anclas.forEach(ancla => {
        // console.log(ancla);
        $(ancla).click(function(){
            var imagen = ancla.querySelector("img");
            // console.log(imagen);
            // $('nav.tabs a img');
            $(imagen).attr("src","./src/img/abierto.png");
            // console.log(imagen);
            // console.log("hola amigos soy:"+ancla);
        });
    });
});