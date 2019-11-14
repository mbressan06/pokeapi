import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'card-pokes',
  templateUrl: './pokes.component.html',
  styleUrls: ['./pokes.component.scss']
})
export class PokesComponent implements OnInit {
  @Input()
  pokeId: string;
  defaultImage;
  shinyImage
  pokeName;
  pokeJpName;
  genus;
  flavorText;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getSpecie(this.pokeId).subscribe((data)=>{
      let flavorTextIndex = data['flavor_text_entries'].map(a => a['language']['name']).indexOf("en");
      this.pokeName = data['names']['2']['name'];
      this.pokeJpName = data['names']['1']['name'];
      this.genus = data['genera']['2']['genus'];
      this.flavorText = data['flavor_text_entries'][flavorTextIndex]['flavor_text'];
    });
    this.apiService.getSpriteImg(this.pokeId).subscribe((data)=>{
      this.defaultImage = data['sprites']['front_default'];
      this.shinyImage = data['sprites']['front_shiny'];
  
    });
  }

  public toggleImage(link : string){
    src: HTMLImageElement;
    document.getElementById('img-poke').setAttribute( 'src', link );
  }


}
