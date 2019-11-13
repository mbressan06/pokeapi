import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  public getGen1(){
    return this.httpClient.get(`https://pokeapi.co/api/v2/generation/1`);
  }
  public getGen2(){
    return this.httpClient.get(`https://pokeapi.co/api/v2/generation/2`);
  }
  public getSpecie(id){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
  public getSpriteImg(id){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}