import{j as e}from"./index-CyRnsDXR.js";function x({children:s,variant:o="default",padding:l="md",hover:a=!0,glow:i=!1,animate:n=!0,border:r=!0,shadow:d="md",effect:t="shimmer",className:m="",...u}){const p=`
    relative rounded-4xl transition-all duration-700 overflow-hidden ultra-premium-container
    ${n?"group transform-gpu will-change-transform":""}
    backdrop-blur-xl
  `,h={default:`
      bg-white/90 dark:bg-navy-800/90 
      ${r?"border border-slate-200/50 dark:border-navy-700/50":""}
      ${a?"hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-white/95 dark:hover:bg-navy-800/95":""}
    `,premium:`
      bg-white/85 dark:bg-navy-800/85 
      ${r?"border border-white/30 dark:border-navy-700/30":""}
      ${a?"hover:bg-white/95 dark:hover:bg-navy-800/95 hover:border-emerald-500/40":""}
    `,glass:`
      bg-white/10 dark:bg-navy-900/10 
      ${r?"border border-white/20 dark:border-navy-700/20":""}
      ${a?"hover:bg-white/20 dark:hover:bg-navy-900/20 hover:border-white/40":""}
    `,gradient:`
      bg-gradient-to-br from-white/90 via-slate-50/90 to-emerald-50/90
      dark:from-navy-800/90 dark:via-navy-700/90 dark:to-emerald-900/30
      ${r?"border border-emerald-200/50 dark:border-emerald-700/30":""}
      ${a?"hover:from-emerald-50/95 hover:to-gold-50/95 dark:hover:from-emerald-900/40 dark:hover:to-gold-900/30":""}
    `,minimal:`
      bg-transparent
      ${r?"border border-slate-200/50 dark:border-navy-700/50":""}
      ${a?"hover:bg-slate-50/80 dark:hover:bg-navy-800/50":""}
    `,cosmic:`
      bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20
      dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30
      ${r?"border border-purple-400/30 dark:border-purple-600/30":""}
      ${a?"hover:from-purple-500/30 hover:via-pink-500/30 hover:to-blue-500/30":""}
      animate-cosmic
    `,aurora:`
      bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-blue-500/20
      dark:from-emerald-900/30 dark:via-cyan-900/30 dark:to-blue-900/30
      ${r?"border border-cyan-400/30 dark:border-cyan-600/30":""}
      ${a?"hover:from-emerald-400/30 hover:via-cyan-400/30 hover:to-blue-500/30":""}
      animate-aurora
    `,diamond:`
      bg-gradient-to-br from-white/95 via-slate-50/95 to-slate-100/95
      dark:from-slate-800/95 dark:via-slate-700/95 dark:to-slate-600/95
      ${r?"border border-white/50 dark:border-slate-500/50":""}
      ${a?"hover:from-white hover:via-slate-50 hover:to-slate-100":""}
      animate-crystalline
    `,holographic:`
      bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20
      dark:from-pink-900/30 dark:via-purple-900/30 dark:to-cyan-900/30
      ${r?"border border-pink-400/30 dark:border-pink-600/30":""}
      ${a?"hover:from-pink-500/30 hover:via-purple-500/30 hover:to-cyan-500/30":""}
      animate-holographic
    `,quantum:`
      bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-violet-500/20
      dark:from-emerald-900/30 dark:via-blue-900/30 dark:to-violet-900/30
      ${r?"border border-violet-400/30 dark:border-violet-600/30":""}
      ${a?"hover:from-emerald-500/30 hover:via-blue-500/30 hover:to-violet-500/30":""}
      animate-quantum
    `,ethereal:`
      bg-gradient-to-br from-white/80 via-white/70 to-white/60
      dark:from-navy-800/80 dark:via-navy-700/70 dark:to-navy-600/60
      ${r?"border border-white/40 dark:border-navy-500/40":""}
      ${a?"hover:from-white/90 hover:via-white/80 hover:to-white/70":""}
      animate-ethereal
    `,cyber:`
      bg-gradient-to-br from-cyan-400/20 via-pink-400/20 to-yellow-400/20
      dark:from-cyan-900/30 dark:via-pink-900/30 dark:to-yellow-900/30
      ${r?"border border-cyan-400/50 dark:border-cyan-600/50":""}
      ${a?"hover:from-cyan-400/30 hover:via-pink-400/30 hover:to-yellow-400/30":""}
      animate-cyber-glow
    `,matrix:`
      bg-gradient-to-br from-green-400/20 via-green-500/20 to-green-600/20
      dark:from-green-900/30 dark:via-green-800/30 dark:to-green-700/30
      ${r?"border border-green-400/50 dark:border-green-600/50":""}
      ${a?"hover:from-green-400/30 hover:via-green-500/30 hover:to-green-600/30":""}
      animate-matrix
    `,plasma:`
      bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20
      dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30
      ${r?"border border-purple-400/30 dark:border-purple-600/30":""}
      ${a?"hover:from-pink-500/30 hover:via-purple-500/30 hover:to-blue-500/30":""}
      animate-plasma
    `,stellar:`
      bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-black/20
      dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-black/50
      ${r?"border border-indigo-400/30 dark:border-indigo-600/30":""}
      ${a?"hover:from-indigo-500/30 hover:via-purple-500/30 hover:to-black/30":""}
      animate-stellar
    `},b={none:"",sm:"p-4",md:"p-6",lg:"p-8",xl:"p-12",ultra:"p-16"},v={none:"",sm:"shadow-sm",md:"shadow-md",lg:"shadow-lg",xl:"shadow-xl",premium:"shadow-premium hover:shadow-premium-lg",ultra:"shadow-ultra-glow hover:shadow-ultra-glow",cosmic:"shadow-cosmic hover:shadow-cosmic",aurora:"shadow-aurora hover:shadow-aurora",diamond:"shadow-diamond hover:shadow-diamond",holographic:"shadow-holographic hover:shadow-holographic",quantum:"shadow-quantum hover:shadow-quantum",ethereal:"shadow-ethereal hover:shadow-ethereal",cyber:"shadow-cyber hover:shadow-cyber",matrix:"shadow-matrix hover:shadow-matrix",plasma:"shadow-plasma hover:shadow-plasma",stellar:"shadow-stellar hover:shadow-stellar"},c={none:"",shimmer:"before:absolute before:inset-0 before:rounded-4xl before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-1000",glow:"group-hover:shadow-ultra-glow",pulse:"animate-hyper-pulse",morph:"animate-morph",levitate:"animate-levitate",crystalline:"animate-crystalline",liquid:"animate-liquid-flow",magnetic:"animate-magnetic",dimensional:"animate-dimensional",energy:"before:absolute before:inset-0 before:rounded-4xl before:bg-energy-gradient before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-700",parallax:"transform-gpu will-change-transform group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:rotate-1"},g=a?`
    ${n?"hover:scale-[1.02] hover:-translate-y-2":""}
    ${i?"hover:shadow-ultra-glow":""}
  `:"",y=`
    ${p} 
    ${h[o]} 
    ${b[l]} 
    ${v[d]} 
    ${c[t]}
    ${g} 
    ${m}
  `;return e.jsxs("div",{className:y,...u,children:[e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-mesh-gradient opacity-30 pointer-events-none"}),o==="cosmic"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-cosmic-mesh opacity-50 pointer-events-none animate-cosmic"}),o==="aurora"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-aurora-mesh opacity-50 pointer-events-none animate-aurora"}),o==="diamond"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-diamond-mesh opacity-60 pointer-events-none animate-crystalline"}),o==="holographic"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-holographic-mesh opacity-40 pointer-events-none animate-holographic"}),o==="quantum"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-quantum-mesh opacity-50 pointer-events-none animate-quantum"}),o==="ethereal"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-ethereal-mesh opacity-60 pointer-events-none animate-ethereal"}),o==="cyber"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-cyber-mesh opacity-40 pointer-events-none animate-cyber-glow"}),o==="matrix"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-matrix-mesh opacity-50 pointer-events-none animate-matrix"}),o==="plasma"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-plasma-mesh opacity-50 pointer-events-none animate-plasma"}),o==="stellar"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-stellar-mesh opacity-50 pointer-events-none animate-stellar"}),o==="premium"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-gradient-to-br from-white/20 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"}),o==="glass"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 pointer-events-none"}),t==="shimmer"&&n&&a&&e.jsxs("div",{className:"absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-gold-400/60 to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1200",style:{transitionDelay:"0.2s"}})]}),t==="energy"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl overflow-hidden pointer-events-none",children:e.jsx("div",{className:"absolute inset-0 bg-energy-gradient translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 opacity-30"})}),t==="dimensional"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl overflow-hidden pointer-events-none",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-emerald-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-dimensional"})}),t==="magnetic"&&e.jsxs("div",{className:"absolute inset-0 rounded-4xl overflow-hidden pointer-events-none",children:[e.jsx("div",{className:"absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-magnetic"}),e.jsx("div",{className:"absolute top-3/4 right-1/4 w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-magnetic",style:{animationDelay:"0.5s"}}),e.jsx("div",{className:"absolute bottom-1/4 left-3/4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-magnetic",style:{animationDelay:"1s"}})]}),t==="liquid"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl overflow-hidden pointer-events-none",children:e.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-liquid-flow"})}),t==="crystalline"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl overflow-hidden pointer-events-none",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-crystalline"})}),i&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-gradient-to-br from-emerald-500/10 to-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none animate-pulse-glow"}),e.jsx("div",{className:"relative z-10",children:s}),n&&a&&r&&e.jsx("div",{className:"absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",children:e.jsx("div",{className:"absolute inset-0 rounded-4xl border-2 border-gradient-to-r from-emerald-500/0 via-emerald-500/60 to-emerald-500/0 animate-spin-slow"})}),t==="parallax"&&e.jsx("div",{className:"absolute inset-0 rounded-4xl bg-gradient-to-br from-white/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none transform group-hover:scale-105"}),o==="quantum"&&e.jsxs("div",{className:"absolute inset-0 rounded-4xl overflow-hidden pointer-events-none",children:[e.jsx("div",{className:"absolute top-1/3 left-1/3 w-1 h-1 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"}),e.jsx("div",{className:"absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-float",style:{animationDelay:"1s"}}),e.jsx("div",{className:"absolute bottom-1/3 left-2/3 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-float",style:{animationDelay:"2s"}})]})]})}export{x as C};
//# sourceMappingURL=Card-DDXGMvoi.js.map
