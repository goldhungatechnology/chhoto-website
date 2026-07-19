"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  sessionUuid: string | null;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isLoading: true,
  sessionUuid: null,
  checkAuth: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sessionUuid, setSessionUuid] = useState<string | null>(null);

  const checkAuth = async () => {
    setIsLoading(true);

    try {
      const res = await fetch("https://api.chhoto.tech/api/v1/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.success === true) {
          setIsLoggedIn(true);
          setSessionUuid(data.data?.uuid || null);
        } else {
          setIsLoggedIn(false);
          setSessionUuid(null);
        }
      } else {
        setIsLoggedIn(false);
        setSessionUuid(null);
      }
    } catch (error) {
      console.error("Error checking authentication with Chhoto API:", error);
      setIsLoggedIn(false);
      setSessionUuid(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, sessionUuid, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
