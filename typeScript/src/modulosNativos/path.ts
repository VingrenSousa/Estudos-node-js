const path = require("path")

// __filename se refere au aquivo atual

// basename retornarar arquivo atual 
console.log(path.basename(__filename))
// retornarar caminho do arquivo atual 
console.log(path.dirname(__filename))
// extenção do arquivo (".png,.js,.html....")
console.log(path.extname(__filename))
// obejeto com as informação do arquivo atual 
console.log(path.parse(__filename))

//junta caminhos de arquivos
console.log(path.join(__dirname,"test"))
