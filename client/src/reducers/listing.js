import { FETCHING_LISTING, GET_CURRENT_LISTING_SUCCESS, CHANGE_LISTING_FIELD, UPLOAD_LISTING_IMAGE, GET_LISTINGS_SUCCESS, DELETE_IMAGE, FETCHING_LISTINGS, POST_LISTING_SUCCESS, ADD_LISTING_FORM_ERROR, CLEAR_ERRORS } from '../constants';


export const initialState = {
  currentListing: {
    pictures: [],
    user: {},
  },
  listingForm: {
    title: '',
    body: '',
    images: [],
    image: '',
    type: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  },
  userListings: [],
  formErrors: {
  },
  isFetching: false,
};

export const listing = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LISTING_FIELD:
      return ({ ...state, listingForm: { ...state.listingForm, [action.field]: action.value } });
    case UPLOAD_LISTING_IMAGE:
      return ({
        ...state,
        formErrors: { ...state.formErrors, image: null },
        listingForm: { ...state.listingForm, images: [...state.listingForm.images, action.value], image: '' },
      });
    case GET_LISTINGS_SUCCESS:
      return ({ ...state, userListings: action.payload, isFetching: false });
    case POST_LISTING_SUCCESS:
      return ({ ...state, listingForm: initialState.listingForm });
    case DELETE_IMAGE:
      const spliced = [...state.listingForm.images];
      spliced.splice(action.index, 1);
      return ({ ...state, listingForm: { ...state.listingForm, images: spliced } });
    case ADD_LISTING_FORM_ERROR:
      return ({ ...state, formErrors: { ...state.formErrors, [action.error]: action.message } });
    case CLEAR_ERRORS:
      return ({ ...state, formErrors: {} });
    case GET_CURRENT_LISTING_SUCCESS:
      return ({ ...state, currentListing: action.payload, isFetching: false });
    case FETCHING_LISTING:
      return ({ ...state, isFetching: true });
    default:
      return state;
  }
};
