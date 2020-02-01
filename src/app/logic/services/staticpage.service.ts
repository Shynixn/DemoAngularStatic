import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class StaticService {
  /**
   * Creates a new instance of the static service with dependencies.
   * @param document document.
   */
  constructor() {
  }

  onBuildTimeOnly(className, callback: (() => any)) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      console.log("Children Length:" + elements[i].children.length)
      console.log("INNTERHTML:" + elements[i].innerHTML);
      if (elements[i].children.length == 0) {
        callback()
      }
    }
  }
}

