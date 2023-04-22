import { useState , Component } from "react";
import InputBox from "./components/InputBox";
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
          <h1 className="text-6xl font-extrabold text-neutral-800">fushai</h1>
          <p className="text-neutral-600 mb-6 lowercase md:uppercase">Your annual investment calculator</p>
          {/* Number of people contributing eg. 5 */}
          <InputBox type="number" min="2" label="No of people"/>
          {/* Number of months to contribute eg. 11 */}
          <InputBox type="number" min="2" label="No of months"/>
          {/* Contribution amount eg. $100 */}
          <InputBox type="number" label="Amount per person"/>
          {/* Result: The total amount of money at the end of 11 months will be: $18671.08
Each individual will then get $3734.22 */}
          <button className="btn">Calculate</button>
        </div>
      </section>
    )
  }
}

export default App
