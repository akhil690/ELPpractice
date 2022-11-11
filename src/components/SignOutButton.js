import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";


function handleLogout(instance) {
  instance.logoutRedirect().catch((e) => {
    console.error(e);
    window.location.replace("http://localhost:3000")
  });
}

export const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <Button
      variant="light"
      className="w-100 text-left"
      onClick={() => 
      handleLogout(instance)
      }
      
    >
      Sign out{" "}
    </Button>
  );
};
