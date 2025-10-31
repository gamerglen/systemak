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
window.wwg_designInfo = {"id":"80a5ea79-c33b-4732-b6df-029c6d6b942f","homePageId":"480d4d46-2135-48a3-8390-e57e848ccea2","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"7f84c784-cbff-4715-98a4-b0ebbf9c1977","linkId":"7f84c784-cbff-4715-98a4-b0ebbf9c1977","name":"tasks","folder":"Systemak Pages/","paths":{"en":"tasks","default":"tasks"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"19a1abdb-74b7-4e1a-87a3-89f4dcd297bb","sectionTitle":"Section","linkId":"ffea73e2-5359-46ae-9133-e02a1810ea86"},{"uid":"c76ed502-8df1-484a-9837-3552e22a06be","sectionTitle":"Section Mobile1","linkId":"03d43e01-8227-4ca4-b0f5-b7d810fb09cc"},{"uid":"ea08fc7c-e121-41c3-aa12-9d7e27f559ac","sectionTitle":"Section","linkId":"2ab4ddb8-9da5-42a9-b345-1fb1b93b5d50"},{"uid":"86428dfe-cc4d-4436-8dc4-29268577d57a","sectionTitle":"Section Mobile2","linkId":"7a544b60-81ae-4fa0-bb5a-3fa7a5b94ed7"},{"uid":"e955f750-2d26-4703-832d-8d06961965af","sectionTitle":"Section","linkId":"6e36fab6-208f-463a-942f-e0b0ad9326d6"},{"uid":"2587230e-916f-4ece-90b3-80ffc51f94ab","sectionTitle":"Section Mobile3","linkId":"8b66754d-8db5-4fd7-bb1d-8046ff1f45e8"},{"uid":"831cbcbb-0cb1-4273-824a-ad0467031f56","sectionTitle":"Section Mobile4","linkId":"b62898cc-70d2-4b8e-b76d-f079f514a504"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ca9ebf0a-5df7-4e21-87f3-e987f4ab801d","linkId":"ca9ebf0a-5df7-4e21-87f3-e987f4ab801d","name":"calls","folder":"Systemak Pages/","paths":{"en":"calls","default":"calls"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"59fc141e-f236-42a3-910a-438936a1a58a","sectionTitle":"Section","linkId":"1281866a-933e-44f7-8452-27943afb81cc"},{"uid":"3f034480-29ef-45c6-9c39-dd6a4c58f7cf","sectionTitle":"Section Mobile1","linkId":"077d3621-47f4-40ad-a7b4-bde8c8687d62"},{"uid":"8ef0587c-0b97-4006-9aa2-2b5647fe9cf4","sectionTitle":"Section","linkId":"b9919d7c-8b7e-46f7-8d9a-2b309866d02f"},{"uid":"e7107525-c2c8-42dd-bed7-fa29e742da94","sectionTitle":"Section Mobile2","linkId":"66ee195b-5416-49fb-8702-12749cc0f9c2"},{"uid":"fd1ed63b-41f4-47b5-9b77-391dcccd76dd","sectionTitle":"Section","linkId":"e360f146-d593-4af7-8c9f-d44b27a6c3cf"},{"uid":"742f80e2-3686-4549-9d84-01393df7b5e4","sectionTitle":"Section Mobile3","linkId":"f3e9812f-ff3a-472b-8812-8cbe8161dbea"},{"uid":"c370ebfa-ea76-4c47-9462-c4b2183d8e4a","sectionTitle":"Section Mobile4","linkId":"0b85a647-0e30-47d2-a2de-12e924941a06"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8d64b2a7-04be-4467-b96a-37fc701d39e0","linkId":"8d64b2a7-04be-4467-b96a-37fc701d39e0","name":"meetings","folder":"Systemak Pages/","paths":{"en":"meetings","default":"meetings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"f8a33eaf-81b2-4bcd-8337-dad168da7d97","sectionTitle":"Section","linkId":"034a0578-6e21-458c-b0dc-3deef1bd8ac8"},{"uid":"07b583c6-e5b2-49b7-a7ba-4a041569675e","sectionTitle":"Section Mobile1","linkId":"a1828e80-c28a-4f6d-bab7-154b6be5e058"},{"uid":"f31bda2f-4f0a-4412-a236-63d13ae10818","sectionTitle":"Section","linkId":"5d30fb6e-b076-465c-8f92-8523da3e4712"},{"uid":"aa9a5ea4-ae60-44b5-8fc9-71e829f22830","sectionTitle":"Section Mobile2","linkId":"09f5ae64-da0b-4aa2-a735-2d133545c6b5"},{"uid":"0978d6cc-d435-4757-8a44-e4da86186180","sectionTitle":"Section","linkId":"c09eec9b-f18d-42a4-bc21-b655a3f45506"},{"uid":"5d2859aa-7b2e-48de-91f0-81990d6d2602","sectionTitle":"Section Mobile3","linkId":"cbd20ccd-e2cc-4858-95ea-092c939c6064"},{"uid":"ffa7535b-2c11-4cf7-a6bd-ccd32508f26c","sectionTitle":"Section Mobile4","linkId":"01b3a778-f407-484b-b8e7-6bedb53ba205"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9dd803b4-99c0-40d1-b04a-e1231764ca56","linkId":"9dd803b4-99c0-40d1-b04a-e1231764ca56","name":"Signup Offer","folder":"Signups/","paths":{"en":"signup-offer","default":"signup-offer"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"3271ba04-9e23-438b-8b78-fa5d4e417ad6","sectionTitle":"Header","linkId":"7f9d25e7-829e-43ee-ac0b-be10fca31d2d"},{"uid":"9eed1200-6f25-4aea-9529-08387fa8719f","sectionTitle":"Hero Banner","linkId":"7a66d6b5-270d-4aba-a696-47573735212a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4201a55a-33c4-4783-99a0-2d7a0fccd392","linkId":"4201a55a-33c4-4783-99a0-2d7a0fccd392","name":"admin login","folder":"Admin/","paths":{"en":"admin-login","default":"admin-login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"26e2a2f0-3450-4b51-ab05-fd2632668173","sectionTitle":"Login","linkId":"b14c74e4-75ef-4a9a-9874-d14ebd12fc3c"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"716b5ac6-fe26-4e3c-8210-54a8bc736de9","linkId":"716b5ac6-fe26-4e3c-8210-54a8bc736de9","name":"Signup Trial","folder":"Signups/","paths":{"en":"signup-trial","default":"signup-trial"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"896ce8be-414d-4bf2-9ad8-17918fd93590","sectionTitle":"Header","linkId":"22ea3127-aa63-4035-9900-c41c1056efa3"},{"uid":"af5ad36b-8f1f-42ea-a3c1-dab5a87ee6fa","sectionTitle":"Hero Banner","linkId":"ca8cd4d8-cac4-48c7-a227-9699fcdd3e2f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fd5b58c7-3527-416e-aaf0-9d9cb2e61fdc","linkId":"fd5b58c7-3527-416e-aaf0-9d9cb2e61fdc","name":"Control Panel","folder":"Admin/","paths":{"en":"control-panel","default":"control-panel"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"95eeee29-1b24-489d-876e-2f29bacc25de","sectionTitle":"Admin Navigation","linkId":"5430177c-6637-4a87-b35e-6a5c715c1573"},{"uid":"ff87168d-775d-4940-a59e-6e2a641f3a4a","sectionTitle":"Admin Menu","linkId":"f8e846a3-343d-4f4a-b31e-a62222217780"},{"uid":"55a4b9d2-c0f6-4139-a7c9-c74ecc9878a4","sectionTitle":"Admin Section","linkId":"378a3f66-bc65-4881-8e44-317a3a8a71a5"}],"pageUserGroups":[{},{"userGroup":{"id":"b6b0ec11-cda5-459a-ba4e-d96abb2d65c9","roles":[{"value":"a9bfeb39-18c0-4cc5-95ab-1f50964c1479"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"585bb236-27df-4b98-ac26-d68e6321255e","linkId":"585bb236-27df-4b98-ac26-d68e6321255e","name":"System Users","folder":"Admin/","paths":{"en":"system-users","default":"system-users"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"95eeee29-1b24-489d-876e-2f29bacc25de","sectionTitle":"Admin Navigation","linkId":"5430177c-6637-4a87-b35e-6a5c715c1573"},{"uid":"ff87168d-775d-4940-a59e-6e2a641f3a4a","sectionTitle":"Admin Menu","linkId":"f8e846a3-343d-4f4a-b31e-a62222217780"},{"uid":"ba215f98-a0f3-4314-b24d-33192c2d38d8","sectionTitle":"Admin Section","linkId":"494c0f4e-8d4a-45d0-84cf-35a63b042da1"},{"uid":"66378452-8ca0-4269-bbfb-ffbb08f1d47d","sectionTitle":"Section","linkId":"57a2d805-53f6-4f57-bc9c-8b31df849eb9"},{"uid":"dc09d237-859d-4634-836f-ff4ca5bccc51","sectionTitle":"Section Mobile1","linkId":"6748d4fa-d24c-4412-9efb-3a949047828c"},{"uid":"ed730cb8-62e1-4955-83f1-c8e1ebf9edbb","sectionTitle":"Section","linkId":"5b309265-7225-4427-be36-6b3a6bcbea44"},{"uid":"e916cb24-7b56-4c93-904b-06d462b91b77","sectionTitle":"Section Mobile2","linkId":"2d6846e3-cca6-4874-835f-727a7dd1b986"},{"uid":"5e735f30-7919-4c22-9dd4-744e16f5fdcf","sectionTitle":"Section Mobile3","linkId":"a1e9a817-01ed-42df-b048-bcc4719073cc"},{"uid":"aa78585a-bb14-42a6-941e-8434513b5d30","sectionTitle":"Section Mobile4","linkId":"626d664f-ff09-4e8d-9db6-f12716bbfd1e"}],"pageUserGroups":[{},{"userGroup":{"id":"b6b0ec11-cda5-459a-ba4e-d96abb2d65c9","roles":[{"value":"a9bfeb39-18c0-4cc5-95ab-1f50964c1479"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"21c3933a-3d71-4e08-b76c-f7f39691a471","linkId":"21c3933a-3d71-4e08-b76c-f7f39691a471","name":"Dashboard","folder":"Systemak Pages/","paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"e0a687b9-15eb-4c2a-a5d1-c681feddefbc","sectionTitle":"Section","linkId":"def37571-6eb0-4a55-8cf0-3880038c62d2"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"cd7769d8-64e6-4b0f-866f-5583eabf3bd4","sectionTitle":"Section","linkId":"a047189d-7ad9-470e-8577-ac985c773149"},{"uid":"7af0eb77-4fd1-41bb-8232-91e195d7a14c","sectionTitle":"Section","linkId":"41882e64-f1a8-4052-a954-9c187d23e303"},{"uid":"e453b7d1-3cd5-4972-a28d-93e619c3cdca","sectionTitle":"Section","linkId":"919955c8-5cb1-479e-8ed7-897b450f85c7"},{"uid":"9eef8c25-5c9d-4a23-968c-e1a2cafe1792","sectionTitle":"Mobile Section","linkId":"ff5b9fbc-c799-4f20-b7aa-75ffede54113"},{"uid":"ec057a5d-95a6-43be-a1f6-8d762e030687","sectionTitle":"Section","linkId":"d4e370b1-7d21-4af6-b6e6-2031dd967aca"},{"uid":"c63a87b3-6547-4aab-9b39-d7e6f978ca45","sectionTitle":"Mobile Section2","linkId":"abe26043-0a52-4df1-9a38-c02f10f1c699"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"77bf6658-7d59-4a4a-9064-0d9176b6ce95","linkId":"77bf6658-7d59-4a4a-9064-0d9176b6ce95","name":"notifications","folder":"Systemak Pages/","paths":{"en":"notifications","default":"notifications"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"dc87b853-aa91-4b22-b9be-e646f5fe6380","sectionTitle":"Section","linkId":"c361202e-1ead-4aed-8ae4-05617ca7d9b7"},{"uid":"9cdafd35-67a1-4698-9e92-584aff3ef3a1","sectionTitle":"Section","linkId":"5bd55b5a-3a9f-47f3-a5a9-ad53b3c71d63"},{"uid":"0eda6cf4-4b7d-4657-8f36-0cde3130d82f","sectionTitle":"Section","linkId":"2f084101-3ca8-42b1-bf30-80f7e9b982ad"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"42570216-77ec-4307-ae02-7345247277b3","linkId":"42570216-77ec-4307-ae02-7345247277b3","name":"leads","folder":"Systemak Pages/","paths":{"en":"leads","default":"leads"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"2c61f272-142f-4a13-ba17-fb0400c50e7e","sectionTitle":"Section","linkId":"ad845fe9-a8cf-47d4-accf-0d85574095fa"},{"uid":"613ca12a-7c1c-4dd1-ae25-7f93db22a38f","sectionTitle":"Section Mobile1","linkId":"cf83bc27-6676-46de-9239-15b08e912783"},{"uid":"256a6b90-6f61-4c2a-b6d9-96ca2b2194af","sectionTitle":"Section","linkId":"9960d68b-bbbb-49d8-a323-4acc38f7205b"},{"uid":"c46368d0-392f-4c14-8ef8-c039188ec63d","sectionTitle":"Section Mobile2","linkId":"16f0cdf0-3278-4e92-9244-616cd2488f29"},{"uid":"53dc1a5e-17a1-4119-9097-0cb23cb01f47","sectionTitle":"Section","linkId":"bb20716f-f322-4982-966a-7ed8d09ce4ef"},{"uid":"9d57fffa-449b-40e4-8683-14c2553ff19e","sectionTitle":"Section Mobile3","linkId":"6383a19d-cd2a-4c8c-8f06-b80dea7ef406"},{"uid":"a94c7f87-b492-4b54-a7ae-396e6807663d","sectionTitle":"Section Mobile4","linkId":"aa5c36d6-3769-4a94-a207-3bec6ccc7f3d"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a2678a6a-0ba5-47a8-948b-a5c3bff71e2e","linkId":"a2678a6a-0ba5-47a8-948b-a5c3bff71e2e","name":"calendar","folder":"Systemak Pages/","paths":{"en":"calendar","default":"calendar"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"ac123c91-c704-4d39-97ef-956594e87640","sectionTitle":"Section","linkId":"41d396cb-92b8-472e-935a-9f74d1a3bdf6"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dd894dc2-37a4-4ca6-8f92-9aa96ad673fd","linkId":"dd894dc2-37a4-4ca6-8f92-9aa96ad673fd","name":"clients","folder":"Systemak Pages/","paths":{"en":"clients","default":"clients"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"2384eb96-eb69-4669-a77f-69e97a1dd26d","sectionTitle":"Section","linkId":"f7984efa-33b5-487f-acc3-06ab78999b6a"},{"uid":"2ea649cb-22dd-4d10-a5ba-d89f357902b7","sectionTitle":"Section Mobile1","linkId":"2f471586-baaf-4bcb-b77b-2771ff358f1c"},{"uid":"e54d5cc4-2581-46d2-888e-d1c8db7decb1","sectionTitle":"Section","linkId":"e59d66ff-2f16-46d0-9848-579fffa0c87f"},{"uid":"4e7becb8-85d6-40f9-b7b9-74c19c38544d","sectionTitle":"Section Mobile2","linkId":"b818b6ce-25d3-4f0b-8a0a-51e66c220059"},{"uid":"b6501cca-aa90-4b9c-8a67-f88fcb0c14a1","sectionTitle":"Section","linkId":"bc84bc5c-6d05-426c-8db2-d7058c71cffc"},{"uid":"16791f7c-29e4-48df-8253-280f89a01b4f","sectionTitle":"Section Mobile4","linkId":"4e35f318-0031-4128-9dc6-316204a09bf2"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"480d4d46-2135-48a3-8390-e57e848ccea2","linkId":"480d4d46-2135-48a3-8390-e57e848ccea2","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d74ca830-096e-471e-9a12-93ff761867fd","sectionTitle":"Login","linkId":"0cde1093-958f-447e-a33c-9d93bb202b25"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4a0993ec-2189-4422-b684-b79a91a03cd8","linkId":"4a0993ec-2189-4422-b684-b79a91a03cd8","name":"properties","folder":"Systemak Pages/","paths":{"en":"properties","default":"properties"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"8a0d0d12-4784-4c2e-9cc2-84e1fcd533ef","sectionTitle":"Section","linkId":"71d8e570-a6f3-4e8a-a551-32e545c92f9b"},{"uid":"09dd3d2c-67b6-4bc7-b47a-b92c8680fd38","sectionTitle":"Section Mobile1","linkId":"1172de22-c59d-486e-96c2-b454456cf83b"},{"uid":"94898b87-53d5-45d9-b0ee-b02d192bc6ce","sectionTitle":"Section","linkId":"346e66cd-636a-47d7-8585-16f1680b2ee2"},{"uid":"7d61c84f-3ca6-40fa-8b5e-843668a476d2","sectionTitle":"Section Mobile2","linkId":"214a145c-c8d0-4468-96ad-06cddf8e0280"},{"uid":"a3e68681-d382-46fb-95e6-2833d69efc00","sectionTitle":"Section","linkId":"5bbbc41c-5493-403f-8093-6d8a7b75de1a"},{"uid":"b1162cf5-5158-4d81-81c5-05f2cd1fb54f","sectionTitle":"SectionKanban","linkId":"5463e81f-893d-462b-96f4-b3dc2549bb56"},{"uid":"903bc387-bc45-4d22-bfe8-d6257978e0b4","sectionTitle":"Section Mobile3","linkId":"3e02a628-c40f-462e-8f7c-d7228a48dfb1"},{"uid":"47b0142e-9b9b-43af-87c7-0a2a0e2dd8ad","sectionTitle":"Section Mobile4","linkId":"c2b0a110-d9b3-40d5-b63c-7a74ac68b98b"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"14a0cc77-8714-4d6e-bfd0-2b38922e6c51","linkId":"14a0cc77-8714-4d6e-bfd0-2b38922e6c51","name":"emails","folder":"Systemak Pages/","paths":{"en":"emails","default":"emails"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"73ff43c6-ce07-4c89-8d37-39d028e99866","sectionTitle":"Section","linkId":"77c085e6-6e04-4d81-b8b3-d52c55d57285"},{"uid":"41dddf85-a7ae-4d00-8b61-bdc82fc1be43","sectionTitle":"Section","linkId":"11e9dc1a-8f6a-4755-80c8-7d8235aa4ea4"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"95e66356-c313-4bcb-9f91-d6140524e6f9","linkId":"95e66356-c313-4bcb-9f91-d6140524e6f9","name":"deals","folder":"Systemak Pages/","paths":{"en":"deals","default":"deals"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"463b543d-2b52-4aff-9c68-a9d740e74f82","sectionTitle":"Section","linkId":"a5a2e3a1-6580-47b8-8ea3-c2d9cf77e85a"},{"uid":"e1f4d7dd-c1a5-45c1-ae6f-b5209e136e3b","sectionTitle":"Section Mobile1","linkId":"6693b0cc-033e-4a59-8885-1dafdfd6277f"},{"uid":"7ab316c2-d02a-4464-a435-f7d6350f077e","sectionTitle":"Section","linkId":"79b1a2e7-83ea-484f-ab54-0a50e6e85d50"},{"uid":"b4256e3d-e48f-45a3-bbaf-4c79a628f5c3","sectionTitle":"Section Mobile2","linkId":"ee272fb0-3290-4d4e-8091-3a3450aee820"},{"uid":"65e3f2ba-75e1-4ec3-b701-96e3d6db862a","sectionTitle":"Section","linkId":"97962c28-49b1-49ea-98bc-6bf6c0a7b28d"},{"uid":"eca1a6b4-4b75-4869-b671-2ef080c788af","sectionTitle":"Section Mobile3","linkId":"6ee49bac-09f0-40c9-b08f-6655db5d9c6b"},{"uid":"aeb7d2f7-0904-4418-ab30-c41ca2342f41","sectionTitle":"Section Mobile4","linkId":"f2c1129e-45cc-4625-b386-d3b158fdc4c9"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c935e6c7-8b6a-4a3c-a3a8-1b2895ab024f","linkId":"c935e6c7-8b6a-4a3c-a3a8-1b2895ab024f","name":"Thank You","folder":"Signups/","paths":{"en":"thank-you","default":"thank-you"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"76028e4c-c93c-40fa-80f3-f05b5fc2f141","sectionTitle":"Header","linkId":"411d0bba-46b2-4fdf-8de3-16e2ac675ff1"},{"uid":"090241a5-170b-4e63-a19b-6fc78081da6f","sectionTitle":"Hero Banner","linkId":"d5985e61-5c9a-41df-91d7-719843602fae"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a2c05185-82ee-4ad2-9256-5f420ebc180e","linkId":"a2c05185-82ee-4ad2-9256-5f420ebc180e","name":"settings","folder":"Systemak Pages/","paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"4b3dec3a-1f1e-4725-b9b5-21f3a8d0e2d7","sectionTitle":"Section","linkId":"4ebdda9f-f0a5-4c24-8068-32be9e56608c"},{"uid":"92d84c38-31c6-4fa1-bf45-a7af1db83e72","sectionTitle":"Section","linkId":"3a6ef80e-09da-4a89-bcbc-fa1842540990"},{"uid":"9b2099f9-2c55-45a9-a472-6a7dea8bae9c","sectionTitle":"Section","linkId":"8c819d19-15da-4f88-8074-d8a5814d548c"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2354690e-89b3-48a2-a233-f10a3fae8f29","linkId":"2354690e-89b3-48a2-a233-f10a3fae8f29","name":"Signup","folder":"Signups/","paths":{"en":"signup","default":"signup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e439d58e-b996-4d58-80d2-05065a33014f","sectionTitle":"Header","linkId":"cb1b7c27-5542-4984-b178-01ba1a276b40"},{"uid":"c2a65ad4-40ab-493b-964c-804a0a4d8445","sectionTitle":"Hero Banner","linkId":"ba3b2b0a-e02f-49fe-865f-6974ef43cc33"},{"uid":"9584407d-380e-463f-9568-4a81bfb2c81f","sectionTitle":"CTA","linkId":"1baeaf0b-4800-4c5a-bdf0-060fcd58bcfe"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8ef2f4d6-8270-47ab-a693-cba732a7b4a1","linkId":"8ef2f4d6-8270-47ab-a693-cba732a7b4a1","name":"Privacy Policy","folder":"Systemak Pages/","paths":{"en":"privacy-policy","default":"privacy-policy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8c5202ce-972c-4de8-af34-6ee12e5eec5c","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"4fb52e48-a8d5-4d8b-b1c0-04793b0246f8","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"fcd09f75-427a-4f6b-a287-839f25ea9817","sectionTitle":"Section","linkId":"98591f66-d155-4179-aa30-7e85b9a8d8ab"},{"uid":"c9556489-dd66-4dda-b89e-4145a026f728","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"97e7b1ae-f88a-4697-849c-ee56ab49bb48","name":"JavaScript","namespace":"javascript"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"8bc1b5c9-29e4-4269-becb-a2e1a8de9127","name":"WeWeb Email","namespace":"wewebEmail"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 74;
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
