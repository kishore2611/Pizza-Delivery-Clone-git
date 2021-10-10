import { createContext, useEffect, useReducer } from 'react'
import cartItems from './intialstates/cartItem'
import initstate from './intialstates/IntialPizzaData'
import userInfo from './intialstates/userInfo'
import CartReducer from './reducers/CartReducer'
import loginReducer from './reducers/loginReducer'
import getAllPizzaReducers from './reducers/PizzaReducers'
import placeOrderReducer from './reducers/PlaceOrderReducer'
import userReducer from './reducers/userReducer'

export const GlobalContext = createContext({})
export const GlobalProvider = ({children}) =>{
    const [allPizzaState, dispatch] = useReducer(getAllPizzaReducers,initstate)
    const [cartItemState, cartdispatch] = useReducer(CartReducer, cartItems)
    const [userState, userdispatch] = useReducer(userReducer, {})
    const [loginState, logindispatch] = useReducer(loginReducer,userInfo)
    const [placeOrderState, placeorderdispatch] = useReducer(placeOrderReducer, {})
    
    
    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItemState.cartItems))
    },[cartItemState])

    return(
        <GlobalContext.Provider 
        value={{allPizzaState,dispatch,cartItemState,cartdispatch,userState, userdispatch,loginState, logindispatch,placeOrderState, placeorderdispatch}}>
        {children}
    </GlobalContext.Provider>
    )
}
