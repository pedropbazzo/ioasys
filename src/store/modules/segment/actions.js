export function loadSegmentsRequest(segments) {
  return {
    type: '@segment/LOAD_SEGMENTS_REQUEST',
    payload: { segments },
  };
}
