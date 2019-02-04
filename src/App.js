import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Background from './Backdrop/Background';
import Table from './Grid/Table';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Modal from './Modal/Modal';
import Home from './Dashboard/Home';
//import ReactDOM from 'react-dom';

class App extends React.Component {
  
    state={
        SideDrawerOpen: false
    };
    drawerToggleClickHander = () => {
        this.setState((prevState)=> {

            return{
                SideDrawerOpen: !prevState.SideDrawerOpen};
        }); 
    };
    backgroundClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }
    render () {
       let sideDrawer
       let background

       if (this.state.SideDrawerOpen) {
            background = <Background click={this.backgroundClickHandler}/>
           sideDrawer = <SideDrawer />
           
       }

        return (
            <Router>
            <div style={{height: '100%'}}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHander} />
                    {SideDrawer}
                    {Background}
                
                        <main style={{marginTop: '64px'}}>
                        
                        </main>
                    <div>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/" component={Table} />
                       
                    </Switch>
                    </div>
            </div>
            </Router>
        )
    }
}
export default App;