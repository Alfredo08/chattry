import React, {useState} from 'react';
import { 
    ImageBackground, 
    Image,
    StyleSheet, 
    TouchableOpacity,
    View, 
    Text, 
    TextInput, 
    Pressable,
    Platform, 
    KeyboardAvoidingView 
} from 'react-native';

const image = require('../assets/images/bg.png');
const icon = require('../assets/username-icon.jpg');


export default class Start extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            bgColor: ''
        };
    }


    changebgColor = (newColor) => {
        this.setState({ bgColor: newColor });
    };

    //background color choices
    colors = {
        black: "#090C08",
        independence: "#474056",
        duskGray: "#8A95A5",
        composedGreen: "#B9C6AE",
    };

    render() {
        return (
        <View style={styles.container}>

            <ImageBackground source={image} resizeMode='cover' style={styles.image}>

                <View 
                accessible={false}
                accessibilityLabel="Chattry Messaging App"
                accessibilityHint="The title of the app"
                accessibilityRole="header"
                style={styles.titlebox}>
                    <Text style={styles.title}>Chattry</Text>                
                </View>

                <View style={styles.box}>
                    <View style={styles.inputBox}>
                        
                        <Image source={icon} style={styles.userIcon}/>

                        <TextInput
                            accessible={true}
                            accessibilityLabel="Type your name here"
                            accessibilityHint="Lets you enter your name"
                            accessibilityRole="search"
                            style={styles.input}
                            onChangeText={(text) => this.setState({name: text})}
                            value={this.state.name}
                            placeholder='Your Name'
                        ></TextInput>

                    </View>
                    <View style={styles.colorBox}>

                        <Text style={styles.colorText}>Choose Background Color</Text>
                        
                        <View style={styles.colorPalette}>

                            <TouchableOpacity
                            accessible={true}
                            accessibilityLabel="Rich Black as background"
                            accessibilityHint="Settting color Rich Black as chat background"
                            accessibilityRole="combobox"
                            onPress={() =>{ this.changebgColor(this.colors.black)}}
                            style={ styles.colorSelection}
                            >
                                <View style={styles.color1}>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                            accessible={true}
                            accessibilityLabel="Independence Purple as background"
                            accessibilityHint="Settting color Independence Purple as chat background"
                            accessibilityRole="combobox"
                            onPress={() =>{ this.changebgColor(this.colors.independence)}}
                            style={ styles.colorSelection}
                            >
                                <View style={styles.color2}>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                            accessible={true}
                            accessibilityLabel="Dusk Gray as background"
                            accessibilityHint="Settting color Dusk Gray as chat background"
                            accessibilityRole="combobox"
                            onPress={() =>{ this.changebgColor(this.colors.duskGray)}}
                            style={ styles.colorSelection}
                            >
                                <View style={styles.color3}>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                            accessible={true}
                            accessibilityLabel="Composed Green as background"
                            accessibilityHint="Settting color Composed Green as chat background"
                            accessibilityRole="combobox"                            
                            onPress={() =>{ this.changebgColor(this.colors.composedGreen)}}
                            style={ styles.colorSelection}
                            >
                                <View style={styles.color4}>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <Pressable 
                    accessible={true}
                    accessibilityLabel="Start Chat"
                    accessibilityHint="Navigating to chat page"
                    accessibilityRole="button"
                    style={styles.button}  
                    onPress={() =>
                        this.props.navigation.navigate("Chat", {
                            name: this.state.name,
                            bgColor: this.state.bgColor,
                        })}
                    >  
                        <Text style={styles.buttontext}>Start Chatting</Text>
                    </Pressable> 
                </View>
            </ImageBackground>

        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlebox:{
        height: '44%',
        width: "88%"
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        padding: 20
    },
    box: {
        marginBottom: 30,
        backgroundColor: "white",
        flexGrow: 1,
        flexShrink: 0,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        height: 260,
        minHeight: 260,
        maxHeight: 300,
        height: "44%",
        width: "88%"
    },
    inputBox: {
        flexDirection: 'row',
        width:"88%",
        borderColor: '#757083', 
        borderWidth: 1,
        padding: 10
    },
    userIcon:{
        padding: 10,
        margin: 5,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
        opacity: 0.5
    },
    input: {
        fontSize: 16,
        fontWeight: "300",
        color: '#757083',
        opacity: 0.5
    },
    colorBox:{
        flexDirection: 'column',
        padding: 20,
        marginRight: 'auto',
        width: "88%"
    },
    colorText:{
        fontSize: 16,
        fontWeight: "300",
        color: '#757083',
        opacity: 1,
        padding: 5,
    },
    colorPalette: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    colorSelection:{

        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white'

    },
    color1:{
        flexDirection: 'row',
        backgroundColor: '#090C08',
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 2
    },
    color2:{
        flexDirection: 'row',
        backgroundColor: '#474056',
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 2
    },
    color3:{
        flexDirection: 'row',
        backgroundColor: '#8A95A5',
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 2
    },
    color4:{
        flexDirection: 'row',
        backgroundColor: '#B9C6AE',
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 2
    },
    button: {
        flexDirection: 'column',
        backgroundColor: "#757083", 
        width: "88%"
    },
    buttontext: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        padding: 20
    }
});