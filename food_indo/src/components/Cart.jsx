import React from "react";

const Cart = ({ items, onClose, onAdd, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-20">
      <div className="w-full max-w-xs bg-white h-full shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Keranjang</h2>
          <button onClick={onClose} className="text-xl">
            ✖️
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center">Keranjang kosong</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">
                    Rp{item.price.toLocaleString()} x {item.qty}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => onAdd(item)}
                    className="bg-emerald-500 text-white rounded px-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemove(item)}
                    className="bg-red-400 text-white rounded px-2"
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between font-semibold mb-2">
            <span>Total:</span>
            <span>Rp{total.toLocaleString()}</span>
          </div>
          <button
            className="w-full bg-emerald-600 text-white py-2 rounded-lg font-bold"
            onClick={onCheckout}
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
