import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginTest: React.FC = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleSuccess = async (credentialResponse: any) => {
    const token = credentialResponse.credential;
    console.log("Token Google:", token);

    try {
      const response = await fetch("http://localhost:8080/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Login Google backend:", result);
        alert("Login Google realizado com sucesso!");
      } else {
        console.error("Erro no login Google:", response.status);
        alert("Erro no login Google");
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Erro na requisição");
    }
  };

  const handleError = () => {
    console.log("Erro ao logar com Google");
    alert("Erro no login com Google");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h1>Teste Login Google</h1>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginTest;
