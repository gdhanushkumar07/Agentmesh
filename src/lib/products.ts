// src/lib/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  brand: string;
  category: 'Electronics' | 'Audio' | 'Computers' | 'Gaming' | 'Office' | 'Smart Home' | 'Accessories' | 'Photography' | 'Networking' | 'Storage';
  availability: 'In Stock' | 'Low Stock' | 'Limited Stock' | 'Ships Tomorrow' | 'Multiple Sellers' | 'Pre-order' | 'Out of Stock' | 'Restocking Soon';
  deliveryEstimate: string;
  description: string;
  seller: string;
  backupSeller?: string;
  specs: Record<string, string>;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "sony-xm6",
    name: "Sony WH-1000XM6 Wireless Noise Canceling Headphones",
    price: 399.99,
    rating: 4.9,
    brand: "Sony",
    category: "Audio",
    availability: "Multiple Sellers",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Industry-leading noise canceling headphones with dual-coordination driver arrays, 40-hour playback, and Aicoo-sync priority.",
    seller: "Alpha Sound Outlet",
    backupSeller: "Beta Audio Store",
    specs: {
      "Noise Cancellation": "Active Dual Processor",
      "Battery Life": "40 Hours",
      "Drivers": "40mm Dome Type",
      "Connectivity": "Bluetooth 5.3 / NFC"
    },
    features: [
      "Adaptive Sound Control automatically adjusts based on surroundings.",
      "Speak-to-Chat technology pauses playback on voice detection.",
      "High-Resolution Audio Wireless compatible."
    ]
  },
  {
    id: "macbook-pro-16",
    name: "MacBook Pro 16-inch M3 Max",
    price: 2499.00,
    rating: 4.8,
    brand: "Apple",
    category: "Computers",
    availability: "In Stock",
    deliveryEstimate: "2 Days (Express)",
    description: "Liquid Retina XDR display, 36GB Unified Memory, 1TB SSD. Built for high-volume compiling and machine learning models.",
    seller: "Apple Store Direct",
    specs: {
      "Chipset": "Apple M3 Max (14-core CPU, 30-core GPU)",
      "Memory": "36GB Unified RAM",
      "Storage": "1TB SSD",
      "Display": "16.2-inch Liquid Retina XDR"
    },
    features: [
      "Hardware-accelerated ray tracing.",
      "Up to 22 hours of battery life.",
      "Studio-quality three-mic array."
    ]
  },
  {
    id: "odyssey-g9",
    name: "Samsung Odyssey G9 49\" Curved Monitor",
    price: 1099.99,
    rating: 4.7,
    brand: "Samsung",
    category: "Gaming",
    availability: "Low Stock",
    deliveryEstimate: "Tomorrow by 2 PM",
    description: "Dual QHD curved display with 240Hz refresh rate, 1ms response time, and Quantum Matrix HDR lighting.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Screen Size": "49 inches",
      "Resolution": "5120 x 1440 (DQHD)",
      "Refresh Rate": "240Hz",
      "Aspect Ratio": "32:9"
    },
    features: [
      "1000R curvature matches the human eye shape.",
      "G-Sync and FreeSync Premium Pro compatible.",
      "Infinity Core lighting customization."
    ]
  },
  {
    id: "logitech-mx3",
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 99.99,
    rating: 4.9,
    brand: "Logitech",
    category: "Accessories",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Ergonomic precision mouse featuring 8K DPI tracking on glass, MagSpeed electromagnetic scrolling, and quiet clicks.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Sensor": "Darkfield High Precision",
      "DPI": "200 to 8000 DPI",
      "Buttons": "7 Programmable",
      "Battery": "Rechargeable Li-Po (500 mAh)"
    },
    features: [
      "Scroll 1,000 lines in a single second.",
      "Comfortable ergonomic hand silhouette.",
      "Cross-computer control and sharing via Flow."
    ]
  },
  {
    id: "bose-ultra",
    name: "Bose QuietComfort Ultra Earbuds",
    price: 299.00,
    rating: 4.6,
    brand: "Bose",
    category: "Audio",
    availability: "Ships Tomorrow",
    deliveryEstimate: "Tomorrow by 5 PM",
    description: "Immersive audio wireless earbuds with CustomTune calibration, world-class active noise cancelation, and sweat resistance.",
    seller: "Bose Direct",
    specs: {
      "Type": "True Wireless In-Ear",
      "Battery Life": "6 Hours (24 with case)",
      "Sweat Rating": "IPX4",
      "Audio Codecs": "AAC / SBC / aptX Adaptive"
    },
    features: [
      "Bose Immersive Audio pushes spatial sound boundaries.",
      "Simple touch controls for volume, track skip, and ANC modes.",
      "Bose Music App customization."
    ]
  },
  {
    id: "keychron-q1",
    name: "Keychron Q1 Pro Mechanical Keyboard",
    price: 199.99,
    rating: 4.8,
    brand: "Keychron",
    category: "Office",
    availability: "Limited Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Full aluminum QMK/VIA wireless mechanical keyboard with double-gasket design and hot-swappable switches.",
    seller: "Beta Audio Store",
    specs: {
      "Layout": "75% ANSI Layout",
      "Switches": "Keychron K Pro Red (Linear)",
      "Keycaps": "Double-shot KSA PBT",
      "Connectivity": "Bluetooth 5.1 / USB-C"
    },
    features: [
      "Full CNC machined aluminum body.",
      "Hot-swappable switch sockets.",
      "Screw-in PCB stabilizers for typing stability."
    ]
  },
  {
    id: "philips-hue",
    name: "Philips Hue Smart LED Bulb Starter Kit",
    price: 179.99,
    rating: 4.7,
    brand: "Philips",
    category: "Smart Home",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Set of 4 white and color ambiance smart bulbs, Bridge included. Connects with major smart home assistants.",
    seller: "Beta Audio Store",
    specs: {
      "Fitting": "E26",
      "Wattage": "9.5W (Equivalent to 75W)",
      "Color Temp": "2000K to 6500K",
      "Luminous Flux": "1100 Lumen"
    },
    features: [
      "Sync lighting with gaming sessions, movies, and music.",
      "Voice control support via Siri, Alexa, and Google Assistant.",
      "Automated timers and routines."
    ]
  },
  {
    id: "sony-a7iv",
    name: "Sony Alpha 7 IV Full-Frame Camera",
    price: 2498.00,
    rating: 4.8,
    brand: "Sony",
    category: "Photography",
    availability: "Limited Stock",
    deliveryEstimate: "2 Days (Express)",
    description: "33MP Exmor R sensor, BIONZ XR processing engine, real-time autofocus tracking, and 4K 60p video capabilities.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Sensor Resolution": "33 Megapixel Full-Frame",
      "Lens Mount": "Sony E-mount",
      "ISO Sensitivity": "100 to 51200",
      "Stabilization": "5-axis In-body Image Stabilization"
    },
    features: [
      "Real-time eye autofocus for humans, animals, and birds.",
      "10-bit 4:2:2 video capture inside camera.",
      "Stunning low-light dynamic range."
    ]
  },
  {
    id: "ubiquiti-dream",
    name: "Ubiquiti UniFi Dream Machine Pro",
    price: 379.00,
    rating: 4.9,
    brand: "Ubiquiti",
    category: "Networking",
    availability: "Ships Tomorrow",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Enterprise-grade rackmount gateway, router, and controller. High-throughput security firewall capabilities.",
    seller: "Beta Audio Store",
    specs: {
      "Ports": "8x RJ45 Gigabit, 1x SFP+ WAN, 1x SFP+ LAN",
      "Processor": "Quad-core ARM Cortex-A57 at 1.7 GHz",
      "Storage": "Onboard 16GB eMMC",
      "Throughput": "3.5 Gbps with IDS/IPS"
    },
    features: [
      "All-in-one console integrating network, protect, and access services.",
      "Built-in 3.5\" HDD bay for NVR security recording.",
      "Threat management firewall filters."
    ]
  },
  {
    id: "wd-black-sn850x",
    name: "WD_BLACK 2TB SN850X NVMe SSD",
    price: 149.99,
    rating: 4.8,
    brand: "Western Digital",
    category: "Storage",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Internal PCIe Gen4 SSD with heatsink, delivering read speeds up to 7300MB/s for PC and PS5 consoles.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Capacity": "2TB",
      "Interface": "PCIe Gen4 x4 NVMe",
      "Max Sequential Read": "7300 MB/s",
      "Max Sequential Write": "6600 MB/s"
    },
    features: [
      "Equipped with RGB heatsink to maintain thermal efficiency.",
      "Game Mode 2.0 automatic bandwidth balancing.",
      "PlayStation 5 console compatibility checked."
    ]
  },
  {
    id: "asus-rog-phone",
    name: "ASUS ROG Phone 8 Pro 5G",
    price: 1199.99,
    rating: 4.7,
    brand: "ASUS",
    category: "Electronics",
    availability: "Pre-order",
    deliveryEstimate: "Released July 15",
    description: "Snapdragon 8 Gen 3 gaming mobile, 24GB RAM, 1TB storage, AniMe vision LED panel, and AeroActive cooling.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Processor": "Snapdragon 8 Gen 3",
      "RAM": "24GB LPDDR5X",
      "Storage": "1TB UFS 4.0",
      "Display": "6.78-inch AMOLED (165Hz)"
    },
    features: [
      "Built-in air triggers for console-style control mapping.",
      "IP68 dust and water resistance.",
      "Advanced vapor chamber cooling."
    ]
  },
  {
    id: "sennheiser-hd800",
    name: "Sennheiser HD 800 S Reference Headphones",
    price: 1599.95,
    rating: 4.9,
    brand: "Sennheiser",
    category: "Audio",
    availability: "Low Stock",
    deliveryEstimate: "2 Days (Express)",
    description: "Open-back reference headphones offering the most natural spatial acoustics, hand-crafted in Germany.",
    seller: "Beta Audio Store",
    specs: {
      "Impedance": "300 Ohms",
      "Frequency Response": "4 Hz to 51,000 Hz",
      "Transducer Principle": "Open Dynamic",
      "Weight": "330g"
    },
    features: [
      "Absorber technology preserves delicate acoustic detail.",
      "High-end micro-fiber ear pads and steel headband frames.",
      "Balanced 4.4mm connections included."
    ]
  },
  {
    id: "razer-blade-16",
    name: "Razer Blade 16 Gaming Laptop",
    price: 2999.99,
    rating: 4.6,
    brand: "Razer",
    category: "Gaming",
    availability: "Ships Tomorrow",
    deliveryEstimate: "Tomorrow by 5 PM",
    description: "QHD+ 240Hz OLED display, Intel Core i9 processor, NVIDIA GeForce RTX 4080 GPU, compact anodized chassis.",
    seller: "Beta Audio Store",
    specs: {
      "Display": "16-inch QHD+ 240Hz OLED",
      "CPU": "Intel Core i9-14900HX",
      "GPU": "NVIDIA GeForce RTX 4080 (12GB)",
      "RAM": "32GB DDR5"
    },
    features: [
      "Vapor chamber cooling structures.",
      "Razer Chroma RGB per-key backlighting.",
      "Premium aluminum unibody build."
    ]
  },
  {
    id: "steelseries-apex",
    name: "SteelSeries Apex Pro TKL Keyboard",
    price: 189.99,
    rating: 4.7,
    brand: "SteelSeries",
    category: "Gaming",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "OmniPoint 2.0 adjustable switches mechanical keyboard, OLED smart display, and aircraft-grade aluminum alloy top plate.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Actuation range": "0.2mm to 3.8mm",
      "Switch rating": "100 Million Clicks",
      "Connectivity": "Detachable USB-C",
      "Keycaps": "Double Shot PBT"
    },
    features: [
      "Dual action keybindings on single switches.",
      "Dynamic profiles adjust parameters per-app.",
      "Magnetic wrist rest included."
    ]
  },
  {
    id: "dyson-light",
    name: "Dyson Solarcycle Morph Desk Light",
    price: 649.99,
    rating: 4.5,
    brand: "Dyson",
    category: "Smart Home",
    availability: "Limited Stock",
    deliveryEstimate: "3 Days",
    description: "Smart desk lamp tracking local daylight, adjusts hue and brightness dynamically to decrease eye strain.",
    seller: "Dyson Direct",
    specs: {
      "Light Output": "850 Lumens",
      "LED Lifetime": "Up to 60 Years",
      "USB-C Port": "Integrated 5V Output",
      "Dimensions": "20.6 x 16.2 inches"
    },
    features: [
      "4-in-1 lighting modes: task, background, ambient, and feature.",
      "Heat pipe cooling preserves LED illumination clarity.",
      "Precision motion sensor auto-switches power."
    ]
  },
  {
    id: "netgear-nighthawk",
    name: "Netgear Nighthawk WiFi 7 Router",
    price: 599.99,
    rating: 4.8,
    brand: "Netgear",
    category: "Networking",
    availability: "Restocking Soon",
    deliveryEstimate: "Available in 5 Days",
    description: "Next-gen WiFi 7 router delivering speeds up to 19Gbps, 10G internet WAN port, and advanced security configurations.",
    seller: "Beta Audio Store",
    specs: {
      "WiFi Speed": "Up to 19 Gbps",
      "Bands": "Tri-Band WiFi 7",
      "Ethernet Ports": "2x 10G, 4x 1G RJ45",
      "Processor": "2.2GHz Quad-Core"
    },
    features: [
      "Multi-link Operation balances spectrum capacity.",
      "Supports 320MHz high-frequency channels.",
      "Netgear Armor threat defense utility."
    ]
  },
  {
    id: "synology-ds923",
    name: "Synology DiskStation DS923+ 4-Bay NAS",
    price: 599.99,
    rating: 4.9,
    brand: "Synology",
    category: "Storage",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Compact 4-bay network attached storage console, expandable up to 9 drives. Built-in M.2 SSD cache slots.",
    seller: "Beta Audio Store",
    specs: {
      "CPU": "AMD Ryzen R1600 (Dual-Core)",
      "RAM": "4GB DDR4 ECC (Expandable to 32GB)",
      "Drive Bays": "4x 3.5\"/2.5\" SATA HDD/SSD",
      "Ethernet": "2x 1GbE LAN ports"
    },
    features: [
      "Consolidate and back up multi-company file records.",
      "Dual M.2 NVMe SSD cache support.",
      "Synology DiskStation Manager (DSM) operating utility."
    ]
  },
  {
    id: "logitech-streamcam",
    name: "Logitech StreamCam 1080p Web Camera",
    price: 129.99,
    rating: 4.6,
    brand: "Logitech",
    category: "Office",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "High-definition webcam with USB-C connection, auto-focus, AI exposure tracking, and 60fps capturing capability.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Max Video": "1080p at 60 fps",
      "Lens": "Premium Full HD Glass",
      "Focus": "Auto / Face Tracking",
      "Cable Length": "5 Feet USB-C"
    },
    features: [
      "Smart auto-framing keeps you in the center.",
      "Vertical video capability for mobile uploads.",
      "Integrated noise-reduction microphones."
    ]
  },
  {
    id: "gopro-hero12",
    name: "GoPro HERO12 Black Action Camera",
    price: 399.99,
    rating: 4.7,
    brand: "GoPro",
    category: "Photography",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Stunning 5.3K60 video action camera with HyperSmooth 6.0 stabilization, water-resistant up to 33 feet.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Resolution": "5.3K Video / 27MP Photos",
      "Stabilization": "HyperSmooth 6.0",
      "Battery": "Enduro High-Performance",
      "Sensor Size": "1/1.9-inch CMOS"
    },
    features: [
      "Timecode sync for multi-camera video matching.",
      "Rugged + waterproof build.",
      "HDR video capture."
    ]
  },
  {
    id: "herman-miller-aeron",
    name: "Herman Miller Aeron Chair",
    price: 1495.00,
    rating: 4.9,
    brand: "Herman Miller",
    category: "Office",
    availability: "Ships Tomorrow",
    deliveryEstimate: "Tomorrow by 2 PM",
    description: "The gold standard of ergonomic office seating. Breathable mesh support, customizable lumbar adjustment, and tilt limiter.",
    seller: "Herman Miller Store",
    specs: {
      "Material": "Pellicle 8Z Mesh",
      "Size": "Medium (Size B)",
      "Weight Capacity": "300 lbs",
      "Warranty": "12 Years"
    },
    features: [
      "PostureFit SL adjustable lumbar pad alignment.",
      "Fully adjustable armrests (height, depth, angle).",
      "Environmentally sustainable recycled ocean-bound materials."
    ]
  },
  {
    id: "ring-doorbell",
    name: "Ring Video Doorbell Pro 2",
    price: 249.99,
    rating: 4.6,
    brand: "Ring",
    category: "Smart Home",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Hardwired smart video doorbell featuring Head-to-Toe 1536p HD video, 3D motion detection, and Alexa greetings integration.",
    seller: "Beta Audio Store",
    specs: {
      "Video Resolution": "1536p HD Color",
      "Field of View": "150° Horizontal, 150° Vertical",
      "Connectivity": "Dual-Band 2.4 / 5 GHz",
      "Power": "Hardwired Installation"
    },
    features: [
      "Birds Eye View mapping tracks motion pathing.",
      "Built-in Alexa greets guests when busy.",
      "Color Night Vision sensors."
    ]
  },
  {
    id: "kindle-scribe",
    name: "Amazon Kindle Scribe 10.2\" E-Reader",
    price: 339.99,
    rating: 4.7,
    brand: "Amazon",
    category: "Office",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "10.2-inch glare-free paperwhite screen e-reader and digital notebook. Includes premium pen for journaling and sketching.",
    specs: {
      "Display Size": "10.2-inch E Ink Screen",
      "Resolution": "300 ppi",
      "Storage Capacity": "32GB",
      "Connectivity": "WiFi / Bluetooth"
    },
    seller: "Amazon Store Direct",
    features: [
      "Handwrite annotations directly on ebooks and files.",
      "Weeks of battery life on a single charge.",
      "Warm light slider control."
    ]
  },
  {
    id: "elgato-streamdeck",
    name: "Elgato Stream Deck MK.2 Controller",
    price: 149.99,
    rating: 4.8,
    brand: "Elgato",
    category: "Gaming",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "15 customizable LCD key consoles for quick app mapping, sound trigger boards, and smart home action bindings.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Keys": "15 LCD programmable buttons",
      "Connection": "USB 2.0 Cable",
      "Chassis": "Detachable Stand",
      "Weight": "145g"
    },
    features: [
      "Trigger multiple chained actions with a single tap.",
      "Interchangeable faceplate options.",
      "Rich plugin database compatibility."
    ]
  },
  {
    id: "epson-ecotank",
    name: "Epson EcoTank Pro Wireless Printer",
    price: 799.99,
    rating: 4.5,
    brand: "Epson",
    category: "Office",
    availability: "Low Stock",
    deliveryEstimate: "3 Days",
    description: "Supertank cartridge-free printer with high capacity ink tanks, auto 2-sided scanning, and smart panel apps.",
    seller: "Beta Audio Store",
    specs: {
      "Functions": "Print, Scan, Copy, Fax",
      "ISO Print Speed": "25 ppm black / 25 ppm color",
      "Paper Capacity": "500 sheets",
      "Ink Yield": "Up to 6000 pages per tank"
    },
    features: [
      "Save up to 80% on replacement ink bottles.",
      "Cartridge-free filling slots prevent spills.",
      "High reliability PrecisionCore heat-free technology."
    ]
  },
  {
    id: "anker-prime-bank",
    name: "Anker Prime 20,000mAh Power Bank",
    price: 129.99,
    rating: 4.8,
    brand: "Anker",
    category: "Accessories",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "High-speed 200W multi-port portable charger with smart digital display, charging laptop batteries on the go.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Capacity": "20,000 mAh",
      "Max Power": "200W Combined Output",
      "Ports": "2x USB-C, 1x USB-A",
      "Display": "Color Smart LCD Status Screen"
    },
    features: [
      "Charge up to 3 devices simultaneously at full speed.",
      "Recharges fully in just 75 minutes.",
      "Compact handheld size design."
    ]
  },
  {
    id: "sony-srs-xg300",
    name: "Sony SRS-XG300 Portable Speaker",
    price: 349.99,
    rating: 4.6,
    brand: "Sony",
    category: "Audio",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Waterproof IP67 rugged portable speaker, featuring deep club bass acoustics and retractable handle bars.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Battery Life": "25 Hours",
      "Protection": "IP67 Dust and Water Resistant",
      "Drivers": "X-Balanced Speaker Units",
      "Chassis": "Retractable Grip Handle"
    },
    features: [
      "Ambient lighting matches music beats.",
      "Quick charge: 10 mins gives 70 mins playback.",
      "Supports Echo Cancellation speakerphone calls."
    ]
  },
  {
    id: "anker-hub",
    name: "Anker 10-in-1 USB-C Docking Station",
    price: 149.99,
    rating: 4.7,
    brand: "Anker",
    category: "Accessories",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Dual HDMI, 100W Power Delivery pass-through, SD card reader, 3x USB ports, ethernet connectivity desktop hub.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Video Output": "Dual 4K at 60Hz HDMI",
      "PD Charge": "100W Pass-through charging",
      "Ethernet": "Gigabit RJ45",
      "Cards": "SD / microSD Slot Reader"
    },
    features: [
      "Up to 10Gbps rapid file transfer speeds.",
      "Consolidate clean desktop cable layouts.",
      "High reliability aluminum case shielding."
    ]
  },
  {
    id: "tado-thermostat",
    name: "tado° Smart Radiator Thermostat",
    price: 119.99,
    rating: 4.5,
    brand: "Tado",
    category: "Smart Home",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Saves energy on room heating, checks weather forecast adjustments, alerts on open windows automatically.",
    seller: "Beta Audio Store",
    specs: {
      "Valves": "Compatible with M30 x 1.5 adapters",
      "Power": "2x AA Batteries",
      "Radio frequency": "868 MHz",
      "Display": "Low-power LED matrix indicators"
    },
    features: [
      "Geofencing triggers heating controls based on location.",
      "In-depth smart schedule setup.",
      "Detailed carbon emission metrics logging."
    ]
  },
  {
    id: "shure-sm7b",
    name: "Shure SM7B Cardioid Studio Microphone",
    price: 399.00,
    rating: 4.9,
    brand: "Shure",
    category: "Audio",
    availability: "Low Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "The industry standard dynamic vocal microphone for broadcasting, podcast recording, and studio vocals.",
    seller: "Beta Audio Store",
    specs: {
      "Type": "Dynamic Microphone",
      "Polar Pattern": "Cardioid",
      "Frequency Range": "50 Hz to 20,000 Hz",
      "Output Impedance": "150 Ohms"
    },
    features: [
      "Flat, wide-range frequency response produces clean audio.",
      "Electromagnetic shielding cuts humming interference.",
      "Internal air suspension shock isolation."
    ]
  },
  {
    id: "tplink-deco",
    name: "TP-Link Deco XE75 Mesh WiFi 6E Kit",
    price: 299.99,
    rating: 4.7,
    brand: "TP-Link",
    category: "Networking",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Set of 3 tri-band WiFi 6E router pods, covering up to 7200 sq ft, eliminating low coverage zones.",
    seller: "Beta Audio Store",
    specs: {
      "Standard": "WiFi 6E (802.11ax)",
      "Bands": "6 GHz, 5 GHz, 2.4 GHz",
      "Capacity": "Connects up to 200 devices",
      "Coverage": "7200 square feet"
    },
    features: [
      "6 GHz band provides fast connection backhaul tunnels.",
      "AI-Driven Smart roaming adjusts signal strength.",
      "Deco App simple visual configuration."
    ]
  },
  {
    id: "sandisk-extreme",
    name: "SanDisk 2TB Extreme Portable SSD",
    price: 179.99,
    rating: 4.8,
    brand: "SanDisk",
    category: "Storage",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Pocket-sized external SSD, 2000MB/s speeds, IP55 water and dust resistance, built for adventure shoots.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Capacity": "2TB",
      "Read speed": "Up to 2000 MB/s",
      "Write speed": "Up to 2000 MB/s",
      "Rugged rating": "IP55 Water/Dust, 3m drop drop proof"
    },
    features: [
      "Carabiner loop securely locks to backpacks.",
      "Anodized aluminum core behaves as heatsink.",
      "AES 256-bit hardware file encryption."
    ]
  },
  {
    id: "peak-design-backpack",
    name: "Peak Design Everyday Backpack 20L",
    price: 279.95,
    rating: 4.9,
    brand: "Peak Design",
    category: "Accessories",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Award-winning camera gear backpack featuring custom dividers, weather-proof nylon shell, and side access points.",
    seller: "Beta Audio Store",
    specs: {
      "Capacity": "20 Liters",
      "Material": "400D Double Poly-coated Nylon",
      "Laptop Slot": "Holds 15-inch models",
      "Weight": "1.7 kg"
    },
    features: [
      "FlexFold smart internal organizers.",
      "MagLatch magnetic security hardware clasp.",
      "Dedicated secure tablet and key straps."
    ]
  },
  {
    id: "belkin-stage",
    name: "Belkin 3-in-1 MagSafe Wireless Charger",
    price: 149.99,
    rating: 4.7,
    brand: "Belkin",
    category: "Accessories",
    availability: "Ships Tomorrow",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Charging tree holding iPhone, Apple Watch, and AirPods wirelessly at maximum power capability.",
    seller: "Alpha Sound Outlet",
    specs: {
      "iPhone Charge": "15W MagSafe Fast Charge",
      "Watch Charge": "Series 7/8 Fast Charging",
      "AirPods Charge": "5W Qi Charging Tray",
      "Adapter": "40W AC power brick included"
    },
    features: [
      "Anodized metal tree structure holds devices suspended.",
      "Supports landscape/portrait angles.",
      "LED charging indicator lights."
    ]
  },
  {
    id: "nanoleaf-lines",
    name: "Nanoleaf Lines Smart LED Bars",
    price: 199.99,
    rating: 4.6,
    brand: "Nanoleaf",
    category: "Smart Home",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Set of 9 backlit smart LED bars, customizable layout patterns, visualizes audio frequencies dynamically.",
    seller: "Beta Audio Store",
    specs: {
      "Bars": "9 Backlit LED light bars",
      "Colors": "16 Million + customizable palettes",
      "Connectivity": "WiFi 2.4 GHz",
      "Protocol": "Thread router compatible"
    },
    features: [
      "Customizable layouts configure geometric shapes.",
      "Audio visualizer matches music beats in real time.",
      "Screen Mirror syncs light with monitors."
    ]
  },
  {
    id: "logitech-g502",
    name: "Logitech G502 X Plus Gaming Mouse",
    price: 159.99,
    rating: 4.8,
    brand: "Logitech",
    category: "Gaming",
    availability: "In Stock",
    deliveryEstimate: "Tomorrow by 10 PM",
    description: "Lightforce hybrid optical-mechanical switches mouse, Lightsync RGB lighting, and Hero 25K gaming sensor.",
    seller: "Alpha Sound Outlet",
    specs: {
      "Sensor": "HERO 25K",
      "Resolution": "100 to 25,600 DPI",
      "Buttons": "13 Programmable Controls",
      "Weight": "106g"
    },
    features: [
      "Lightspeed high-reliability wireless connection.",
      "Adjustable DPI-shift key bindings.",
      "Dual mode infinite scroll wheel."
    ]
  }
];

export const CATEGORIES: Product['category'][] = ['Electronics', 'Audio', 'Computers', 'Gaming', 'Office', 'Smart Home', 'Accessories', 'Photography', 'Networking', 'Storage'];
