import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  allPokes; 
  generation = [
    'Geração 1',
    'Geração 2'
  ];

  constructor(private apiService: ApiService) {
    this.allPokes = [1,2];
  }

  ngOnInit() {
    for (let i = 1; i <= this.allPokes.length; i++) {
      this.apiService.getGen(i).subscribe((data)=>{
        if (i == 1) {
          this.allPokes[i] = data['pokemon_species'].slice(0,7);
        } else {
          this.allPokes[i] = data['pokemon_species'].slice(0,7);
          this.allPokes.shift();
        }
      });
    }
  }
}
