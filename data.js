// Dados de mock para simular a base de dados da loja
export const products = [
    {
        id: 1,
        name: 'Fone de Ouvido Sem Fio',
        price: 199.99,
        category: 'Eletrônicos',
        description: 'Fone de ouvido com cancelamento de ruído, bateria de longa duração e som de alta fidelidade.',
        imageUrl: 'https://mirandacomputacao.jetassets.com.br/produto/multifotos/hd/47672-principal.png',
        featured: true
    },
    {
        id: 2,
        name: 'Smartwatch Esportivo',
        price: 349.50,
        category: 'Eletrônicos',
        description: 'Relógio inteligente com monitor de batimentos cardíacos, GPS integrado e resistência à água.',
        imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-watch7-l300-sm-l300nzeazto-542363176?$684_547_PNG$',
        featured: false
    },
    {
        id: 3,
        name: 'Livro de Ficção Científica',
        price: 49.90,
        category: 'Livros',
        description: 'Um best-seller aclamado pela crítica que explora os limites do espaço e do tempo.',
        imageUrl: 'https://rollingstone.com.br/wp-content/uploads/2024/02/81zn7udgrul_sl1500.jpg',
        featured: true
    },
    {
        id: 4,
        name: 'Mochila de Couro',
        price: 120.00,
        category: 'Acessórios',
        description: 'Mochila elegante e resistente, ideal para o dia a dia e viagens curtas.',
        imageUrl: 'https://images.tcdn.com.br/img/img_prod/654692/mochila_de_couro_para_notebook_marrom_whisky_hm087_hamish_289_1_da42c19a955ad773c9a5740ab78fe335.jpg',
        featured: true
    },
    {
        id: 5,
        name: 'Câmera DSLR',
        price: 1500.00,
        category: 'Eletrônicos',
        description: 'Câmera profissional com lente intercambiável, ideal para fotógrafos amadores e profissionais.',
        imageUrl: 'https://emania.vteximg.com.br/arquivos/ids/161297-1000-1000/1.png?v=636414327447600000',
        featured: false
    },
    {
        id: 6,
        name: 'Kit de Pincéis de Maquiagem',
        price: 75.00,
        category: 'Beleza',
        description: 'Conjunto completo com pincéis de alta qualidade para uma maquiagem impecável.',
        imageUrl: 'https://m.media-amazon.com/images/I/61fEJNPNeTL._UF1000,1000_QL80_.jpg',
        featured: true
    },
    {
        id: 7,
        name: 'Violão Acústico',
        price: 450.00,
        category: 'Música',
        description: 'Violão clássico com acabamento em madeira, som claro e excelente ressonância.',
        imageUrl: 'https://cdn.awsli.com.br/2500x2500/2609/2609787/produto/314986934/021-fuz7ebhyb8.jpg',
        featured: false
    },
    {
        id: 8,
        name: 'Tênis de Corrida',
        price: 250.00,
        category: 'Esportes',
        description: 'Tênis leve e com amortecimento avançado, perfeito para treinos e maratonas.',
        imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237036-800-800?v=638332650068070000&width=800&height=800&aspect=true',
        featured: false
    },
    {
        id: 9,
        name: 'Fones de Ouvido com Fio',
        price: 89.90,
        category: 'Eletrônicos',
        description: 'Fones de ouvido com fio e microfone embutido, excelente para chamadas e jogos.',
        imageUrl: 'https://m.media-amazon.com/images/I/51D64LTowQL._UF1000,1000_QL80_.jpg',
        featured: false
    },
    {
        id: 10,
        name: 'Livro de Culinária',
        price: 65.00,
        category: 'Livros',
        description: 'Livro com receitas clássicas e contemporâneas, ideal para amantes da culinária.',
        imageUrl: 'https://m.media-amazon.com/images/I/61tf90sRkcL._UF1000,1000_QL80_.jpg',
        featured: false
    }
];

export const categories = [
    'Eletrônicos',
    'Livros',
    'Acessórios',
    'Beleza',
    'Música',
    'Esportes'
];
