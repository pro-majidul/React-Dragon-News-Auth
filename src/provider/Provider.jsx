import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loader, setloader] = useState(true)
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const updateuserprofile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const logOutUser = () => {
        setloader(true)
        return signOut(auth)
    }

    const UserLogin = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unchanged = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUsers(currentUser)
                setloader(false)
            } else {
                setUsers(null)
                setloader(false)
            }
        })

        return () => {
            unchanged()
        }
    }, [])

    const authInfo = {
        users,
        CreateUser,
        logOutUser,
        UserLogin,
        setUsers,
        loader,
        updateuserprofile,
        googleLogin,
        githubLogin

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;