import initialState from './initialState';
import { Reducer } from 'redux';
import { ServicesState, ServicesActionConst } from './types';
import { AuthActionConst } from 'redux/modules/auth/types';

const reducer: Reducer<ServicesState, any> = (state = initialState, action): ServicesState => {
  switch (action.type) {
    case ServicesActionConst.GET_SERVICES_FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case ServicesActionConst.ADD_SERVICES_FETCHING:
      return {
        ...state,
        isAdding: true,
      }
    case ServicesActionConst.EDIT_SERVICES_FETCHING:
      return {
        ...state,
        isEditing: true,
      }
    case ServicesActionConst.DELETE_SERVICES_FETCHING:
      return {
        ...state,
        isDeleting: true,
      }
    case ServicesActionConst.GET_SERVICES_FULFILLED:  
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      }
    case ServicesActionConst.ADD_SERVICES_FULFILLED:
      return {
        ...state,
        isAdding: true,
        list: [
          ...state.list,
          action.payload
        ]
      }
    case ServicesActionConst.EDIT_SERVICES_FULFILLED:
      return {
        ...state,
        isEditing: true,
        list: state.list.map((service) => {
          if(service.key === action.payload.key) {
            return action.payload
          }
          return service
        })
      }
    case ServicesActionConst.DELETE_SERVICES_FULFILLED:
      return {
        ...state,
        isDeleting: false,
        list: state.list.filter((service) => service.key !== action.payload)
      }
    case ServicesActionConst.GET_SERVICES_REJECTED:
    case ServicesActionConst.ADD_SERVICES_REJECTED:
    case ServicesActionConst.EDIT_SERVICES_REJECTED:
    case ServicesActionConst.DELETE_SERVICES_REJECTED:
      return {
        ...state,
        isFetching: false,
        isEditing: false,
        isDeleting: false,
        isAdding: false,
        error: {
          message: action.payload.message,
          statusCode: action.payload.code,
        },
      };
    case AuthActionConst.LOGOUT_FULFILLED:
      return initialState;
    default:
      return state
  }
}

export default reducer