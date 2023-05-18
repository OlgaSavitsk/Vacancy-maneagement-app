import { ActionType, AppAction, AppState } from 'store';

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.SetParams:
      return { ...state, params: { ...state.params, ...action.payload } };
    case ActionType.AddFavorites: {
      let { ids } = state.favorites;
      if (state.favorites.ids.includes(action.payload)) {
        ids = ids.filter((fav) => fav !== action.payload);
      } else {
        ids = [...state.favorites.ids, action.payload];
      }
      return { ...state, favorites: { ids: [...ids] } };
    }
    case ActionType.SetData:
      return { ...state, data: [...action.payload]};
    case ActionType.Fetching:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
