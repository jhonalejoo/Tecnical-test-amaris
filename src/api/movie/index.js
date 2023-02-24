import { api, baseURL } from "../../utils/env";

const POPULAR_URL =`${baseURL}tv/popular?api_key=${api}&language=en-US&`;
const RECOMMENDATIONS_URL=`${baseURL}tv/top_rated?api_key=${api}&language=en-US&`;
const RECENT_URL=`${baseURL}tv/airing_today?api_key=${api}&language=en-US&`;



export const getPopularSeries = (page = 1) => {
    return fetch(`${POPULAR_URL}page=${page}`).then(res => res.json())
        .then(json => {
            return json.results
        })
        .catch(err => {
            throw err
        })
  };
  export const getRecommendationSeries = (page = 1) => {
    return fetch(`${RECOMMENDATIONS_URL}page=${page}`).then(res => res.json())
        .then(json => {
            return json.results
        })
        .catch(err => {
            throw err
        })
  };
  export const getRecentSeries = (page = 1) => {
    return fetch(`${RECENT_URL}page=${page}`).then(res => res.json())
        .then(json => {
            if(json?.results){
                return json.results
            }else{
                throw json
            }
        })
        .catch(err => {
            throw err
        })
  };
  export const getDetailsSerie = (id) => {
    return fetch(`${baseURL}tv/${id}?api_key=${api}&language=en-US`).then(res => res.json())
        .then(json => {
            if(json?.id){
                return json
            }else{
                 throw json
            }
        })
        .catch(err => {
            throw err
        })
  };
  export const getSeasons = (data) => {
    return fetch(`${baseURL}/tv/${data.tvId}/season/${data.seasonNumber}?api_key=${api}&language=en-US`).then(res => res.json())
        .then(json => {
            if(json?.id){
                return json
            }else{
                 throw json
            }
        })
        .catch(err => {
            throw err
        })
  };