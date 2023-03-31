import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { MarvelFilters } from '../common/models/marvelApi';
import { MarvelCharacter } from '../common/models/marvelCharacter';
import { MarvelService } from '../common/services/marvel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('cardContainer') cardContainer!: ElementRef;

  //Classes
  characters: MarvelCharacter[] = [];
  selectedHero: MarvelCharacter = new MarvelCharacter();

  //Pagination
  offset: number = 0;

  //Search system
  searchInput: FormControl = new FormControl();
  searchTerm: string = '';

  constructor(
    private marvelService: MarvelService,
    private router: Router
  ) {
    this.searchInput.valueChanges.pipe(debounceTime(600)).subscribe({
      next: (text: string) => {
        this.searchTerm = text;
        this.offset = 0;
        this.makeRequest();
      }
    })
  }


  ngOnInit(): void {
    this.makeRequest();
  }

  ngAfterViewInit() {
    //Add scroll listener on container div
    this.cardContainer.nativeElement.addEventListener('scroll', this.scrollHandler.bind(this))
  }

  ngOnDestroy(): void {
    //Remove scroll listener on container div
    this.cardContainer.nativeElement.removeEventListener('scroll', this.scrollHandler.bind(this))
  }

  makeRequest() {
    const filters = new MarvelFilters();
    filters.offset = this.offset;
    if (this.searchTerm) {
      filters.nameStartsWith = this.searchTerm;
    }

    this.marvelService.getAllCharacters(filters).subscribe({
      next: (rtn) => {
        if (this.offset === 0) {
          this.characters = rtn.data!.results!
        } else {
          this.characters = [...this.characters, ...rtn.data!.results!]
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {

      }
    })
  }

  scrollHandler() {
    const element = this.cardContainer.nativeElement;
    const atBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 200;
    const moreCharacters = this.offset < this.characters.length

    if (atBottom && moreCharacters) {
      this.offset += 20;
      this.makeRequest();
    }
  }




}
