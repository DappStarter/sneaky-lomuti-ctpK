require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name renew sad push inner end army gentle'; 
let testAccounts = [
"0xbe1d71ed5b5eea19eb7150cbbd34c7a0af12ae00898b0245c24770d23adfcc27",
"0xc4627ca04a34c326f854ccb96398ecba1d617f40ce2eeffba91028401e3eca7f",
"0x45c9b055c6dfb3dbc22927945134899f46f1d7522d15ad73bdd68d996440ccb4",
"0xab3156e6ab5e607a7d03c85f80832f691af674996710decb68291553d5365a4e",
"0x3a9fe967c5619451014e2a12a034e584abf52caa30cd103a7b3bfc8bfccfa3e4",
"0xd9fa201e7c03a5c4479ec6f0a9abcb03e1a5249e23f1f963de33344911ebed13",
"0xaf8f47a6f78dfb5cd082490bcfeba00e8ba004f9faa89d4bb518fcf5e832085e",
"0xda980c399dcbcd754e9b2ba5d33f50d7bad90100d2abb0c4c2e4e9caead6f7c7",
"0xb16880f3042e334e085a323226fdfca87397ec23ce9ead7c2f3d0977a1a90e85",
"0x7823914cb920d06a288da06ba3db3cda51ebf1123f5275b75513273d514cb16f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

