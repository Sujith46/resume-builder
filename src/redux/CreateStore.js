import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import ResumeReducer from './reducer/resumeReducer';

const configureAppStore = (preloadedState) => {
    const store = configureStore({
        reducer: {
            ResumeReducer,
        },
        middleware: [...getDefaultMiddleware()],
        preloadedState,
        enhancers: []
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducer/resumeReducer', () => store.replaceReducer(ResumeReducer));
    }

    return store;
};

const Store = configureAppStore();

export default Store;