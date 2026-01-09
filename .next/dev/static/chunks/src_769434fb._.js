(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/hero/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Hero() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "07e10330b244ea82a3238a55f2ea1bc4a2263e7c80816c8e7c48cb3dbb822c27") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "07e10330b244ea82a3238a55f2ea1bc4a2263e7c80816c8e7c48cb3dbb822c27";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: 1
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const entranceTransition = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            hidden: {
                opacity: 0,
                scale: 0.6
            },
            visible: {
                opacity: 1,
                scale: 1,
                transition: entranceTransition
            }
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const entrance = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            animate: {
                y: [
                    0,
                    -10,
                    0
                ]
            },
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"]
            }
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const float = t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 80
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            duration: 1,
            ease: "easeOut"
        };
        t6 = {
            once: true
        };
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-br from-[#faf8f5] via-[#ebe4d6]/20 to-[#e1d6c2]/30"
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-20 right-10 w-72 h-72 bg-[#002443]/5 rounded-full blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-20 left-10 w-96 h-96 bg-[#e1d6c2]/10 rounded-full blur-3xl",
            style: {
                animationDelay: "2s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    let t11;
    let t12;
    let t13;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            opacity: 0,
            y: 60
        };
        t11 = {
            opacity: 1,
            y: 0
        };
        t12 = {
            duration: 0.8,
            delay: 0.2
        };
        t13 = {
            once: true
        };
        $[11] = t10;
        $[12] = t11;
        $[13] = t12;
        $[14] = t13;
    } else {
        t10 = $[11];
        t11 = $[12];
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center px-4 py-2 bg-[#002443]/10 rounded-full text-sm font-medium text-[#002443] mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "w-4 h-4 mr-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 142,
                    columnNumber: 132
                }, this),
                "Soluciones Empresariales Integrales"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    let t17;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl lg:text-6xl font-bold text-[#0f0a03] mb-6",
            children: [
                "I&M ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#002443]",
                    children: "Gestión de Negocios"
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 151,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-[#777165] mb-8 leading-relaxed",
            children: "Ofrecemos soluciones integrales, dinámicas y eficientes, diseñadas para acompañar a nuestros clientes en la consecución de sus objetivos empresariales."
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-[#777165] mb-10 leading-relaxed",
            children: "Fomentamos un vínculo cercano y activo que nos permite comprender en detalle la realidad de cada organización y, mediante una planificación estratégica, contribuir a su desarrollo, consolidación y expansión."
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[16] = t15;
        $[17] = t16;
        $[18] = t17;
    } else {
        t15 = $[16];
        t16 = $[17];
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t10,
            whileInView: t11,
            transition: t12,
            viewport: t13,
            children: [
                t14,
                t15,
                t16,
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contacto",
                            className: "bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] \n                group rounded-md px-5 py-3 font-medium flex items-center justify-center hover:cursor-pointer",
                            children: [
                                "Agendar tu Reunión",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero/hero.tsx",
                                    lineNumber: 164,
                                    columnNumber: 387
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero/hero.tsx",
                            lineNumber: 164,
                            columnNumber: 156
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#servicios",
                            className: "text-[#002443] border border-[#002443] px-5 py-3 rounded-md hover:bg-[#002443] \n                hover:text-[#faf8f5] hover:cursor-pointer transition-colors",
                            children: "Conocer Servicios"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero/hero.tsx",
                            lineNumber: 164,
                            columnNumber: 477
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 164,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    let t20;
    let t21;
    let t22;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            opacity: 0,
            y: 60
        };
        t20 = {
            opacity: 1,
            y: 0
        };
        t21 = {
            duration: 0.8,
            delay: 0.4
        };
        t22 = {
            once: true
        };
        $[20] = t19;
        $[21] = t20;
        $[22] = t21;
        $[23] = t22;
    } else {
        t19 = $[20];
        t20 = $[21];
        t21 = $[22];
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full rounded-3xl overflow-hidden shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/hero/heroImage.jpg",
                    alt: "Servicios empresariales digitales y gesti\xF3n de negocios moderna",
                    fill: true,
                    className: "object-cover w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 201,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-linear-to-t from-[#002443]/20 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 201,
                    columnNumber: 251
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            once: true
        };
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: entrance,
            initial: "hidden",
            whileInView: "visible",
            viewport: t24,
            ...float,
            className: " absolute top-8 right-8 bg-[#ffffff]/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-[#e1ded7]/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero/hero.tsx",
                        lineNumber: 217,
                        columnNumber: 270
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-[#0f0a03]",
                        children: "+25% Crecimiento"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero/hero.tsx",
                        lineNumber: 217,
                        columnNumber: 337
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hero/hero.tsx",
                lineNumber: 217,
                columnNumber: 229
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            once: true
        };
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            id: "inicio",
            className: "pt-24 pb-16 relative overflow-hidden",
            initial: t3,
            whileInView: t4,
            transition: t5,
            viewport: t6,
            children: [
                t7,
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                            t18,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: t19,
                                whileInView: t20,
                                transition: t21,
                                viewport: t22,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-96 lg:h-125",
                                    children: [
                                        t23,
                                        t25,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            variants: entrance,
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: t26,
                                            ...float,
                                            className: "absolute bottom-8 left-8 bg-[#ffffff]/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-[#e1ded7]/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "w-4 h-4 text-[#002443]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hero/hero.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 680
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-[#0f0a03]",
                                                        children: "Resultados Garantizados"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hero/hero.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 729
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/hero/hero.tsx",
                                                lineNumber: 233,
                                                columnNumber: 639
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/hero.tsx",
                                            lineNumber: 233,
                                            columnNumber: 420
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero/hero.tsx",
                                    lineNumber: 233,
                                    columnNumber: 363
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero/hero.tsx",
                                lineNumber: 233,
                                columnNumber: 287
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/hero/hero.tsx",
                        lineNumber: 233,
                        columnNumber: 225
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 233,
                    columnNumber: 160
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    return t27;
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/form/inputForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputForm",
    ()=>InputForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
;
;
function InputForm(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "290562edb4160a3f8d8ed99b0fcaf2fb98adf742b7b7938a884d08c87fa62932") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "290562edb4160a3f8d8ed99b0fcaf2fb98adf742b7b7938a884d08c87fa62932";
    }
    const { name, control, placeHolder, Icon, type, error } = t0;
    let t1;
    if ($[1] !== Icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#0f0a03]"
        }, void 0, false, {
            fileName: "[project]/src/components/common/form/inputForm.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = Icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== error || $[4] !== name || $[5] !== placeHolder || $[6] !== type) {
        t2 = ({
            "InputForm[<Controller>.render]": (t3)=>{
                const { field } = t3;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: name,
                    type: type,
                    ...field,
                    placeholder: placeHolder,
                    className: `border rounded-lg placeholder-[#777165] px-2 py-2 pl-10 w-full text-[#0f0a03]
                ${error ? "border-red-500" : "border-gray-300"}
                ${field.value ? "border-[#0f0a03] border-3" : "border-gray-300"}`
                }, void 0, false, {
                    fileName: "[project]/src/components/common/form/inputForm.tsx",
                    lineNumber: 43,
                    columnNumber: 16
                }, this);
            }
        })["InputForm[<Controller>.render]"];
        $[3] = error;
        $[4] = name;
        $[5] = placeHolder;
        $[6] = type;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== control || $[9] !== name || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: name,
            control: control,
            render: t2
        }, void 0, false, {
            fileName: "[project]/src/components/common/form/inputForm.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[8] = control;
        $[9] = name;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== t1 || $[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full relative",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/form/inputForm.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== error) {
        t5 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-[red]",
            children: error.message
        }, void 0, false, {
            fileName: "[project]/src/components/common/form/inputForm.tsx",
            lineNumber: 77,
            columnNumber: 19
        }, this);
        $[15] = error;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] !== t4 || $[18] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                t5
            ]
        }, void 0, true);
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    return t6;
}
_c = InputForm;
var _c;
__turbopack_context__.k.register(_c, "InputForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/actions/data:57bb63 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "newsEmailAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"406ea8faf3342fe4bcffe584e6798bfaf01c739a7d":"newsEmailAction"},"src/actions/newsEmail.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("406ea8faf3342fe4bcffe584e6798bfaf01c739a7d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "newsEmailAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbmV3c0VtYWlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSBcInJlc2VuZFwiO1xyXG5cclxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChcInJlX0hSYmNiOHhyXzNzTDNhZlBiZktwOEJ4QUdlOG05bXRhZlwiKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuZXdzRW1haWxBY3Rpb24oZW1haWw6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBgSSZNIDwke3Byb2Nlc3MuZW52LkZST01fRU1BSUx9PmAsXHJcbiAgICAgIHRvOiBbcHJvY2Vzcy5lbnYuVVNFUl9FTUFJTCFdLFxyXG4gICAgICBzdWJqZWN0OiBcIltXZWJdIFN1c2NyaXBjacOzbiBhIG5vdmVkYWRlc1wiLFxyXG4gICAgICBodG1sOiBgXHJcbiAgICAgICAgPGgyPlN1c2NyaXBjacOzbiBkZXNkZSBsYSB3ZWI8L2gyPlxyXG4gICAgICAgIDxwPk1lIGludGVyZXNhIHJlY2liaXIgbm92ZWRhZGVzLjwvcD5cclxuICAgICAgICA8cD48c3Ryb25nPkVtYWlsOjwvc3Ryb25nPiAke2VtYWlsfTwvcD5cclxuICAgICAgYCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGVudmlhbmRvIG5ld3NsZXR0ZXIgZW1haWw6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBTXNCLDRMQUFBIn0=
}),
"[project]/src/components/news/news.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>News
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/form/inputForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$57bb63__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:57bb63 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "El correo es obligatorio").email("Correo inválido")
});
function News() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "73231dfe601a81cec7bcd78555607f06380982a6b36f58f323d1858f043d7755") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "73231dfe601a81cec7bcd78555607f06380982a6b36f58f323d1858f043d7755";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(schema),
            defaultValues: {
                email: ""
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { control, handleSubmit, reset, formState: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(t0);
    const { errors } = t1;
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    let t2;
    if ($[2] !== reset) {
        t2 = ({
            "News[onSubmit]": (data)=>{
                startTransition({
                    "News[onSubmit > startTransition()]": async ()=>{
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$57bb63__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["newsEmailAction"])(data.email);
                        if (res.success) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Suscripci\xF3n realizada \uD83C\uDF89");
                            reset();
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("No se pudo suscribir \u274C");
                        }
                    }
                }["News[onSubmit > startTransition()]"]);
            }
        })["News[onSubmit]"];
        $[2] = reset;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const onSubmit = t2;
    let t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center justify-center w-16 h-16 bg-[#002443]/10 rounded-full mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                className: "w-8 h-8 text-[#002443]"
            }, void 0, false, {
                fileName: "[project]/src/components/news/news.tsx",
                lineNumber: 73,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl lg:text-3xl font-bold text-[#0f0a03] mb-4 ",
            children: "Mantente Informado"
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-[#777165] mb-8 max-w-2xl mx-auto leading-relaxed",
            children: "Déjanos tu email para recibir boletines y data importante que te va servir para el día a día de tu empresa."
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] !== handleSubmit || $[8] !== onSubmit) {
        t6 = handleSubmit(onSubmit);
        $[7] = handleSubmit;
        $[8] = onSubmit;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== control || $[11] !== errors.email) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputForm"], {
                name: "email",
                control: control,
                placeHolder: "tu@email.com",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                error: errors.email
            }, void 0, false, {
                fileName: "[project]/src/components/news/news.tsx",
                lineNumber: 95,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[10] = control;
        $[11] = errors.email;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== isPending) {
        t8 = isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin w-6 h-6 rounded-full me-2 border-gray-800 border-2 border-s-3"
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 104,
            columnNumber: 23
        }, this);
        $[13] = isPending;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "flex items-center justify-center h-10 rounded-md px-6 has-[>svg]:px-4\n                    bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] hover:cursor-pointer",
            children: [
                t8,
                "Suscribirse"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t7 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-3",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[17] = t7;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 lg:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[#0f0a03] flex flex-col gap-6 rounded-xl py-6 border-0 shadow-lg bg-[#e5dcca]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 px-6 lg:p-12 text-center",
                        children: [
                            t3,
                            t4,
                            t5,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: t6,
                                className: "max-w-md mx-auto",
                                children: t10
                            }, void 0, false, {
                                fileName: "[project]/src/components/news/news.tsx",
                                lineNumber: 129,
                                columnNumber: 261
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/news/news.tsx",
                        lineNumber: 129,
                        columnNumber: 203
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/news/news.tsx",
                    lineNumber: 129,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/news/news.tsx",
                lineNumber: 129,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t6;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    return t11;
}
_s(News, "vVZYoYKHIFEFJbCY5TekUibO7GA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = News;
var _c;
__turbopack_context__.k.register(_c, "News");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/schemas/contactEmailSchema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emailContactSchema",
    ()=>emailContactSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/index.js [app-client] (ecmascript) <locals>");
;
const emailContactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, "El nombre es obligatorio"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, "El correo es obligatorio").email("Correo inválido"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, "El teléfono es obligatorio").regex(/^\d+$/, "Teléfono solo debe contener numeros").min(8, "El teléfono es muy corto").max(10, "El teléfono es muy largo"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, "El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/form/textAreaForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextAreaForm",
    ()=>TextAreaForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
;
;
;
function TextAreaForm(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "839528b3dbb9d5e0692ea3a35d28e6cc90ecbd6ee15e8c6eca5a836d7358f439") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "839528b3dbb9d5e0692ea3a35d28e6cc90ecbd6ee15e8c6eca5a836d7358f439";
    }
    const { name, control, placeHolder, error, rows: t1 } = t0;
    const rows = t1 === undefined ? 4 : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            className: "absolute left-3 top-5 -translate-y-1/2 h-5 w-5 text-[#0f0a03]"
        }, void 0, false, {
            fileName: "[project]/src/components/common/form/textAreaForm.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== error || $[3] !== name || $[4] !== placeHolder || $[5] !== rows) {
        t3 = ({
            "TextAreaForm[<Controller>.render]": (t4)=>{
                const { field } = t4;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    placeholder: placeHolder,
                    id: name,
                    rows: rows,
                    ...field,
                    className: `border rounded-lg px-2 py-1 pl-10 resize-none w-full  text-[#0f0a03] ${error ? "border-red-500" : "border-gray-300"}`
                }, void 0, false, {
                    fileName: "[project]/src/components/common/form/textAreaForm.tsx",
                    lineNumber: 41,
                    columnNumber: 16
                }, this);
            }
        })["TextAreaForm[<Controller>.render]"];
        $[2] = error;
        $[3] = name;
        $[4] = placeHolder;
        $[5] = rows;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== control || $[8] !== name || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: name,
            control: control,
            render: t3
        }, void 0, false, {
            fileName: "[project]/src/components/common/form/textAreaForm.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = control;
        $[8] = name;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== error) {
        t5 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-bold ms-4 text-sm text-red-500",
            children: error.message
        }, void 0, false, {
            fileName: "[project]/src/components/common/form/textAreaForm.tsx",
            lineNumber: 64,
            columnNumber: 19
        }, this);
        $[11] = error;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col mt-2 relative",
            children: [
                t2,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/form/textAreaForm.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_c = TextAreaForm;
var _c;
__turbopack_context__.k.register(_c, "TextAreaForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/actions/data:b7b61f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactEmailAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4033a39c03a9525709bf2580411aede289cd4bc945":"contactEmailAction"},"src/actions/contactEmail.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4033a39c03a9525709bf2580411aede289cd4bc945", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "contactEmailAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29udGFjdEVtYWlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZW1haWxDb250YWN0U2NoZW1hIH0gZnJvbSBcIkAvc2NoZW1hcy9jb250YWN0RW1haWxTY2hlbWFcIjtcclxuaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSBcInJlc2VuZFwiO1xyXG5cclxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29udGFjdEVtYWlsQWN0aW9uKGRhdGE6IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwaG9uZTogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHBhcnNlZCA9IGVtYWlsQ29udGFjdFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XHJcblxyXG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwaG9uZSwgbWVzc2FnZSB9ID0gcGFyc2VkLmRhdGE7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBgSSZNIDwke3Byb2Nlc3MuZW52LkZST01fRU1BSUx9PmAsXHJcbiAgICAgIHRvOiBbcHJvY2Vzcy5lbnYuVVNFUl9FTUFJTCFdLFxyXG4gICAgICByZXBseVRvOiBlbWFpbCxcclxuICAgICAgc3ViamVjdDogXCJbV2ViXSBOdWV2byBjb250YWN0b1wiLFxyXG4gICAgICBodG1sOiBgXHJcbiAgICAgICAgPGgyPltXZWJdIE51ZXZvIGNvbnRhY3RvPC9oMj5cclxuICAgICAgICA8cD48Yj5Ob21icmU6PC9iPiAke25hbWV9PC9wPlxyXG4gICAgICAgIDxwPjxiPkVtYWlsOjwvYj4gJHtlbWFpbH08L3A+XHJcbiAgICAgICAgPHA+PGI+VGVsw6lmb25vOjwvYj4gJHtwaG9uZX08L3A+XHJcbiAgICAgICAgPHA+JHttZXNzYWdlLnJlcGxhY2UoL1xcbi9nLCBcIjxici8+XCIpfTwvcD5cclxuICAgICAgYCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQU9zQiwrTEFBQSJ9
}),
"[project]/src/components/contact/contactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$contactEmailSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/schemas/contactEmailSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/form/inputForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$textAreaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/form/textAreaForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$b7b61f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:b7b61f [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function ContactForm() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "d089c6e30b23d5dd59360f49bc83440f79ecf8e60215842a3da142639325a1a7") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d089c6e30b23d5dd59360f49bc83440f79ecf8e60215842a3da142639325a1a7";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$contactEmailSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailContactSchema"]),
            defaultValues: {
                name: "",
                email: "",
                phone: "",
                message: ""
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { control, handleSubmit, reset, formState: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(t0);
    const { errors } = t1;
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    let t2;
    if ($[2] !== reset) {
        t2 = ({
            "ContactForm[onSubmit]": (data)=>{
                startTransition({
                    "ContactForm[onSubmit > startTransition()]": async ()=>{
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$b7b61f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["contactEmailAction"])(data);
                        if (res.success) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Email enviado correctamente \uD83C\uDF89");
                            reset();
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Ocurri\xF3 un error al enviar el mensaje \u274C");
                        }
                    }
                }["ContactForm[onSubmit > startTransition()]"]);
            }
        })["ContactForm[onSubmit]"];
        $[2] = reset;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const onSubmit = t2;
    let t3;
    if ($[4] !== handleSubmit || $[5] !== onSubmit) {
        t3 = handleSubmit(onSubmit);
        $[4] = handleSubmit;
        $[5] = onSubmit;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== control || $[8] !== errors.name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputForm"], {
            name: "name",
            control: control,
            placeHolder: "Nombre completo",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            error: errors.name
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = control;
        $[8] = errors.name;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== control || $[11] !== errors.email) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputForm"], {
                name: "email",
                control: control,
                placeHolder: "Email",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                error: errors.email
            }, void 0, false, {
                fileName: "[project]/src/components/contact/contactForm.tsx",
                lineNumber: 89,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[10] = control;
        $[11] = errors.email;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== control || $[14] !== errors.phone) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputForm"], {
            name: "phone",
            control: control,
            placeHolder: "Tel\xE9fono",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
            error: errors.phone
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[13] = control;
        $[14] = errors.phone;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "w-[90%] mx-auto text-xs text-[#0f0a03] font-bold lg:text-center",
            children: "*Ingrese el teléfono sin 0 ni 15"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t5 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid sm:grid-cols-2 gap-4",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[19] = t5;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== control || $[23] !== errors.message) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$textAreaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAreaForm"], {
            name: "message",
            control: control,
            placeHolder: "Cuentanos sobre tu proyecto o consulta",
            error: errors.message
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[22] = control;
        $[23] = errors.message;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== isPending) {
        t11 = isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin w-6 h-6 rounded-full me-2 border-gray-800 border-2 border-s-3"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 140,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Enviar Consulta",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                    className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/contactForm.tsx",
                    lineNumber: 140,
                    columnNumber: 137
                }, this)
            ]
        }, void 0, true);
        $[25] = isPending;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== isPending || $[28] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: isPending,
            className: "w-full flex items-center justify-center h-10 rounded-md px-6 bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] hover:cursor-pointer disabled:opacity-50",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[27] = isPending;
        $[28] = t11;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== t10 || $[31] !== t12 || $[32] !== t3 || $[33] !== t4 || $[34] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: t3,
            className: "space-y-4",
            children: [
                t4,
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t12;
        $[32] = t3;
        $[33] = t4;
        $[34] = t9;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
            position: "bottom-right"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    let t15;
    if ($[37] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t13,
                t14
            ]
        }, void 0, true);
        $[37] = t13;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    return t15;
}
_s(ContactForm, "vVZYoYKHIFEFJbCY5TekUibO7GA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_769434fb._.js.map