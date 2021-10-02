import React from 'react';
import { Text,StyleSheet,View,TextInput,TouchableOpacity, Dimensions} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from 'react-native-gesture-handler'

const ListButton = ({title,navigation}) =>{
    return(
      <TouchableOpacity onPress={()=> {navigation.navigate("See Your Note")}} style={styles.itemContainer}>
        <View><Text style={styles.itemTitle}>{title}</Text></View>
        <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={()=> {navigation.navigate("Your Notes List")}}>
        <Ionicons name="trash-outline" size={24} color="#035C66"/>     
      </TouchableOpacity>
       </View>
      </TouchableOpacity>);
}

export default function names({navigation}) {
        return(
            <View style={styles.names}>
                <Text style={styles.header}>Your Notes</Text>
                 <FlatList 
                 data={[{title: "Note 1", color: "#035C66"}, 
                 {title: "Note 2", color: "035C66"},
                 {title: "Note 3", color: "035C66"},
                 {title: "Note 4", color: "035C66"},]}
                 renderItem={({item: {title,color},index}) =>{
                     return(
                         <ListButton title ={title} color={color} navigation={navigation}/>
                     ); 
                 }}
                 />
                 <TouchableOpacity onPress={()=> navigation.navigate("Add Note")}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Add Note</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.design}></Text>
            </View>
    );
}

const styles = StyleSheet.create({
    names: {
      backgroundColor: "#C9F5F3",
      width:Dimensions.get("window").width,
      height:Dimensions.get("window").height,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    itemTitle: {fontSize: 24, padding:10, color: "#035C66"},
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        width:Dimensions.get("window").width -10 ,
        flex: 1,
        borderRadius: 10,
        margin: 5,
        padding:15,
        marginTop:15,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#070707",
        shadowOffset: { width: 0, height: 1},
        shadowColor: "#035C66",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        alignItems: "stretch",
        fontSize: 40,
        color: "#035C66",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#21D2CC",
        width:Dimensions.get("window").width,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        paddingTop: 20,
        paddingBottom: 20,
     },
     button: {
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        width: 125,
        height: 40,
        borderWidth: 1,
        borderColor: "#707070",
        shadowOffset: { width: 0, height: 1},
        shadowColor: "#035C66",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 6,
        marginLeft: 200,
        marginBottom: 20,
    },
    buttontext: {
        color: "#035C66",
        fontWeight: "semiBold",
        fontSize: 24,
        textAlign: "center",
    },
   
    design:{
        backgroundColor: "#21D2CC",
        height: 33,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width:Dimensions.get("window").width,
    },
});