const { createContext } = require("react");

const SpotifyAPIContext = createContext({
    is_authenticated : false,
    set_is_authenticated: ()=>{},
    token: null,
    setToken: ()=>{}
})

export default SpotifyAPIContext;