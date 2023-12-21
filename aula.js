// Aula de classes e objetos
class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    assar (){
        console.log("bolo assando de " + this.saborDaMassa)
    }
}

// Acima temos a classe (Obs: Para declarar um função dentro da classe não precisamos do comando function*)

let  boloDeFesta = new formaDeBolo("chocolate", "nutella")
boloDeFesta.escrever()
let boloPremium = new formaDeBolo("baunilha", "coco")
boloPremium.assar()
let boloDaVovo = new formaDeBolo("amor", "carinho")
boloDaVovo.escrever()