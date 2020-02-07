export class Livre {

    numero : Number
    titre : String
    pages : [String]

    constructor(num: number, titreL: string, pagesL: [string]){
        this.numero = num
        this.titre = titreL
        this.pages = pagesL
    }
}
