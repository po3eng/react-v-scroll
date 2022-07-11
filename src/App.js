import VirtualScroll from "./components/scroll/VirtualScroll.jsx";

function App() {
  let items = [];
  for (let i = 0; i < 1000; i++) {
    items.push({ id: i, name: `item ${i}` });
  }
  return (
    <div className="App">
      <VirtualScroll items={items}/>
    </div>
  );
}

export default App;
