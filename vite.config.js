import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"tasks/:param":{"outputDir":"./tasks/:param","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/tasks/:param/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/tasks/:param/"}]},"calls":{"outputDir":"./calls","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/calls/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/calls/"}]},"meetings":{"outputDir":"./meetings","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/meetings/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/meetings/"}]},"index":{"outputDir":"./","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/"}]},"deals":{"outputDir":"./deals","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/deals/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/deals/"}]},"notifications":{"outputDir":"./notifications","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/notifications/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/notifications/"}]},"emails":{"outputDir":"./emails","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/emails/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/emails/"}]},"settings":{"outputDir":"./settings","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/settings/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/settings/"}]},"login":{"outputDir":"./login","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/login/"}]},"properties":{"outputDir":"./properties","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/properties/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/properties/"}]},"leads":{"outputDir":"./leads","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/leads/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/leads/"}]},"calendar":{"outputDir":"./calendar","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/calendar/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/calendar/"}]},"clients":{"outputDir":"./clients","lang":"en","cacheVersion":4,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/clients/"},{"rel":"alternate","hreflang":"en","href":"https://80a5ea79-c33b-4732-b6df-029c6d6b942f.weweb-preview.io/clients/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
