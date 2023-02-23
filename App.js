
import React,{useState} from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, TextInput, 
  TouchableOpacity, 
  View ,StatusBar,
  Image, ImageBackground,
  Modal, Pressable, 
  ActivityIndicator, 
  RefreshControl, 
  Switch, 
  FlatList} from 'react-native';

  import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

  const sofa = require('./assets/images/2.jpeg')

export default function App() {
  const [data,setData] = useState([
    {id:1,price:'GH 200', img: require('./assets/images/1.jpg')},
    {id:2,price:'GH 800', img: require('./assets/images/2.jpeg')},
    {id:3,price:'GH 400', img: require('./assets/images/3.jpg')},
    {id:4,price:'GH 700', img: require('./assets/images/4.jpg')},
    {id:5,price:'GH 600', img: require('./assets/images/5.jpg')}
  ])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <View style={{padding:10,elevation:8,backgroundColor:'white',margin:10,borderRadius:10}}>
            <Icon name='menu' size={25} />
          </View>
          <Text style={{fontSize:23,color:'#366901',fontWeight:'bold'}}>Fun Home</Text>
          <View style={{padding:10,elevation:8,backgroundColor:'white',margin:10,borderRadius:10}}><Icon name='cart' size={25} /></View>
        </View>

        <View style={styles.searchBar}>
          <TextInput style={{flex:1,paddingHorizontal:10}} placeholder='Search'/>
          <Icon name='magnify' size={25}/>
        </View>

        <View style={{paddingVertical:10}}>
          <Text style={{fontSize:30,color:'#639c27'}}>Find the best</Text>
          <Text style={{fontSize:23,color:'#366901',fontWeight:'bold'}}>Find the best</Text>
        </View>

        
        <Image source={sofa} style={{width:350,height:200,borderRadius:20}}/>

        <Text style={{fontSize:23,color:'#366901',fontWeight:'bold',marginTop:20}}>On Trend</Text>

        <FlatList
         horizontal={true}
         data={data}
         showsHorizontalScrollIndicator={false}
         renderItem={({item,index})=>
            <View style={styles.card}>
              <Image source={item.img} style={{width:'100%',height:100,borderRadius:5}}/>
              <Text style={{padding:10,textAlign:'right',fontSize:20,fontWeight:'bold'}}>{item.price}</Text>
              <View style={{position:'absolute',right:10,top:10,padding:5,width:30,height:30,backgroundColor:'white',elevation:10,borderRadius:50}}>
                <Icon name='heart' size={20}/>
              </View>
             
            </View>
        }/>

        <Text style={{fontSize:23,color:'#366901',fontWeight:'bold',marginTop:20}}>Newly Released</Text>
        <FlatList
         horizontal={true}
         data={data}
         inverted={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item,index})=>
            <View style={styles.card2}>
              <Image source={item.img} style={{width:'100%',height:200,borderRadius:5}}/>
              <Text style={{padding:10,textAlign:'right',fontSize:20,fontWeight:'bold'}}>{item.price}</Text>
              <View style={{position:'absolute',right:10,top:10,padding:5,width:30,height:30,backgroundColor:'white',elevation:10,borderRadius:50}}>
                <Icon name='cart' size={20}/>
              </View>
             
            </View>
        }/>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:30,
    paddingHorizontal:20,
    // backgroundColor:'#fffbee',
    flex:1
    // marginVertical:10
  },
  topBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  searchBar:{
    flexDirection:'row',
    elevation:7,
    padding:10,
    backgroundColor:'white',
    margin: 10,
    borderRadius:20,
    justifyContent:'space-between',
    alignItems:'center'
  },
  card:{
    width:200,
    height:150,
    marginRight:10,
    borderRadius:10,
    overflow:'hidden',
    elevation:3,
    marginHorizontal:10,
    backgroundColor:'white',
    marginVertical:15,
    padding: 5,
    backgroundColor: '#eef9ff'

  },
  card2:{
    width:300,
    height:250,
    marginRight:10,
    borderRadius:10,
    overflow:'hidden',
    elevation:3,
    marginHorizontal:10,
    backgroundColor:'white',
    marginVertical:15,
    // padding: 15,
    backgroundColor: '#dedede'

  }
  
});
