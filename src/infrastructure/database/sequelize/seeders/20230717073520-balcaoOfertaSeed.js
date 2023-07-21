module.exports = {
  up: async(queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('usuarios', [
    {
      nome: 'John',
      login: 'Do1e',
      senha: 'example@example.com',
    },
    {
      nome: 'Alice',
      login: 'Lu9k',
      senha: '6f58759f4edc1a8',
      },
      {
      nome: 'Sophia',
      login: 'We2j',
      senha: 'b1a6dce5f7089fe',
      },
      {
      nome: 'Oliver',
      login: 'Ja7h',
      senha: '2ef3c3a689d47c4',
      },
      {
      nome: 'Emma',
      login: 'Ri3m',
      senha: '7a82f8a5039b956',
      },
      {
      nome: 'Liam',
      login: 'Qo4p',
      senha: '15f7d8f3e9b4a0e',
      },
      {
      nome: 'Ava',
      login: 'De5w',
      senha: 'd8e4a13b0f6c725',
      },
      {
      nome: 'Noah',
      login: 'Zu6v',
      senha: '2e5e3633a9d2b06',
      },
      {
      nome: 'Isabella',
      login: 'Ki8b',
      senha: 'af3c1bde2f8a597',
      },
      {
      nome: 'Sophia',
      login: 'Ts9q',
      senha: '645fdb032b1a89d',
      },
      {
      nome: 'Oliver',
      login: 'La0e',
      senha: '88af36f410a2bd4',
      },
      {
      nome: 'Emma',
      login: 'Pi1y',
      senha: 'c2a8e9b4f7d3105',
      },
      {
      nome: 'Liam',
      login: 'Vo2t',
      senha: '4b39f57e86c1da7',
      },
      {
      nome: 'Ava',
      login: 'Fe3i',
      senha: 'ce0d9b5213f8a64',
      },
      {
      nome: 'Noah',
      login: 'Me4k',
      senha: 'b90a1f5d2c74836',
      },
      {
      nome: 'Isabella',
      login: 'Ne5o',
      senha: '73d6a5c02e9fb48',
      }
  
  ]);
    await queryInterface.bulkInsert('carteiras', [
      {
        idUsuario: 2,
        nome: 'Conservative Portfolio',
        },
        {
        idUsuario: 3,
        nome: 'Aggressive Growth Fund',
        },
        {
        idUsuario: 4,
        nome: 'Income Generation Strategy',
        },
        {
        idUsuario: 5,
        nome: 'Index Fund',
        },
        {
        idUsuario: 6,
        nome: 'Dividend Focus Portfolio',
        },
        {
        idUsuario: 7,
        nome: 'Balanced Allocation Fund',
        },
        {
        idUsuario: 8,
        nome: 'Value Investing Approach',
        },
        {
        idUsuario: 9,
        nome: 'Small-Cap Growth Fund',
        },
        {
        idUsuario: 10,
        nome: 'Technology Sector Fund',
        },
        {
        idUsuario: 11,
        nome: 'International Equity Fund',
        },
        {
        idUsuario: 12,
        nome: 'Real Estate Investment Trust',
        },
        {
        idUsuario: 13,
        nome: 'Emerging Markets Fund',
        },
        {
        idUsuario: 14,
        nome: 'High-Yield Bond Fund',
        },
        {
        idUsuario: 15,
        nome: 'Global Macro Strategy',
        },
        {
        idUsuario: 16,
        nome: 'Sustainable Investing Fund',
        }
      
  ]);
    await queryInterface.bulkInsert('tipoMoedas', [
      {
        nome: 'Bitcoin',
        },
        {
        nome: 'Ethereum',
        },
        {
        nome: 'Binance Coin',
        },
        {
        nome: 'Cardano',
        },
        {
        nome: 'XRP',
        },
        {
        nome: 'Dogecoin',
        },
        {
        nome: 'Polkadot',
        },
        {
        nome: 'Litecoin',
        },
        {
        nome: 'Bitcoin Cash',
        },
        {
        nome: 'Chainlink',
        },
        {
        nome: 'Stellar',
        },
        {
        nome: 'VeChain',
        },
        {
        nome: 'Uniswap',
        },
        {
        nome: 'Theta',
        },
        {
        nome: 'Filecoin',
        }
  
  ]);
    await queryInterface.bulkInsert('Moedas', [
      
{
  idTipoMoeda: 1,
  idCarteira: 1,
  quantidade: 92,
  },
  {
  idTipoMoeda: 2,
  idCarteira: 2,
  quantidade: 47,
  },
  {
  idTipoMoeda: 3,
  idCarteira: 3,
  quantidade: 12,
  },
  {
  idTipoMoeda: 4,
  idCarteira: 4,
  quantidade: 65,
  },
  {
  idTipoMoeda: 5,
  idCarteira: 5,
  quantidade: 34,
  },
  {
  idTipoMoeda: 6,
  idCarteira: 6,
  quantidade: 81,
  },
  {
  idTipoMoeda: 7,
  idCarteira: 7,
  quantidade: 7,
  },
  {
  idTipoMoeda: 8,
  idCarteira: 8,
  quantidade: 29,
  },
  {
  idTipoMoeda: 9,
  idCarteira: 9,
  quantidade: 58,
  },
  {
  idTipoMoeda: 10,
  idCarteira: 10,
  quantidade: 96,
  },
  {
  idTipoMoeda: 11,
  idCarteira: 11,
  quantidade: 21,
  },
  {
  idTipoMoeda: 12,
  idCarteira: 12,
  quantidade: 73,
  },
  {
  idTipoMoeda: 13,
  idCarteira: 13,
  quantidade: 43,
  },
  {
  idTipoMoeda: 14,
  idCarteira: 14,
  quantidade: 89,
  },
  {
  idTipoMoeda: 15,
  idCarteira: 15,
  quantidade: 16,
  }
  
  ]);
    await queryInterface.bulkInsert('Ofertas', [
      {
        idMoeda: 1,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 27
        },
        {
        idMoeda: 2,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 42
        },
        {
        idMoeda: 3,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 8
        },
        {
        idMoeda: 4,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 19
        },
        {
        idMoeda: 5,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 37
        },
        {
        idMoeda: 6,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 13
        },
        {
        idMoeda: 7,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 32
        },
        {
        idMoeda: 8,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 6
        },
        {
        idMoeda: 9,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 23
        },
        {
        idMoeda: 10,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 14
        },
        {
        idMoeda: 11,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 48
        },
        {
        idMoeda: 12,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 9
        },
        {
        idMoeda: 13,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 31
        },
        {
        idMoeda: 14,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 26
        },
        {
        idMoeda: 15,
        dataHora: new Date,
        ofertaAtiva: true,
        precoUnitario: 1.5,
        quantidade: 41
        }
  
  ]);
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};