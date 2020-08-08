module.exports = async function(db, {proffyValue, classValue, classScheduleValue}) {
    // inserir dados na tabela de teachers
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio}
        );
    `)


    const insertedClass = await db.run(`
            INSERT INTO classes(
                subject,
                cost,
                proffy_id
                ) VALUES (
                    ${classValue.subject},
                    ${classValue.cost},
                    ${proffy_id}
                )
            ); 
    `)

    const proffy_id = insertedProffy.lastID

    // inserir dados na tabela classes
    const insertedAllClassSchedulesValues = classScheduleValues.map((value) => {
        return db.run(`
            INSERT INTO class_schedule (

            ) VALUES (
                
            )
        `)
    })


    // aqui vou executar todos os db.runs() das class_schedules

}