 import * as Service from '../services/timelineService'
 import * as Constant from '../constants/index'
 import mockData from "../assets/data/mockdata.js";

 export const getTimelineDataHandler = () => {
    //  return dispatch => {
    //      Service.getTimelineData().then((response) => {
    //          if (response.isSuccess) {
    //              dispatch(timelineData(response))
    //          } else {
    //              dispatch(timelineData(response.error))
    //          }
    //      })
    //  }
    return dispatch => {
             dispatch(timelineData(mockData))
         }
 }

 export const timelineData = data => {
     return {
         type: Constant.TIMELINE_DATA,
         data
     }
 }

 export const timelineError = data => {
     return {
         type: Constant.TIMELINE_ERROR,
         data
     }
 }