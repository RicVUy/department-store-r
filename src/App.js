
import './App.css';
import ProductContainer from './components/ProductContainer';
import AddProduct from './components/AddProduct';
import EditedProduct from './components/EditedProduct';
import ProductManagement from './components/ProductManagement';


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        
          <ProductContainer/>
           <AddProduct/>
           <EditedProduct/>
           <ProductManagement/>
      </header>
        
    </div>
  );
}

export default App;

