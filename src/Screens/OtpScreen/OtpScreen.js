import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import BorderTextInput from '../../Component/BorderTextInput';
import SimpleBtn from '../../Component/SimpleBtn';
import imagePath from '../../constants/imagePath';
import styles from '../OtpScreen/styles';
import strings from '../../constants/lang/en';
import navigationStrings from '../../constants/navigationStrings';
import commonStyles from '../../styles/commonStyles';
import { showMessage } from 'react-native-flash-message';
import Loader from '../../Component/Loader';


export default class OtpScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            otp_mobile_number:''
        }
    }
    // OnNavigate=()=>{
    //     const{navigation}=this.props;
    //     navigation.navigate(navigationStrings.OTP_VERIFICATION_SCREEN)
    // }
    _onChangeText = key => {
        console.log("in onChange", key)

        return (value) => {
            console.log("in onChange value", value)

            this.setState({
                [key]: value
            })
        }
    }
    _onSendOtp = () => {
        const { otp_mobile_number } = this.state;
        const { navigation } = this.props;
        this.setState({
          isLoading: true,
        });
        actions.onSendOTP({
            contactDetails: {
                phoneNo: otp_mobile_number,
                countryCode: '+91',
                countryCodeISO: "IN"
            }
        })
            .then(res => {
                this.setState({
                    userId: res.data.userId,
                    isModalVisible: false
                });
                showMessage({
                    type: 'success',
                    icon: 'success',
                    message: 'OTP sent successfully',
                });
                navigation.navigate(navigationStrings.OTP_VERIFICATION_SCREEN)
            })
            .catch(error => {
                this.setState({

                    isModalVisible: false
                });
                showMessage({
                    type: 'danger',
                    icon: 'danger',
                    message: error.message,
                });
            });
    };

    render(){
        return( 
            <View style={styles.mainView}>
               <Image source={imagePath.appLogo} style={styles.appLogo}/>
               <Text style={commonStyles.verfication_text}>Verfication</Text>
               <Text style={commonStyles.otpText1}>We will send you a One Time Password on your</Text>
                <Text style={styles.otpText2}>phone number</Text>
                <BorderTextInput placeholder={strings.ENTER_YOUR_NUMBER} _onChangeText={this._onChangeText} inputKey={'otp_mobile_number'}/>
                <SimpleBtn simpleBtn_Text=' GET OTP' onPresSimpleBtn={this._onSendOtp} />
            </View>
        )
        
    }
}