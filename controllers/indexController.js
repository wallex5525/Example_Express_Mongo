module.exports = (app) => {
    const NUMEROS = app.models.numeros;

    let indexController = {
        home: async (req, res) => {
            {/**JUNTO COM A HOME COLOQUEI O SHOW(MOSTRAR) DO CRUD */ }
            console.log(req.body); // <-- Aqui mostra o body (as variaveis formadas pela tag FORM) que é: {nome: "NOME COLOCADO NO FORM", numero:"NUMERO COLOCADO NO FORM"}

            let parametros = [];

            await NUMEROS.find({})
                .then((numeros) => {
                    console.log(numeros); //<-- o banco estando vazio é uma LISTA
                    parametros = numeros;
                })
                .catch((err) => {
                    console.log(err);
                })

            res.render('home/index', { parametros: parametros });
        },
        insert: async (req, res) => {
            let new_numero = new NUMEROS({
                nome: req.body.nome,
                numero: req.body.numero
            });

            await new_numero.save()
                .then(() => {
                    console.log("Dados salvos com sucesso!!");
                })
                .catch((err) => {
                    console.log("Houve um erro: ", err);
                });

            res.redirect('/');
        },
        goEdit: async (req, res) => {
            let id = req.params.id;
            let parametros = {};

            await NUMEROS.findOne({ _id: id })
                .then((numero) => { parametros = numero })
                .catch((err) => {
                    console.log("Houve um erro: ", err)
                })

            res.render('home/edit', parametros);
        },
        update: async (req, res) => {
            let id = req.params.id;
            let numero = req.body.new_numero;
            
            await NUMEROS.findByIdAndUpdate({ _id: id }, { numero: numero })
                .then(() => {
                    console.log('Documento atualizado com sucesso!');
                })
                .catch((err) => {
                    console.log("Houve um erro: ", err)
                })

            res.redirect('/');
        },
        delete: async (req, res) => {
            let id = req.params.id;

            await NUMEROS.findByIdAndDelete({ _id: id })
                .then(() => {
                    console.log('Documento excluído com sucesso!');
                })
                .catch((err) => {
                    console.log("Houve um erro: ", err)
                })
            res.redirect('/');
        }
    };

    return indexController;
}