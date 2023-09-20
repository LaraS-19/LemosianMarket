import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
        return (
          <div>
            {/* NavBar */} 
            <NavBar />
      
            {/* ItemListContainer */} 
            <ItemListContainer greeting="Buenos días! Como no tengo una tienda real para usar para este proyecto, voy a realizar una tienda para un RPG!"/>
          </div>
        );
      }

export default App;
