var foto;
window.onload - function(){
    foto = new Foto();
}

function selectImage(){
    document.getElementById("foto-file").click();
}
function makeGrayScale(){
    foto.grayscale();
}
function makeBrighter(){
    foto.makeBright();
}
function makeDarker(){
    foto.makeDark();
}
 function makeBlur(){
     foto.applyBlurFilter();
 }
function makeEmboss(){
    applyEmbossFilter();
}
function makeSharp(){
    foto.applySharpFilter();
}
function download(){
    foto.export();
}