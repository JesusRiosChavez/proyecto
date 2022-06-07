class Comentario{
    constructor(nombre, apellido, comentario2){ //argumentos
        this._nombre = nombre // los this. representan los atributos
        this._apellido = apellido
        this._comentario2 = comentario2
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){//argumento
        this._nombre = nombre //atributo = argumento
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){//argumento
        this._apellido = apellido //atributo = argumento
    }
    get comentario2(){
        return this._comentario2
    }
    set comentario2(comentario){//argumento
        this._comentario2 = comentario2 //atributo = argumento
    }
}