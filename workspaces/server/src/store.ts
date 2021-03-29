// import type { History } from 'history';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { rootReducer, RootState } from '../../client/src/states';
// import { applyMiddleware, createStore } from 'redux';

// export const configureStore = (
//   initialState: Partial<RootState>,
//   history: History<RootState>
// ) => {
//   const middleWare = applyMiddleware(routerMiddleware(history));
//   const store = createStore(
//     connectRouter(history)(rootReducer),
//     initialState,
//     middleWare
//   );
//   return {
//     history,
//     store,
//   };
// };
