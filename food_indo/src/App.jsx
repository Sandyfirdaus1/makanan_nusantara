import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import FoodCard from "./components/FoodCard";
import Cart from "./components/Cart";
import logo from "./assets/logo_utama.png";

const foods = [
  {
    id: 1,
    name: "Nasi Goreng",
    price: 25000,
    category: "Makanan",
    badge: "Best Seller",
    rating: 4.8,
    stock: 20,
    image:
      "https://media.istockphoto.com/id/2160384312/photo/nasi-goreng-or-fried-rice-is-a-southeast-asian-fried-rice-dish-usually-cooked-with-pieces-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=TBHGJjdTujIn-9ntf_ZVhZjujJnR4LV4wJE19rnYtko=",
  },
  {
    id: 2,
    name: "Sate Ayam",
    price: 30000,
    category: "Makanan",
    badge: "Favorit",
    rating: 4.6,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1644288232801-2b40ff99d54f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0ZSUyMGF5YW18ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Bakso",
    price: 20000,
    category: "Makanan",
    rating: 4.4,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1687425973283-d0d266b73325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrc298ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Ikan Bakar",
    price: 40000,
    category: "Makanan",
    rating: 4.5,
    stock: 10,
    image:
      "https://media.istockphoto.com/id/2215934079/photo/indonesian-grilled-fish-with-padang-spices-on-banana-leaf-authentic-sumatran-cuisine.webp?a=1&b=1&s=612x612&w=0&k=20&c=yFE-swg4p8ILDQmLJxO0qiPmJYgS8SHmEcN9UTeo9-8=",
  },
  {
    id: 5,
    name: "Gado-Gado",
    price: 22000,
    category: "Makanan",
    rating: 4.3,
    stock: 12,
    image:
      "https://media.istockphoto.com/id/2211815558/photo/indonesian-gado-gado-salad-with-fresh-vegetables-and-peanut-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=8otA82emJipayuGlAYF4O1VEW2vmL_-cYkrZyeekEMk=",
  },
  {
    id: 6,
    name: "Ayam Geprek",
    price: 27000,
    category: "Makanan",
    badge: "Pedas",
    rating: 4.7,
    stock: 8,
    image:
      "https://media.istockphoto.com/id/2223023918/photo/ayam-geprek-with-fried-tofu-and-vegetables-on-orange-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=QMmvobI_Mek6UsKJeFcUyuRefRBHrmeCYFq3TLtx9y0=",
  },
  {
    id: 7,
    name: "Mie Ayam",
    price: 18000,
    category: "Makanan",
    rating: 4.2,
    stock: 14,
    image:
      "https://media.istockphoto.com/id/2201682791/photo/a-delicious-bowl-of-mie-ayam-pangestu.webp?a=1&b=1&s=612x612&w=0&k=20&c=-DW8BukWffl2g6wBsiqoeshBPW9NlELELAftqDk6FJg=",
  },
  {
    id: 8,
    name: "Soto Ayam",
    price: 24000,
    category: "Makanan",
    rating: 4.4,
    stock: 11,
    image:
      "https://media.istockphoto.com/id/2152051004/photo/indonesian-chicken-curry-kare-ayam.webp?a=1&b=1&s=612x612&w=0&k=20&c=NL_JzYn89jwkgqAsKvyF7aUDM5P9AqqCjUQS6JDK3qY=",
  },
  // Contoh minuman
  {
    id: 9,
    name: "Air Putih",
    price: 5000,
    category: "Minuman",
    rating: 4.0,
    stock: 30,
    image: "https://images.pexels.com/photos/593099/pexels-photo-593099.jpeg",
  },
  {
    id: 10,
    name: "Es Jeruk",
    price: 12000,
    category: "Minuman",
    badge: "Segar",
    rating: 4.5,
    stock: 25,
    image:
      "https://media.istockphoto.com/id/2010219261/photo/glass-jar-of-orange-juice-shot-in-the-countryside.webp?a=1&b=1&s=612x612&w=0&k=20&c=d9i71QYfVhcdP8FuOAl4SxGwpdkldIJXuowpC57VIDs=",
  },
  {
    id: 11,
    name: "Es Teh Manis",
    price: 10000,
    category: "Minuman",
    rating: 4.3,
    stock: 22,
    image:
      "https://media.istockphoto.com/id/1689902810/photo/sweet-iced-tea.webp?a=1&b=1&s=612x612&w=0&k=20&c=3m-VHIZlrDcZTRWImdIf9sx93GG5IjmIkJH3yeEzi_E=",
  },
  // Contoh lainnya
  {
    id: 12,
    name: "Kerupuk",
    price: 3000,
    category: "Lainnya",
    rating: 4.1,
    stock: 40,
    image:
      "https://media.istockphoto.com/id/2154439580/photo/asian-traditional-food-white-crackers-kerupuk-isolated-in-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=wSmlkM0VUG3JKoP_IcQQBdd5iv1DOPVDekqVqVWkBRs=",
  },
  {
    id: 13,
    name: "Nasi Putih",
    price: 5000,
    category: "Lainnya",
    rating: 4.2,
    stock: 35,
    image:
      "https://plus.unsplash.com/premium_photo-1701011134313-fd5c91ea051e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmFzaSUyMHB1dGlofGVufDB8fDB8fHww",
  },
];

