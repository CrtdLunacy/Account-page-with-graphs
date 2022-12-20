import Footer from "./components/Footer";
import Header from "./components/Header";
import MainFrame from "./components/MainFrame";
import Menu from "./components/Menu";
import RingProgress from "./components/RingProgress";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:w-5/6 mx-auto">
        <Menu />

        <div>
          <div className="md:flex md:space-x-4 md:space-y-0 space-y-5">
            <MainFrame />
            <RingProgress />
          </div>
          <Table />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
