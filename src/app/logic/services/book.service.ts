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
    return this.http.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon").pipe(
      map(response => {
        console.log("item:" + response);
        return response.results.map(item => ({
          name: item.name,
        }));
      })
    );
  }

  /**
   * Gets a list of books for the given query request.
   * @param query Quest.
   */
  getGoogleBooks(query: string): Observable<Book[]> {
    console.log("Request Google: " + query);
    return this.http.get<GoogleBookResponse>("https://www.googleapis.com/books/v1/volumes?q=" + query).pipe(
      map(response => {
        console.log("item:" + JSON.stringify(response));
        return response.items.map(item => {
          console.log("Single:" + item["volumeInfo"]["title"]);
          return ({
            name: item["volumeInfo"]["title"]
          })
        });
      })
    );
  }
}
