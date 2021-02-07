import produce from 'immer';

const INITIAL_STATE = {
  segment: null,
};

export default function segment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@segment/LOAD_SEGMENTS_REQUEST': {
        draft.segment = action.payload.segments;
        break;
      }
      case '@enterprise/ENTERPRISES_FAILURE': {
        draft.segment = null;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.segment = null;
        break;
      }
      default:
        break;
    }
  });
}
