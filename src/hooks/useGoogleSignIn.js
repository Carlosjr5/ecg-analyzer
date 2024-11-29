import React, { useState } from "react";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const useGoogleSignIn = () => {
  const provider = new GoogleAuthProvider();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const googleSignIn = async (email, pwd) => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      setError("");
      setLoading(false);
      console.log(res.user);
      return res.user;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { error, loading, googleSignIn };
};

export default useGoogleSignIn;
