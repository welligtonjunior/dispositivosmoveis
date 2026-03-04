import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function Login(){
    return(
       <View style={styles.container}>
           <Text style={styles.titulo} >FLAMENGO</Text>
           <TextInput style={styles.input} />
           <TextInput style={styles.input} />
           <TouchableOpacity style={styles.botao}>
               <Text>Entrar</Text>
           </TouchableOpacity>
       </View> 
    );
}

const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: 'red',
       alignItems: 'center',
       justifyContent: 'center',
       padding: 20,
   },
   titulo:{
    fontFamily: 'arial',
    marginBottom: 20,
    fontSize: 24,
    color:'#000000',
    fontWeight: 'bold',
   },
   input:{
    width: '100%',
    height: 55,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
   },
   botao:{
    width: '100%',
    height: 55,
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
   }
})