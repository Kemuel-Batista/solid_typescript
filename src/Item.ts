export default abstract class Item {
    category: string;
    description: string;
    price: number;

    constructor (category: string, description: string, price: number) {
        this.category = category;
        this.description = description;
        this.price = price;
    }

    //calculateTax(){
        /**
         * Suponhamos que em algum momento no nosso código queremos
         * adicionar uma nova categoria, automaticamente necessitariamos
         * adicionar mais um if para verificar a nova categoria
         * e se fossemos colocar mais um e mais um e mais um, seria mais um if
         * sempre que estamos nesse movimento, estamos quebrando o segundo principio
         * OCP -> Open/Closed Principle, devemos estar fechados para modificação
         * e abertos para extensão
         * A Ideia é que criamos algum tipo de abstração para que possamos escalar
         * o design de nosso software de uma forma mais saudavel (aberto para extensão)
        */
        // if(this.category === "Beer"){
        //     return (this.price * 10) / 100;
        // }
        // if(this.category === "Whisky"){
        //     return (this.price * 20) / 100;
        // }
        //return (this.price * this.getTax()) / 100;
    //}

    /**
     * Sempre que criamos uma estrutura de classe, temos a oportunidade de criar:
     * Template Methods -> eu mantenho parte do comportamento da superclasse e levo para 
     * subclasse o que muda, o que varia (aberto para extensão, fechado para mudanças)
    */
    //abstract getTax(): number;

     /**
     * Todo item está obrigando as subclasses ainda que não precisem (que é o caso da agua)
     * a implementar getTax, a herdar calculateTax, mas isso quebra o principio 4 (ISP), 
     * O que poderiamos fazer para mudar um pouco esse contexto? eu posso segregar uma interface
     * uma classe abstrata, alguem que entre nessa hieraquia criando uma especie de FORK
     * a classe TaxItem, iremos mover de Item e mover para TaxItem, logo
     * calculateTax e getTax irão para TaxItem, oq aconteceu? segregamos um comportamento
     */
}