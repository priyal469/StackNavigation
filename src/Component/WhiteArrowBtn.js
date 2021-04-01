import React,{Component} from "react";
import{View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";

import imagePath from "../constants/imagePath";
export default function WhiteArrowBtn(props){
const{onPressRoundBtn}=props;
    return(
       <View>
            <TouchableOpacity onPress={onPressRoundBtn}>
                        <Image source={imagePath.whiteArrowBtn}  style={styles.whiteArrowBtn} />

                    </TouchableOpacity>



       </View>
    )
}
const styles=StyleSheet.create({
    whiteArrowBtn:{
        height:50,
        width:50,
        resizeMode:'contain',
        position:'relative',
        // bottom:0,
        
        
        
        
        
    }
   
})