import Item from "./Item";

export default class Water extends Item {

    constructor(description: string, price: number) {
        super("Water", description, price);
    }

    // getTax(): number {
        /**
         * Sabemos que a agua é isenta de impostos, então quando fazemos o teste
         * com essa exceção (error) o que acontece com a ordem é que não irá passar
         * e com isso chegamos no Liskov Substituion Principle
         * Se S (Beer, Whisky, Water) é subclasse de T (Item), 
         * em um programa deve ser possível substituir instâncias de T (Item) 
         * por instâncias de S (Beer, Whisky, Water), SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA,
         * Ou seja, se uma taxa espera que retorne um numero, a subclasse deve rodar o programa
         * mesmo se existir uma exceção
         * O getTax espera que se retorne um numero, se eu volto uma exceção
         * Deixando as saídas diferentes da expectativa de quem está chamando o método 
         * Resumindo: Aceitando saídas mais AMPLAS
        */
        // throw new Error("A agua é isenta de impostos");
        //return 0;
    // }

    /**
     * Como segregamos o getTax para TaxItem, como Water não tem taxa, não precisamos
     * mais da função getTax
     */
}