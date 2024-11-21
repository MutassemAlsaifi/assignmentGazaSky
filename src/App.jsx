import Header from '/src/components/Header'
import ListGroups from '/src/components/ListGroups'
const App = () => {
  let items = ["red", "orange", "yellow"];
  return (
    <div>
      <Header heading='PRODUCTS'/>
      <ListGroups items={items}></ListGroups>
    </div>
  )
}

export default App
