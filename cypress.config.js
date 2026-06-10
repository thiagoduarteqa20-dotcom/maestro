const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev.maestro.tec.br/ords/r/sete/maestro/login?tz=-3:00'
  }
})