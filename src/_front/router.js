import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"80a5ea79-c33b-4732-b6df-029c6d6b942f","homePageId":"480d4d46-2135-48a3-8390-e57e848ccea2","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"7f84c784-cbff-4715-98a4-b0ebbf9c1977","linkId":"7f84c784-cbff-4715-98a4-b0ebbf9c1977","name":"tasks","folder":null,"paths":{"en":"tasks/{{param|}}","default":"tasks/{{param|}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"19a1abdb-74b7-4e1a-87a3-89f4dcd297bb","sectionTitle":"Section","linkId":"ffea73e2-5359-46ae-9133-e02a1810ea86"},{"uid":"ea08fc7c-e121-41c3-aa12-9d7e27f559ac","sectionTitle":"Section","linkId":"2ab4ddb8-9da5-42a9-b345-1fb1b93b5d50"},{"uid":"e955f750-2d26-4703-832d-8d06961965af","sectionTitle":"Section","linkId":"6e36fab6-208f-463a-942f-e0b0ad9326d6"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ca9ebf0a-5df7-4e21-87f3-e987f4ab801d","linkId":"ca9ebf0a-5df7-4e21-87f3-e987f4ab801d","name":"calls","folder":null,"paths":{"en":"calls","default":"calls"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"59fc141e-f236-42a3-910a-438936a1a58a","sectionTitle":"Section","linkId":"1281866a-933e-44f7-8452-27943afb81cc"},{"uid":"8ef0587c-0b97-4006-9aa2-2b5647fe9cf4","sectionTitle":"Section","linkId":"b9919d7c-8b7e-46f7-8d9a-2b309866d02f"},{"uid":"fd1ed63b-41f4-47b5-9b77-391dcccd76dd","sectionTitle":"Section","linkId":"e360f146-d593-4af7-8c9f-d44b27a6c3cf"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8d64b2a7-04be-4467-b96a-37fc701d39e0","linkId":"8d64b2a7-04be-4467-b96a-37fc701d39e0","name":"meetings","folder":null,"paths":{"en":"meetings","default":"meetings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"f8a33eaf-81b2-4bcd-8337-dad168da7d97","sectionTitle":"Section","linkId":"034a0578-6e21-458c-b0dc-3deef1bd8ac8"},{"uid":"f31bda2f-4f0a-4412-a236-63d13ae10818","sectionTitle":"Section","linkId":"5d30fb6e-b076-465c-8f92-8523da3e4712"},{"uid":"0978d6cc-d435-4757-8a44-e4da86186180","sectionTitle":"Section","linkId":"c09eec9b-f18d-42a4-bc21-b655a3f45506"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"21c3933a-3d71-4e08-b76c-f7f39691a471","linkId":"21c3933a-3d71-4e08-b76c-f7f39691a471","name":"Dashboard","folder":null,"paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"e0a687b9-15eb-4c2a-a5d1-c681feddefbc","sectionTitle":"Section","linkId":"def37571-6eb0-4a55-8cf0-3880038c62d2"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"cd7769d8-64e6-4b0f-866f-5583eabf3bd4","sectionTitle":"Section","linkId":"a047189d-7ad9-470e-8577-ac985c773149"},{"uid":"7af0eb77-4fd1-41bb-8232-91e195d7a14c","sectionTitle":"Section","linkId":"41882e64-f1a8-4052-a954-9c187d23e303"},{"uid":"e453b7d1-3cd5-4972-a28d-93e619c3cdca","sectionTitle":"Section","linkId":"919955c8-5cb1-479e-8ed7-897b450f85c7"},{"uid":"9eef8c25-5c9d-4a23-968c-e1a2cafe1792","sectionTitle":"Mobile Section","linkId":"ff5b9fbc-c799-4f20-b7aa-75ffede54113"},{"uid":"ec057a5d-95a6-43be-a1f6-8d762e030687","sectionTitle":"Section","linkId":"d4e370b1-7d21-4af6-b6e6-2031dd967aca"},{"uid":"c63a87b3-6547-4aab-9b39-d7e6f978ca45","sectionTitle":"Mobile Section2","linkId":"abe26043-0a52-4df1-9a38-c02f10f1c699"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"95e66356-c313-4bcb-9f91-d6140524e6f9","linkId":"95e66356-c313-4bcb-9f91-d6140524e6f9","name":"deals","folder":null,"paths":{"en":"deals","default":"deals"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"463b543d-2b52-4aff-9c68-a9d740e74f82","sectionTitle":"Section","linkId":"a5a2e3a1-6580-47b8-8ea3-c2d9cf77e85a"},{"uid":"7ab316c2-d02a-4464-a435-f7d6350f077e","sectionTitle":"Section","linkId":"79b1a2e7-83ea-484f-ab54-0a50e6e85d50"},{"uid":"65e3f2ba-75e1-4ec3-b701-96e3d6db862a","sectionTitle":"Section","linkId":"97962c28-49b1-49ea-98bc-6bf6c0a7b28d"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"77bf6658-7d59-4a4a-9064-0d9176b6ce95","linkId":"77bf6658-7d59-4a4a-9064-0d9176b6ce95","name":"notifications","folder":null,"paths":{"en":"notifications","default":"notifications"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"dc87b853-aa91-4b22-b9be-e646f5fe6380","sectionTitle":"Section","linkId":"c361202e-1ead-4aed-8ae4-05617ca7d9b7"},{"uid":"9cdafd35-67a1-4698-9e92-584aff3ef3a1","sectionTitle":"Section","linkId":"5bd55b5a-3a9f-47f3-a5a9-ad53b3c71d63"},{"uid":"0eda6cf4-4b7d-4657-8f36-0cde3130d82f","sectionTitle":"Section","linkId":"2f084101-3ca8-42b1-bf30-80f7e9b982ad"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"14a0cc77-8714-4d6e-bfd0-2b38922e6c51","linkId":"14a0cc77-8714-4d6e-bfd0-2b38922e6c51","name":"emails","folder":null,"paths":{"en":"emails","default":"emails"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"73ff43c6-ce07-4c89-8d37-39d028e99866","sectionTitle":"Section","linkId":"77c085e6-6e04-4d81-b8b3-d52c55d57285"},{"uid":"41dddf85-a7ae-4d00-8b61-bdc82fc1be43","sectionTitle":"Section","linkId":"11e9dc1a-8f6a-4755-80c8-7d8235aa4ea4"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a2c05185-82ee-4ad2-9256-5f420ebc180e","linkId":"a2c05185-82ee-4ad2-9256-5f420ebc180e","name":"settings","folder":null,"paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"4b3dec3a-1f1e-4725-b9b5-21f3a8d0e2d7","sectionTitle":"Section","linkId":"4ebdda9f-f0a5-4c24-8068-32be9e56608c"},{"uid":"92d84c38-31c6-4fa1-bf45-a7af1db83e72","sectionTitle":"Section","linkId":"3a6ef80e-09da-4a89-bcbc-fa1842540990"},{"uid":"9b2099f9-2c55-45a9-a472-6a7dea8bae9c","sectionTitle":"Section","linkId":"8c819d19-15da-4f88-8074-d8a5814d548c"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"480d4d46-2135-48a3-8390-e57e848ccea2","linkId":"480d4d46-2135-48a3-8390-e57e848ccea2","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d74ca830-096e-471e-9a12-93ff761867fd","sectionTitle":"Login","linkId":"0cde1093-958f-447e-a33c-9d93bb202b25"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4a0993ec-2189-4422-b684-b79a91a03cd8","linkId":"4a0993ec-2189-4422-b684-b79a91a03cd8","name":"properties","folder":null,"paths":{"en":"properties","default":"properties"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"8a0d0d12-4784-4c2e-9cc2-84e1fcd533ef","sectionTitle":"Section","linkId":"71d8e570-a6f3-4e8a-a551-32e545c92f9b"},{"uid":"94898b87-53d5-45d9-b0ee-b02d192bc6ce","sectionTitle":"Section","linkId":"346e66cd-636a-47d7-8585-16f1680b2ee2"},{"uid":"a3e68681-d382-46fb-95e6-2833d69efc00","sectionTitle":"Section","linkId":"5bbbc41c-5493-403f-8093-6d8a7b75de1a"},{"uid":"b1162cf5-5158-4d81-81c5-05f2cd1fb54f","sectionTitle":"SectionKanban","linkId":"5463e81f-893d-462b-96f4-b3dc2549bb56"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"42570216-77ec-4307-ae02-7345247277b3","linkId":"42570216-77ec-4307-ae02-7345247277b3","name":"leads","folder":null,"paths":{"en":"leads","default":"leads"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"2c61f272-142f-4a13-ba17-fb0400c50e7e","sectionTitle":"Section","linkId":"ad845fe9-a8cf-47d4-accf-0d85574095fa"},{"uid":"256a6b90-6f61-4c2a-b6d9-96ca2b2194af","sectionTitle":"Section","linkId":"9960d68b-bbbb-49d8-a323-4acc38f7205b"},{"uid":"53dc1a5e-17a1-4119-9097-0cb23cb01f47","sectionTitle":"Section","linkId":"bb20716f-f322-4982-966a-7ed8d09ce4ef"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a2678a6a-0ba5-47a8-948b-a5c3bff71e2e","linkId":"a2678a6a-0ba5-47a8-948b-a5c3bff71e2e","name":"calendar","folder":null,"paths":{"en":"calendar","default":"calendar"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"ac123c91-c704-4d39-97ef-956594e87640","sectionTitle":"Section","linkId":"41d396cb-92b8-472e-935a-9f74d1a3bdf6"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dd894dc2-37a4-4ca6-8f92-9aa96ad673fd","linkId":"dd894dc2-37a4-4ca6-8f92-9aa96ad673fd","name":"clients","folder":null,"paths":{"en":"clients","default":"clients"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"2384eb96-eb69-4669-a77f-69e97a1dd26d","sectionTitle":"Section","linkId":"f7984efa-33b5-487f-acc3-06ab78999b6a"},{"uid":"e54d5cc4-2581-46d2-888e-d1c8db7decb1","sectionTitle":"Section","linkId":"e59d66ff-2f16-46d0-9848-579fffa0c87f"},{"uid":"b6501cca-aa90-4b9c-8a67-f88fcb0c14a1","sectionTitle":"Section","linkId":"bc84bc5c-6d05-426c-8db2-d7058c71cffc"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"97e7b1ae-f88a-4697-849c-ee56ab49bb48","name":"JavaScript","namespace":"javascript"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 8;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
