import produce from 'immer';

const INITIAL_STATE = {
  enterprises: null,
  loading: null,
};

export default function enterprise(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.loading = true;
        break;
      }
      case '@enterprise/ENTERPRISES_SUCCESS': {
        draft.enterprises = action.payload.enterprises;
        draft.loading = false;
        break;
      }
      case '@enterprise/ENTERPRISES_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.enterprises = null;
        break;
      }
      default:
        break;
    }
  });
}
