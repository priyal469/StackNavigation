import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {OtpScreen,GetStartedScreen, OtpVerificationScreen} from "../Screens/index";

import navigationStrings from "../constants/navigationStrings";




const Stack=createStackNavigator();

export default function AuthStack(){

    return(
        <React.Fragment>
             <Stack.Screen name={navigationStrings.GET_STARTED_SCREEN} component={GetStartedScreen} options={{headerShown:false}}>

</Stack.Screen>
             <Stack.Screen name={navigationStrings.OTP_SCREEN} component={OtpScreen} options={{headerShown:false}}>

             </Stack.Screen>
             <Stack.Screen name={navigationStrings.OTP_VERIFICATION_SCREEN} component={OtpVerificationScreen} options={{headerShown:false}}>

</Stack.Screen>


            
                
                
                     
           
        </React.Fragment>
    )

}