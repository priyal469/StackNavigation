import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import Header from '../../Component/Header';
import WeekDays from '../../Component/WeekDays';
import styles from './styles';

 export default class Home extends Component{
     constructor(props){
         super(props);
         this.state={
            weekDays_array:[
                {
                    id:1,
                 dates:1,

                },
                {
                    id:2,
                 dates:2,

                },
                {
                    id:3,
                 dates:3,

                },
                {
                    id:4,
                 dates:4,

                },
                {
                    id:5,
                 dates:5,

                },
                {
                    id:6,
                 dates:6,

                },
                {
                    id:7,
                 dates:7,

                },
                {
                    id:1,
                 dates:1,

                },
                {
                    id:2,
                 dates:2,

                },
                {
                    id:3,
                 dates:3,

                },
                {
                    id:4,
                 dates:4,

                },
                {
                    id:5,
                 dates:5,

                },
                {
                    id:6,
                 dates:6,

                },
                {
                    id:7,
                 dates:7,

                },
               
               
               
               
               
             
               
            ]
         }
     }
     render(){
         const{weekDays_array}=this.state;
         return(
             <View>
                 <Header headerText='Mar 2021'/>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={styles.daysName}>SUN</Text>
                     <Text style={styles.daysName}>MON</Text>
                     <Text style={styles.daysName}>TUE</Text>
                     <Text style={styles.daysName}>WED</Text>
                     <Text style={styles.daysName}>THU</Text>
                     <Text style={styles.daysName}>FRI</Text>
                     <Text style={styles.daysName}>SAT</Text>
                 </View>
              <View style={styles.flatListView}>
              <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={weekDays_array}
          keyExtractor={(item,index) => index.toString()}
          renderItem={( {item} ) =>
            (<WeekDays data={item}   />)
         }
         />
              </View>
             </View>
         )
     }
 }