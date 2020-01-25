import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class PokemonService {

  constructor (private http: HttpClient) {}

  getAll() {
    return this.http.get('/movies');
  }
  /**
   * Gets a list of pokemons.
   */
  getPokemons(): Observable<Pokemon[]> {
    let pokemons: Pokemon[] = [{
      name: "Pikachu"
    }, {
      name: "Pummelluf"
    }
    ];
    return Observable.create(() => pokemons);
  }
}
