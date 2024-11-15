import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loader , setloader] = useState(true)
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
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
                // console.log(' user login', currentUser);
            } else {
                setUsers(null)
                setloader(false)
            }
        })

        return () => {
            unchanged()
        }
    }, [])

    console.log(users);
    const authInfo = {
        users,
        CreateUser,
        logOutUser,
        UserLogin,
        setUsers,
        loader

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;