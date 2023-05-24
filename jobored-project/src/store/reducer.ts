import { AGREEMENT_VALUE } from 'constants/common.constants';
import { FilterParams } from 'core/models';
import { ActionType, AppAction, AppState } from 'store';

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.SetParams:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.payload,
          no_agreement: shouldShowAgreement(action.payload) ? AGREEMENT_VALUE : undefined,
        },
      };
    case ActionType.AddFavorites: {
      let { ids } = state.favorites;
      if (state.favorites.ids.includes(action.payload as number)) {
        ids = ids.filter((fav) => fav !== action.payload);
      } else {
        ids = [...state.favorites.ids, action.payload as number];
      }
      return { ...state, favorites: { ids: [...ids] } };
    }
    case ActionType.SetData:
      return { ...state, data: action.payload };
    case ActionType.SetIndustryData:
      return { ...state, industryData: action.payload };
    case ActionType.Fetching:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};

function shouldShowAgreement(payload: FilterParams) {
  return payload.payment_from || payload.payment_to;
}
