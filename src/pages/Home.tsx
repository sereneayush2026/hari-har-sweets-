import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Leaf, BookOpen, Shield, Award, Star, Heart, Package, Users, MapPin, Phone, Clock, Mail, CheckCircle, Smartphone, Camera, CalendarHeart, HandPlatter } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/916232092514";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-serif font-bold text-foreground">
          Harihar Hotel
          <span className="block text-xs font-sans text-primary uppercase tracking-widest mt-1">Since 1985</span>
        </div>
        <div className="hidden lg:flex gap-6 font-medium text-foreground/80">
          {["Home", "About", "Sweets", "Rolls", "Festival", "Gallery", "Contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-primary transition-colors cursor-pointer">
              {item}
            </button>
          ))}
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hidden md:block">
          Order Now
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary/40 text-secondary-foreground">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
            Celebrate Every Occasion with Authentic Indian Sweets
          </h1>
          <p className="text-lg lg:text-xl opacity-90 mb-10 max-w-xl leading-relaxed">
            Harihar Hotel – Kareli's Trusted Destination for Premium Sweets, Desserts & Festive Delicacies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg inline-flex items-center gap-2">
              Order on WhatsApp
            </a>
            <button onClick={() => document.getElementById("sweets")?.scrollIntoView({ behavior: "smooth" })} className="bg-transparent border-2 border-primary/50 text-primary-foreground hover:bg-primary/10 px-8 py-3 rounded-full font-bold text-lg transition-all">
              View Collection
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative h-[500px] w-full hidden lg:block">
          <img src="/images/hero-1.png" alt="Premium Sweets" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 object-contain drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative p-8 border-2 border-primary/20 rounded-lg bg-card">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Harihar Hotel — A Legacy of Sweet Traditions</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Harihar Hotel has been serving Kareli with authentic sweets and traditional flavors. Every sweet is prepared using quality ingredients and time-honored recipes that bring families together during festivals, celebrations, and special moments.
            </p>
            <div className="flex items-center gap-6 pt-6 border-t border-primary/20">
               <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                  <img src="/images/owner.jpg" alt="Vijay Kumar Nema" className="w-full h-full object-cover" />
               </div>
               <div>
                <p className="font-serif font-bold text-xl text-foreground">Vijay Kumar Nema</p>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider">Proprietor</p>
               </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Leaf, label: "100% Pure Ingredients" },
              { icon: BookOpen, label: "Time-Honored Recipes" },
              { icon: Shield, label: "Hygienic Preparation" },
              { icon: Heart, label: "Family Tradition" }
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-primary/10 flex flex-col items-center text-center gap-4 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-bold text-foreground">{feature.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Sweets = () => {

  const [cart, setCart] = useState<Record<string, number>>({});
  const addToCart = (itemName: string) => {
  setCart((prev) => ({
    ...prev,
    [itemName]: (prev[itemName] || 0) + 1,
  }));
};
const decreaseQuantity = (itemName: string) => {
  setCart((prev) => {
    const updated = { ...prev };

    if (updated[itemName] > 1) {
      updated[itemName]--;
    } else {
      delete updated[itemName];
    }

    return updated;
  });
};
const removeItem = (itemName: string) => {
  setCart((prev) => {
    const updated = { ...prev };
    delete updated[itemName];
    return updated;
  });
};
const orderOnWhatsApp = () => {
 if (Object.keys(cart).length === 0){
  alert("Please add items to cart first");
  return;
}
const totalPrice = Object.entries(cart).reduce(
  (total, [item, qty]) => {
    const sweet = sweets.find((s) => s.name === item);
    return total + (sweet?.price || 0) * qty;
  },
  0
);
  const items = Object.entries(cart)
  .map(([item, qty]) => `${item} x ${qty}`)
  .join(", ");

  const message = `Hello Harihar Hotel, I would like to order: ${items}`;
const whatsappUrl =
  `https://wa.me/916232092514?text=${encodeURIComponent(message)}`;

console.log(whatsappUrl);

window.location.href = whatsappUrl;

};
  
  const sweets = [
    { 
      name: "Kheer Pudi",
       price: 290,
              desc: "Traditional festive delicacy",
        img: "/images/sweet-kheer-pudi.png"
       },
    { 
      name: "Kesar Bati",
       price:380,
        desc: "Rich saffron-infused sweet",
         img: "/images/sweet-kesar-bati.png"
         },
    { 
      
      name: "Indrani",
       price: 400,
      desc:"Signature local sweet specialty",
       img: "/images/sweet-indrani.png"
       },
    { 
      name: "Milk Cake",
       price: 350,
          desc: "Slow-cooked milk delicacy",
           img: "/images/sweet-milk-cake.png"
           },
    {
       name: "Kaju Katli",
      price: 600,
      desc: "Premium cashew sweet",
       img: "/images/sweet-kaju-katli.png"
       },
    {
       name: "Gulab Jamun",
        price:280,
         desc: "Soft and juicy classic sweet",
          img: "/images/hero-2.png"
         },
    { name: "Malai Chap",  price: 380, desc: "Cream-rich dessert specialty", img: "/images/hero-3.png" },
    { name: "Mawa Jalebi",  price:300, desc: "Traditional crispy sweet", img: "/images/hero-4.png" },
    { name: "Kalakand",  price: 400, desc: "Fresh milk-based sweet", img: "/images/hero-5.png" },
    { name: "Malai Ghewar",  price: 200, desc: "Royal festive dessert", img: "/images/gal-1.jpg" },
  ];

  return (
    <section id="sweets" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Signature Sweets</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="text-center mb-6">
  <h3 className="text-xl font-bold">
    Cart Items: {Object.values(cart).reduce((a, b) => a + b, 0)}
  </h3>
<div className="mt-3">
  {Object.entries(cart).map(([item, qty]) => (
    <div
      key={item}
      className="flex justify-between items-center gap-3 py-2"
    >
      <span>
        {item} × {qty}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => addToCart(item)}
          className="px-2 bg-green-600 text-white rounded"
        >
          +
        </button>

        <button
          onClick={() => decreaseQuantity(item)}
          className="px-2 bg-yellow-500 text-white rounded"
        >
          -
        </button>

        <button
          onClick={() => removeItem(item)}
          className="px-2 bg-red-600 text-white rounded"
        >
          ×
        </button>
      </div>
    </div>
  ))}
