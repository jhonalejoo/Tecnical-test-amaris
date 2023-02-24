import { View,StyleSheet,FlatList,Text} from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { colors, fontFamily } from '../../utils/constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FavoriteItem from '../Commons/components/FavoriteItem';
import Header from '../Commons/components/Header';
import { addFavorite, removeFavorite } from '../../state/features/movie/reducers';

const Favorite = () => {
  const favorites = useSelector(state => state.movie.favorites)
  const dispatch = useDispatch();


  const handleFavorite=(item)=>{
    if(favorites.find((favorite)=>favorite.id === item.id)){
         dispatch(removeFavorite(item)) 
    }else{
        dispatch(addFavorite(item))
    }
}

const listEmptyComponentFavorite = () => {
  return (
      <>
          <View style={{alignSelf: 'center', alignItems: 'center', marginTop: wp(20) }}>
              <Text maxFontSizeMultiplier={1} style={styles.errorText}>No tienes ningún favorito</Text>
          </View>
      </>
  )
};

  const renderItemFavorite = ({ item, index }) => {
    return (
      <FavoriteItem
        favorite={favorites.find((favorite) => favorite.id === item.id)}
        addFavorite={handleFavorite}
        color={colors.yellow}
        index={index}
        item={item} />
    )
  }

  return (
    <View style={styles.container}>
      <Header title={'Favorites'} />
      <View style={{paddingHorizontal:wp(5)}}> 
      <FlatList
         keyExtractor={item => item.id}
         data={favorites}
         contentContainerStyle={{marginTop:hp(2)}}
         renderItem={renderItemFavorite}
         ListEmptyComponent={listEmptyComponentFavorite}           
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
  errorText: {
    color: colors.yellow,
    fontSize: hp(2),
    fontFamily:fontFamily.fontFamilyRegular
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

export default Favorite