import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import MterialUi from './components/MaterialUi'

function App() {
  return (
    <div className="App">
      {/* To add the authentication page, first addd router and then follow this link -
       https://levelup.gitconnected.com/how-to-implement-login-with-github-in-a-react-app-bd3d704c64fc */}
      <Form />
      <List />            
    </div>
  );
}

export default App;
