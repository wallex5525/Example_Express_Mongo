module.exports = (app) => {
    const mongoose = require("mongoose"); //<-- Biblioteca mongoose
    let Schema = mongoose.Schema; //<-- Da biblioteca nos importamos o Schema para criar um "Esquema" dos dados que vamos inserir no banco!

    let numeros = Schema({
        nome: { type: String, required: true }, //<-- requided significa que ele so vai funcionar se essa variavel for preenchida
        numero: { type: String, required: true } //<-- Quando voce rodar e ver o log do body que sai voce vai ver que o numero é guardado como uma String, claro, voce poderia transforma-lo em um numero, mas resolvi deixar assim
    })

    return mongoose.model("numeros", numeros); //<-- Aqui estamos colocando o Schema "numeros" na collection numeros
}