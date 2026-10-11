import BootstrapButton from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
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
      className={`${styles.Button} ${className}`.trim()}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-label="Loading"
          className="me-2"
        />
      )}
      {children}
    </BootstrapButton>
  );
}

// Example usage:

// import Button from "./components/ui/Button";

// <Button onClick={handleSave}>Save</Button>

// <Button variant="secondary" size="sm">
//   Cancel
// </Button>

// <Button loading>Saving...</Button>

// <Button variant="danger" disabled>
//   Delete
// </Button>
