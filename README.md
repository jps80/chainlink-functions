# Chainlink Functions

Project to play and learn to use Chainlink Functions.

## Notes
configuracion minima:  
    "@chainlink/contracts": "^0.8.0",
    "@nomicfoundation/hardhat-toolbox": "^4.0.0",
    "hardhat": "^2.19.2"
Adicionamelmente le añado "@nomicfoundation/hardhat-verify": "^2.0.2",


Le añado como extra: "@chainlink/env-enc": "^1.0.5", > me da problemas con la seguridad de la empresa!!!!

Utilizo dotenv

compilamos directamente 
    npx hardhat compile
    npx hardhat run --network mumbai scripts/deploy.js
    npx hardhat run --network mumbai scripts/deploy.js

https://mumbai.polygonscan.com/address/0x799264A7Ad7446329194130766fbb73A3Dd806ea#code

Remember añadir el nuevo contrato a la subscripcion
https://functions.chain.link/mumbai

