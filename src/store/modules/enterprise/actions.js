export function enterprisesSuccess(enterprises) {
  return {
    type: '@enterprise/ENTERPRISES_SUCCESS',
    payload: {enterprises},
  };
}

export function enterprisesFailure() {
  return {
    type: '@enterprise/ENTERPRISES_FAILURE',
  };
}
