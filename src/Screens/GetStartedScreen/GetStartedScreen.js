import React,{Component} from 'react';
import {View,Text, ImageBackground,TouchableOpacity} from 'react-native';

import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';

export default class GetStartedScreen extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const{navigation}=this.props; 
        return( 
            <View>
               <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.OTP_SCREEN)}>
               <ImageBackground source={imagePath.appImage} style={styles.appImage}/>
               </TouchableOpacity>
                
            </View>
        )
        
    }
}