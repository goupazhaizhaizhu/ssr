// src/components/Counter.tsx
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import counterStore from "./count2Store";
@observer
class Counter2 extends Component {
  render() {

    return (
      <div>
        <h1>Count: {counterStore.count}</h1>
        <button onClick={() => counterStore.increment()}>Increment</button>
        <button onClick={() => counterStore.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter2;
