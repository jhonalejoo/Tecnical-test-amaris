import React, { useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { colors, fontFamily } from '../../utils/constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import Popular from './components/Popular';
import FavoriteItem from '../Commons/components/FavoriteItem';
import { addFavorite, focusSerie, getPopularSeriesAttempt, getRecommendationSeriesAttempt, removeFavorite } from '../../state/features/movie/reducers';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const popularSeriesState = useSelector((state) => state.movie.getPopularSeries);
    const recommendationSeriesState = useSelector(state => state.movie.getRecommendationSeries);
    const favorites= useSelector(state => state.movie.favorites)

    useEffect(() => {
        dispatch(getPopularSeriesAttempt(1))
        dispatch(getRecommendationSeriesAttempt(1))
    }, [])

    const handleFavorite=(item)=>{
        if(favorites.find((favorite)=>favorite.id === item.id)){
             dispatch(removeFavorite(item)) 
        }else{
            dispatch(addFavorite(item))
        }
    }
    const handleFocusSerie=(item)=>{
        dispatch(focusSerie(item))
        navigation.navigate('DetailsSerie')
    }

    const renderItemPopular = ({ item, index }) => {
        return (
            <Popular action={handleFocusSerie} navigation={navigation} index={index} item={item} />
        )
    }
    const ListFooterComponentPopular = () => {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator  color={colors.yellow} />
            </View>
        )
    };
    const renderItemRecommendation = ({ item, index }) => {
        return (
            <FavoriteItem favorite={favorites.find((favorite)=>favorite.id === item.id)} addFavorite={handleFavorite} index={index} item={item} />
        )
    }
    const ListFooterComponentRecommendation = () => {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator color={colors.yellow} />
            </View>
        )
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Home</Text>
                <IconAwesome
                    style={styles.iconHeader}
                    size={wp(6)}
                    name={'cog'}
                    color={colors.white}
                    onPress={() => navigation.navigate('InitView')}
                />
            </View>
            <View style={styles.containerPopular}>
                <Text style={styles.titlePopular}>Popular</Text>
                <FlatList
                    horizontal
                    keyExtractor={item => item.id}
                    data={popularSeriesState.series}
                    renderItem={renderItemPopular}
                    ListFooterComponent={popularSeriesState.isLoading === true ? ListFooterComponentPopular : null}
                />
                <TouchableOpacity style={{ marginVertical: wp(1), justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Text style={styles.seeAll}>Sell All</Text>
                    <IconAwesome
                        size={wp(4)}
                        style={{ marginLeft: wp(2) }}
                        name={'chevron-right'}
                        color={colors.yellow}
                        onPress={() => navigation.navigate('InitView')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.containerRecommendation}>
                <Text style={styles.titlePopular}>Recommendations</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    data={recommendationSeriesState.series}
                    renderItem={renderItemRecommendation}
                    ListFooterComponent={ListFooterComponentRecommendation}
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
    activityIndicator:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
         width: '100%' 
    },
    containerRecommendation: {
        marginTop: hp(2),
        paddingHorizontal: wp(4),
    },
    divider: {
        backgroundColor: colors.gray,
        height: hp(0.1),
        marginHorizontal: wp(4),
    },
    seeAll: {
        fontFamily: fontFamily.fontFamilyRegular,
        color: colors.yellow,
        fontSize: wp(4),
        marginBottom: hp(3),
    },
    containerPopular: {
        marginTop: hp(2),
        paddingHorizontal: wp(4),
        height: hp(42)
    },
    titlePopular: {
        fontFamily: fontFamily.fontFamilyBold,
        color: colors.white,
        fontSize: wp(5),
        marginTop: hp(1),
        marginBottom: hp(2)
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
});


export default Home;