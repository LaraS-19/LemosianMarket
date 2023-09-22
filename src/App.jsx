import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";

function App() {
        return (
          <div>
           {/* NavBar */} 
            <NavBar />

            <h1>Lemosian Market</h1>
      
            {/* ItemListContainer */} 
            <ItemListContainer greeting="Buenos días! Como no tengo una tienda real para usar para este proyecto, voy a realizar una tienda para un RPG!"/>
          
          <Routes>
            <Route path="/" element = {<ItemListContainer />}></Route>
            <Route path="/category/:id" element={<ItemListContainer />} ></Route>
            <Route path ="/item/:id" element={<ItemDetailContainer />} ></Route>
          </Routes>
          </div>
        );
      }

export default App;
