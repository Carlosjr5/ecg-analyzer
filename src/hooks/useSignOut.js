import React, { useState } from "react";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

const useSignOut = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const logOut = async (email, pwd) => {
    try {
      setLoading(true);
      let res = await signOut(auth);
      setError("");
      setLoading(false);
      console.log(res.user);

      return res.user;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { error, loading, logOut };
};

export default useSignOut;
