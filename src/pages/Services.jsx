import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Film,
  Video,
  Target,

  LayoutDashboard,
  Handshake,
  ChevronLeft,
  ChevronRight,
  MousePointer2,
  Plus,
  ShoppingBag,
  Megaphone,
  MessageCircle,
  MapPin,
  CheckSquare,
  Home,
  LayoutGrid,
  Gauge,
  TableProperties,
  DollarSign,
  Heart,
  ThumbsUp,
  Compass,
} from 'lucide-react'

const services = [
  {
    icon: Film,
    num: '01',
    name: 'Instagram Reels',
    desc: "Scroll-stopping short-form video that captures attention in the first frame and holds it till the last. We handle concept, scripting, filming direction, and editing.",
    includes: [
      'Creative concept development',
      'Script & storyboard',
      'Creator casting & management',
      'Post-production & delivery',
      'Performance analytics',
    ],
    videoSrc: '/services/instagram-reels.mp4',
    color: 'accent',
  },
  {
    icon: Handshake,
    num: '02',
    name: 'Affiliate Marketing',
    desc: 'Performance-driven partnerships that turn creators into revenue channels. We build, manage, and scale affiliate programs that deliver measurable ROI for your brand.',
    includes: [
      'Affiliate program setup & management',
      'Creator recruitment & onboarding',
      'Commission structure optimization',
      'Real-time performance tracking',
      'Revenue attribution & reporting',
    ],
    color: 'cyan',
  },
  {
    icon: Video,
    num: '03',
    name: 'YouTube Shorts',
    desc: "Quick, impactful storytelling that scales your brand presence across the world's largest video platform. Optimised for discovery and engagement.",
    includes: [
      'Channel strategy',
      'Content calendar planning',
      'Shorts production',
      'SEO & thumbnail optimization',
      'Audience growth tracking',
    ],
    videoSrc: '/services/youtube-shorts.mp4',
    color: 'purple',
  },
  {
    icon: Target,
    num: '04',
    name: 'Meta Ad Campaigns',
    desc: 'Targeted growth that scales — precision advertising backed by data, creativity, and real-time optimisation across Facebook and Instagram.',
    includes: [
      'Audience research & targeting',
      'Ad creative production',
      'A/B testing frameworks',
      'Budget optimization',
      'Conversion tracking & reporting',
    ],
    color: 'cyan',
  },
  {
    icon: LayoutDashboard,
    num: '05',
    name: 'Full Influencer Strategy',
    desc: 'End-to-end partnerships and execution — from discovery to deployment to performance tracking. We manage the entire influencer lifecycle.',
    includes: [
      'Influencer discovery & vetting',
      'Campaign strategy & briefs',
      'Contract & negotiations',
      'Content approval workflows',
      'ROI measurement & reporting',
    ],
    color: 'purple',
  },
]

const colorStyles = {
  accent: {
    iconBg: 'bg-accent/10 border-accent/20',
    iconColor: 'text-accent',
    dotGlow: 'shadow-[0_0_8px_rgba(255,107,53,0.6)]',
    dotBg: 'bg-accent',
  },
  purple: {
    iconBg: 'bg-purple/10 border-purple/20',
    iconColor: 'text-purple-light',
    dotGlow: 'shadow-[0_0_8px_rgba(124,58,237,0.6)]',
    dotBg: 'bg-purple',
  },
  cyan: {
    iconBg: 'bg-cyan/10 border-cyan/20',
    iconColor: 'text-cyan-light',
    dotGlow: 'shadow-[0_0_8px_rgba(6,182,212,0.6)]',
    dotBg: 'bg-cyan',
  },
}

const TOTAL = services.length

