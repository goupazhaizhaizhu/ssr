// src/components/Counter.tsx
import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("counterStore")
@observer
class Counter extends Component {
  render() {
    const counterStore = this.props.counterStore;
    return (
      <div>
        <h1>Count: {counterStore.count}</h1>
        <button onClick={() => counterStore.increment()}>Increment</button>
        <button onClick={() => counterStore.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
