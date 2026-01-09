module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/actions/newsEmail.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406ea8faf3342fe4bcffe584e6798bfaf01c739a7d":"newsEmailAction"},"",""] */ __turbopack_context__.s([
    "newsEmailAction",
    ()=>newsEmailAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"]("re_HRbcb8xr_3sL3afPbfKp8BxAGe8m9mtaf");
async function newsEmailAction(email) {
    try {
        await resend.emails.send({
            from: `I&M <${process.env.FROM_EMAIL}>`,
            to: [
                process.env.USER_EMAIL
            ],
            subject: "[Web] Suscripción a novedades",
            html: `
        <h2>Suscripción desde la web</h2>
        <p>Me interesa recibir novedades.</p>
        <p><strong>Email:</strong> ${email}</p>
      `
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error enviando newsletter email:", error);
        return {
            success: false
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    newsEmailAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(newsEmailAction, "406ea8faf3342fe4bcffe584e6798bfaf01c739a7d", null);
}),
"[project]/src/schemas/contactEmailSchema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emailContactSchema",
    ()=>emailContactSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/index.js [app-rsc] (ecmascript) <locals>");
;
const emailContactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, "El nombre es obligatorio"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, "El correo es obligatorio").email("Correo inválido"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, "El teléfono es obligatorio").regex(/^\d+$/, "Teléfono solo debe contener numeros").min(8, "El teléfono es muy corto").max(10, "El teléfono es muy largo"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, "El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres")
});
}),
"[project]/src/actions/contactEmail.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4033a39c03a9525709bf2580411aede289cd4bc945":"contactEmailAction"},"",""] */ __turbopack_context__.s([
    "contactEmailAction",
    ()=>contactEmailAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$contactEmailSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/schemas/contactEmailSchema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function contactEmailAction(data) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$contactEmailSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["emailContactSchema"].safeParse(data);
    if (!parsed.success) {
        return {
            success: false
        };
    }
    const { name, email, phone, message } = parsed.data;
    try {
        await resend.emails.send({
            from: `I&M <${process.env.FROM_EMAIL}>`,
            to: [
                process.env.USER_EMAIL
            ],
            replyTo: email,
            subject: "[Web] Nuevo contacto",
            html: `
        <h2>[Web] Nuevo contacto</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `
        });
        return {
            success: true
        };
    } catch (error) {
        console.error(error);
        return {
            success: false
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    contactEmailAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(contactEmailAction, "4033a39c03a9525709bf2580411aede289cd4bc945", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/newsEmail.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/contactEmail.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newsEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newsEmail.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$contactEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/contactEmail.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/newsEmail.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/contactEmail.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4033a39c03a9525709bf2580411aede289cd4bc945",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$contactEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactEmailAction"],
    "406ea8faf3342fe4bcffe584e6798bfaf01c739a7d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newsEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsEmailAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$newsEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$contactEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/newsEmail.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/contactEmail.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newsEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newsEmail.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$contactEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/contactEmail.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6fec3e04._.js.map