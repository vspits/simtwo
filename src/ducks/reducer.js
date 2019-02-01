const initialState = {
    property_name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image_url: '',
    monthly_mortgage: '',
    desired_rent: ''
}

const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL'
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE'
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT'

export default function reducer (state = initialState, action){
    switch(action.type){
        case UPDATE_PROPERTY_NAME:
            return Object.assign({}, state, {property_name: action.payload})
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_STATE:
            return Object.assign({}, state, {state: action.payload})
        case UPDATE_ZIP:
            return Object.assign({}, state, {zip: action.payload})
        case UPDATE_IMAGE_URL:
            return Object.assign({}, state, {image_url: action.payload})
        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({}, state, {monthly_mortgage: action.payload})
        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, {desired_rent: action.payload})
        default:
            return state
    }
}

export function updatePropertyName(property_name){
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: property_name
    }
}

export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state){
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip){
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImageURL(image_url){
    return {
        type: UPDATE_IMAGE_URL,
        payload: image_url
    }
}

export function updateMonthlyMortgage(monthly_mortgage){
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthly_mortgage
    }
}

export function updateDesiredRent(desired_rent){
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desired_rent
    }
}