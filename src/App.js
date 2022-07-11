import VirtualScroll from "./components/scroll/VirtualScroll.jsx";

function App() {
  let items = [];
  for (let i = 0; i < 100; i++) {
    items.push({ id: i, name: `item ${i}` });
  }
  return (
    <div className="App">
      <VirtualScroll height="500" items={items}  />
    </div>
  );
}
export default App;
