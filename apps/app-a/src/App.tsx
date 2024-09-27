import { Button } from "@package/comps";

function App() {
  return (
    <div className="bg-sky-50 h-screen grid place-items-center">
      <Button
        className="border border-gray-500"
        onClick={() => confirm("I was clicked")}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
