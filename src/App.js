import React from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
// import Background from "./Backdrop/Background";
import Grid from "./Grid/Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Modal from "./Modal/Modal";
import Home from "./Dashboard/Home";
import Airtime from "./Grid/Table";
import Daily from "./Daily/Daily";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends React.Component {
  state = {
    SideDrawerOpen: false
  };
  drawerToggleClickHander = () => {
    this.setState(prevState => {
      return {
        SideDrawerOpen: !prevState.SideDrawerOpen
      };
    });
  };
  backgroundClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let sideDrawer;
    // let background;

    if (this.state.SideDrawerOpen) {
      // background = <Background click={this.backgroundClickHandler} />;
      sideDrawer = <SideDrawer />;
    }

    return (
      <Provider store={store}>
        <Router>
          <div className="app-container" style={{ height: "100%" }}>
            <Toolbar />
            {SideDrawer}
            {/* {Background} */}

            <main style={{ marginTop: "64px" }} />
            <div>
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/airtime" exact component={Airtime} />
                <Route path="/daily" exact component={Daily} />
                <Route path="/" component={Grid} />
                <Daily />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
