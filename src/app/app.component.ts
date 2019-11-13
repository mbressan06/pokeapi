import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  quantity: 7;
  pokesTabs1: any;
  pokesTabs2: any;
  title = 'pokeapi';
  pokesGen1;
  pokesGen2;
  pokeSpecie;
  pokeSprite;
  constructor(private apiService: ApiService) {
    
    this.pokesTabs1 = this.pokesGen1;
    this.pokesTabs2 = this.pokesGen2;

  }
  ngOnInit() {
    this.apiService.getGen1().subscribe((data)=>{
      this.pokesGen1 = data['pokemon_species'];
      
    });
    this.apiService.getGen2().subscribe((data)=>{
      this.pokesGen2 = data['pokemon_species'];
      
    });
    this.apiService.getSpecie('159').subscribe((data)=>{
      this.pokeSpecie = data['pokemon_species'];
      
    });
    this.apiService.getSpriteImg('159').subscribe((data)=>{
      this.pokeSprite = data['pokemon_species'];
      
    });

  }
}
