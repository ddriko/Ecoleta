//importa a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//utilizar o objeto de banco de dados, para nossas operações
//db.serialize(() => {
    //Com comando SQL eu vou:
    //1. Criar uma tabela
    /*db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2. Inserir dados na tabela
        const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES(?,?,?,?,?,?,?);
        `
        const values =  [
            "",
            "Colectoria",
            "Guilherme Gemballa, Jardim América Nº 260",
            "numero 260",
            "Santa Catarina",
            "Rio do Sul",
            "Residuos Eletronicos e Lâmpadas"   
        ]

        function afterInsertData(err){
            if(err) {
                return console.log(err)
            }

        console.log("Cadastrado com sucesso")
        console.log(this)
        
        }

        //db.run(query, values,  afterInsertData)
   

    3. Consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
    }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })
    
       
    4. Deletar dados da tabela
        db.run(`DELETE FROM places WHERE id = ?`, [6], function(err) {
        if(err) {
             return console.log(err)
         }
         console.log("Registro deletado com sucesso")
     })
       */
    //})

