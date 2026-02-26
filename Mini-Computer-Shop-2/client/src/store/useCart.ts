import { create } from 'zustand';
import { Product } from '../lib/mock-data';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  getTotals: () => { subtotal: number; itemsCount: number };
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          isOpen: true
        };
      }
      return { 
        items: [...state.items, { product, quantity }],
        isOpen: true 
      };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity < 1) return;
    set((state) => ({
      items: state.items.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    }));
  },
  
  clearCart: () => set({ items: [] }),
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  setIsOpen: (isOpen) => set({ isOpen }),
  
  getTotals: () => {
    const { items } = get();
    return items.reduce(
      (totals, item) => ({
        subtotal: totals.subtotal + (item.product.price * item.quantity),
        itemsCount: totals.itemsCount + item.quantity
      }),
      { subtotal: 0, itemsCount: 0 }
    );
  }
}));