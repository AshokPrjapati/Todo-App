import axios from "axios";
import Navbar from "./components/Navbar"
import Routes from "./routes/Routes";

// default base url
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

function App() {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