</div>
  
  <button
    onClick={orderOnWhatsApp}
    className="mt-3 bg-green-600 text-white px-6 py-3 rounded-full font-bold"
  >
    Buy on WhatsApp
  </button>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sweets.map((sweet, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-primary/5 group">
              <div className="h-64 overflow-hidden relative bg-muted flex items-center justify-center">
                {sweet.img ? (
                  <img src={sweet.img} alt={sweet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzY2NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGR5PSIuM2VtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD48L3N2Zz4=' }} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground"><HandPlatter size={48} className="opacity-20"/></div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{sweet.name}</h3>
                <p className="text-muted-foreground mb-6">{sweet.desc}</p>
              <p className="text-primary font-bold text-lg mb-4">
  ₹{sweet.price}
</p>
              <button
  onClick={() => addToCart(sweet.name)}
  className="inline-block px-6 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
>
  Add to Cart
</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RollsSection = () => {
    const rolls = [
        { name: "Chocolate Roll", img: "/images/hero-1.png" },
        { name: "Malai Roll", img: "/images/hero-3.png" },
        { name: "Anam Roll", img: "/images/sweet-kaju-katli.png" },
        { name: "Tikia Roll", img: "/images/sweet-kheer-pudi.png" }
    ];
    return (
        <section id="rolls" className="py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">Premium Roll Collection</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {rolls.map((roll, i) => (
                        <div key={i} className="bg-secondary-foreground/5 border border-primary/20 rounded-xl overflow-hidden group">
                            <div className="h-48 overflow-hidden bg-black/20">
                                <img src={roll.img} alt={roll.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                            </div>
                            <div className="p-5 text-center">
                                <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Gift-Worthy Sweets</span>
                                <h3 className="text-xl font-serif font-bold">{roll.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Refreshments = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden h-[400px]">
                     <img src="/images/lassi.jpg" alt="Fresh Lassi" className="w-full h-full object-cover" />
                </div>
                <div className="order-1 md:order-2">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-sm mb-4">Prepared Fresh Daily</span>
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Our Signature Fresh Lassi</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Experience the rich, creamy, and authentic taste of our special Kulhad Lassi. Garnished with fresh malai, pistachios, and saffron, it's the perfect refreshment for any time of the day.
                    </p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-md">
                        Order Refreshments
                    </a>
                </div>
            </div>
        </section>
    )
}

const Festivals = () => {
    const festivals = [
        { name: "Diwali Collection", desc: "Luxury gift boxes", img: "/images/fest-diwali.jpg" },
        { name: "Raksha Bandhan", desc: "Customized sweet hampers", img: "/images/gal-1.jpg" },
        { name: "Holi Specials", desc: "Colorful festive sweets", img: "/images/sweet-kesar-bati.png" },
        { name: "Wedding Sweet Boxes", desc: "Premium wedding trays", img: "/images/fest-wedding.jpg" },
        { name: "Corporate Gift Packs", desc: "Bulk corporate gifting", img: "/images/sweet-milk-cake.png" }
    ];

    return (
        <section id="festival" className="py-24 bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-destructive/10 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Festival Specials</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {festivals.map((fest, i) => (
                        <div key={i} className="bg-background rounded-2xl shadow-sm border border-primary/10 overflow-hidden flex flex-col group">
                            <div className="h-56 overflow-hidden">
                                <img src={fest.img} alt={fest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col items-center text-center">
                                <h3 className="text-2xl font-serif font-bold mb-2">{fest.name}</h3>
                                <p className="text-muted-foreground mb-6 flex-1">{fest.desc}</p>
                                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="w-full py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                                    Pre-Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const WhyChoose = () => {
    const features = [
        { icon: Leaf, title: "Fresh Ingredients" },
        { icon: BookOpen, title: "Traditional Recipes" },
        { icon: Shield, title: "Hygienic Preparation" },
        { icon: Award, title: "Premium Quality" },
        { icon: Star, title: "Festival Specialists" },
        { icon: Heart, title: "Family-Owned Business" },
        { icon: Package, title: "Bulk Order Facility" },
        { icon: Users, title: "Trusted by Kareli Families" }
    ];
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Why Choose Harihar Hotel</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="p-6 text-center border border-muted rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all">
                            <f.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                            <h4 className="font-bold text-sm md:text-base">{f.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Gallery = () => {
    const images = [
        "/images/gal-1.jpg",
        "/images/sweet-indrani.png",
        "/images/fest-wedding.jpg",
        "/images/sweet-kesar-bati.png",
        "/images/fest-diwali.jpg",
        "/images/hero-1.png",
        "/images/hero-2.png",
        "/images/sweet-kheer-pudi.png"
    ];
    return (
        <section id="gallery" className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-secondary-foreground mb-4">Our Sweet Journey</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
                    {images.map((src, i) => (
                        <div key={i} className="break-inside-avoid rounded-lg overflow-hidden group">
                            <img src={src} alt="Gallery" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Ordering = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-serif font-bold text-secondary mb-12">Order Your Favourite Sweets Instantly</h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                    {[
                        { title: "WhatsApp Ordering", icon: Smartphone },
                        { title: "Festival Pre-Booking", icon: CalendarHeart },
                        { title: "Wedding & Bulk Orders", icon: Package }
                    ].map((f, i) => (
                        <div key={i} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-secondary flex flex-col items-center">
                            <f.icon size={32} className="mb-4" />
                            <h4 className="font-bold">{f.title}</h4>
                        </div>
                    ))}
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#20bd5a] transition-all shadow-xl hover:-translate-y-1">
                    <Smartphone size={24} />
                    Message on WhatsApp
                </a>
            </div>
        </section>
    )
}

const Testimonials = () => {
    const reviews = [
        { text: "Best Kaju Katli and Milk Cake in Kareli. We always buy from Harihar Hotel during festivals!", name: "Ramesh Patel" },
        { text: "Fresh sweets and excellent quality. My family has been their customer for 20 years.", name: "Sunita Devi" },
        { text: "Our family buys festival sweets only from Harihar Hotel. Nothing compares!", name: "Arun Kumar" }
    ];
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-4">What Our Customers Say</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-card p-8 rounded-2xl shadow-sm border-t-4 border-secondary hover:shadow-md transition-shadow">
                            <div className="flex gap-1 text-primary mb-6">
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                            </div>
                            <p className="text-muted-foreground italic mb-6">"{r.text}"</p>
                            <p className="font-bold font-serif text-foreground">— {r.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const ServiceAreas = () => (
    <section className="py-12 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-4">
            <h3 className="text-2xl font-serif font-bold mb-8">We Serve Across</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {["Kareli", "Nearby Villages", "Wedding Venues", "Corporate Events", "Family Functions"].map(area => (
                    <span key={area} className="px-5 py-2 rounded-full border border-primary/30 text-primary-foreground/90 font-medium text-sm">
                        {area}
                    </span>
                ))}
            </div>
        </div>
    </section>
)

const Contact = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(z.object({
      name: z.string().min(2),
      phone: z.string().min(10),
      type: z.string(),
      message: z.string().min(10)
    })),
    defaultValues: { name: "", phone: "", type: "General Inquiry", message: "" }
  });

  const onSubmit = (data: any) => {
    toast({ title: "Inquiry Sent!", description: "We will get back to you shortly." });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-8 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><MapPin /></div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Visit Us</h4>
                  <p className="text-muted-foreground">Near Police Station, Kareli<br />Madhya Pradesh, 487221</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Phone /></div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+91 99999 99999</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Clock /></div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Business Hours</h4>
                  <p className="text-muted-foreground">7:00 AM – 10:00 PM (All Days)</p>
                </div>
              </div>
            </div>
            <div className="h-64 bg-muted rounded-xl overflow-hidden shadow-inner">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.0!2d79.08!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKareli!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
          <div className="bg-background p-8 rounded-2xl shadow-sm border border-primary/10">
            <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Send an Inquiry</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+91 99999 99999" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="type" render={({ field }) => (
                  <FormItem><FormLabel>Inquiry Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="Festival Order">Festival Order</SelectItem>
                        <SelectItem value="Wedding Order">Wedding Order</SelectItem>
                        <SelectItem value="Bulk Order">Bulk Order</SelectItem>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  <FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="How can we help you?" className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit" className="w-full py-6 text-lg font-bold">Submit Inquiry</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-4 border-primary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-3xl font-serif font-bold mb-4 text-primary">Harihar Hotel</h3>
          <p className="opacity-80 mb-6">Serving Kareli with Authentic Taste, Quality, and Tradition since generations.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-primary">Quick Links</h4>
          <ul className="space-y-2 opacity-80">
            {["Home", "About", "Sweets", "Festival", "Gallery", "Contact"].map(item => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-primary">Categories</h4>
          <ul className="space-y-2 opacity-80">
            <li>Kaju Katli</li>
            <li>Gulab Jamun</li>
            <li>Milk Cake</li>
            <li>Malai Ghewar</li>
            <li>Premium Rolls</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-primary">Connect</h4>
          <p className="opacity-80 mb-2">Near Police Station, Kareli, MP</p>
          <p className="opacity-80 mb-4">+91 99999 99999</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold hover:bg-[#20bd5a] transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
      <div className="border-t border-primary/20 pt-8 text-center opacity-60 text-sm">
        <p>© {new Date().getFullYear()} Harihar Hotel. All Rights Reserved. | Near Police Station, Kareli, MP</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <About />
      <Sweets />
      <RollsSection />
      <Refreshments />
      <Festivals />
      <WhyChoose />
      <Gallery />
      <Ordering />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce">
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
}