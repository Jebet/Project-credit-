import React from 'react';
import { Container } from 'semantic-ui-react';
import { Responsive, Segment } from 'semantic-ui-react';
import './Home.css';


class Home extends React. Component {

    
   render () {
       return (
           <div className="Container">
           <div className="title">Dashboard Information:</div>
        <Segment.Group>
            <Responsive as={Segment}>
           <div class="row" style={{width: "80%"}}>             
                <div class="col-sm-4">
                    <div class="info-box bg-red">
                    <span class="info-box-icon"><i class="fa fa-line-chart"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Airtime</span>
                        <span class="info-box-number">41,410</span>
                    
                        <div class="progress">
                        <div class="progress-bar" style={{width: '70%'}}></div>
                        </div>
                        <span class="progress-description">
                        Sent 20K airtime in January
                        </span>
                    </div>

                    </div>
                </div>

                <div class="col-sm-4">

                    <div class="info-box bg-green">
                    <span class="info-box-icon"><i class="fa fa-users"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Fans</span>
                        <span class="info-box-number">401,410</span>
                    
                        <div class="progress">
                        <div class="progress-bar" style={{width: '70%'}}></div>
                        </div>
                        <span class="progress-description">
                         Sent 50K worth of airtime to 100k fans
                        </span>
                    </div>

                    </div>
                </div>

                <div class="col-sm-4">

                    <div class="info-box bg-orange">
                    <span class="info-box-icon"><i class="fa fa-money"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Balance</span>
                        <span class="info-box-number">1,001,410</span>
                    
                        <div class="progress">
                        <div class="progress-bar" style={{width: '70%'}}></div>
                        </div>
                        <span class="progress-description">
                         80% of airtime remaining
                        </span>
                    </div>

                    </div>
                </div>
            
           </div>
           </Responsive>
           </Segment.Group>
           </div> 
       );
   }
}


export default Home;