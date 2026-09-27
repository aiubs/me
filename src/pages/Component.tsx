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

// Types
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string;
  tagType?: "discount" | "popular" | "touch" | "gaming" | "premium";
  brand: string;
  cpu: string;
  condition: "new" | "used";
}

interface Subcategory {
  id: number;
  title: string;
  count: number;
  icon: string;
}

export default function App() {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["HP", "Dell"]);
  const [selectedCPUs, setSelectedCPUs] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(1500000);
  const [conditionFilter, setConditionFilter] = useState<string>("الكل");
  const [sortBy, setSortBy] = useState<string>("الأكثر شعبية");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [cartCount, setCartCount] = useState<number>(3);
  const [favoritesCount, setFavoritesCount] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Mock Data
  const subcategories: Subcategory[] = [
    {
      id: 1,
      title: "لابتوبات الدراسة والأعمال",
      count: 24,
      icon: "lucide:briefcase",
    },
    {
      id: 2,
      title: "لابتوبات الألعاب والمونتاج",
      count: 18,
      icon: "lucide:gamepad-2",
    },
    {
      id: 3,
      title: "لابتوبات خفيفة والترابوك",
      count: 12,
      icon: "lucide:laptop",
    },
    {
      id: 4,
      title: "المجدد والمستعمل النظيف",
      count: 15,
      icon: "lucide:refresh-cw",
    },
  ];

  const products: Product[] = [
    {
      id: 1,
      title: 'Dell Precision 7520 Xeon RAM 8GB SSD 256GB GPU 4GB 15.6"',
      category: "المجدد والمستعمل النظيف",
      price: 450000,
      oldPrice: 480000,
      rating: 5,
      reviewsCount: 12,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec92da7872a.webp",
      tag: "خصم مميز",
      tagType: "discount",
      brand: "Dell",
      cpu: "Intel Xeon",
      condition: "used",
    },
    {
      id: 2,
      title: 'HP EliteBook 845 G8 Ryzen 5 14" Premium Metallic Laptop',
      category: "لابتوبات الدراسة والأعمال",
      price: 580000,
      rating: 4,
      reviewsCount: 8,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec9a416314d.webp",
      tag: "الأكثر طلباً",
      tagType: "popular",
      brand: "HP",
      cpu: "AMD Ryzen 5",
      condition: "new",
    },
    {
      id: 3,
      title: "Lenovo ThinkPad L13 Yoga Core i5 Gen 10 Touch X360",
      category: "لابتوبات خفيفة والترابوك",
      price: 395000,
      oldPrice: 420000,
      rating: 5,
      reviewsCount: 15,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec92da7872a.webp",
      tag: "شاشة لمس",
      tagType: "touch",
      brand: "Lenovo",
      cpu: "Intel Core i5",
      condition: "used",
    },
    {
      id: 4,
      title: "ASUS TUF Gaming A15 Ryzen 7 RAM 16GB SSD 512GB RTX 3050",
      category: "لابتوبات الألعاب والمونتاج",
      price: 950000,
      rating: 5,
      reviewsCount: 22,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec9a416314d.webp",
      tag: "ألعاب ومونتاج",
      tagType: "gaming",
      brand: "ASUS",
      cpu: "AMD Ryzen 7",
      condition: "new",
    },
    {
      id: 5,
      title: 'Dell Latitude 5420 Core i5 Gen 11 RAM 8GB SSD 256GB 14"',
      category: "لابتوبات الدراسة والأعمال",
      price: 480000,
      rating: 4,
      reviewsCount: 5,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec92da7872a.webp",
      brand: "Dell",
      cpu: "Intel Core i5",
      condition: "new",
    },
    {
      id: 6,
      title: 'Apple MacBook Air M1 RAM 8GB SSD 256GB 13.3" Space Gray',
      category: "لابتوبات خفيفة والترابوك",
      price: 1150000,
      rating: 5,
      reviewsCount: 41,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec9a416314d.webp",
      tag: "متميز جداً",
      tagType: "premium",
      brand: "Apple",
      cpu: "Apple M1",
      condition: "new",
    },
    {
      id: 7,
      title: "HP Victus 15 Core i5-12450H RAM 8GB SSD 512GB GTX 1650",
      category: "لابتوبات الألعاب والمونتاج",
      price: 790000,
      rating: 4,
      reviewsCount: 14,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec9a416314d.webp",
      brand: "HP",
      cpu: "Intel Core i5",
      condition: "new",
    },
    {
      id: 8,
      title: "Lenovo Legion 5 Ryzen 7 RAM 16GB SSD 1TB RTX 3060 6GB",
      category: "لابتوبات الألعاب والمونتاج",
      price: 1350000,
      oldPrice: 1420000,
      rating: 5,
      reviewsCount: 29,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec92da7872a.webp",
      tag: "خصم مميز",
      tagType: "discount",
      brand: "Lenovo",
      cpu: "AMD Ryzen 7",
      condition: "new",
    },
    {
      id: 9,
      title: 'Dell Inspiron 3511 Core i3 Gen 11 RAM 8GB SSD 256GB 15.6"',
      category: "لابتوبات الدراسة والأعمال",
      price: 350000,
      rating: 3,
      reviewsCount: 3,
      image: "https://almishkatstore.iq/img/img_products/prod_69ec92da7872a.webp",
      brand: "Dell",
      cpu: "Intel Core i3",
      condition: "new",
    },
  ];

  // Handlers
  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleCPUChange = (cpu: string) => {
    if (selectedCPUs.includes(cpu)) {
      setSelectedCPUs(selectedCPUs.filter((c) => c !== cpu));
    } else {
      setSelectedCPUs([...selectedCPUs, cpu]);
    }
  };

  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedCPUs([]);
    setPriceRange(2000000);
    setConditionFilter("الكل");
    setSearchQuery("");
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
            <Icon icon="lucide:globe" className="text-sm" />
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
              <div className="bg-primary text-primary-foreground p-2.5 rounded-xl flex items-center justify-center shadow-md">
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
                onClick={() => setCartCount(prev => prev + 1)} 
                className="p-2 text-foreground hover:bg-muted rounded-lg relative"
              >
                <Icon icon="lucide:shopping-cart" className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute top-1 left-1 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2 text-foreground hover:bg-muted rounded-lg"
              >
                <Icon icon={mobileMenuOpen ? "lucide:x" : "lucide:menu"} className="text-xl" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:max-w-xl flex items-center relative">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="ابحث عن لابتوب، كاميرا، طابعة، أو إكسسوارات..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted text-foreground border border-border rounded-xl py-3 pr-11 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <Icon icon="lucide:search" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg" />
            </div>
            <button className="mr-2 bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-3 rounded-xl text-sm font-semibold shadow-sm transition-all shrink-0">
              بحث
            </button>
          </div>

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
              className="relative p-2.5 text-foreground hover:text-primary transition-colors hover:bg-muted rounded-xl cursor-pointer"
            >
              <Icon icon="lucide:heart" className="text-xl" />
              <span className="absolute -top-1 -left-1 bg-destructive text-destructive-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            </button>

            {/* Cart */}
            <a href="#" className="relative flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary py-2 px-4 rounded-xl transition-all">
              <Icon icon="lucide:shopping-cart" className="text-lg" />
              <span className="font-bold text-sm">السلة</span>
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-lg">
                {cartCount}
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-3">
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm font-bold text-primary flex items-center gap-2 py-2 border-b border-border">
                <Icon icon="lucide:home" className="text-base" />
                <span>الرئيسية</span>
              </a>
              <a href="#" className="text-sm font-bold text-foreground flex items-center gap-2 py-2 border-b border-border">
                <Icon icon="lucide:laptop" className="text-base" />
                <span>قسم اللابتوب</span>
              </a>
              <a href="#" className="text-sm font-medium text-foreground/80 py-2 border-b border-border">الكاميرات</a>
              <a href="#" className="text-sm font-medium text-foreground/80 py-2 border-b border-border">الطابعات والأحبار</a>
              <a href="#" className="text-sm font-medium text-foreground/80 py-2 border-b border-border">الشاشات</a>
              <a href="#" className="text-sm font-medium text-foreground/80 py-2 border-b border-border">شبكات وإنترنت</a>
              <a href="#" className="text-sm font-medium text-foreground/80 py-2 border-b border-border">تجميعات الألعاب</a>
              <a href="#" className="text-sm font-medium text-foreground/80 py-2">العروض الخاصة</a>
            </nav>
          </div>
        )}

        {/* Category Quick Links Sub-header */}
        <div className="border-t border-border bg-muted/50 hidden md:block">
          <div class="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">
            <nav className="flex items-center gap-6">
              <a href="#" className="text-sm font-bold text-foreground hover:text-primary flex items-center gap-1.5 py-1 no-underline">
                <Icon icon="lucide:home" className="text-base" />
                <span>الرئيسية</span>
              </a>
              <a href="#" className="text-sm font-bold text-primary flex items-center gap-1.5 py-1 border-b-2 border-primary no-underline">
                <Icon icon="lucide:laptop" className="text-base" />
                <span>قسم اللابتوب</span>
              </a>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1 no-underline">الكاميرات</a>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1 no-underline">الطابعات والأحبار</a>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1 no-underline">الشاشات</a>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1 no-underline">شبكات وإنترنت</a>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1 no-underline">تجميعات الألعاب</a>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1 no-underline">العروض الخاصة</a>
            </nav>
            <div className="flex items-center gap-2 text-xs font-bold text-tertiary bg-tertiary/10 py-1 px-3 rounded-full">
              <Icon icon="lucide:zap" className="animate-pulse text-sm" />
              <span className="text-tertiary-foreground">تخفيضات نهاية الأسبوع تصل إلى 30%</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-6">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground bg-card px-4 py-2.5 rounded-xl border border-border">
          <a href="#" className="hover:text-primary transition-colors no-underline flex items-center gap-1">
            <Icon icon="lucide:home" className="text-sm" />
            <span>الرئيسية</span>
          </a>
          <Icon icon="lucide:chevron-left" className="text-sm" />
          <span className="text-foreground font-semibold">قسم اللابتوب</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-4 pb-2">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-slate-900 rounded-3xl overflow-hidden shadow-xl text-primary-foreground relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10">
            
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-right space-y-4 z-10">
              <span className="bg-tertiary text-foreground text-[10px] font-bold px-3 py-1 rounded-full w-fit shadow-sm">
                الوكيل المعتمد وأفضل الأسعار في العراق
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-extrabold leading-tight text-balance">
                قسم اللابتوبات والأجهزة الذكية
              </h2>
              <p className="text-xs md:text-sm text-primary-foreground/80 max-w-xl leading-relaxed text-pretty">
                تسوّق أفضل أجهزة اللابتوب المخصصة للألعاب، المونتاج، الدراسة، والأعمال من أشهر الماركات العالمية بضمان حقيقي ممتد وصيانة مجانية لكافة المحافظات العراقية.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-2">
                <span className="flex items-center gap-1.5">
                  <Icon icon="lucide:shield" className="text-tertiary text-base" /> ضمان لمدة عام كامل
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon icon="lucide:refresh-cw" className="text-tertiary text-base" /> استبدال خلال 14 يوم
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon icon="lucide:truck" className="text-tertiary text-base" /> شحن لكافة المحافظات
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/10">
              <img 
                src="https://uxmagic.blob.core.windows.net/public/agent-images/laptop-hero-1790529539096-7yu6kx0rhf.png" 
                alt="أحدث أجهزة اللابتوب والتقنيات" 
                className="w-full h-full object-cover" 
                width="1536" 
                height="1024" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Laptop Subcategories Section */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-6 bg-primary rounded-full"></span>
            <h3 className="text-lg font-heading font-bold text-foreground">الأصناف الفرعية في قسم اللابتوب</h3>
          </div>
          <span className="text-xs text-muted-foreground">تصفح حسب الفئة والاستخدام</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {subcategories.map((sub) => (
            <div 
              key={sub.id} 
              className="group bg-card border border-border hover:border-primary hover:shadow-md transition-all p-5 rounded-2xl flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all mb-3 shadow-sm">
                <Icon icon={sub.icon} className="text-2xl" />
              </div>
              <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                {sub.title}
              </h4>
              <p className="text-[10px]