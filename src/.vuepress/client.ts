// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import Navigate from "./components/Navigate.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("Navigate", Navigate);
    },
});
