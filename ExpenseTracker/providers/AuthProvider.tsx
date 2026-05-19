import { useRouter, useSegments } from "expo-router";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "@/features/auth/services/authService";
import { useTransactionStore } from "@/features/transactions/store/transactionStore";
import { useUser } from "./UserProvider";

interface AuthContextType {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const segments = useSegments();
  const router = useRouter();
  const { updateUser, loadProfile, clearUser } = useUser();
  const resetTransactions = useTransactionStore((s) => s.reset);
  const fetchTransactions = useTransactionStore((s) => s.fetchTransactions);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("accessToken");
        if (token) {
          try {
            const newToken = await authService.refreshToken();
            if (newToken) {
              const storedId = await AsyncStorage.getItem("userId");
              if (storedId) {
                await updateUser({ id: storedId });
                await loadProfile();
              }
              setIsSignedIn(true);
            } else {
              throw new Error("Token refresh returned null");
            }
          } catch {
            await AsyncStorage.removeItem("accessToken");
            await AsyncStorage.removeItem("userId");
            resetTransactions();
            setIsSignedIn(false);
          }
        }
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === "auth";

    if (!isSignedIn && !inAuthGroup) {
      router.replace("/auth/sign-in");
    } else if (isSignedIn && inAuthGroup) {
      fetchTransactions();
      router.replace("/home");
    }
  }, [isSignedIn, segments, isLoading, router, fetchTransactions]);

  const signIn = useCallback(() => {
    fetchTransactions();
    setIsSignedIn(true);
  }, [fetchTransactions]);

  const signOut = useCallback(async () => {
    try {
      await authService.logout();
    } catch {
    }
    resetTransactions();
    clearUser();
    setIsSignedIn(false);
    router.replace("/auth/sign-in");
  }, [resetTransactions, clearUser, router]);

  const value = {
    isSignedIn,
    signIn,
    signOut,
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#3B5BDB" />
      </View>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
