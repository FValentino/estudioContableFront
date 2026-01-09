(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/images/heroImage.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/heroImage.e032d89f.jpg");}),
"[project]/src/assets/images/heroImage.jpg.mjs { IMAGE => \"[project]/src/assets/images/heroImage.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$heroImage$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/heroImage.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$heroImage$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzwx6V/wAI2riT/iZ/aDlfm/1ePy61taPLe+pnd3P/2Q=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$heroImage$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$heroImage$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/heroImage.jpg.mjs { IMAGE => "[project]/src/assets/images/heroImage.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "85f891ff064d618ced316158240ceec9310b7d16c79b07e08746efbc162078d9") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85f891ff064d618ced316158240ceec9310b7d16c79b07e08746efbc162078d9";
    }
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
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
            className: "absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-[#ebe4d6]/20 to-[#e1d6c2]/30"
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-20 right-10 w-72 h-72 bg-[#002443]/5 rounded-full blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 89,
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
            lineNumber: 106,
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
                    lineNumber: 145,
                    columnNumber: 132
                }, this),
                "Soluciones Empresariales Integrales"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 145,
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
                    lineNumber: 154,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-[#777165] mb-8 leading-relaxed",
            children: "Ofrecemos soluciones integrales, dinámicas y eficientes, diseñadas para acompañar a nuestros clientes en la consecución de sus objetivos empresariales."
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-[#777165] mb-10 leading-relaxed",
            children: "Fomentamos un vínculo cercano y activo que nos permite comprender en detalle la realidad de cada organización y, mediante una planificación estratégica, contribuir a su desarrollo, consolidación y expansión."
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 156,
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
    if ($[19] !== navigate) {
        t18 = ({
            "Hero[<button>.onClick]": ()=>{
                navigate.push("#contacto");
            }
        })["Hero[<button>.onClick]"];
        $[19] = navigate;
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    let t19;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[21] = t19;
    } else {
        t19 = $[21];
    }
    let t20;
    if ($[22] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t18,
            className: "bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] \n                group rounded-md px-5 py-3 font-medium flex items-center justify-center hover:cursor-pointer",
            children: [
                "Agendar tu Reunión",
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[22] = t18;
        $[23] = t20;
    } else {
        t20 = $[23];
    }
    let t21;
    if ($[24] !== navigate) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "Hero[<button>.onClick]": ()=>{
                    navigate.push("#servicios");
                }
            }["Hero[<button>.onClick]"],
            className: "text-[#002443] border border-[#002443] px-5 py-3 rounded-md hover:bg-[#002443] \n                hover:text-[#faf8f5] hover:cursor-pointer transition-colors",
            children: "Conocer Servicios"
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[24] = navigate;
        $[25] = t21;
    } else {
        t21 = $[25];
    }
    let t22;
    if ($[26] !== t20 || $[27] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        t20,
                        t21
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 206,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[26] = t20;
        $[27] = t21;
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    let t23;
    let t24;
    let t25;
    let t26;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            opacity: 0,
            y: 60
        };
        t24 = {
            opacity: 1,
            y: 0
        };
        t25 = {
            duration: 0.8,
            delay: 0.4
        };
        t26 = {
            once: true
        };
        $[29] = t23;
        $[30] = t24;
        $[31] = t25;
        $[32] = t26;
    } else {
        t23 = $[29];
        t24 = $[30];
        t25 = $[31];
        t26 = $[32];
    }
    let t27;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full rounded-3xl overflow-hidden shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$heroImage$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$heroImage$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Servicios empresariales digitales y gesti\xF3n de negocios moderna",
                    className: "object-cover w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 245,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-[#002443]/20 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 245,
                    columnNumber: 229
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[33] = t27;
    } else {
        t27 = $[33];
    }
    let t28;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            once: true
        };
        $[34] = t28;
    } else {
        t28 = $[34];
    }
    let t29;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: entrance,
            initial: "hidden",
            whileInView: "visible",
            viewport: t28,
            ...float,
            className: " absolute top-8 right-8 bg-[#ffffff]/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-[#e1ded7]/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero/hero.tsx",
                        lineNumber: 261,
                        columnNumber: 270
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-[#0f0a03]",
                        children: "+25% Crecimiento"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero/hero.tsx",
                        lineNumber: 261,
                        columnNumber: 337
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hero/hero.tsx",
                lineNumber: 261,
                columnNumber: 229
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[35] = t29;
    } else {
        t29 = $[35];
    }
    let t30;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            once: true
        };
        $[36] = t30;
    } else {
        t30 = $[36];
    }
    let t31;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t23,
            whileInView: t24,
            transition: t25,
            viewport: t26,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-96 lg:h-[500px]",
                children: [
                    t27,
                    t29,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: entrance,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: t30,
                        ...float,
                        className: "absolute bottom-8 left-8 bg-[#ffffff]/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-[#e1ded7]/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "w-4 h-4 text-[#002443]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero/hero.tsx",
                                    lineNumber: 277,
                                    columnNumber: 408
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-[#0f0a03]",
                                    children: "Resultados Garantizados"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero/hero.tsx",
                                    lineNumber: 277,
                                    columnNumber: 457
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero/hero.tsx",
                            lineNumber: 277,
                            columnNumber: 367
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero/hero.tsx",
                        lineNumber: 277,
                        columnNumber: 148
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hero/hero.tsx",
                lineNumber: 277,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[37] = t31;
    } else {
        t31 = $[37];
    }
    let t32;
    if ($[38] !== t22) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
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
                            t22,
                            t31
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/hero/hero.tsx",
                        lineNumber: 284,
                        columnNumber: 225
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/hero.tsx",
                    lineNumber: 284,
                    columnNumber: 160
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/hero.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[38] = t22;
        $[39] = t32;
    } else {
        t32 = $[39];
    }
    return t32;
}
_s(Hero, "ZvlcOS1zBEmgSBi584lfL7BS+rM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
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
"[project]/src/services/emailService.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const sendEmail = async (subject, message)=>{
    try {
        const data = {
            subject: subject,
            html: message
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://estudiocontableback.onrender.com/contact", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return {
            success: true,
            message: response.data.message
        };
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
            return {
                success: false,
                message: error.response?.data?.message || error.message
            };
        } else {
            return {
                success: false,
                message: "Ocurrio un error inesperado"
            };
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSendEmail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSendEmail",
    ()=>useSendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/emailService.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useSendEmail() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "eba12dc6793d5d356b234db05373f72ae8fce4de33f660f9d9481ff53b312d58") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eba12dc6793d5d356b234db05373f72ae8fce4de33f660f9d9481ff53b312d58";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            mutationFn: _temp
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
}
_s(useSendEmail, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function _temp(t0) {
    const { subject, message } = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendEmail"])(subject, message);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSendEmail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSendEmail.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
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
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "El correo es obligatorio").email("Correo inválido")
});
function News() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "f93c96c2b778ba3de5af3bf6c065c396c151fb33ebc4feca5819b02757717219") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f93c96c2b778ba3de5af3bf6c065c396c151fb33ebc4feca5819b02757717219";
    }
    const { mutate, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSendEmail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendEmail"])();
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
    let t2;
    if ($[2] !== mutate || $[3] !== reset) {
        t2 = ({
            "News[onSubmit]": async (data)=>{
                const emaildata = {
                    subject: "novedades",
                    message: `
        <h2>Me comunico desde la web:</h2>
        <p> Me interesa recibir novedades, mi email es: ${data.email}</p>
      `
                };
                mutate(emaildata, {
                    onSuccess: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Te has suscripto correctamente \uD83C\uDF89");
                        reset();
                    },
                    onError: _temp
                });
            }
        })["News[onSubmit]"];
        $[2] = mutate;
        $[3] = reset;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const onSubmit = t2;
    let t3;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center justify-center w-16 h-16 bg-[#002443]/10 rounded-full mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                className: "w-8 h-8 text-[#002443]"
            }, void 0, false, {
                fileName: "[project]/src/components/news/news.tsx",
                lineNumber: 79,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl lg:text-3xl font-bold text-[#0f0a03] mb-4 ",
            children: "Mantente Informado"
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-[#777165] mb-8 max-w-2xl mx-auto leading-relaxed",
            children: "Déjanos tu email para recibir boletines y data importante que te va servir para el día a día de tu empresa."
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] !== handleSubmit || $[9] !== onSubmit) {
        t6 = handleSubmit(onSubmit);
        $[8] = handleSubmit;
        $[9] = onSubmit;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== control || $[12] !== errors.email) {
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
                lineNumber: 101,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[11] = control;
        $[12] = errors.email;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== isPending) {
        t8 = isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin w-6 h-6 rounded-full me-2 border-gray-800 border-2 border-s-3"
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 110,
            columnNumber: 23
        }, this);
        $[14] = isPending;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "flex items-center justify-center h-10 rounded-md px-6 has-[>svg]:px-4\n                    bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] hover:cursor-pointer",
            children: [
                t8,
                "Suscribirse"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t7 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-3",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[18] = t7;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t6) {
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
                                lineNumber: 135,
                                columnNumber: 261
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/news/news.tsx",
                        lineNumber: 135,
                        columnNumber: 203
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/news/news.tsx",
                    lineNumber: 135,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/news/news.tsx",
                lineNumber: 135,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/news/news.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t6;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
}
_s(News, "XjC2n/WwHkyNdu2H3guQfSep47s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSendEmail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendEmail"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = News;
function _temp() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Ocurri\xF3 un error al suscribirse \u274C");
}
var _c;
__turbopack_context__.k.register(_c, "News");
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
"[project]/src/components/contact/contactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/form/inputForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$textAreaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/form/textAreaForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSendEmail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSendEmail.ts [app-client] (ecmascript)");
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
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "El nombre es obligatorio"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "El correo es obligatorio").email("Correo inválido"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "El teléfono es obligatorio").regex(/^\d+$/, "Teléfono solo debe contener numeros").min(8, "El teléfono es muy corto").max(10, "El teléfono es muy largo"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres")
});
function ContactForm() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "6dc8a2e4562e542768557cd46c9fa58920594d7a4ddabfb2b6620e127bb7d581") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dc8a2e4562e542768557cd46c9fa58920594d7a4ddabfb2b6620e127bb7d581";
    }
    const { mutate, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSendEmail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendEmail"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(schema),
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
    let t2;
    if ($[2] !== mutate || $[3] !== reset) {
        t2 = ({
            "ContactForm[onSubmit]": async (data)=>{
                const emaildata = {
                    subject: "contacto",
                    message: `
        <h2>Me comunico desde la web:</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone}</p>
        <p><strong>Mensaje:</strong><br/>${data.message}</p>
      `
                };
                mutate(emaildata, {
                    onSuccess: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Email enviado correctamente \uD83C\uDF89");
                        reset();
                    },
                    onError: _temp
                });
            }
        })["ContactForm[onSubmit]"];
        $[2] = mutate;
        $[3] = reset;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const onSubmit = t2;
    let t3;
    if ($[5] !== handleSubmit || $[6] !== onSubmit) {
        t3 = handleSubmit(onSubmit);
        $[5] = handleSubmit;
        $[6] = onSubmit;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== control || $[9] !== errors.name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputForm"], {
            name: "name",
            control: control,
            placeHolder: "Nombre completo",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            error: errors.name
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[8] = control;
        $[9] = errors.name;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== control || $[12] !== errors.email) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputForm"], {
                name: "email",
                control: control,
                placeHolder: "Email",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                error: errors.email
            }, void 0, false, {
                fileName: "[project]/src/components/contact/contactForm.tsx",
                lineNumber: 105,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[11] = control;
        $[12] = errors.email;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== control || $[15] !== errors.phone) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$inputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputForm"], {
            name: "phone",
            control: control,
            placeHolder: "Tel\xE9fono",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
            error: errors.phone
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[14] = control;
        $[15] = errors.phone;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "w-[90%] mx-auto text-xs text-[#0f0a03] font-bold lg:text-center",
            children: "*Ingrese el teléfono sin 0 ni 15"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== t5 || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid sm:grid-cols-2 gap-4",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[20] = t5;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== control || $[24] !== errors.message) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$form$2f$textAreaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAreaForm"], {
            name: "message",
            control: control,
            placeHolder: "Cuentanos sobre tu proyecto o consulta",
            error: errors.message
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[23] = control;
        $[24] = errors.message;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== isPending) {
        t11 = isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin w-6 h-6 rounded-full me-2 border-gray-800 border-2 border-s-3"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 156,
            columnNumber: 24
        }, this);
        $[26] = isPending;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    const t12 = isPending ? "hidden" : "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform";
    let t13;
    if ($[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
            className: t12
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t11 || $[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full flex items-center justify-center h-10 rounded-md px-6 has-[>svg]:px-4\n                  bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] hover:cursor-pointer",
            children: [
                t11,
                "Enviar Consulta",
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[30] = t11;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t10 || $[34] !== t14 || $[35] !== t3 || $[36] !== t4 || $[37] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: t3,
            className: "space-y-4",
            children: [
                t4,
                t9,
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t14;
        $[35] = t3;
        $[36] = t4;
        $[37] = t9;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    let t16;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
            position: "bottom-right"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/contactForm.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t15,
                t16
            ]
        }, void 0, true);
        $[40] = t15;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    return t17;
}
_s(ContactForm, "XjC2n/WwHkyNdu2H3guQfSep47s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSendEmail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendEmail"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ContactForm;
function _temp() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Ocurri\xF3 un error al enviar el mensaje \u274C");
}
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f34b9dc5._.js.map