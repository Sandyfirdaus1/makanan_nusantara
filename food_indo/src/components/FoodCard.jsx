import React, { useState } from "react";

const FoodCard = ({ food, onAdd, onDetail }) => {
  const [loaded, setLoaded] = useState(false);
  const stars = Math.round(food.rating || 4);
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col">
      <div className="relative">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-t-xl" />
        )}
        <img
          src={food.image}
          alt={food.name}
          className={`w-full h-40 object-cover rounded-t-xl ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-1">{food.name}</h3>
          <p className="text-emerald-700 font-bold mb-2">
            Rp{food.price.toLocaleString()}
          </p>
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < stars ? "★" : "☆"}</span>
              ))}
            </span>
            <span className="text-gray-500 text-xs">
              {(food.rating || 4).toFixed(1)}
            </span>
            {typeof food.stock === "number" && (
              <span className="ml-auto text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Stok: {food.stock}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button
            onClick={() => onAdd(food)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-1.5 font-medium transition"
          >
            Tambah
          </button>
          <button
            onClick={onDetail}
            className="border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg py-1.5 font-medium transition"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
