import Aluno from './../models/Aluno'


class HomeController{

    async index(req, res){
        const novoAluno = await Aluno.create({
            nome: "Sebastião",
            sobrenome: "Rodrigo",
            email: 'rodrigo@gmail.com',
            idade: 112,
            peso: 80,
            altura: 1.8
        })
        res.json(novoAluno)
    }
}

export default new HomeController()