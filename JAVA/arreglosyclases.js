
//padre
class rbd {
    constructor(){
        console.log("Soy mia")
    }
    television(){
        return "TNT";
    }


}

//hija
class roberta extends rbd{
    constructor(){
        super();
        console.log("Soy Roberta")
    }

    numerocanal(){
        return "54";
    }
}

const robertita= new roberta();
console.log(robertita.television() );
console.log(robertita.numerocanal());

const amigos={
    nombre1:"daniela",
    nombre2:"carlos",
    nombre3: "Victor",
    //arreglo [] ,{}
    celularesqueposee:[{
        celular1:"xiamo",
        celular2: "Samsung",
        celular3:"Samsung"
    
    },{
        cel1:"note 9 s",
        cel2:"A31",
        cel3:"03s"
    
    }]
    
    }
    //se mete en el objeto luego el arreglo [] se pone la posicion dependiendo de lo que quiere
    //console.log(amigos.celularesqueposee[1].cel1)
    console.log(amigos.nombre1 + ' - ' +  amigos.celularesqueposee[0].celular1+" - "+ amigos.celularesqueposee[1].cel1 +' - '+ amigos.nombre2 + ' - ' +  amigos.celularesqueposee[0].celular2+" - "+ amigos.celularesqueposee[1].cel2 + ' - '+ amigos.nombre3 + ' - ' +  amigos.celularesqueposee[0].celular3+" - "+ amigos.celularesqueposee[1].cel3)