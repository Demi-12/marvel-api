import { Component, OnInit } from '@angular/core';
import { MarvelCharacter } from '../common/models/marvelCharacter';
import { MarvelService } from '../common/services/marvel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  characters: MarvelCharacter[] = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
  }

  makeRequest() {
    this.marvelService.getAllCharacters().subscribe({
      next: (rtn) => {
        this.characters = rtn.data!.results!
        console.log(this.characters)
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {

      }
    })
  }

}
