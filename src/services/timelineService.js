import { getRequest } from '../utils/requestUtil'
import { TIMELINE_URL } from '../constants'

export const getTimelineData = () => {
    return getRequest(`${TIMELINE_URL}`)
        .then((response) => {
            response.isSuccess = true
            return response
        })
        .catch(() => {
            console.log("Error")
        })
}