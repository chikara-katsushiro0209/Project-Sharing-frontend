import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type CurrentContextType = {
  currentUser: {
    id: number;
    fullName: string;
  };
  setCurrentUser: Dispatch<
    SetStateAction<{
      id: number;
      fullName: string;
    }>
  >;
};

type Props = {
  children: ReactNode;
};

export const currentContext = createContext<CurrentContextType>(
  {} as CurrentContextType
);

export const CurrentContext = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<{
    id: number;
    fullName: string;
  }>({ id: 0, fullName: "" });

  useEffect(() => {
    localStorage.setItem("id", String(currentUser.id));
    localStorage.setItem("fullName", currentUser.fullName);
  }, [currentUser]);

  return (
    <currentContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}>
      {children}
    </currentContext.Provider>
  );
};
