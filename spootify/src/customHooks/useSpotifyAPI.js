import axios from "axios";
import { useEffect } from "react";
import useFetch from "./useFetch";

function useSpotifyAPI({is_authenticated, set_is_authenticated, token, setToken}){

    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = 'http://localhost:3000';
    const auth_endpoint = "https://accounts.spotify.com/authorize"
    const response_type = "token"
    
    useEffect(() => {
        const hash = window.location.hash

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)
        set_is_authenticated(true)
    }, [])

    function authenticate(){
        window.location = `${auth_endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${response_type}`
    }

    function logout(){
        setToken(null)
        window.localStorage.removeItem("token")
        set_is_authenticated(false)
    }

    return {authenticate, logout}
}

export default useSpotifyAPI