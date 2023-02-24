import { View,StyleSheet,ActivityIndicator,FlatList} from 'react-native'
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { colors, fontFamily } from '../../utils/constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../Commons/components/Header';
import RecentItem from './components/RecentItem';
import { getDetailsSeriesAttempt, getRecentSerieAttempt } from '../../state/features/movie/reducers';

const Recent = ({navigation}) => {
  const dispatch = useDispatch();
  const recentSeriesState = useSelector(state => state.movie.getRecentSeries);


  useEffect(() => {
    dispatch(getRecentSerieAttempt(1))
  }, [])
  
const handleItem =(item)=>{
    dispatch(getDetailsSeriesAttempt(item.id))
    navigation.navigate('DetailsRecent')
}

  const renderItemRecent = ({ item, index }) => {
    return (
      <RecentItem action={handleItem} navigation={navigation} item={item} index={index}/>
      )
}
const ListFooterComponentRecent = () => {
    return (
        <View style={styles.activityIndicator}>
            <ActivityIndicator  color={colors.yellow} />
        </View>
    )
};

  return (
    <View style={styles.container}>
      <Header title={'Recent'} />
      <View style={styles.containerRecent}>
        <FlatList
           keyExtractor={item => item.id}
           data={recentSeriesState.series}
           renderItem={renderItemRecent}
           ListFooterComponent={ListFooterComponentRecent}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.black,
  },
  containerRecent:{
   alignItems:'center' ,
   marginTop:hp(5)
  },
  header: {
    marginTop: hp(8),
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textHeader: {
    fontFamily: fontFamily.fontFamilyRegular,
    color: colors.white,
    fontSize: wp(5),
  },
  iconHeader: {
    position: 'absolute',
    right: wp(10)
  }
})
export default Recent