function PaymentPage({ cart, onBack, whatsAppNumber }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const buildWhatsAppLink = () => {
    const lines = cart.map(
      (item) =>
        `${item.name} x ${item.qty} = Rp${(
          item.price * item.qty
        ).toLocaleString()}`
    );
    const text = `Halo, saya ingin pesan:%0A${lines.join(
      "%0A"
    )}%0ATotal: Rp${total.toLocaleString()}`;
    return `https://wa.me/${whatsAppNumber}?text=${text}`;
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">Pembayaran</h2>
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6 mb-4">
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.qty}
              </span>
              <span>Rp{(item.price * item.qty).toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Total:</span>
          <span>Rp{total.toLocaleString()}</span>
        </div>
      </div>
      <button
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold mb-2"
        onClick={onBack}
      >
        Kembali ke Menu
      </button>
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold mb-2"
      >
        Pesan via WhatsApp
      </a>
      <button
        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-bold cursor-not-allowed"
        disabled
      >
        Bayar (Coming Soon)
      </button>
    </div>
  );
}

function FoodDetailModal({ food, onClose, onAdd }) {
  if (!food) return null;
  const stars = Math.round(food.rating || 4);
  return (
    <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 ease-out transform opacity-100 scale-100">
        <div className="relative h-56">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center"
            aria-label="Tutup"
          >
            ✕
          </button>
          {food.badge && (
            <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
              {food.badge}
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-emerald-800">{food.name}</h3>
            <span className="text-emerald-700 font-semibold">
              Rp{food.price.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex text-yellow-400 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < stars ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="text-xs text-gray-600">
              {(food.rating || 4).toFixed(1)}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              Stok: {food.stock ?? "-"}
            </span>
          </div>
          <div className="mb-3">
            <span className="inline-block text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded px-2 py-1">
              {food.category}
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-5">
            {food.description ||
              "Hidangan khas Nusantara dengan cita rasa autentik, diolah dari bahan pilihan dan rempah segar."}
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border text-emerald-700"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onAdd(food);
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [page, setPage] = useState("menu");
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);
  const menuRef = useRef(null);
  const WHATSAPP_NUMBER = "6281234567890"; // ganti dengan nomor Anda

  // Detail modal state
  const [detailFood, setDetailFood] = useState(null);
  const openDetail = (food) => setDetailFood(food);
  const closeDetail = () => setDetailFood(null);

  // Testimonial data + carousel
  const testimonials = [
    {
      name: "Dewi, Jakarta",
      text: "Rasanya autentik banget! Nasi goreng dan satenya juara, serasa makan di warung favorit.",
    },
    {
      name: "Rizky, Bandung",
      text: "Pengiriman cepat, porsi pas, dan pedasnya ayam geprek bikin nagih!",
    },
    {
      name: "Sari, Surabaya",
      text: "Harga terjangkau dan rasa mantap. Es jeruknya juga segar banget!",
    },
  ];
  const [tIndex, setTIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setTIndex((i) => (i + 1) % testimonials.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  // Load cart from localStorage once
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setCart(parsed);
      }
    } catch (e) {}
  }, []);

  // Persist cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  const handleAddToCart = (food) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === food.id);
      if (found) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...food, qty: 1 }];
    });
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast(`${food.name} ditambahkan ke keranjang`);
    toastTimerRef.current = setTimeout(() => setToast(null), 1800);
  };

  const handleRemoveFromCart = (food) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === food.id);
      if (found.qty === 1) {
        return prev.filter((item) => item.id !== food.id);
      }
      return prev.map((item) =>
        item.id === food.id ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setPage("payment");
  };
  const handleBackToMenu = () => setPage("menu");

  const visibleFoods = foods.filter((food) =>
    activeCategory === "Semua" ? true : food.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#2E5E3A]">
      {toast && (
        <div className="fixed top-4 right-4 z-30 bg-white text-emerald-700 font-semibold shadow-lg rounded-lg px-4 py-2">
          {toast}
        </div>
      )}
      <Navbar
        onCartClick={() => setCartOpen(true)}
        cartCount={cart.reduce((a, b) => a + b.qty, 0)}
      />
      {page === "payment" ? (
        <PaymentPage
          cart={cart}
          onBack={handleBackToMenu}
          whatsAppNumber={WHATSAPP_NUMBER}
        />
      ) : (
        <>
          <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-12 bg-[#2E5E3A]">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                Nikmati Lezatnya Makanan Nusantara
              </h1>
              <p className="text-lg text-white mb-8 md:mb-10">
                Rasakan kekayaan rasa dan tradisi Indonesia dalam setiap suapan!
              </p>
              <button
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold text-lg shadow mb-2"
                onClick={() =>
                  menuRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Lihat Menu
              </button>
            </div>
            <div
              className="bg-white rounded-3xl shadow-2xl border-4 border-white p-6 flex items-center justify-center"
              style={{ boxShadow: "0 12px 40px 0 rgba(60,60,60,0.25)" }}
            >
              <img
                src={logo}
                alt="Makanan Indonesia"
                className="w-full max-w-md"
              />
            </div>
          </section>
          <section ref={menuRef} className="px-6 md:px-16 py-12">
            <div className="flex gap-4 mb-6">
              {["Semua", "Makanan", "Minuman", "Lainnya"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full font-semibold border transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span
                    className={
                      activeCategory === cat ? "text-white" : "text-emerald-600"
                    }
                  >
                    {cat}
                  </span>
                </button>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-white mb-8">Menu Populer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {visibleFoods.map((food) => (
                <FoodCard
                  key={food.id}
                  food={food}
                  onAdd={handleAddToCart}
                  onDetail={() => openDetail(food)}
                />
              ))}
            </div>
          </section>
          {/* Testimonial Carousel */}
          <section className="px-6 md:px-16 pb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-xl font-semibold mb-4">
                Apa kata mereka
              </h3>
              <div className="text-white/90">
                <p className="italic mb-2">“{testimonials[tIndex].text}”</p>
                <p className="text-sm">— {testimonials[tIndex].name}</p>
              </div>
              <div className="flex gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i === tIndex ? "bg-white" : "bg-white/40"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="px-6 md:px-16 py-8 bg-emerald-900 text-white/90">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="font-bold text-lg mb-2">Rasa Nusantara</div>
                <p className="text-sm">
                  Cita rasa autentik Indonesia, langsung ke meja Anda.
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2">Kontak</div>
                <p className="text-sm">WhatsApp: 0812-3456-7890</p>
                <p className="text-sm">Email: halo@rasanusantara.id</p>
              </div>
              <div>
                <div className="font-semibold mb-2">Alamat</div>
                <p className="text-sm">Jl. Kenangan No. 10, Jakarta</p>
                <p className="text-sm">Buka: 09.00 - 21.00 WIB</p>
              </div>
            </div>
          </footer>
        </>
      )}
      {detailFood && (
        <FoodDetailModal
          food={detailFood}
          onClose={closeDetail}
          onAdd={handleAddToCart}
        />
      )}
      {cartOpen && (
        <Cart
          items={cart}
          onClose={() => setCartOpen(false)}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
}

export default App;
