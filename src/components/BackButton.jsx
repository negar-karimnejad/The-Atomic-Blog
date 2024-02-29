import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      varient={"secondary"}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      ← Back
    </Button>
  );
}

export default BackButton;
