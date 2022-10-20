import { createContext, useState, useContext } from "react";

const RoomContext = createContext({});

export const RoomContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userRole, setRole] = useState("");
  const [urlRoomId, setUrlRoomId] = useState("");

  const tokenHandler = token => {
    setToken(_ => token);
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
