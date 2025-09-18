// Importa os dados de produtos e categorias
import { products, categories } from './data.js';

const CART_STORAGE_KEY = 'e-commerce-cart';

/**
 * Funções para manipular o carrinho
 */

// Retorna o carrinho do localStorage
export const getCart = () => {
    try {
        const cart = localStorage.getItem(CART_STORAGE_KEY);
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        console.error("Erro ao ler o carrinho do localStorage:", e);
        return [];
    }
};

// Salva o carrinho no localStorage
const saveCart = (cart) => {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
        console.error("Erro ao salvar o carrinho no localStorage:", e);
    }
};

// Adiciona um item ao carrinho ou atualiza a quantidade
export const addToCart = (product) => {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart(cart);
    console.log(`Produto adicionado ao carrinho: ${product.name}`);
};

// Remove um item do carrinho
export const removeFromCart = (productId) => {
    let cart = getCart();
    cart = cart.filter(item => item.id !== parseInt(productId));
    saveCart(cart);
    console.log(`Produto removido do carrinho: ID ${productId}`);
};

// Limpa o carrinho
export const clearCart = () => {
    saveCart([]);
    console.log("Carrinho limpo.");
};

// Retorna o valor total do carrinho
export const getCartTotal = () => {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};


/**
 * Funções para buscar dados dos produtos
 */

// Retorna todos os produtos
export const getProducts = () => {
    return products;
};

// Retorna produtos em destaque (featured: true)
export const getFeaturedProducts = () => {
    return products.filter(product => product.featured);
};

// Retorna um produto por ID
export const getProductById = (id) => {
    const productId = parseInt(id);
    return products.find(product => product.id === productId);
};

// Retorna todas as categorias disponíveis
export const getProductCategories = () => {
    return categories;
};
