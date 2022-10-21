import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const RoomContext = createContext({});

export const RoomContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userRole, setRole] = useState("");
  const [urlRoomId, setUrlRoomId] = useState("");

  useEffect(() => {
    setRole(Cookies.get("role"));
    setUrlRoomId(Cookies.get("room"));
  }, []);

  const tokenHandler = tokenparam => {
    setToken(_ => tokenparam);
  };

  const roleHandler = userRole => {
    setRole(_ => userRole);
  };

  const urlRoomIdHandler = urlRoomId => {
    setUrlRoomId(_ => urlRoomId);
  };

  return (
    <RoomContext.Provider
      value={{
        token,
        userRole,
        urlRoomId,
        tokenHandler,
        roleHandler,
        urlRoomIdHandler,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => useContext(RoomContext);
