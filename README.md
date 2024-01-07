# Chainlink Functions

Project to play and learn to use Chainlink Functions.

https://github.com/jps80/chainlink-functions-requests 

## Notes
configuración minima:  

    "@chainlink/contracts": "^0.8.0",
    "@nomicfoundation/hardhat-toolbox": "^4.0.0",
    "hardhat": "^2.19.2"

Adicionamelmente añado "@nomicfoundation/hardhat-verify": "^2.0.2",

Usamos ignitio
 npx hardhat ignition deploy ignition/modules/Apollo.js --network mumbai (no hace falta compilar a mano)
 npx hardhat ignition verify chain-80001

Apollo#GettingStartedFunctionsConsumer - 0x1F82Ab6Ae3D42E45C7fDe9e7cC0685cE42270847
Apollo#CallApiCustomConsumer - 0x06ff2226ab1B7c073799F4E4146adB6386De0691
Apollo#FunctionsConsumerExample - 0x933FfA3db366F03bece3dfdf346575aac8A9996e
Apollo#AutomatedFunctionsConsumerExample - 0x025bC638600A186a4Ec4BB72bb5AB0d77668b6C7

Automated: https://automation.chain.link/mumbai/80429439233166127320453878269579721574325997457279169768715579289065438689408
