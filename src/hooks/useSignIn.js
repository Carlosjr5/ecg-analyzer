import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "@/firebase";

const useSignIn = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signIn = async (email, pwd) => {
    try {
      setLoading(true);
      let res = await signInWithEmailAndPassword(auth, email, pwd);
      setError("");
      setLoading(false);
      console.log(res.user);

      return res.user;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { error, loading, signIn };
};

export default useSignIn;
