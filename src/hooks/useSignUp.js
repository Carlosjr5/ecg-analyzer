import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "@/firebase";

const useSignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (email, pwd) => {
    try {
      setLoading(true);
      let res = await createUserWithEmailAndPassword(auth, email, pwd);
      setError("");
      setLoading(false);
      console.log(res.user);

      return res.user;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { error, loading, signUp };
};

export default useSignUp;
