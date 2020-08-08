const proffys = [
    {
        name: "Patrick Pessoa",
        avatar:"https://avatars3.githubusercontent.com/u/56482603?s=460&u=a6a0486b5943aaa4aefaab1146554c7bb07fd2d4&v=4",
        whatsapp: "21990985474",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Jhonata Oliveira",
        avatar:"https://avatars3.githubusercontent.com/u/56482603?s=460&u=a6a0486b5943aaa4aefaab1146554c7bb07fd2d4&v=4",
        whatsapp: "21990985474",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades 
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNoEmpty = Object.keys(data).length > 0
        if (isNoEmpty) {
            data.subject = getSubject(data.subject)
            proffys.push(data)
            return res.redirect("/study")
        }
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()


//Configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Start do Servidor
.listen(5000)