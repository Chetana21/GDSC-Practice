import React from 'react';
import { Text,StyleSheet,View,TextInput,TouchableOpacity, Dimensions} from 'react-native';

export default function note({navigation}) {
        return(
            <View style={styles.note}>
                <Text style={styles.header}>Name Of Title</Text>
                <TextInput style={styles.textinput} />
                <TouchableOpacity onPress={()=> navigation.navigate("Notes List")}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Save</Text>
                    </View>
                </TouchableOpacity>
                
                <Text style={styles.design}></Text>
            </View>
    );
}

const styles = StyleSheet.create({
    note: {
      backgroundColor: "#C9F5F3",
      width:Dimensions.get("window").width,
      height:Dimensions.get("window").height,
      alignItems: "center",
      justifyContent: "space-between",
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
  
    textinput: {
        alignSelf: 'center',
        height: 600,
        Color: "#070707",
        fontSize: 28, 
        paddingLeft: 10,
        paddingBottom: 400,
        justifyContent: "space-evenly",
        borderWidth: 1,
        borderColor: "#070707",
        borderRadius: 10,
        width:Dimensions.get("window").width -20,
        shadowOffset: { width: 0, height: 1},
        shadowColor: "#035C66",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        width: 151,
        height: 48,
        marginLeft:200,
        borderWidth: 1,
        borderColor: "#707070",
        shadowOffset: { width: 0, height: 1},
        shadowColor: "#035C66",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 6,
    },
    buttontext: {
        color: "#035C66",
        fontWeight: "semiBold",
        fontSize: 32,
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