const MetaAdsUI = ({ isActive }) => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden font-sans">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/services/backgroud-meta.jpg")' }}
    />
    {/* Slight dark overlay so the white UI stands out */}
    <div className="absolute inset-0 bg-black/10" />
    
    {/* Main Dashboard Window */}
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={isActive ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.9, opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[450px] bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden z-10 border border-gray-200 relative"
    >
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50 pt-2 px-2 gap-2">
        <div className="px-4 py-2 bg-white border-t border-x border-gray-200 rounded-t-lg text-xs font-bold text-blue-600 flex items-center gap-2">
           <div className="w-4 h-4 bg-blue-600 text-white rounded flex items-center justify-center text-[8px] font-black">
             <span className="mb-[2px]">^</span>
           </div>
           Campaigns
        </div>
        <div className="px-4 py-2 text-xs font-bold text-gray-500">Ad Sets</div>
        <div className="px-4 py-2 text-xs font-bold text-gray-500">Ads</div>
      </div>
      
      {/* Toolbar */}
      <div className="p-4 border-b border-gray-100 flex items-center gap-3">
        <div className="px-4 py-2 bg-[#52c41a] text-white rounded text-xs font-bold flex items-center gap-1 shadow-sm">
          <Plus size={14} strokeWidth={3} /> Create
        </div>
        <div className="h-8 w-40 bg-gray-100 rounded-md" />
      </div>

      {/* Rows */}
      <div className="p-4 flex flex-col gap-4 min-h-[180px]">
        {[1, 2, 3].map((row) => (
          <div key={row} className="flex items-center gap-4">
            <div className="w-5 h-5 border-2 border-gray-300 rounded-[4px]" />
            {/* Toggle */}
            <div className="w-10 h-5 bg-blue-600 rounded-full relative shadow-inner">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
            <div className="h-3 w-full max-w-[200px] bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>
    </motion.div>

    {/* Floating "New Campaign" Modal */}
    <motion.div
      initial={{ x: 50, y: 20, opacity: 0, scale: 0.9 }}
      animate={isActive ? { x: 0, y: 0, opacity: 1, scale: 1 } : { x: 50, y: 20, opacity: 0, scale: 0.9 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="absolute right-[2%] md:right-[10%] top-[20%] md:top-[15%] w-[240px] bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-gray-100 z-30 p-5"
    >
      <h3 className="text-blue-600 font-bold text-base mb-1">New Campaign</h3>
      <p className="text-gray-500 text-[11px] mb-4 font-medium">Choose a campaign objective</p>
      
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
          <Megaphone size={14} />
          <span className="text-sm font-medium">Awareness</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
          <MousePointer2 size={14} />
          <span className="text-sm font-medium">Traffic</span>
        </div>
        <motion.div 
          animate={isActive ? { backgroundColor: "rgba(37, 99, 235, 0.1)" } : {}}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-3 text-blue-700 bg-blue-50/0 p-1.5 -mx-1.5 rounded relative"
        >
          <div className="w-4 h-4 rounded-full border-[5px] border-blue-600" />
          <div className="w-6 h-6 bg-blue-600 text-white rounded-md flex items-center justify-center shadow-md">
             <ShoppingBag size={14} />
          </div>
          <span className="text-sm font-bold">Sales</span>
          
          <motion.div 
            initial={{ x: 100, y: 80, opacity: 0 }}
            animate={isActive ? { x: 25, y: 15, opacity: 1 } : { x: 100, y: 80, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "circOut" }}
            className="absolute z-50 text-gray-800 drop-shadow-lg right-0 bottom-0 pointer-events-none"
          >
            <MousePointer2 size={32} className="fill-gray-800" />
          </motion.div>
        </motion.div>
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
          <MessageCircle size={14} />
          <span className="text-sm font-medium">Leads</span>
        </div>
      </div>
    </motion.div>

    {/* Floating Audience Definition */}
    <motion.div
      initial={{ x: -40, y: -20, opacity: 0, scale: 0.9 }}
      animate={isActive ? { x: 0, y: 0, opacity: 1, scale: 1 } : { x: -40, y: -20, opacity: 0, scale: 0.9 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="absolute right-[5%] md:right-[5%] top-[50%] md:top-[45%] bg-white rounded-xl shadow-2xl border border-gray-100 z-20 p-4 w-[140px]"
    >
      <div className="text-[10px] font-bold text-gray-800 text-center mb-3 leading-tight">Audience Definition</div>
      {/* Gauge */}
      <div className="relative w-24 h-12 mx-auto overflow-hidden">
         {/* Colored arc using borders */}
         <div className="w-24 h-24 rounded-full border-[8px] border-blue-100 absolute top-0 left-0" />
         <div className="w-24 h-24 rounded-full border-[8px] border-transparent border-t-blue-600 border-r-blue-400 rotate-45 absolute top-0 left-0" />
         
         <motion.div 
            initial={{ rotate: -70 }}
            animate={isActive ? { rotate: 20 } : { rotate: -70 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 80, damping: 12 }}
            className="absolute bottom-0 left-1/2 w-[3px] h-10 bg-gray-800 origin-bottom -ml-[1.5px] rounded-full"
         />
      </div>
      <div className="flex justify-between text-[9px] font-bold text-gray-500 mt-2">
        <span>Specific</span>
        <span>Broad</span>
      </div>
    </motion.div>

    {/* Sidebar Panel */}
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="absolute left-[5%] md:left-[22%] top-[30%] w-10 md:w-12 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-gray-200 flex flex-col items-center py-4 gap-5 z-20"
    >
      <Home size={16} className="text-gray-600" />
      <LayoutGrid size={16} className="text-gray-600" />
      <Gauge size={16} className="text-gray-600" />
      <div className="w-full flex justify-center border-l-[3px] border-blue-600">
        <TableProperties size={16} className="text-blue-600 -ml-[3px]" />
      </div>
    </motion.div>

    {/* Floating Like/Heart Bubble */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
      className="absolute left-[25%] md:left-[35%] top-[10%] md:top-[8%] bg-white rounded-full shadow-lg p-2 flex items-center gap-1 z-20"
    >
      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white z-10 shadow-md">
        <ThumbsUp size={14} fill="currentColor" />
      </div>
      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white -ml-4 z-0 shadow-md">
        <Heart size={14} fill="currentColor" />
      </div>
    </motion.div>

    {/* Floating Dollar Icon */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
      className="absolute right-[15%] md:right-[25%] top-[8%] md:top-[5%] w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.5)] text-white z-20"
    >
      <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
        <DollarSign size={16} strokeWidth={3} />
      </div>
    </motion.div>

    {/* Floating Map/Compass Card */}
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="absolute left-[30%] bottom-[5%] md:bottom-[2%] bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-[120px] h-[100px] z-20 flex flex-col justify-between"
    >
      <div className="relative w-full h-full bg-blue-50/50 rounded-lg border border-blue-100/50 overflow-hidden">
        {/* Dotted path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
           <path d="M 20,80 Q 40,30 80,20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
           <circle cx="20" cy="80" r="4" fill="#3b82f6" />
           <path d="M 75,15 L 85,25 L 75,35 Z" fill="#3b82f6" transform="rotate(-30 80 20)" />
        </svg>
      </div>
      <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-700">
        <Compass size={20} strokeWidth={2} />
      </div>
    </motion.div>

    {/* Floating Icons */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="absolute left-[8%] md:left-[12%] bottom-[25%] md:bottom-[20%] w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.5)] text-white z-20"
    >
      <MapPin size={28} />
    </motion.div>

    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={isActive ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="absolute right-[10%] bottom-[15%] w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.5)] text-white z-20"
    >
      <CheckSquare size={28} />
    </motion.div>
    
    {/* Floating Publish Button */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ delay: 1.1, type: "spring" }}
      className="absolute left-[20%] bottom-[20%] bg-[#52c41a] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-[0_10px_25px_rgba(82,196,26,0.4)] z-30"
    >
      Publish
    </motion.div>
  </div>
)

const InfluencerStrategyUI = ({ isActive }) => (
  <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden bg-[#0a0a0a] font-sans text-white">
    {/* Background Glows */}
    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none" />

    <div className="relative w-[580px] h-[380px] flex-shrink-0 scale-[0.55] sm:scale-[0.75] md:scale-100 origin-center">
       
       {/* SVG Connection Lines */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            d="M 170 100 C 200 100, 200 80, 230 80" 
            fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3 3" 
          />
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            d="M 410 80 L 440 80" 
            fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3 3" 
          />
          <motion.path 
             initial={{ pathLength: 0 }}
             animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
             transition={{ delay: 0.7, duration: 1 }}
             d="M 490 170 C 490 200, 260 200, 260 230" 
             fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3 3" 
          />
          <motion.path 
             initial={{ pathLength: 0 }}
             animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
             transition={{ delay: 0.8, duration: 1 }}
             d="M 440 300 L 460 300" 
             fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3 3" 
          />
          {/* Additional line from third creator card */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            d="M 170 160 C 200 160, 200 120, 230 120" 
            fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3 3" 
          />
       </svg>

       {/* Step 1: Creator Discovery (Left) */}
       <motion.div 
         initial={{ opacity: 0, x: -20 }}
         animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
         transition={{ delay: 0.2 }}
         className="absolute top-[30px] left-[10px] flex flex-col gap-2 w-[160px] z-10"
       >
         <div className="flex items-center gap-2 text-[10px] text-gray-300 bg-white/5 border border-white/10 rounded-full px-2 py-1 w-max backdrop-blur-sm">
           <div className="bg-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-[8px]">01</div>
           Creator Discovery
         </div>
         <div className="flex flex-col gap-2 relative z-10 mt-1">
           {[ 
             { name: "@glowwithsara", cat: "Skincare", eng: "8.2%", color: "bg-purple-600/30 text-purple-200" },
             { name: "@matt.wellness", cat: "Health & Fitness", eng: "6.7%", color: "bg-blue-600/30 text-blue-200" },
             { name: "@skinbyluna", cat: "Beauty", eng: "7.1%", color: "bg-indigo-600/30 text-indigo-200" }
           ].map((c, i) => (
             <div key={i} className="bg-[#12121a] border border-white/10 rounded-xl p-2 flex items-center gap-2.5 shadow-lg">
               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border border-white/20 shrink-0" />
               <div className="flex flex-col">
                 <span className="text-[9px] font-bold text-gray-100 flex items-center gap-1">
                   {c.name} 
                   <span className="text-blue-400 text-[8px]">★</span>
                 </span>
                 <span className="text-[7px] text-gray-400 mt-[1px]">Eng. Rate <span className="text-white font-medium">{c.eng}</span></span>
                 <span className={`text-[6px] ${c.color} px-1.5 py-0.5 rounded mt-1 w-max`}>{c.cat}</span>
               </div>
             </div>
           ))}
         </div>
       </motion.div>

       {/* Step 2: Content & Direction (Middle Top) */}
       <motion.div 
         initial={{ opacity: 0, y: -20 }}
         animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
         transition={{ delay: 0.4 }}
         className="absolute top-[40px] left-[230px] flex flex-col gap-2 w-[180px] z-10"
       >
         <div className="flex items-center gap-2 text-[10px] text-gray-300 bg-white/5 border border-white/10 rounded-full px-2 py-1 w-max backdrop-blur-sm">
           <div className="bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-[8px]">02</div>
           Content & Direction
         </div>
         <div className="bg-[#12121a] border border-blue-500/30 rounded-xl p-2 flex gap-3 shadow-[0_0_25px_rgba(59,130,246,0.15)] h-[110px] mt-1">
           <div className="w-[60px] h-full bg-gray-800 rounded-lg relative overflow-hidden shrink-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 to-transparent" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black/40 backdrop-blur flex items-center justify-center border border-white/20">
               <div className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[4px] border-l-white ml-0.5" />
             </div>
           </div>
           <div className="flex flex-col gap-2 justify-center">
             <span className="text-[9px] font-bold text-gray-100">Content Overview</span>
             <div className="flex flex-col gap-1.5">
               {["Hook optimization", "Product integration", "Storytelling angle", "CTA placement"].map((item, i) => (
                 <div key={i} className="flex items-center gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white">✓</div>
                   <span className="text-[7px] text-gray-400">{item}</span>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </motion.div>

       {/* Step 3: Campaign Launch (Right Top) */}
       <motion.div 
         initial={{ opacity: 0, x: 20 }}
         animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
         transition={{ delay: 0.6 }}
         className="absolute top-[40px] left-[440px] flex flex-col gap-2 w-[130px] z-10"
       >
         <div className="flex items-center gap-2 text-[10px] text-gray-300 bg-white/5 border border-white/10 rounded-full px-2 py-1 w-max backdrop-blur-sm">
           <div className="bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-[8px]">03</div>
           Campaign Launch
         </div>
         <div className="bg-[#12121a] border border-white/10 rounded-xl p-3 flex flex-col gap-2 mt-1 shadow-lg">
           <span className="text-[8px] font-bold text-gray-100">Platforms</span>
           <div className="flex gap-2">
             <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center">
               <div className="w-3 h-3 border-2 border-white rounded-[3px] flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-full" /></div>
             </div>
             <div className="w-6 h-6 rounded-md bg-black border border-gray-700 flex items-center justify-center text-white text-[10px] font-bold font-serif">♪</div>
             <div className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center text-white text-[9px]">▶</div>
           </div>
         </div>
         <div className="bg-[#12121a] border border-white/10 rounded-xl p-3 flex flex-col gap-2 shadow-lg mt-1">
           <span className="text-[8px] font-bold text-gray-100">Budget Allocation</span>
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full border-4 border-blue-600 border-r-purple-500 border-b-cyan-400 flex-shrink-0" />
             <div className="flex flex-col gap-1 text-[6px] text-gray-400">
               <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Instagram <span className="text-white">45%</span></div>
               <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> TikTok <span className="text-white">35%</span></div>
               <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> YouTube <span className="text-white">20%</span></div>
             </div>
           </div>
         </div>
       </motion.div>

       {/* Step 4: Results (Bottom Left/Center) */}
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
         transition={{ delay: 0.8 }}
         className="absolute top-[230px] left-[80px] w-[360px] z-10"
       >
         <div className="flex items-center gap-2 text-[10px] text-gray-300 bg-white/5 border border-cyan-500/30 rounded-full px-2 py-1 w-max backdrop-blur-sm relative z-10 mb-[-10px] ml-4">
           <div className="bg-cyan-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-[8px]">04</div>
           Results & Optimization
         </div>
         <div className="bg-[#12121a] border border-cyan-500/30 rounded-xl p-4 pt-5 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
           <div className="flex justify-between items-center mb-3">
             <span className="text-[9px] font-bold text-gray-100">Performance Overview</span>
             <span className="text-[7px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">Last 30 Days ▾</span>
           </div>
           <div className="grid grid-cols-4 gap-2 mb-4 relative z-10">
             {[ 
               { icon: "👁", label: "Total Reach", val: "2.5M+", growth: "+18.6%" },
               { icon: "👥", label: "Engagement", val: "850K+", growth: "+24.3%" },
               { icon: "↗", label: "Avg. CTR", val: "4.2%", growth: "+12.7%" },
               { icon: "$", label: "ROI", val: "3.8x", growth: "+31.4%" },
             ].map((stat, i) => (
               <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/5 flex flex-col items-center text-center">
                 <div className="text-blue-400 text-[10px] mb-1">{stat.icon}</div>
                 <div className="text-[12px] font-black text-white tracking-tight">{stat.val}</div>
                 <div className="text-[6px] text-gray-400 mt-1 mb-1">{stat.label}</div>
                 <div className="text-[7px] text-green-400 font-medium">↑ {stat.growth}</div>
               </div>
             ))}
           </div>
           
           {/* Chart line */}
           <div className="absolute bottom-0 left-0 w-full h-[40px] border-t border-blue-500/10">
             <div className="absolute bottom-2 right-4 bg-white/5 text-[6px] border border-white/10 rounded px-1.5 py-0.5 z-10 text-gray-300">
               <span className="text-green-400">↑ 31.4%</span> ROI Increase
             </div>
             <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
               <path d="M0,20 L0,15 Q5,5 10,12 T20,18 T30,10 T40,16 T50,8 T60,15 T70,5 T80,12 T90,8 T100,2 L100,20 Z" fill="rgba(6,182,212,0.1)" />
               <motion.path 
                 initial={{ pathLength: 0 }}
                 animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
                 transition={{ delay: 1, duration: 1 }}
                 d="M0,15 Q5,5 10,12 T20,18 T30,10 T40,16 T50,8 T60,15 T70,5 T80,12 T90,8 T100,2" 
                 fill="none" stroke="#06b6d4" strokeWidth="1.5" 
               />
             </svg>
           </div>
         </div>
       </motion.div>

       {/* Step 5: Campaign ROI (Bottom Right) */}
       <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
         transition={{ delay: 1, type: "spring" }}
         className="absolute top-[245px] left-[460px] w-[110px] bg-[#12121a] border border-purple-500/50 rounded-xl p-3 shadow-[0_0_25px_rgba(168,85,247,0.25)] z-10 overflow-hidden"
       >
         <span className="text-[8px] font-bold text-gray-100 block mb-1">Campaign ROI</span>
         <span className="text-[26px] font-black text-purple-500 leading-none tracking-tighter">3.8x</span>
         <span className="text-[6px] text-gray-400 block mb-3 mt-1">Return on Investment</span>
         <div className="h-6 w-full relative mb-1">
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
               <motion.path 
                 initial={{ pathLength: 0 }}
                 animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
                 transition={{ delay: 1.2, duration: 1 }}
                 d="M0,15 Q25,18 50,10 T100,2" 
                 fill="none" stroke="#a855f7" strokeWidth="1.5" 
               />
           </svg>
         </div>
         <div className="text-[6px] text-green-400 font-medium">↗ 31.4% vs last campaign</div>
       </motion.div>

    </div>
  </div>
)


function ServiceCard({ service, index, isActive, carouselRef }) {
  const cardRef = useRef(null)
  const videoRef = useRef(null)
  const colors = colorStyles[service.color]

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(e => console.log('Video play prevented:', e))
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isActive])

  // Track this card's position inside the horizontal scroll container
  const { scrollXProgress } = useScroll({
    target: cardRef,
    container: carouselRef,
    axis: 'x',
    offset: ['start end', 'end start'], // 0 when entering right, 0.5 centered, 1 exiting left
  })

  // ANTI-GRAVITY / MAGNETIC PARALLAX PHYSICS
  // Entering (0 -> 0.5): Card starts pushed further right (40%), and moves left faster than the scroll to snap into center (0%). This creates a strong "pulled in" deceleration effect.
  // Exiting (0.5 -> 1.0): Card starts center (0%) and moves further left (-40%) than normal scroll, making it accelerate out like it's being repelled.
  const x = useTransform(scrollXProgress, [0, 0.5, 1], ['40%', '0%', '-40%'])
  
  // Scale: Enlarges smoothly when hitting the center, shrinks when exiting
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.75, 1, 0.75])
  
  // Opacity: Fades in early, fades out late for smooth visual overlap
  const opacity = useTransform(scrollXProgress, [0, 0.3, 0.5, 0.7, 1], [0, 1, 1, 1, 0])

  return (
    <section 
      ref={cardRef} 
      className="w-screen h-screen flex-shrink-0 snap-center flex items-center justify-center px-5 sm:px-8 md:px-12 py-8 relative"
    >
      <motion.div 
        style={{ x, scale, opacity }}
        className="w-full max-w-[1400px] mx-auto bg-bg-card border border-border rounded-3xl p-8 md:p-14 shadow-[0_24px_80px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-10 md:gap-16 items-center h-full max-h-[85vh] will-change-transform"
      >
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="font-mono text-[50px] md:text-[70px] font-bold text-text-dim/20 -ml-2 block leading-none">
            {service.num}
          </span>
          <div className="flex items-center gap-4 mb-5 -mt-6">
            <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center border shrink-0`}>
              <service.icon size={28} className={colors.iconColor} />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text tracking-[-0.02em]">
              {service.name}
            </h2>
          </div>
          <p className="font-body text-text-muted text-[15px] md:text-[17px] leading-[1.7] mb-8 font-light max-w-[500px]">
            {service.desc}
          </p>
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase mb-4 font-medium">
              What's Included
            </p>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="font-body text-[14px] text-text-muted flex items-center gap-4 font-light">
                  <span className={`w-2 h-2 rounded-full ${colors.dotBg} shrink-0 ${colors.dotGlow}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1 w-full relative rounded-2xl overflow-hidden bg-bg-elevated border border-border flex items-center justify-center self-stretch min-h-[300px]">
          {service.videoSrc ? (
            <video
              ref={videoRef}
              src={service.videoSrc}
              muted
              playsInline
              loop
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : service.num === '04' ? (
            <MetaAdsUI isActive={isActive} />
          ) : service.num === '05' ? (
            <InfluencerStrategyUI isActive={isActive} />

          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5" />
              <service.icon size={120} className={`${colors.iconColor} opacity-10`} />
            </>
          )}
        </div>
      </motion.div>
    </section>
  )
}

function CardCarousel() {
  const carouselRef = useRef(null)
  const [active, setActive] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Update active dot indicator based on horizontal scroll position
  const handleScroll = () => {
    if (!carouselRef.current) return
    const scrollLeft = carouselRef.current.scrollLeft
    const width = carouselRef.current.clientWidth
    const index = Math.round(scrollLeft / width)
    if (index !== active) {
      setActive(index)
    }
  }

  // Momentum Physics: One wheel scroll gesture = one card transition
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    let isScrolling = false
    let scrollTimeout

    const onWheel = (e) => {
      // Allow native horizontal swipes (like trackpads) to work natively with scroll-snap
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return

      // Only hijack vertical scroll if the carousel is mostly centered in the viewport
      const rect = el.getBoundingClientRect()
      if (Math.abs(rect.top) > 100) return

      const isAtStart = el.scrollLeft <= 0
      const isAtEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth

      // Allow vertical scroll out of the carousel at boundaries
      if (isAtStart && e.deltaY < 0) return
      if (isAtEnd && e.deltaY > 0) return

      // Hijack vertical wheel scroll to move horizontally
      e.preventDefault()
      e.stopPropagation()

      if (!isScrolling) {
        isScrolling = true
        
        // Calculate exact target to snap perfectly
        const direction = Math.sign(e.deltaY)
        const targetLeft = el.scrollLeft + (direction * el.clientWidth)
        
        el.scrollTo({
          left: targetLeft,
          behavior: 'smooth'
        })

        // Enforce intentional transition - block multiple fast scrolls
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 800)
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('wheel', onWheel)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div className="relative w-full h-screen bg-bg">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="w-full h-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar relative z-10"
      >
        {isMounted && services.map((service, i) => (
          <ServiceCard 
            key={service.num} 
            service={service} 
            index={i} 
            isActive={active === i}
            carouselRef={carouselRef} 
          />
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              carouselRef.current?.scrollTo({
                left: i * window.innerWidth,
                behavior: 'smooth'
              })
            }}
            className="rounded-full transition-all duration-300 cursor-pointer p-1 -m-1"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? '8px' : '6px',
                height: active === i ? '8px' : '6px',
                background: active === i ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)',
                boxShadow: active === i ? '0 0 8px rgba(255,107,53,0.6)' : 'none',
              }}
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-6 right-8 z-50 font-mono text-[11px] tracking-[0.2em] text-text-dim/40 uppercase pointer-events-none">
        {String(active + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
      </div>

      {/* Prev/Next Navigation */}
      <div className="absolute bottom-8 right-5 md:right-12 z-50 flex items-center gap-3">
        <button
          onClick={() => {
            if (active > 0) {
              carouselRef.current?.scrollTo({
                left: (active - 1) * window.innerWidth,
                behavior: 'smooth'
              })
            }
          }}
          disabled={active === 0}
          className={`w-12 h-12 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            active === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-bg-elevated hover:scale-105 hover:border-text-dim/30'
          }`}
          aria-label="Previous service"
        >
          <ChevronLeft size={20} className="text-text" />
        </button>
        <button
          onClick={() => {
            if (active < TOTAL - 1) {
              carouselRef.current?.scrollTo({
                left: (active + 1) * window.innerWidth,
                behavior: 'smooth'
              })
            }
          }}
          disabled={active === TOTAL - 1}
          className={`w-12 h-12 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            active === TOTAL - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-bg-elevated hover:scale-105 hover:border-text-dim/30'
          }`}
          aria-label="Next service"
        >
          <ChevronRight size={20} className="text-text" />
        </button>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      {/* Hero */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 flex flex-col items-center text-center relative">
        <div className="absolute inset-0 hero-gradient-bg opacity-50" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-block px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm mb-8"
          >
            <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">
              Our Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-text mb-8 leading-[1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}
          >
            Everything your
            <br />
            <span className="accent-text">brand needs.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-text-muted text-[17px] md:text-[21px] leading-[1.7] max-w-[700px] mx-auto font-light"
          >
            From scroll-stopping Reels to full-scale influencer campaigns — we
            handle every layer of your digital story with precision and flair.
          </motion.p>
        </div>
      </section>

      {/* Horizontal Scroll Snap Carousel */}
      <CardCarousel />
      
      {/* Spacer to allow scrolling past carousel if needed, though footer comes next in layout */}
    </motion.main>
  )
}
