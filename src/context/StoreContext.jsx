import { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [store, setStore] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchStore = async () => {
        try {
            const res = await fetch('https://api.escuelajs.co/api/v1/products');
            if (!res.ok) throw new Error('Error al obtener productos');
            const data = await res.json();
            setStore(data);
        } catch (error) {
            console.error(error);
            setStore([]);
        }
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const exists = prevCart.find((item) => item.id === product.id);
            if (exists) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    useEffect(() => {
        fetchStore();
    }, []);

    return (
        <StoreContext.Provider value={{ store, fetchStore, cart, addToCart, removeFromCart }}>
            {children}
        </StoreContext.Provider>
    );
};