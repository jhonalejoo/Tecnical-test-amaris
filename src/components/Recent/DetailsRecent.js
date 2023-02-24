import { View,StyleSheet,FlatList} from 'react-native'
import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { colors, fontFamily } from '../../utils/constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../Commons/components/Header';
import {getSeasonsAttempt} from '../../state/features/movie/reducers';
import BackHeader from '../Commons/components/BackHeader';
import DetailsRecentItem from './components/DetailsRecentItem';

const DetailsRecent = ({navigation}) => {
  const dispatch = useDispatch();
  const detailsState = useSelector(state => state.movie.getDetailsSerie);
  const seasonState = useSelector(state => state.movie.getSeasons);


  const renderItemDetailsRecent = ({ item, index }) => {
    return (
      <DetailsRecentItem  navigation={navigation} item={item} index={index}/>
      )
  }

  useEffect(() => {
      if(detailsState.serie?.id){
        dispatch(getSeasonsAttempt({tvId:detailsState.serie.id,seasonNumber:detailsState.serie.number_of_seasons}))
      }
  }, [detailsState.serie])


  return (
    <View style={styles.container}>
      <Header title={'Recent'} />
      <View style={styles.containerRecent}>
      <BackHeader title={detailsState.serie?.name ? detailsState.serie?.name :''} navigation={navigation}/>
      <FlatList
           keyExtractor={item => item.id}
           contentContainerStyle={{marginTop:hp(2)}}
           data={seasonState.season?.episodes ?seasonState.season.episodes : []}
           renderItem={renderItemDetailsRecent}
        />
      </View>
    </View>
  )
}

export default DetailsRecent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.black,
  },
  containerRecent:{
   marginTop:hp(5),
   paddingHorizontal:wp(5)
  },
})