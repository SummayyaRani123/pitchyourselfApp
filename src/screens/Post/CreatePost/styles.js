import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignContent: 'center',
    backgroundColor:'white'
  },
topview:
{flexDirection:'row',
justifyContent:'flex-start',
          alignItems:'center',
          marginTop:wp('10%')
        },
topicon:
{
  width:wp('5%'),
  height:wp('5%'),
  marginLeft:wp('3%'),
  marginRight:wp('5%')
},
  buttonview:
  {
marginTop:hp('10%')
  },

  lasttext:
  {
    color: 'rgba(26, 26, 26, 0.56)',
    fontWeight: '400',
    fontSize: hp('1.8%'),
    marginLeft:wp('3%'),
    width:wp('70%')
  },

});
export default styles;
