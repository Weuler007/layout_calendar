module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    // Impede quebra de linha após operadores como *, +, -, /
    "scss/operator-no-newline-after": true,

    // (opcional) também pode reforçar que não haja quebra antes do operador
    "scss/operator-no-unspaced": true
  }
};
