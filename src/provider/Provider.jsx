import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const UserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unchanged = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUsers(currentUser)
                // console.log(' user login', currentUser);
            } else {
                setUsers(null)
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

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;