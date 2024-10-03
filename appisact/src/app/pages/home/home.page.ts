import { Component, OnInit } from '@angular/core';
import { RickServiceService } from 'src/app/services/rick-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  characters: any[] = [];
  currentPage: number = 1;

  constructor(private rickAndMortyService: RickServiceService) {}

  ngOnInit() {
    this.loadCharacters(this.currentPage);
  }

  loadCharacters(page: number) {
    this.rickAndMortyService.getCharacters(page).subscribe(
      (data) => {
        this.characters = data.results;
      },
      (error) => {
        console.error('Error fetching characters', error);
      }
    );
  }

  nextPage() {
    this.currentPage++;
    this.loadCharacters(this.currentPage);
  }

}
