import backend from "@/api/axios_config";

export const isAuthenticatedAdminGuard = (to, from, next) => {
  return new Promise(async () => {
    try {
      const { data } = await backend.get("/auth/currentuser", {
        withCredentials: true,
      });

      if (data.currentUser.rol.toUpperCase() === "ADMIN") {
        next();
      } else {
        console.log("Cliente: el rol no es ADMIN");
        next({ name: "login" });
      }
    } catch (error) {
      console.log("Admin: Bloqueado por el Guard");
      next({ name: "login" });
    }
  });
};

export const isAuthenticatedClientGuard = (to, from, next) => {
  return new Promise(async () => {
    try {
      const { data } = await backend.get("/auth/currentuser", {
        withCredentials: true,
      });

      if (data.currentUser.rol.toUpperCase() === "CLIENTE") {
        next();
      } else {
        console.log("Cliente: el rol no es CLIENTE");
        next({ name: "login" });
      }
    } catch (error) {
      console.log("Cliente : Bloqueado por el Guard");
      next({ name: "login" });
    }
  });
};
