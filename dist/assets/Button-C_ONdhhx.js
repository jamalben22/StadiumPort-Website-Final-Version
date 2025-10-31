import{j as e}from"./index-BrI7speC.js";function y({variant:a="primary",size:l="md",fullWidth:n=!1,loading:i=!1,icon:o,iconPosition:s="left",children:d,className:m="",glow:t=!1,animate:u=!0,effect:r="shimmer",disabled:h,...b}){const c=`
    relative inline-flex items-center justify-center font-semibold rounded-3xl 
    transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden
    focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 
    disabled:cursor-not-allowed group font-inter ultra-premium-focus
    ${u?"hover:scale-105 active:scale-95 hover:-translate-y-1":""}
    ${n?"w-full":""}
    transform-gpu will-change-transform
  `,v={primary:`
      bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white 
      hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 focus:ring-emerald-500/30
      shadow-premium hover:shadow-premium-lg border border-emerald-400/20
      ${t?"shadow-ultra-glow hover:shadow-ultra-glow":""}
    `,secondary:`
      bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-slate-900 
      hover:from-slate-200 hover:via-slate-300 hover:to-slate-400 focus:ring-slate-500/30
      dark:from-navy-700 dark:via-navy-600 dark:to-navy-500 dark:text-white 
      dark:hover:from-navy-600 dark:hover:via-navy-500 dark:hover:to-navy-400
      shadow-premium hover:shadow-premium-lg border border-slate-300/20 dark:border-navy-500/20
    `,outline:`
      border-2 border-emerald-500 text-emerald-500 bg-transparent backdrop-blur-xl
      hover:bg-emerald-500 hover:text-white hover:border-emerald-600 focus:ring-emerald-500/30
      shadow-premium hover:shadow-premium-lg
    `,ghost:`
      text-slate-600 dark:text-slate-300 bg-transparent backdrop-blur-xl
      hover:bg-slate-100/80 dark:hover:bg-navy-700/80 focus:ring-slate-500/30
      border border-transparent hover:border-slate-200 dark:hover:border-navy-600
    `,premium:`
      bg-gradient-to-br from-emerald-400 via-emerald-500 via-emerald-600 to-teal-700 text-white
      hover:from-emerald-500 hover:via-emerald-600 hover:via-emerald-700 hover:to-teal-800
      focus:ring-emerald-500/30 shadow-premium hover:shadow-premium-lg
      border border-emerald-300/30 backdrop-blur-xl
      ${t?"shadow-ultra-glow hover:shadow-ultra-glow":""}
    `,gold:`
      bg-gradient-to-br from-gold-300 via-gold-400 via-gold-500 to-gold-600 text-navy-900
      hover:from-gold-400 hover:via-gold-500 hover:via-gold-600 hover:to-gold-700
      focus:ring-gold-500/30 shadow-premium hover:shadow-premium-lg
      border border-gold-300/30 font-bold backdrop-blur-xl
      ${t?"shadow-gold-glow-lg hover:shadow-gold-glow-xl":""}
    `,glass:`
      bg-white/10 backdrop-blur-2xl border border-white/30 text-white
      hover:bg-white/20 hover:border-white/40 focus:ring-white/30
      shadow-glass hover:shadow-glass-lg
    `,cosmic:`
      text-white focus:ring-purple-500/30 shadow-cosmic hover:shadow-cosmic
      border border-purple-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
      hover:from-purple-600 hover:via-pink-600 hover:to-blue-600
      animate-cosmic
    `,aurora:`
      text-white focus:ring-cyan-500/30 shadow-aurora hover:shadow-aurora
      border border-cyan-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500
      hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-600
      animate-aurora
    `,diamond:`
      text-slate-800 focus:ring-slate-500/30 shadow-diamond hover:shadow-diamond
      border border-white/50 backdrop-blur-xl font-bold
      bg-gradient-to-br from-white via-slate-50 to-slate-100
      hover:from-slate-50 hover:via-slate-100 hover:to-slate-200
      animate-crystalline
    `,holographic:`
      text-white focus:ring-pink-500/30 shadow-holographic hover:shadow-holographic
      border border-pink-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500
      hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600
      animate-holographic
    `,quantum:`
      text-white focus:ring-violet-500/30 shadow-quantum hover:shadow-quantum
      border border-violet-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-emerald-500 via-blue-500 to-violet-500
      hover:from-emerald-600 hover:via-blue-600 hover:to-violet-600
      animate-quantum
    `,ethereal:`
      text-slate-700 focus:ring-slate-500/30 shadow-ethereal hover:shadow-ethereal
      border border-white/40 backdrop-blur-2xl font-semibold
      bg-gradient-to-br from-white/90 via-white/80 to-white/70
      hover:from-white/95 hover:via-white/85 hover:to-white/75
      animate-ethereal
    `,cyber:`
      text-black focus:ring-cyan-500/30 shadow-cyber hover:shadow-cyber
      border border-cyan-400/50 backdrop-blur-xl font-bold
      bg-gradient-to-br from-cyan-400 via-pink-400 to-yellow-400
      hover:from-cyan-500 hover:via-pink-500 hover:to-yellow-500
      animate-cyber-glow
    `,matrix:`
      text-black focus:ring-green-500/30 shadow-matrix hover:shadow-matrix
      border border-green-400/50 backdrop-blur-xl font-bold
      bg-gradient-to-br from-green-400 via-green-500 to-green-600
      hover:from-green-500 hover:via-green-600 hover:to-green-700
      animate-matrix
    `,plasma:`
      text-white focus:ring-purple-500/30 shadow-plasma hover:shadow-plasma
      border border-purple-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500
      hover:from-pink-600 hover:via-purple-600 hover:to-blue-600
      animate-plasma
    `,stellar:`
      text-white focus:ring-indigo-500/30 shadow-stellar hover:shadow-stellar
      border border-indigo-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-indigo-500 via-purple-500 to-black
      hover:from-indigo-600 hover:via-purple-600 hover:to-gray-900
      animate-stellar
    `},p={xs:"px-4 py-2 text-xs",sm:"px-6 py-3 text-sm",md:"px-8 py-4 text-base",lg:"px-10 py-5 text-lg",xl:"px-12 py-6 text-xl",ultra:"px-16 py-8 text-2xl"},g={none:"",shimmer:"before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",ripple:"after:absolute after:inset-0 after:rounded-3xl after:opacity-0 active:after:opacity-100 after:transition-opacity after:duration-200 after:bg-white/20 after:animate-ping",glow:"hover:shadow-ultra-glow",pulse:"animate-hyper-pulse",morph:"animate-morph",levitate:"animate-levitate",crystalline:"animate-crystalline",liquid:"animate-liquid-flow",magnetic:"animate-magnetic",dimensional:"animate-dimensional",energy:"before:absolute before:inset-0 before:bg-energy-gradient before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500 before:animate-energy-wave"},x=`${c} ${v[a]} ${p[l]} ${g[r]} ${m}`;return e.jsxs("button",{className:x,disabled:h||i,...b,children:[e.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),r==="shimmer"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"})}),t&&e.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/30 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl animate-pulse-glow"}),a==="quantum"&&e.jsxs("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-quantum"}),e.jsx("div",{className:"absolute top-1/4 left-1/4 w-1 h-1 bg-violet-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-quantum",style:{animationDelay:"0.5s"}}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-quantum",style:{animationDelay:"1s"}})]}),a==="holographic"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-prismatic"})}),a==="cosmic"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-nebula-gradient opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-nebula"})}),a==="aurora"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-aurora"})}),a==="diamond"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-diamond-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-diamond-shine"})}),a==="ethereal"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-ethereal-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ethereal"})}),a==="cyber"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-cyber-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-neon-flicker"})}),a==="matrix"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-matrix-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-400 animate-matrix"})}),a==="plasma"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-plasma-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-plasma"})}),a==="stellar"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-nebula-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-stellar"})}),e.jsx("div",{className:"relative z-10 flex items-center justify-center space-x-2",children:i?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"}),e.jsx("span",{className:"ultra-premium-text",children:"Loading..."})]}):e.jsxs(e.Fragment,{children:[o&&s==="left"&&e.jsx("i",{className:`${o} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}),e.jsx("span",{className:"ultra-premium-text font-semibold",children:d}),o&&s==="right"&&e.jsx("i",{className:`${o} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12`})]})}),r==="ripple"&&e.jsxs("div",{className:"absolute inset-0 rounded-3xl opacity-0 group-active:opacity-100 transition-opacity duration-200",children:[e.jsx("div",{className:"absolute inset-0 rounded-3xl bg-white/30 animate-ping"}),e.jsx("div",{className:"absolute inset-0 rounded-3xl bg-white/20 animate-ping",style:{animationDelay:"0.1s"}}),e.jsx("div",{className:"absolute inset-0 rounded-3xl bg-white/10 animate-ping",style:{animationDelay:"0.2s"}})]}),r==="energy"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-energy-gradient translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 animate-energy-wave"})}),r==="dimensional"&&e.jsx("div",{className:"absolute inset-0 rounded-3xl overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-dimensional"})})]})}export{y as B};
//# sourceMappingURL=Button-C_ONdhhx.js.map
