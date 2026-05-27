import js from "@eslint/js";

export default [
  // Global ignores (replaces .eslintignore)
  {
    ignores: ["**/dist/", "**/node_modules/", "**/.vite/"],
  },
  // Base JS recommended rules
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
