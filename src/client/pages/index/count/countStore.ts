// src/stores/counterStore.ts
import { observable, action } from "mobx";

export default class CounterStore {
  @observable count = 0;

  @action increment() {
    this.count += 1;
    console.log("count", this.count)
  }

  @action decrement() {
    this.count -= 1;
    console.log("count", this.count);
  }

  getState() { 
    return {
      count: this.count
    };
  }

  static createClass(prop: any) { 
    const { count } = prop;
    const store = new CounterStore();
    store.count = count;
    return store;
  }
}
