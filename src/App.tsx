import { useState } from 'react'
import { Component } from "react";

export interface IProps {
    type: String,
    placeholder: String,
}

class App extends Component<IProps> {

  state = {};
  calculate(){}
  render() {
    return (
      <section className="bg-neutral-800 flex justify-center align-middle h-screen py-8">
        <div className="h-full lg:w-1/3 shadow-md bg-white lg:p-4 p-2 flex flex-col justify-center align-middle rounded-lg text-center">
          <h1 className="text-4xl font-extrabold text-neutral-800">fushai</h1>
          
          <button className="btn">Calculate</button>
        </div>
      </section>
    )
  }
}

export default App
