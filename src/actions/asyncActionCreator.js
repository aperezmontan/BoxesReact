export const asyncActionCreator = (startAction, endAction, asyncFunction) => (
  dispatch => {
    dispatch({ type: startAction });
    return asyncFunction(dispatch)
    .then((result) => dispatch({ type: endAction, payload: result }))
    .catch((e) => {
      console.error(e);
      dispatch({ type: endAction, payload: e })
    });
  }
)