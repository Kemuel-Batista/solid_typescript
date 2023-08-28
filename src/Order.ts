import Item from "./Item";
import MessageData from "./MessageData";
import TaxItem from "./TaxItem";
import fs from 'fs/promises';

export default class Order {
    items: Item[];
    messageData: MessageData;

    //constructor(){
    /**
     * Abstração
     * @param messageData 
     * Order está recebendo uma dependencia de fora, invertemos a dependencia
     */
    constructor(messageData: MessageData){
        this.items = [];
        this.messageData = messageData;
    }

    addItem(item: Item){
        this.items.push(item);
    }

    getTotal(){
        let total = 0;
        for (const item of this.items){
            total += item.price;
        }
        return total;
    }

    getTaxes(){
        let taxes = 0;
        for(const item of this.items){
            /**
             * O código abaixo quebra o primeiro princípio do SOLID
             * SRP -> Single Responsibility Principle
             * Pois a classe ordem, Em sua estrutura, ela guarda o estado interno, 
             * a consistência de um pedido, um conjunto de items
             * O que muda por motivos diferentes é os impostos, os ifs que calculam
             * os impostos são códigos que mudam por motivos diferentes que
             * quebram completamente o principio da responsabilidade única
            */
            // if(item.category === "Beer"){
            //     taxes += (item.price * 10) / 100;
            // }
            // if(item.category === "Whisky"){
            //     taxes += (item.price * 20) / 100;
            // }
            /**
             * Quando segregamos o calculateTax para TaxItem e não está mais em Item, quebramos o codigo
             * Expectativa: a expectativa é receber item
             */
            //taxes += item.calculateTax();
            /**
             * Isso não é a mesma coisa de if(item.category === "Beer"){
             * Estou referenciando um membro dessa hi
             */
            if(item instanceof TaxItem){
                taxes += item.calculateTax();
            }
        }
        return taxes;
    }

    //printMessage(){
    async printMessage(language: string){
        /**
         * DIP - Dependency Inversion Principle
         * High-level modules should not depend on low-level modules Both should depend on abstraction
         * Modulos de alto nivel não devem depender de baixo nível
         * E se no nosso print message recebemos language
        */
        //return `O total foi de R$${this.getTotal()}, os impostos foram de R$${this.getTaxes()}. Obrigado pela compra!`;
        // if(language === "pt"){
        //     return `O total foi de R$${this.getTotal()}, os impostos foram de R$${this.getTaxes()}. Obrigado pelo seu pedido!`;
        // }
        // if(language === "en"){
        //     return `The total was R$${this.getTotal()}, the taxes was R$${this.getTaxes()}. Thanks for your order!`;
        // }
        /**
         * O codigo abaixo quebra o principio DIP, pois o high level (Order) está dependendo da
         * biblioteca FS (low-level) assim como um banco de dados ou qualquer outra ferramenta de entrada 
         * e saida, estamos tentando deixar com que a entidade que pertence ao dominio, ela seja 
         * completamente isenta de detalhes de tecnologia ou infraestrutura, isso é a base do desacoplamento,
         * se vamos rodar o teste em um ambiente de stagging, independentemente do ambiente, o codigo deve ser 
         * capaz de passar essa dependencia de fora
         * BOTH SHOULD DEPEND ON ABSTRACTIONS, depender de abstrações
         */
        // const message = await fs.readFile(`./messages/${language}.txt`, 'utf-8')
        // return message.replace("{total}", this.getTotal() + "").replace("{taxes}", this.getTaxes() + "");
        /**
         * Você deve depender de um contrato
         * Reparemos que order agora, é independente de onde vem a informação, se vem de um BD, se vem do FS
         */
        const message = await this.messageData.read(language)
        return message.replace("{total}", this.getTotal() + "").replace("{taxes}", this.getTaxes() + "");
    }
}