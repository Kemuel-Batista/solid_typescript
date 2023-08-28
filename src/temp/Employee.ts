import Person from "./Person";

export default class Employee extends Person {

    setAge(age: number) {
        /** 
         * Pré-condições não podem ser fortalecidas
         * O que é isso?
         * A superclasse (Person) está aceitando idade acima de zero, abaixo de 0 ela quebra
         * Qual a invariancia? as pessoas terem idade positiva
         * Em employee, eu não aceita se for menor de 18, ora, se substituir Person por Employee
         * eu quebro a classe em alguns cenários, se fazemos isso, o que eu estou fazendo?
         * Deixando de aceitar ENTRADAS que a superclasse considera válida, eu estou fortalecendo a pré-
         * condição, a pré condição de chamada de alguma coisa
         * 
         * Pós-condições não podem ser enfraquecidas
         * Qual pós condição estou enfraquecendo?
         * Deixando as saídas diferentes da expectativa de quem está chamando o método Resumindo: Aceitando saídas mais AMPLAS
         * 
         * Invariantes devem se manter consistentes
         * Se uma subclasse permitir que o estado conceitual da hierarquia de classes fique inválido
         * Ex: Se por acaso, uma subclasse derrepente eu aceito que a idade seja negativa, tbm quebro o principio
        */

        if(age < 18) throw new Error("A pessoa deve ser maior que 18 anos.");
        super.age = age;
    }
}