import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={styles.containerStyles} source={require("./scr/image/image2.png")}>
        <View style={styles.viewStyles}>
        <Image style={styles.imageStyles1} source={require("./scr/image/avarta.png")}></Image>
      </View>
      </ImageBackground>  

      <View style={styles.containerText}>
        <Text style={styles.textStyle}>Top 10 Yoga paths you could take to be stress free today</Text>
        <Text style={styles.textStyle2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. UT enim ad minim veniam. READ MORE...</Text>
      </View>    

      <View style={styles.viewStyle2}>
        <Image style={styles.imageStyles2} source={require("./scr/image/thumb_up.png")}></Image>
        <Image style={styles.imageStyles3} source={require("./scr/image/chat.png")}></Image>
        <Image style={styles.imageStyles4} source={require("./scr/image/share.png")}></Image>
        <Image style={styles.imageStyles5} source={require("./scr/image/Ellipse5.png")}></Image>
        <Image style={styles.imageStyles6} source={require("./scr/image/Ellipse5.png")}></Image>
        <Image style={styles.imageStyles7} source={require("./scr/image/Ellipse5.png")}></Image>
        <Image style={styles.imageStyles8} source={require("./scr/image/Ellipse5.png")}></Image>
        <Image style={styles.imageStyles9} source={require("./scr/image/Ellipse5.png")}></Image>
        <Text style={styles.textStyle3}>+127</Text> 
      </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    flexDirection: "column",
    width: "84.2%",
    height: "81.4%"
  },
  containerStyles: 
  {
    width: 330,
    height: 500,
    marginTop: 45,
    marginLeft: 25,
    marginRight: 25,
  },
  containerText:{

    flex: 1,
    marginLeft: 50,
    marginTop: 17,
  },
  textStyle:
  {
    fontSize: 21, 
  },
  textStyle2:
  {
    fontSize: 14,
  },
  imageStyles1:
  {
    marginTop: 430,
    justifyContent: "center",
    marginLeft: 10,
  },
  viewStyles:
  {
    flex: 1,
    flexDirection: "column", 
  },
  viewStyle2:
  {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 40,
    width: 300,
    height: 70,
  },
  imageStyles3:
  {
    width: 28,
    height: 28,
    marginLeft: 15,
  },
  imageStyles4:
  {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
  imageStyles5:
  {
    width: 15,
    height: 15,
    marginLeft: 90,
  },
  imageStyles6:
  {
    width: 15,
    height: 15, 
  },
  imageStyles7:
  {
    width: 15,
    height: 15,
  },
  imageStyles8:
  {
    width: 15,
    height: 15,
  },
  imageStyles9:
  {
    width: 15,
    height: 15,
  },
});
