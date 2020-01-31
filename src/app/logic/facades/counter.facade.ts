import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {decrement, increment, reset} from "../actions/counter.actions";
import {select, Store} from "@ngrx/store";
import {selectFeature} from "../selectors/counter.selector";

@Injectable()
export class CounterFacade {
  /**
   * Counter state.
   */
  count$: Observable<number>;

  /**
   * Creates a new instance of the counter facade with store as dependency.
   * @param store store.
   */
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select(selectFeature));
  }

  increment() {
    console.log("Call");
    this.store.dispatch(increment({header : "get me two"}));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
