import { Component, OnInit } from '@angular/core';
import { MarvelFilters } from '../common/models/marvelApi';
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

  offset: number = 0;

  ngOnInit(): void {
    this.makeRequest();
  }

  makeRequest() {
    const filters = new MarvelFilters();
    filters.offset = this.offset;
    this.marvelService.getAllCharacters(filters).subscribe({
      next: (rtn) => {
        if (this.offset === 0) {
          this.characters = rtn.data!.results!
        } else {
          this.characters = [...this.characters, ...rtn.data!.results!]
        }
        console.log(this.characters)
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {

      }
    })
  }

  nextPage() {
    this.offset += 20;
    this.makeRequest();
  }

}
