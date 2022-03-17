import "./App.scss";
import { Sidebar ,Header,Realtors,Features,Story,Homes,Gallery,Footer} from "./components";

const App = () => {
 
  return (
    <div className="container">
     <Sidebar/>
     <Header/>
     <Realtors/>
     <Features/>
     <Story/>
     <Homes/>
     <Gallery/>
     <Footer/>
    </div>
  );
};

export default App;
