import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = { id: number; name: string; price: number; image?: string; quantity: number; };

type CartCtx = {
  items: CartItem[];
  add: (item: Omit<CartItem, "quantity">) => void;
  inc: (id: number) => void;
  dec: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  totalQty: number;
  totalPrice: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("cart") || "[]"); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem("cart", JSON.stringify(items)); }, [items]);

  const add = (item: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const ex = prev.find(i => i.id === item.id);
      if (ex) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const inc = (id: number) => setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  const dec = (id: number) => setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i));
  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id));
  const clear = () => setItems([]);

  const totalQty = useMemo(() => items.reduce((a,b)=>a+b.quantity,0), [items]);
  const totalPrice = useMemo(() => items.reduce((a,b)=>a+b.price*b.quantity,0), [items]);

  return <Ctx.Provider value={{ items, add, inc, dec, remove, clear, totalQty, totalPrice }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}