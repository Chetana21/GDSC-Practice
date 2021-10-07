import React from 'react';
import  firebaseConfig from "../config"; 
import { initializeApp } from "firebase/app";
import { Text,StyleSheet,View,TextInput,TouchableOpacity, Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const auth = getAuth();



export default function signup({navigation}) {
    const [password , setpassword] = React. useState("");
    const [email , setemail] = React. useState("");
    function signupfunct() {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
     navigation.navigate("Your Saved Notes") ;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

        return(
            <View style={styles.Home}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput style={styles.title} onChange={(e) => setemail(e.target.value)} placeholder="e-mail id" />
                <TextInput style={styles.title} onChange={(e) => setpassword(e.target.value)} placeholder="password" />
                {/* <TextInput style={styles.textinput} placeholder="Note"/> */}
                <TouchableOpacity onPress ={signupfunct} >
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Sign Up</Text>
                    </View>
                 </TouchableOpacity>
                {/* <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Cancel</Text>
                    </View>
                </TouchableOpacity>  */}
                <Text style={styles.design}></Text>
            </View>
    );
}
const styles = StyleSheet.create({
    Home: {
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
    title: {
        alignSelf: "stretch",
        height: 60,
        margin: 10,
        color: "#070707",
        fontSize: 28,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "#070707",
        borderRadius: 10,
        shadowOffset: { width: 0, height: 1},
        shadowColor: "#035C66",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 451,
        Color: "#070707",
        fontSize: 28, 
        paddingLeft: 10,
        paddingBottom: 400,
        justifyContent: "space-evenly",
        borderWidth: 1,
        borderColor: "#070707",
        borderRadius: 10,
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
        borderWidth: 1,
        borderColor: "#707070",
        shadowOffset: { width: 0, height: 1},
        shadowColor: "#035C66",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
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
    text:{
       fontSize: 24,
    }
});