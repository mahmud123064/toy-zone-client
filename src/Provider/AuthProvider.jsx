import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            console.log('current user', user);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    // update User

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName : name , photoURL: photo

        })
    }

    // logout

    const logOut = () => {
        signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;