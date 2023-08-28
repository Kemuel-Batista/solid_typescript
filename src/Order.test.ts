import Order from "./Order";
import Beer from "./Beer";
import Whisky from "./Whisky";
import Water from "./Water";
import MessageDataFile from "./MessageDataFile";

test("Deve criar um pedido e calcular o total", function(){
    // given -> dado que eu tenho um ...
    //const order = new Order();
    const order = new Order(new MessageDataFile());
    // order.addItem(new Item("Beer", "Brahma", 10));
    // order.addItem(new Item("Whisky", "Jack Daniels", 100));
    // order.addItem(new Item("Water", "Crystal", 1));
    // Aberto para extensão, fechados para mudanças
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));
    // when -> quando eu
    const total = order.getTotal();
    // then -> eu espero que esse ... (no caso total)
    expect(total).toBe(111);
});

test("Deve criar um pedido e calcular os impostos", function(){
    // given -> dado que eu tenho um ...
    //const order = new Order();
    const order = new Order(new MessageDataFile());
    // order.addItem(new Beer", "Brahma", 10)); // 10%
    // order.addItem(new Whisky", "Jack Daniels", 100)); // 20%
    // order.addItem(new Water", "Crystal", 1)); // Isenta
    // Aberto para extensão, fechados para mudanças
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));
    // when -> quando eu
    const taxes = order.getTaxes();
    // then -> eu espero que esse ... (no caso total)
    expect(taxes).toBe(21);
});

test("Deve criar um pedido e imprimir uma mensagem em portugues", async function(){
    //const order = new Order();
    const order = new Order(new MessageDataFile());
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));
    const message = await order.printMessage("pt");
    expect(message).toBe("O total foi de R$111, os impostos foram de R$21. Obrigado pelo seu pedido!");
});

test("Deve criar um pedido e imprimir uma mensagem em ingles", async function(){
    //const order = new Order();
    const order = new Order(new MessageDataFile());
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));
    const message = await order.printMessage("en");
    expect(message).toBe("The total was R$111, the taxes was R$21. Thanks for your order!");
});