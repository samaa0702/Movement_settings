import AddDis from "./components/AddDis";
import AddMove from "./components/AddMove";

function App() {
  return (
    <div className='w-full h-full'>
      <div className='w-full bg-gray-200 p-5'>
        <h1 className='text-gray-600 text-xl'>
          Дополнительные настрйоки перемещения
        </h1>
      </div>
      <div className='px-[15px]'>
        <AddDis />
        <AddMove />
      </div>
    </div>
  );
}

export default App;
