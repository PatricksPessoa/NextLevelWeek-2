const Database = require('./db')
const createProffy = require('/.createProffy')

Database.then((db) => {
    //inserir dados

    proffyValue = {
        name: 'Patrick Pessoa',
        avatar:'https://avatars3.githubusercontent.com/u/56482603?s=460&u=a6a0486b5943aaa4aefaab1146554c7bb07fd2d4&v=4',
        whatsapp: '21990985474',
        bio: 'Professor de programação',
        subject: 'Química',
        cost: '20',
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    }

    classValue = {
        subject: 'Química',
        cost:'20',
        //o proffy id virá pelo banco de dados
    }

    classScheduleValue = [
        //class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    //createProffy(db, {proffyValue, classValue, classScheduleValue})

    //Consultar os dados inseridos
})