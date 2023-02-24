import { call,all,put, takeEvery } from 'redux-saga/effects';
import { getDetailsSerie,getPopularSeries, getRecentSeries, getRecommendationSeries, getSeasons } from '../../../api/movie';
import { 
    getDetailsSerieErrors,
    getDetailsSeriesAttempt,
    getDetailsSerieSuccess,
    getPopularSeriesAttempt, 
    getPopularSeriesErrors, 
    getPopularSeriesSuccess, 
    getRecentSerieAttempt, 
    getRecentSeriesErrors, 
    getRecentSeriesSuccess, 
    getRecommendationSeriesAttempt, 
    getRecommendationSeriesErrors, 
    getRecommendationSeriesSuccess, 
    getSeasonsAttempt,
    getSeasonsErrors,
    getSeasonsSuccess
} from './reducers';

function* getPopularSeriesFlow(action) {
    try {
        const  series= yield call(getPopularSeries, action.payload);
        yield put(getPopularSeriesSuccess(series));
    }catch (error) {
        yield put(getPopularSeriesErrors(error));
    }
}
function* getRecommendationSeriesFlow(action) {
    try {
        const  series= yield call(getRecommendationSeries, action.payload);
        yield put(getRecommendationSeriesSuccess(series));
    }catch (error) {
        yield put(getRecommendationSeriesErrors(error));
    }
}
function* getRecentSeriesFlow(action) {
    try {
        const  series= yield call(getRecentSeries, action.payload);
        yield put(getRecentSeriesSuccess(series));
    }catch (error) {
        yield put(getRecentSeriesErrors(error));
    }
}
function* getDetailsSerieFlow(action) {
    try {
        const  serie= yield call(getDetailsSerie, action.payload);
        yield put(getDetailsSerieSuccess(serie));
    }catch (error) {
        yield put(getDetailsSerieErrors(error));
    }
}
function* getSeasonsFlow(action) {
    try {
        const  episodes= yield call(getSeasons, action.payload);
        yield put(getSeasonsSuccess(episodes));
    }catch (error) {
        yield put(getSeasonsErrors(error));
    }
}

function* movieWatcher(){
    yield all([
        takeEvery(getPopularSeriesAttempt.type,getPopularSeriesFlow),
        takeEvery(getRecommendationSeriesAttempt.type,getRecommendationSeriesFlow),
        takeEvery(getRecentSerieAttempt.type,getRecentSeriesFlow),
        takeEvery(getDetailsSeriesAttempt.type,getDetailsSerieFlow),
        takeEvery(getSeasonsAttempt.type,getSeasonsFlow)
    ])
 }

 export default movieWatcher
