const arregloComentarios = [
    new Comentario('Irving Gregorio', 'Lopez Torres','Buena Pagina'),
    new Comentario('Sheila','Montero Prieto','Buen diseño')      
]

function mostrarComentarios(){
    let texto = ''
    for(let item of arregloComentarios){
        texto += `<li> </br> ${item.nombre} ${item.apellido} </br> ${item.comentario2}</li>`
    }
    document.getElementById('comentarios').innerHTML = texto
}

function agregarComentario(){
    const formulario = document.forms["formulario"]
    const nombre = formulario["nombre"]
    const apellido = formulario["apellido"]
    const comentario2 = formulario["comentario2"]

    if(nombre.value == "" || apellido.value == "" || comentario2.value == ""){
        alert("Rellena todos los campos")
    }else{
    const objComentario = new Comentario(nombre.value,apellido.value,comentario2.value)
    arregloComentarios.push(objComentario)
    alert("Gracias por tu Comentario!!!")
    mostrarComentarios()
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("comentario2").value = ""    
    }    
}