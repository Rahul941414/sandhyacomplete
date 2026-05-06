import React, { createContext, useContext, useEffect, useState } from "react";

export type User = { fullName: string; email: string; phone: string; token: string; };

type Ctx = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (fullName: string, email: string, phone: string, password: string) => Promise<void>;
  logout: () => void;
};

const Context = createContext<Ctx | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) setUser(JSON.parse(raw));
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch("/api/auth/login", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error("Login failed");
    const data = await res.json();
    const u = { fullName: data.user.fullName, email: data.user.email, phone: data.user.phone, token: data.token };
    localStorage.setItem("user", JSON.stringify(u));
    setUser(u);
  };

  const signup = async (fullName: string, email: string, phone: string, password: string) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, phone, password })
    });
    if (!res.ok) throw new Error("Signup failed");
    const data = await res.json();
    const u = { fullName: data.user.fullName, email: data.user.email, phone: data.user.phone, token: data.token };
    localStorage.setItem("user", JSON.stringify(u));
    setUser(u);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return <Context.Provider value={{ user, isLoading, login, signup, logout }}>{children}</Context.Provider>;
}

export function useAuth() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}