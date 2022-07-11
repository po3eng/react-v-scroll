import VirtualScroll from "./components/scroll/VirtualScroll.jsx";
import Item from "./components/Item/Item.jsx";

function App() {
  let items = [];
  for (let i = 0; i < 10000; i++) {
    items.push({ id: i, name: `item ${i}` });
  }
  return (
    <div className="App">
      <VirtualScroll height="500" items={items} Item={Item} />
    </div>
  );
}
export default App;
