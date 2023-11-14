

const Fs = require("fs")
const Path = require("path")

//criar uma pasta


Fs.mkdir(Path.join(__dirname,"/teste"), (erro:string) => {
    if (erro) {
        console.log("erro:" + erro)
    } else {
        console.log("pasta criada com sucesso!")

    }
});

Fs.writeFile(Path.join(__dirname,"/teste","test.txt"),"hello node!",
(error:string)=>{
    if(error){
        console.log("erro:"+error)
    }
        console.log("arquivo Criado")

        // modificar adicionar novos conteudo au arquivo

        Fs.appendFile(Path.join(__dirname,"/teste","test.txt"),"hello node!",
            (error:string)=>{
                if(error){
                    console.log("erro:"+error)
                }
                    console.log("arquivo modificado")
        
            });

         // ler aquivos 


        Fs.readFile(Path.join(__dirname,"/teste","test.txt"),"utf8",
            (error:string,D:string)=>{
                if(error){
                    console.log("erro:"+error)
                }
                    console.log("lendo arquivo:")
                    console.log(D)
                
            });

    
}
);
// a modificação e leitura tem quer vim no callbak da criação do arquivo, como estas função sao acicrona e node nao perde tempo em um função acicorna....


