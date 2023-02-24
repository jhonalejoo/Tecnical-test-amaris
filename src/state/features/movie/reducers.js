import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  getPopularSeries:{
    series: [],
    hasError: false,
    isLoading: false
  },
 getRecommendationSeries:{
    series: [],
    hasError: false,
    isLoading: false
  },
  getRecentSeries:{
    series:[],
    hasError: false,
    isLoading: false
  },
  getDetailsSerie:{
    serie:{},
    hasError: false,
    isLoading: false
  },
  getSeasons:{
    season:{},
    hasError: false,
    isLoading: false
  },
  favorites:[],
  serie:{},
  episode:{}
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getPopularSeriesAttempt: (state) => {
      state.getPopularSeries.isLoading = true;
    },
    getPopularSeriesSuccess: (state, action) => {
      state.getPopularSeries.isLoading = false;
      state.getPopularSeries.series = action.payload
    },
    getPopularSeriesErrors: (state) => {
      state.getPopularSeries.isLoading = false;
      state.getPopularSeries.hasError = true;
    },
    getRecommendationSeriesAttempt: (state) => {
      state.getRecommendationSeries.isLoading = true;
    },
    getRecommendationSeriesSuccess: (state, action) => {
      state.getRecommendationSeries.isLoading = false;
      state.getRecommendationSeries.series = action.payload
    },
    getRecommendationSeriesErrors: (state) => {
      state.getRecommendationSeries.isLoading = false;
      state.getRecommendationSeries.hasError = true;
    },
    addFavorite:(state,action)=>{
       state.favorites = [...state.favorites,action.payload]
    },
    removeFavorite:(state,action)=>{
       let temporalFavorites= state.favorites.filter((favorite)=>favorite.id !== action.payload.id);
       state.favorites=temporalFavorites
    },
    getDetailsSeriesAttempt: (state) => {
      state.getRecentSeries.isLoading = true;
    },
    getDetailsSerieSuccess: (state, action) => {
      state.getDetailsSerie.isLoading = false;
      state.getDetailsSerie.serie = action.payload
    },
    getDetailsSerieErrors: (state) => {
      state.getDetailsSerie.isLoading = false;
      state.getDetailsSerie.hasError = true;
    },
    getRecentSerieAttempt: (state) => {
      state.getRecentSeries.isLoading = true;
    },
    getRecentSeriesSuccess: (state, action) => {
      state.getRecentSeries.isLoading = false;
      state.getRecentSeries.series = action.payload
    },
    getRecentSeriesErrors: (state) => {
      state.getRecentSeries.isLoading = false;
      state.getRecentSeries.hasError = true;
    },
    getSeasonsAttempt:(state)=>{
      state.getSeasons.isLoading =false; 
    },
    getSeasonsSuccess:(state,action)=>{
      state.getSeasons.isLoading =true; 
      state.getSeasons.season =action.payload; 
    },
    getSeasonsErrors:()=>{
      state.getSeasons.isLoading =false; 
      state.getSeasons.hasError =true;
    },
    focusSerie:(state,action)=>{
      state.serie=action.payload
    },
    focusEpisode:(state,action)=>{
      state.episode=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  getPopularSeriesAttempt,
  getPopularSeriesSuccess,
  getPopularSeriesErrors,
  getRecommendationSeriesAttempt,
  getRecommendationSeriesErrors,
  getRecommendationSeriesSuccess,
  addFavorite,
  removeFavorite,
  getDetailsSerieErrors,
  getDetailsSerieSuccess,
  getDetailsSeriesAttempt,
  getRecentSerieAttempt,
  getRecentSeriesErrors,
  getRecentSeriesSuccess,
  getSeasonsAttempt,
  getSeasonsErrors,
  getSeasonsSuccess,
  focusSerie,
  focusEpisode
 } = movieSlice.actions

export default movieSlice.reducer