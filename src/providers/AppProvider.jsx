import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useAuthState } from "your-auth-package"; // Use your authentication hook

// Create a context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(null);
  //   const { isAuthenticated } = useAuthState(); // Custom hook to manage authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the app is opened for the first time
  useEffect(() => {
    // const checkFirstTime = async () => {
    //   const firstTime = await AsyncStorage.getItem("isFirstTime");
    //   if (firstTime === null) {
    //     setIsFirstTime(true);
    //     await AsyncStorage.setItem("isFirstTime", "false");
    //   } else {
    //     setIsFirstTime(false);
    //   }
    // };
    // checkFirstTime();

    setIsFirstTime(true);
  }, []);

  // Function to clear AsyncStorage data
  const clearAppData = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully.");
      // Reset any necessary state values after clearing
      setIsFirstTime(true); // Reset isFirstTime after clearing
    } catch (error) {
      console.error("Failed to clear AsyncStorage:", error);
    }
  };

  return (
    <AppContext.Provider value={{ isFirstTime, isAuthenticated, clearAppData }}>
      {children}
    </AppContext.Provider>
  );
};
