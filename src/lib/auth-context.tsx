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

const COOKIE_KEYS = ["session_uuid", "session-uuid", "sessionuuid", "session_id", "session-id", "session"];
const LOCAL_STORAGE_KEYS = ["session_uuid", "session-uuid", "sessionuuid", "session_id", "session-id", "session"];

function getSessionUuidFromClient(): string | null {
  if (typeof window === "undefined") return null;

  // 1. Try Local Storage
  for (const key of LOCAL_STORAGE_KEYS) {
    try {
      const val = localStorage.getItem(key);
      if (val && val.trim() !== "") {
        return val.trim();
      }
    } catch (e) {
      // Ignore security/access errors in some contexts
    }
  }

  // 2. Try Cookies
  try {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=").map((c) => c.trim());
      if (COOKIE_KEYS.includes(name) && value) {
        return decodeURIComponent(value);
      }
    }
  } catch (e) {
    console.error("Error reading cookies:", e);
  }

  return null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sessionUuid, setSessionUuid] = useState<string | null>(null);

  const checkAuth = async () => {
    setIsLoading(true);
    const uuid = getSessionUuidFromClient();
    setSessionUuid(uuid);

    if (!uuid) {
      setIsLoggedIn(false);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.chhoto.tech/api/v1/me", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${uuid}`,
          "x-session-uuid": uuid,
          "x-session-id": uuid,
          "Session-UUID": uuid,
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking authentication with Chhoto API:", error);
      // Fallback: If we have a session UUID but API check fails due to network/CORS,
      // we might want to check if the session UUID exists.
      // But the requirement says "hit api.chhoto.tech/api/v1/me if there is session uuid and show go to app or get started on the basis of that".
      // So if it fails, we set logged in to false.
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, sessionUuid, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
