import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre'
import { BibliothequeService } from '../bibliotheque.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {

  livres : Livre[] = []
  constructor(private bibliothequeService : BibliothequeService) { }

  ngOnInit() {
    this.listeLivres()
  }

  listeLivres() {
    this.bibliothequeService.getLivres().subscribe(
      (res) => {
        console.log(res)
        this.livres = res.livres
        console.log(this.livres)
      }
    )
  }

  ajouterLivre(num: number, titre: string, pages: [string]) {
    this.bibliothequeService.addLivres(num, titre, pages).subscribe(
      res => {
        console.log(res)
        this.listeLivres()
      }
    )
  }

  deleteLivre(num: number) {
    this.bibliothequeService.deleteLivres(num).subscribe(
      res => {
        console.log("DELETE:"+res)
        this.listeLivres()
      }
    )
  }

  updateLivre(l: Livre) {
    this.bibliothequeService.updateLivres(l).subscribe(
      res => {
        console.log(res)
        this.listeLivres()
      }
    )
  }

}
