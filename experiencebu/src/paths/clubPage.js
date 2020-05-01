import React from 'react';
import '../components/App/App.css';
import LoggedInMast from '../components/MastHead/LoggedinMast.js';
import Masthead from '../components/MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import Footer from "../components/Footer/footer.js"
import ClubPage from "../components/ClubPage/ClubPage.js"

class clubPage extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    
    return (
      <div>
        <LoggedInMast></LoggedInMast>
        <ClubPage></ClubPage>
        <Footer></Footer>
      </div>
    );
  }
}

export default clubPage;

