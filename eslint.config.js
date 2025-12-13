import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist", "build"] },

  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript"
    ],

    languageOptions: {
      ecmaVersion: 2022,
      sourcesType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },

    settings: {
      react: {
        version: "detect"
      }
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin
    },

    rules: {
      // React
      "react/react-in-jsx-scope": "off", // Vite uses new JSX runtime
      "react/jsx-uses-react": "off",

      // Hooks
      ...reactHooks.configs.recommended.rules,

      // Refresh overlay
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // TS loosenings for real-world apps
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // Import hygiene
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always"
        }
      ],
      "import/no-unresolved": "error"
    }
  }
);
