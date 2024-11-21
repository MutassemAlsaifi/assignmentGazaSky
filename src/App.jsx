import Header from '/src/components/Header'
import ListGroups from '/src/components/ListGroups'
import {removeDuplicates } from './RemoveDuplicates';
import { SumandAvg } from './SumandAvg';
const App = () => {
  let items = ["red", "orange", "yellow"];
  removeDuplicates(["apple", "banana", "apple", "orange", "banana", "grape", "apple", "orange", "banana", "grape"])
  SumandAvg([10,20,30,40,50]);
  return (
    <div>
      <Header heading='PRODUCTS'/>
      <ListGroups items={items}></ListGroups>
    </div>
  )
}

export default App
