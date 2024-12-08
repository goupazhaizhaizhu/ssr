// src/stores/counterStore.ts
import { observable, action } from "mobx";

class Counter2Store {
  @observable count = 0;

  @action increment() {
    this.count += 1;
    console.log("count", this.count);
  }

  @action decrement() {
    this.count -= 1;
    console.log("count", this.count);
  }
}

const counterStore = new Counter2Store();
export default counterStore;
