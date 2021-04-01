import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import BorderTextInput from '../../Component/BorderTextInput';
import SimpleBtn from '../../Component/SimpleBtn';
import imagePath from '../../constants/imagePath';
import styles from '../OtpScreen/styles';
import strings from '../../constants/lang/en';
import navigationStrings from '../../constants/navigationStrings';
import commonStyles from '../../styles/commonStyles';
export default class OtpScreen extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    On_Navigate=()=>{
        const{navigation}=this.props;
        navigation.navigate(navigationStrings.HOME)
    }
    render(){
        return( 
            <View style={styles.mainView}>
               <Image source={imagePath.appLogo} style={styles.appLogo}/>
               <Text style={commonStyles.verfication_text}>Verfication</Text>
               <Text style={commonStyles.otpText1}>You will get a OTP via SMS</Text>
                
                <BorderTextInput placeholder={strings.ENTER_OTP}/>
                <SimpleBtn simpleBtn_Text=' VERIFY' onPresSimpleBtn={this.On_Navigate}/>

            </View>
        )
        
    }
}