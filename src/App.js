
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import CompareAra65 from './3380DiversityOfLiving-Components/CompareAra65/CompareAra65';
import NavbarAra65 from './3380DiversityOfLiving-Components/NavbarAra65/NavbarAra65';
import FaqJpa72 from './3380DiversityOfLiving-Components/FaqJpa72/FaqJpa72';
import UserDasboardJpa72 from './3380DiversityOfLiving-Components/UserDasboardJpa72/UserDasboardJpa72'
import CommonFaqJpa72 from './3380DiversityOfLiving-Components/CommonFaqJpa72/CommonFaqJpa72';
import FooterAra65 from './3380DiversityOfLiving-Components/FooterAra65/FooterAra65';
import RegisterLoginAra65 from './3380DiversityOfLiving-Components/RegisterLoginAra65/RegisterLoginAra65';
import HomePageAra65 from './3380DiversityOfLiving-Components/HomePageAra65/HomePageAra65';
import DashboardAra65 from './3380DiversityOfLiving-Components/DashboardAra65/DashboardAra65';
import LogoutAra65 from './3380DiversityOfLiving-Components/LogoutAra65/LogoutAra65';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarAra65></NavbarAra65>
        <Switch>
          <Route path="/" exact component={HomePageAra65}></Route>
          <Route path='/compare' exact component={CompareAra65}></Route>
          <Route path='/faq' exact component={CommonFaqJpa72}></Route>
          <Route path='/faqs' exact component={FaqJpa72}></Route>
          <Route path='/user' exact component={UserDasboardJpa72}></Route>
          <Route path='/signup' exact component={RegisterLoginAra65}></Route>
          <Route path='/dashboard' exact component={DashboardAra65}></Route>
          <Route path="/logout" exact component={LogoutAra65}></Route>
        </Switch>
        <FooterAra65></FooterAra65>
      </Router>
    </div>
  );
}

export default App;