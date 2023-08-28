# SOLID - Typescript

A ideia é construir código, software a partir dos testes, utilizando assim os testes como ferramenta de construção

Todo teste ele tem três partes

1 - Given

2 - When

3 - Then

Enquanto o teste não compilar, continuarmos a escrever código.

Entidades → carregam a regra de negócio e fazem com que você possa aplicar essa regra em diferentes contextos, exemplo: criar um pedido, fazer um pagamento, cancelar um pedido, quando desenvolvemos um software, se estamos pensando em teste de unidade,  estamos começando pela granularidade mais importante em nível de negócio que são as entidades

Em cada teste, precisamos trabalhar com um conceito específico

TDD - Desenvolvimento Orientado por Testes (Test Driven Development), o próprio teste lhe informa o que você deve fazer, vai te indicando o próximo passo.

SOLID

5 princípios

1 - SRP

Single Responsibility Principle

Objetivo: Separar coisas que MUDAM POR OBJETIVOS DIFERENTES

Deve-se Mover responsabilidades

2 - OCP

Open/Closed Principle

Devemos estar fechados para modificação e abertos para extensão

O desafio é: eu tenho uma situação, onde eu tenho uma lógica condicional, essa lógica varia de acordo com aquilo que estamos analisando, será que não poderiamos abstrair parte do comportamento na superclasse (template method) e delegando outra parte para subclasse. Exemplo: se fossemos utilizar mais de 100 produtos, a taxa é calculado por rotas (guarulhos para o rio, recife para salvador) e assim sucessivamente, é entender o conceito e levar para o seu contexto

3 - LSP

Liskov Substitution Principle

Se S (Beer, Whisky, Water) é subclasse de T (Item), em um programa deve ser possível substituir instâncias de T (Item) por instâncias de S (Beer, Whisky, Water), SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA

Pré-condições não podem ser fortalecidas

Deixando de aceitar ENTRADAS que a superclasse considera válida

Pós-condições não podem ser enfraquecidas

Deixando as saídas diferentes da expectativa de quem está chamando o método Resumindo: Aceitando saídas mais AMPLAS

Invariantes devem se manter consistentes

Se uma subclasse permitir que o estado conceitual da hierarquia de classes fique inválido

4 - ISP

Interface Segregation Principle

Cuidado com interfaces MUITO ABRANGENTES, não obrigue subclasses a implementar métodos que elas não precisam

5 - DIP

Dependency Inversion Principle

High-level modules should not depend on low-level modules Both should depend on abstraction

BOTH SHOULD DEPEND ON ABSTRACTIONS
