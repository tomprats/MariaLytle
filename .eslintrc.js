module.exports = {
  extends: "traitify",
  globals: {env: true},
  rules: {
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": ["error", {}],
    "react/no-unescaped-entities": "off"
  }
}
