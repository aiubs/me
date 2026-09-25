/*
 * UXMAGIC AI — Generated React export
 *
 * Installation Steps:
 *   npm install react react-dom @iconify/react
 *   npm install tailwindcss @tailwindcss/vite
 * (User must configure Vite + @tailwindcss/vite.)
 *
 * Import the companion stylesheet once from your app entry:
 *   import "./index.css";
 * It carries the theme tokens this component's classes depend on — without it
 * the screen renders unstyled. Fonts load from it too.
 *
 * Use npm packages only: React, Tailwind className strings, @iconify/react Icon component for icons (<iconify-icon> → <Icon icon="collection:name" />).
*/

import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Interfaces
interface NewArrivalProduct {
  id: number;
  title: string;
  price: string;
  img: string;
  link: string;
}

interface CategoryItem {
  title: string;
  info: string;
  img: string;
}

interface FeaturedProduct {
  id: number;
  category: string;
  title: string;
  price: string;
  oldPrice?: string;
  img: string;
  tag?: string;
  rating: number;
  reviewsCount: number;
  type: string;
}

interface TrustBadgeItem {
  icon: string;
  title: string;
  desc: string;
}

export default function App() {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [favoritesCount, setFavoritesCount] = useState(0);

  // Static Data
  const trustBadges: TrustBadgeItem[] = [
    {
      icon: "lucide:shield",
      title: "ضمان حقيقي معتمد",
      desc: "كفالة حقيقية على كافة الأجهزة والقطع",
    },
    {
      icon: "lucide:truck",
      title: "توصيل سريع وآمن",
      desc: "شحن سريع لكافة المحافظات العراقية",
    },
    {
      icon: "lucide:credit-card",
      title: "الدفع عند الاستلام",
      desc: "افحص منتجك بعناية قبل الدفع",
    },
    {
      icon: "lucide:headphones",
      title: "دعم فني متواصل",
      desc: "فريق مختص لمساعدتك قبل وبعد الشراء",
    },
  ];

  const newArrivals: NewArrivalProduct[] = [
    {
      id: 131,
      title: "طابعة كانون 657 MF Canon",
      price: "اتصل للسعر",
      img: "https://almishkatstore.iq/img/img_products/prod_6a0046403d59d.webp",
      link: "https://almishkatstore.iq/product/131",
    },
    {
      id: 211,
      title: "Bloody A60 Gaming Mouse",
      price: "25,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_6a1d99a61e698.webp",
      link: "https://almishkatstore.iq/product/211",
    },
    {
      id: 66,
      title: "Dell Precision 7520 Xeon",
      price: "450,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_69ec92da7872a.webp",
      link: "https://almishkatstore.iq/product/66",
    },
    {
      id: 71,
      title: "HP EliteBook 845 G8",
      price: "580,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_69ec9a416314d.webp",
      link: "https://almishkatstore.iq/product/71",
    },
    {
      id: 154,
      title: "Hikvision Wireless Router",
      price: "35,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_6a01e121bded2.webp",
      link: "https://almishkatstore.iq/product/154",
    },
    {
      id: 225,
      title: "Bloody R73 Ultra Duo",
      price: "45,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_6a1fe46090294.webp",
      link: "https://almishkatstore.iq/product/225",
    },
    {
      id: 167,
      title: "راوتر Mercusys MR50G",
      price: "48,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_6a030d2e51fc7.webp",
      link: "https://almishkatstore.iq/product/167",
    },
    {
      id: 188,
      title: "Gigabyte 34\" Curved Monitor",
      price: "495,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_6a1178734046c.webp",
      link: "https://almishkatstore.iq/product/188",
    },
  ];

  const categories: CategoryItem[] = [
    {
      title: "قسم اللابتوب",
      info: "3 أقسام · 56 منتج",
      img: "https://almishkatstore.iq/img/img_main-categories/cat_698d73bd27b634.79769919.webp",
    },
    {
      title: "قسم الكاميرات",
      info: "3 أقسام",
      img: "https://almishkatstore.iq/img/img_main-categories/cat_698d7459a3d1d0.50167185.webp",
    },
    {
      title: "قسم الطابعات",
      info: "3 أقسام · 20 منتج",
      img: "https://almishkatstore.iq/img/img_main-categories/cat_6994614db71c63.24001453.webp",
    },
    {
      title: "قسم الشاشات",
      info: "2 قسم · 12 منتج",
      img: "https://almishkatstore.iq/img/img_main-categories/cat_6994619b09bac7.38590477.webp",
    },
    {
      title: "قسم الإنترنت والشبكات",
      info: "3 أقسام · 29 منتج",
      img: "https://almishkatstore.iq/img/img_main-categories/cat_69e9ea9d1166d5.71278180.jpg",
    },
    {
      title: "قسم الاكسسوارات",
      info: "2 قسم · 72 منتج",
      img: "https://almishkatstore.iq/img/img_main-categories/cat_69e9eab6e79a98.56518609.jpg",
    },
    {
      title: "قسم الطاقة الشمسية",
      info: "3 أقسام",
      img: "https://almishkatstore.iq/img/img_main-categories/cat_69ea3e40641898.78586748.webp",
    },
    {
      title: "قسم التجميعات الاحترافية",
      info: "9 أقسام · 20 منتج",
      img: "https://almishkatstore.iq/img/img_main-categories/cat_69e9eaf765ecc9.51362015.jpg",
    },
  ];

  const featuredProducts: FeaturedProduct[] = [
    {
      id: 1,
      category: "قسم اللابتوبات",
      title: "Dell Precision 7520 Xeon RAM 8GB SSD 256GB GPU 4GB 15.6\"",
      price: "450,000 د.ع",
      oldPrice: "480,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_69ec92da7872a.webp",
      tag: "خصم مميز",
      rating: 4,
      reviewsCount: 12,
      type: "laptop",
    },
    {
      id: 2,
      category: "قسم اللابتوبات",
      title: "HP EliteBook 845 G8 Ryzen 5 14\" Premium Metallic Laptop",
      price: "580,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_69ec9a416314d.webp",
      rating: 5,
      reviewsCount: 8,
      type: "laptop",
    },
    {
      id: 3,
      category: "قسم الشاشات",
      title: "Gigabyte 34\" GS34WQC VA 1500R 135Hz Curved Gaming Monitor",
      price: "495,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_6a1178734046c.webp",
      rating: 5,
      reviewsCount: 15,
      type: "monitor",
    },
    {
      id: 4,
      category: "قسم الاكسسوارات",
      title: "Bloody A60 Light Strike USB Gaming Mouse - 4000 CPI",
      price: "25,000 د.ع",
      oldPrice: "30,000 د.ع",
      img: "https://almishkatstore.iq/img/img_products/prod_6a1d99a61e698.webp",
      tag: "الأكثر مبيعاً",
      rating: 5,
      reviewsCount: 34,
      type: "accessory",
    },
  ];

  // Filter logic
  const filteredProducts = featuredProducts.filter((product) => {
    if (selectedFilter === "all") return true;
    return product.type === selectedFilter;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`جاري البحث عن: ${searchQuery}`);
  };

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const toggleFavorite = () => {
    setFavoritesCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col relative" dir="rtl">
      {/* Top Utility Bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-primary/10">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Icon icon="lucide:truck" className="text-sm text-tertiary" />
            <span>توصيل سريع لكافة محافظات العراق</span>
          </span>
          <span className="hidden md:inline-block text-primary-foreground/60">|</span>
          <span className="hidden md:flex items-center gap-1">
            <Icon icon="lucide:shield" className="text-sm text-tertiary" />
            <span>ضمان حقيقي وصيانة معتمدة</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-primary-foreground/60">|</span>
          <div className="flex items-center gap-2">
            <a href="#" className="hover:text-tertiary transition-colors">
              <Icon icon="lucide:globe" className="text-sm" />
            </a>
            <span>العراق / بغداد</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-card text-card-foreground shadow-sm sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" className="flex items-center gap-3 no-underline">
              <div class="bg-primary text-primary-foreground p-2.5 rounded-xl flex items-center justify-center shadow-md">
                <Icon icon="lucide:zap" className="text-2xl text-tertiary" />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold tracking-tight text-primary">المشكاة ستور</h1>
                <p className="text-[10px] text-muted-foreground tracking-wider font-sans uppercase">Almishkat Store</p>
              </div>
            </a>
            
            {/* Mobile Actions Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={addToCart}
                className="p-2 text-foreground hover:bg-muted rounded-lg relative"
              >
                <Icon icon="lucide:shopping-cart" className="text-xl" />
                <span className="absolute -top-1 -left-1 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground hover:bg-muted rounded-lg"
              >
                <Icon icon="lucide:menu" className="text-xl" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="w-full md:max-w-xl flex items-center relative">
            <div className="relative w-full">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن لابتوب، كاميرا، طابعة، أو إكسسوارات..." 
                className="w-full bg-muted text-foreground border border-border rounded-xl py-3 pr-11 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <Icon icon="lucide:search" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg" />
            </div>
            <button type="submit" className="mr-2 bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-3 rounded-xl text-sm font-semibold shadow-sm transition-all shrink-0">
              بحث
            </button>
          </form>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Account */}
            <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-muted">
              <Icon icon="lucide:user" className="text-xl text-muted-foreground" />
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground leading-none">مرحباً بك</p>
                <p className="text-xs font-bold">تسجيل الدخول</p>
              </div>
            </a>

            {/* Favorites */}
            <button 
              onClick={toggleFavorite}
              className="relative p-2.5 text-foreground hover:text-primary transition-colors hover:bg-muted rounded-xl"
            >
              <Icon icon="lucide:heart" className="text-xl" />
              <span className="absolute -top-1 -left-1 bg-destructive text-destructive-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            </button>

            {/* Cart */}
            <button 
              onClick={() => alert("تم فتح سلة المشتريات")}
              className="relative flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary py-2 px-4 rounded-xl transition-all"
            >
              <Icon icon="lucide:shopping-cart" className="text-lg" />
              <span className="font-bold text