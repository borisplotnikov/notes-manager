import BootstrapButton from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./IconButton.css";

export default function IconButton({
  icon,
  label,
  variant = "outline-secondary",
  size,
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <BootstrapButton
      variant={variant}
      size={size}
      type={type}
      disabled={disabled || loading}
      aria-label={label}
      aria-busy={loading || undefined}
      className={className}
      {...props}
    >
      {loading ? (
        <Spinner
          animation="border"
          size="sm"
          role="status"
          aria-label="Loading"
        />
      ) : (
        icon
      )}
    </BootstrapButton>
  );
}

// Example usage with an icon library such as react-icons:

// import { FaTrash } from "react-icons/fa";
// import IconButton from "./components/ui/IconButton";

// <IconButton
//   icon={<FaTrash aria-hidden="true" />}
//   label="Delete note"
//   variant="outline-danger"
//   onClick={handleDelete}
// />
