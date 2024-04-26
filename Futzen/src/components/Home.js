import React from 'react';
import './Home.css';

class Home extends React.Component {
    render(){
        return(
            <div>
                <div class="triangle-end"></div>
                <div class="custom-shape-divider-top-1686630085">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="caption">
                    <h2>Reach Your Goals</h2>
                    <p>Get access to the guides, question papers <br/>and test series</p>
                </div>  
                <div class="btn">
                    <button>Learn</button>
                </div>
                <div class="cont">
                    <img src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODY2NDI1MzF8&ixlib=rb-4.0.3&q=85" style={{width:350, height:300}}/>
                </div>
            </div>
        )
    }
}

export default Home;