// backend / eslint.config.js
import globals from "globals";
import rootConfig from "../eslint.config.js";

export default [
  ...rootConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Customize backend-specific Node/Express/Mongoose rules here
      "no-process-exit": "error",
    },
  },
];
