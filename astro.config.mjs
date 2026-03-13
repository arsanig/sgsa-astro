// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
            paraglideVitePlugin({
                project: "./project.inlang",
                outdir: "./src/paraglide",
            }),
        ],
    },
    output: "static",
    adapter: node({ mode: "standalone" }),
});
