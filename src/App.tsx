import BackGroundHeader from './Components/BackGroundHeader';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import TodoList from './Components/TodoList';

function App() {
 

  

  return (
    <div className="flex flex-col justify-start items-center font-sans min-h-screen bg-[#f1d4b3] ">
      <BackGroundHeader />
      <main className="w-[60%] h-1/3 bg-white rounded-md shadow-xl grid grid-cols-[7fr_4fr] grid-rows-[1fr_11fr] overflow-hidden">
        <Header
        />
        <TodoList />
        <SideBar  />
      </main>
      <Footer />
    </div>
  );
}

export default App;
