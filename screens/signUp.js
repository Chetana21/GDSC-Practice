import React from 'react';
import { Text,StyleSheet,View,TextInput,TouchableOpacity, Dimensions} from 'react-native';

export default function signup({navigation}) {
        return(
            <View style={styles.Home}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput style={styles.title} placeholder="e-mail id" />
                <TextInput style={styles.title} placeholder="username" />
                <TextInput style={styles.title} placeholder="password" />
                {/* <TextInput style={styles.textinput} placeholder="Note"/> */}
                <TouchableOpacity onPress={()=> navigation.navigate("Create Note")}>
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