export interface Props{
    name:string
}



export class Person implements Props{
    name;
    constructor(name:string){
        this.name=name
    }
    get getName():string{
        return this.name+" e meu nome"
    }
};
