/* eslint-disable no-useless-return */
const cacheMiddleware = (store) => (next) => (action) => {
  if (action.type === 'data/getPharmaceuticalItems' && store.getState().data.data[action.meta.arg.id]) {
    return;
  }

  next(action);
};

export default cacheMiddleware;
