require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn protect good arctic tail tackle'; 
let testAccounts = [
"0xd839bd3344ed00295b0e90412eed5e1b8ef8aea37b5dbdaf2429d8f946936ea5",
"0x82bb71fb5c14f8e3ec6baa3f01bff3e12d63c8e7d8d268d181b70ec82828bbcb",
"0x4fcc21282ce1f6e649391228cf217cbeec1fb7b40d9d4daea8108683d66c8ab3",
"0xf131d6d505adaf4e61d6832cd133fb425a38220c07c21cd037f1d56927a483f9",
"0x911e63050424b4c5b29e4acd30a577bbda10950b1d0a0871b49b5cf21a4fa8cc",
"0x4daa7e3fb71893c7d21ca618cc1f73d874c2123ce11325d67ea44986784d1028",
"0x88a6e28751fdb975c60b61c6e94e87cbdff31fa0f66ed1bb492bcaffc5340753",
"0x5186a9186b148b1f29cd0239d705647f1a4c3b27a12d33e61c2abfaccdf669bb",
"0xc93a3736e8d9da6c66be4306b970187e50d7125d52f3bcb04f414f2c3b85abab",
"0x427de92a9e8f54ead2fe1158b445241d3b80cfeb8de2a179ecc8b58210fe5174"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

