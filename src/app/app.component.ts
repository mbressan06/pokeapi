import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  pokesTabs1: any;
  pokesTabs2: any;
  pokesGen1;
  pokesGen2;
  
  constructor(private apiService: ApiService) {
    this.pokesTabs1 = this.pokesGen1;
    this.pokesTabs2 = this.pokesGen2;
  }
  ngOnInit() {
    this.apiService.getGen1().subscribe((data)=>{
      this.pokesGen1 = data['pokemon_species'].slice(0,7);
    });
    this.apiService.getGen2().subscribe((data)=>{
      this.pokesGen2 = data['pokemon_species'].slice(0,7);
    });
  }
}
