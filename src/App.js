import {
  Pets
} from './ui-components';
import './App.css';
import {
  NavBarHeader2
} from './ui-components';
import {
  MarketingFooterBrand
} from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBarHeader2 width={"100%"}/>
      <header className="App-header">
        <Pets />
      </header>
      <MarketingFooterBrand  width={"100%"}/>
    </div>
  );
}

export default App;
