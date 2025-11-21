  /**
   * Login con usuario y contraseña.
   * - Si usuario === "admin" y password === "1234" => rol admin
   * - Cualquier otro usuario con password no vacía => rol cliente
   */
// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null);

  const login = (nombre, password) => {
    if (!nombre || !password) {
      return { ok: false, mensaje: "Completá usuario y contraseña." };
    }

    let rol = "cliente";

    if (nombre === "admin" && password === "1234") {
      rol = "admin";
    }

    setUsuario({
      nombre,
      rol,
    });

    return { ok: true, rol };
  };

  const logout = () => {
    setUsuario(null);
  };

  const esAdmin = usuario?.rol === "admin";

  return (
    <AuthContext.Provider
      value={{
        usuario,
        esAdmin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
