import "./App.css";
import { Accordion } from "./components";

function App() {
  // Dummy data
  const items = [
    {
      title: "Item 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae? Unde sapiente saepe molestias soluta sit ex nobis, quaerat cum quasi libero totam ipsa, quo eligendi nemo earum! Eveniet, exercitationem?",
    },
    {
      title: "Item 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto architecto accusantium? Illum dolorem quis id, reiciendis voluptatibus earum dolores rem aperiam ipsa debitis quidem aliquid? Recusandae inventore consequatur esse!",
    },
    // ... more items
  ];

  return (
    <div className="container mx-auto bg-gray-800 text-stone-100 flex-col h-screen w-screen">
      <Accordion items={items} />
    </div>
  );
}

export default App;
