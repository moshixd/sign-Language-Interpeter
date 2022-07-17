const API_KEY = process.env.API_URL;
    // "Content-typ" is in quotes because javascript does not allow dash in name.
export const createHeaders = () => {
  return {
    "Content-Type": "application/json",
    "x-api-key": API_KEY // Standard way in http to create API headers
  };
};