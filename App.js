import React,{Component} from 'react';
import Routes from './src/Navigation/Routes';

// import store from './src/redux/store';
// import {Provider} from 'react-redux';


 export default  class App extends Component{
   constructor(props){
     super(props);
     this.state={
        
     }
   }
  

  
   render(){
    
     return(
         <>
  {/* //  <Provider store={store}> */}
      <Routes/>

      {/* <FlashMessage /> */}
  {/* //  </Provider> */}
   </>
  
     )
   }
 }

