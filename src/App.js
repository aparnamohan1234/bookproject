import logo from './logo.svg';
import './App.css';
import "/bootstrap/dist/css/bootstrap.min.css";
import  "/bootstrap/dist/js/bootstrap.bundle.min.js";
import Addbook from './Component/Addbook';
import Searchbook from './Component/Searchbook';
function App() {
  return (
    <div>
      <Addbook/>
      <Searchbook/>
    </div>
  );
}

export default App;
