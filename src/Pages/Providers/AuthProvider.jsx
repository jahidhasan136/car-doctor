import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'applicaiton/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('car-access-token', data.token)
                    })
            }
            else {
                localStorage.removeItem('car-access-token')

            }
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        user,
        loader,
        createUser,
        login,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;