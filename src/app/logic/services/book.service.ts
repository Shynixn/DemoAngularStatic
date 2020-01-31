import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class BookService {
  /**
   * Creates a new bookService with http client as dependency.
   * @param http http.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Gets a list of books.
   */
  getBooks(): Observable<Book[]> {
    console.log("Request pokemons");
    return this.http.get<PokemonResponse>("/pokemon").pipe(
      map(response => {
        console.log("item:" + response);
        return response.results.map(item => ({
          name: item.name
        }));
      })
    );
  }
}
