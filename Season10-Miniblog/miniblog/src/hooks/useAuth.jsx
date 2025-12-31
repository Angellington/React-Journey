import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  // register
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      return user;
    } catch (err) {
      setLoading(true);
      setError(null);

      let systemErrorMessage;

      if (err.message.includes("Password")) {
        systemErrorMessage = "A senha preicsa conter pelo menos 6 caracteres";
      } else if (err.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro. Por favor, tente mais tarde.";
      }
      setError(systemErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  //logout - sign out
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  // login - sign in
  const login = async (data) => {
    await checkIfIsCancelled();
    setLoading(true);
    setError(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (err) {
      let systemErrorMessage;

      if (err.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (err.message.includes("wrong-password")) {
        systemErrorMessage = "Senha errada";
      } else if (err.message.includes("invalid")) {
        systemErrorMessage = "Credenciais inválidas!";
      } else{
        systemErrorMessage = "Ocorreu um erro. Por favor, tente mais tarde.";
      }
      setError(systemErrorMessage);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};

export default useAuth;
