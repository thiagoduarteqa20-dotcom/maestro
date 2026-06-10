const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://dev.maestro.tec.br/ords/r/sete/maestro/login?tz=-3:00'
  }
})