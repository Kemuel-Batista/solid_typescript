export default interface MessageData {
    // Criamos uma abstração/contrato
    read(language: string): Promise<string>;
}