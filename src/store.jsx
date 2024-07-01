import {configureStore, createSlice, combineReducers} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const reducer1 = createSlice({
    name: 'd_st',
    initialState: {

        user: null
    },
    reducers: {

        deleteUserData: (state, action) => {
            state.user = null;
        },
        setUserData: (state, action) => {
            state.user = action.payload;

        },

    },

});
const reducer2 = createSlice({
    name: 'd',
    initialState: {
        page1val: '',
        brand_time: 0,
        reset_btn: '',
        defaultVal: 'default value'
    },
    reducers: {

        changeBrandTime: (state, action) => {
            state.brand_time = action.payload;
        },
        reset: (state, action) => {
            state.reset_btn = action.payload;
        },
    },
});
const rootReducer = combineReducers({
    someReducer1: reducer1.reducer,
    someReducer2: reducer2.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['someReducer2'],
    // whitelist: [''],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: {
//         someReducer1: reducer1.reducer,
//     },
//     devTools: true
// });

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        });
    }
});

export const persistor = persistStore(store);
