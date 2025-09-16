// AuthContext.tsx
import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from 'react'

// Mock users
const mockUsers = [
  { id: 1, name: "Gnan", role: "Admin" },
  { id: 2, name: "Brahmisha", role: "User" },
  { id: 3, name: "Guest", role: "Guest" },
];

export type User = {
  id: number;
  name: string;
  role: string;
} | null;

export type AuthContextType = {
  user: User;
  login: (userId: number) => void;
  logout: () => void;
};

// 👉 createContext must be given a type
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = (userId: number) => {
    const foundUser = mockUsers.find((u) => u.id === userId) || null;
    setUser(foundUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
