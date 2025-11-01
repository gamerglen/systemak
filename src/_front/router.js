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
window.wwg_designInfo = {"id":"78ca50c7-6bef-4d1f-a14d-3a21a88953d3","homePageId":"ce8c2737-f24d-4adf-8abd-750bbf9b9ade","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"e1a250be-770a-45e9-8f2b-856f56e0711d","linkId":"e1a250be-770a-45e9-8f2b-856f56e0711d","name":"tasks","folder":"Systemak Pages/","paths":{"en":"tasks","default":"tasks"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"f11855b2-438d-4833-9e52-37316b268891","sectionTitle":"Section","linkId":"ffea73e2-5359-46ae-9133-e02a1810ea86"},{"uid":"72447491-327c-437a-9c4a-6b27d2c74930","sectionTitle":"Section Mobile1","linkId":"03d43e01-8227-4ca4-b0f5-b7d810fb09cc"},{"uid":"99c38db3-0ca3-47f5-a948-733708ac883d","sectionTitle":"Section","linkId":"2ab4ddb8-9da5-42a9-b345-1fb1b93b5d50"},{"uid":"43ca4c81-59ae-4cab-aa24-15a525cd9929","sectionTitle":"Section Mobile2","linkId":"7a544b60-81ae-4fa0-bb5a-3fa7a5b94ed7"},{"uid":"d785beb1-5d3a-4f9c-87a1-16af1cb864ce","sectionTitle":"Section","linkId":"6e36fab6-208f-463a-942f-e0b0ad9326d6"},{"uid":"afb1dfe1-2383-4135-9fcf-2f35d0f16dba","sectionTitle":"Section Mobile3","linkId":"8b66754d-8db5-4fd7-bb1d-8046ff1f45e8"},{"uid":"0a711c1f-b2ae-413a-8370-93887ea5d73b","sectionTitle":"Section Mobile4","linkId":"b62898cc-70d2-4b8e-b76d-f079f514a504"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"be5d51d3-ea2f-42a6-abe9-a5a00407bcfa","linkId":"be5d51d3-ea2f-42a6-abe9-a5a00407bcfa","name":"calls","folder":"Systemak Pages/","paths":{"en":"calls","default":"calls"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"a11ff27b-345e-4bd3-88f3-d20ebfcd51ce","sectionTitle":"Section","linkId":"1281866a-933e-44f7-8452-27943afb81cc"},{"uid":"aebb4e49-f302-430a-adc7-fb71c676b440","sectionTitle":"Section Mobile1","linkId":"077d3621-47f4-40ad-a7b4-bde8c8687d62"},{"uid":"2d246e54-5773-43bd-83db-1827e4eda8a9","sectionTitle":"Section","linkId":"b9919d7c-8b7e-46f7-8d9a-2b309866d02f"},{"uid":"4f788a32-0d74-40f4-b8f6-558262c443ac","sectionTitle":"Section Mobile2","linkId":"66ee195b-5416-49fb-8702-12749cc0f9c2"},{"uid":"15142b96-ad07-4eb0-984e-125e8ad5c913","sectionTitle":"Section","linkId":"e360f146-d593-4af7-8c9f-d44b27a6c3cf"},{"uid":"7fc5d937-799b-4d58-a8dc-c42e32bcca79","sectionTitle":"Section Mobile3","linkId":"f3e9812f-ff3a-472b-8812-8cbe8161dbea"},{"uid":"31ae58c6-264b-4d2b-a2ea-0046e2f595d4","sectionTitle":"Section Mobile4","linkId":"0b85a647-0e30-47d2-a2de-12e924941a06"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"af0446a3-91ef-4204-8039-9db7e82bf6b8","linkId":"af0446a3-91ef-4204-8039-9db7e82bf6b8","name":"meetings","folder":"Systemak Pages/","paths":{"en":"meetings","default":"meetings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"f1b48b37-bf30-4e66-846d-631de3d81e29","sectionTitle":"Section","linkId":"034a0578-6e21-458c-b0dc-3deef1bd8ac8"},{"uid":"5fc408a6-8bf9-4c15-9b40-148e708a0593","sectionTitle":"Section Mobile1","linkId":"a1828e80-c28a-4f6d-bab7-154b6be5e058"},{"uid":"2897ffec-9e8a-40c2-bbb2-e149354c8af5","sectionTitle":"Section","linkId":"5d30fb6e-b076-465c-8f92-8523da3e4712"},{"uid":"2427b689-325e-4e2c-9ebe-abf94ca6ac02","sectionTitle":"Section Mobile2","linkId":"09f5ae64-da0b-4aa2-a735-2d133545c6b5"},{"uid":"9bd90d35-be9f-4042-b507-c0d7ac0a96b2","sectionTitle":"Section","linkId":"c09eec9b-f18d-42a4-bc21-b655a3f45506"},{"uid":"06a1f0fa-71ac-4d18-b4f3-9f768efc3176","sectionTitle":"Section Mobile3","linkId":"cbd20ccd-e2cc-4858-95ea-092c939c6064"},{"uid":"aa4f7325-3c5f-4f5a-ac9f-b6b79899bbb8","sectionTitle":"Section Mobile4","linkId":"01b3a778-f407-484b-b8e7-6bedb53ba205"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"303a49fa-63e9-4ce2-af93-cdcdf2597a30","linkId":"303a49fa-63e9-4ce2-af93-cdcdf2597a30","name":"Signup Offer","folder":"Signups/","paths":{"en":"signup-offer","default":"signup-offer"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"17800657-8a19-4ed6-bdfe-3a78a2d6c16b","sectionTitle":"Header","linkId":"7f9d25e7-829e-43ee-ac0b-be10fca31d2d"},{"uid":"29a2b194-f2f2-4733-898b-a3e6beafc0c9","sectionTitle":"Hero Banner","linkId":"7a66d6b5-270d-4aba-a696-47573735212a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"854950e8-0526-4305-9e27-5f84bfe7a289","linkId":"854950e8-0526-4305-9e27-5f84bfe7a289","name":"admin login","folder":"Admin/","paths":{"en":"admin-login","default":"admin-login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2343edce-7b25-4008-9956-a9017f677565","sectionTitle":"Login","linkId":"b14c74e4-75ef-4a9a-9874-d14ebd12fc3c"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6078bf34-9ec3-40a1-9c50-3b0ebabcab58","linkId":"6078bf34-9ec3-40a1-9c50-3b0ebabcab58","name":"Signup Trial","folder":"Signups/","paths":{"en":"signup-trial","default":"signup-trial"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b005dd07-126b-46c3-a990-276d755bc6c2","sectionTitle":"Header","linkId":"22ea3127-aa63-4035-9900-c41c1056efa3"},{"uid":"7f448224-e948-44b9-bfb3-f0ff0338dae9","sectionTitle":"Hero Banner","linkId":"ca8cd4d8-cac4-48c7-a227-9699fcdd3e2f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ca8b382f-d459-4725-8d7a-aeda6a81c3c6","linkId":"ca8b382f-d459-4725-8d7a-aeda6a81c3c6","name":"Control Panel","folder":"Admin/","paths":{"en":"control-panel","default":"control-panel"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"53f66ad5-9fa1-4231-8db3-d74bea6f1c59","sectionTitle":"Admin Navigation","linkId":"5430177c-6637-4a87-b35e-6a5c715c1573"},{"uid":"403e2ed6-c2a1-4249-a9ef-8875fabef273","sectionTitle":"Admin Menu","linkId":"f8e846a3-343d-4f4a-b31e-a62222217780"},{"uid":"01f8795f-c076-4184-80e3-89e069ea9f60","sectionTitle":"Admin Section","linkId":"378a3f66-bc65-4881-8e44-317a3a8a71a5"}],"pageUserGroups":[{},{"userGroup":{"id":"c80a03df-5d08-464c-b408-c7035e716058","roles":[{"value":"a9bfeb39-18c0-4cc5-95ab-1f50964c1479"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e5974155-b19f-4fc9-a043-1f05b8ff88b1","linkId":"e5974155-b19f-4fc9-a043-1f05b8ff88b1","name":"System Users","folder":"Admin/","paths":{"en":"system-users","default":"system-users"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"53f66ad5-9fa1-4231-8db3-d74bea6f1c59","sectionTitle":"Admin Navigation","linkId":"5430177c-6637-4a87-b35e-6a5c715c1573"},{"uid":"403e2ed6-c2a1-4249-a9ef-8875fabef273","sectionTitle":"Admin Menu","linkId":"f8e846a3-343d-4f4a-b31e-a62222217780"},{"uid":"76503742-a640-4495-8fc2-eab010fdf146","sectionTitle":"Admin Section","linkId":"494c0f4e-8d4a-45d0-84cf-35a63b042da1"},{"uid":"d9292dd2-751e-458a-b8c9-33923c9f769c","sectionTitle":"Section","linkId":"57a2d805-53f6-4f57-bc9c-8b31df849eb9"},{"uid":"6df4417f-5d3d-45ca-8f54-4c898cd9752d","sectionTitle":"Section Mobile1","linkId":"6748d4fa-d24c-4412-9efb-3a949047828c"},{"uid":"8fa501d1-4c28-4764-8861-d7cfd1c7dbe4","sectionTitle":"Section","linkId":"5b309265-7225-4427-be36-6b3a6bcbea44"},{"uid":"c6b54941-de5e-4a84-9c1a-66281952fedc","sectionTitle":"Section Mobile2","linkId":"2d6846e3-cca6-4874-835f-727a7dd1b986"},{"uid":"5e785a53-7f7d-41e8-a5b7-e472cf156390","sectionTitle":"Section Mobile3","linkId":"a1e9a817-01ed-42df-b048-bcc4719073cc"},{"uid":"15ad81a6-c0cb-4e42-841f-b6ce24a6e8c3","sectionTitle":"Section Mobile4","linkId":"626d664f-ff09-4e8d-9db6-f12716bbfd1e"}],"pageUserGroups":[{},{"userGroup":{"id":"c80a03df-5d08-464c-b408-c7035e716058","roles":[{"value":"a9bfeb39-18c0-4cc5-95ab-1f50964c1479"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"02335c0e-a72d-4c3c-b688-b2783d74fc9b","linkId":"02335c0e-a72d-4c3c-b688-b2783d74fc9b","name":"Dashboard","folder":"Systemak Pages/","paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"7f688202-71e2-437b-91ee-763e93bdfcc9","sectionTitle":"Section","linkId":"def37571-6eb0-4a55-8cf0-3880038c62d2"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"ca2cb358-fbc6-49ec-a668-66fc31922903","sectionTitle":"Section","linkId":"a047189d-7ad9-470e-8577-ac985c773149"},{"uid":"46476300-067c-4f76-b096-87693cbbbfa4","sectionTitle":"Section","linkId":"41882e64-f1a8-4052-a954-9c187d23e303"},{"uid":"b723604c-a870-4f66-b3ee-19d7cdc97002","sectionTitle":"Section","linkId":"919955c8-5cb1-479e-8ed7-897b450f85c7"},{"uid":"d92cdaff-2465-462d-8009-55bc45a495cd","sectionTitle":"Mobile Section","linkId":"ff5b9fbc-c799-4f20-b7aa-75ffede54113"},{"uid":"d436b1aa-61e0-4134-83bd-7cbaea4e9304","sectionTitle":"Section","linkId":"d4e370b1-7d21-4af6-b6e6-2031dd967aca"},{"uid":"0646019d-77bf-444c-bbc5-e6a842b2e48b","sectionTitle":"Mobile Section2","linkId":"abe26043-0a52-4df1-9a38-c02f10f1c699"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ec0355ef-f81f-4f99-8e32-42116b75c232","linkId":"ec0355ef-f81f-4f99-8e32-42116b75c232","name":"notifications","folder":"Systemak Pages/","paths":{"en":"notifications","default":"notifications"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"ce244289-5536-409e-b36d-99afabbd5576","sectionTitle":"Section","linkId":"c361202e-1ead-4aed-8ae4-05617ca7d9b7"},{"uid":"89310781-346b-4b58-84f2-54b3906f2ef4","sectionTitle":"Section","linkId":"5bd55b5a-3a9f-47f3-a5a9-ad53b3c71d63"},{"uid":"93f0fa8f-ac31-4594-a421-cce0a8c546bd","sectionTitle":"Section","linkId":"2f084101-3ca8-42b1-bf30-80f7e9b982ad"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"29340715-41ec-4764-a427-6bbada6af77a","linkId":"29340715-41ec-4764-a427-6bbada6af77a","name":"leads","folder":"Systemak Pages/","paths":{"en":"leads","default":"leads"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"04fdea81-1fc2-4b02-917e-82fdd5d074f4","sectionTitle":"Section","linkId":"ad845fe9-a8cf-47d4-accf-0d85574095fa"},{"uid":"0647c67b-57bc-4c9b-a981-48cb77531e53","sectionTitle":"Section Mobile1","linkId":"cf83bc27-6676-46de-9239-15b08e912783"},{"uid":"d0565590-25cb-425c-8608-908cde771827","sectionTitle":"Section","linkId":"9960d68b-bbbb-49d8-a323-4acc38f7205b"},{"uid":"11c2ea6f-66f7-4107-8984-6decb4aae0fe","sectionTitle":"Section Mobile2","linkId":"16f0cdf0-3278-4e92-9244-616cd2488f29"},{"uid":"8c608c02-ed00-4e24-88e3-a08ea8860918","sectionTitle":"Section","linkId":"bb20716f-f322-4982-966a-7ed8d09ce4ef"},{"uid":"699d3f2f-28e6-43a3-8042-0cd40ca98382","sectionTitle":"Section Mobile3","linkId":"6383a19d-cd2a-4c8c-8f06-b80dea7ef406"},{"uid":"77f1738a-8209-4349-95b2-5e181150e29c","sectionTitle":"Section Mobile4","linkId":"aa5c36d6-3769-4a94-a207-3bec6ccc7f3d"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"509a3805-3a38-45d1-be1a-6ed087306ec4","linkId":"509a3805-3a38-45d1-be1a-6ed087306ec4","name":"calendar","folder":"Systemak Pages/","paths":{"en":"calendar","default":"calendar"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"1707f591-76ae-4021-82db-a0d4024e5d29","sectionTitle":"Section","linkId":"41d396cb-92b8-472e-935a-9f74d1a3bdf6"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0dc5cf61-fe04-4059-89fb-4960e55c5aa5","linkId":"0dc5cf61-fe04-4059-89fb-4960e55c5aa5","name":"clients","folder":"Systemak Pages/","paths":{"en":"clients","default":"clients"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"6bca94e8-07d0-40e0-8369-b16ce9ae9997","sectionTitle":"Section","linkId":"f7984efa-33b5-487f-acc3-06ab78999b6a"},{"uid":"ebb8b153-d6ff-4278-9a1c-75f80b134b22","sectionTitle":"Section Mobile1","linkId":"2f471586-baaf-4bcb-b77b-2771ff358f1c"},{"uid":"cb5854d6-3a47-47e7-9cfb-09ee79ae704c","sectionTitle":"Section","linkId":"e59d66ff-2f16-46d0-9848-579fffa0c87f"},{"uid":"394dce0c-bc98-434d-8f2b-e16d8563ab93","sectionTitle":"Section Mobile2","linkId":"b818b6ce-25d3-4f0b-8a0a-51e66c220059"},{"uid":"da8992f9-da6c-4bbf-b983-1922e3715222","sectionTitle":"Section","linkId":"bc84bc5c-6d05-426c-8db2-d7058c71cffc"},{"uid":"a7128f8c-2eab-4478-95d9-c6930266cd86","sectionTitle":"Section Mobile4","linkId":"4e35f318-0031-4128-9dc6-316204a09bf2"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ce8c2737-f24d-4adf-8abd-750bbf9b9ade","linkId":"ce8c2737-f24d-4adf-8abd-750bbf9b9ade","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"dfd2bb5e-db4a-4a9c-9a78-237e74e89831","sectionTitle":"Login","linkId":"0cde1093-958f-447e-a33c-9d93bb202b25"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7f134a94-3d6b-47fa-9649-d963c5e82683","linkId":"7f134a94-3d6b-47fa-9649-d963c5e82683","name":"properties","folder":"Systemak Pages/","paths":{"en":"properties","default":"properties"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"b763965a-3c55-405f-8705-600a9219f571","sectionTitle":"Section","linkId":"71d8e570-a6f3-4e8a-a551-32e545c92f9b"},{"uid":"acc0daaa-e062-4806-8713-93b4f23176be","sectionTitle":"Section Mobile1","linkId":"1172de22-c59d-486e-96c2-b454456cf83b"},{"uid":"36001c46-757b-47dc-a466-35227bd362e7","sectionTitle":"Section","linkId":"346e66cd-636a-47d7-8585-16f1680b2ee2"},{"uid":"5d0e2ce8-2de8-4e79-abc7-3c911110fe18","sectionTitle":"Section Mobile2","linkId":"214a145c-c8d0-4468-96ad-06cddf8e0280"},{"uid":"b3dc7537-2ff6-40a5-bd51-36e017eb70bd","sectionTitle":"Section","linkId":"5bbbc41c-5493-403f-8093-6d8a7b75de1a"},{"uid":"9e15c6ae-4671-409a-bd3c-5a828f629632","sectionTitle":"SectionKanban","linkId":"5463e81f-893d-462b-96f4-b3dc2549bb56"},{"uid":"e9197b07-0065-465c-aa75-b92622701edc","sectionTitle":"Section Mobile3","linkId":"3e02a628-c40f-462e-8f7c-d7228a48dfb1"},{"uid":"3b7deb60-9f74-4e62-a13c-bbcc0d092396","sectionTitle":"Section Mobile4","linkId":"c2b0a110-d9b3-40d5-b63c-7a74ac68b98b"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e2f356db-041b-4c74-9b0e-fae4621825ac","linkId":"e2f356db-041b-4c74-9b0e-fae4621825ac","name":"emails","folder":"Systemak Pages/","paths":{"en":"emails","default":"emails"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"1af1a8cb-21da-48d3-8d7b-d78c4631c2cd","sectionTitle":"Section","linkId":"77c085e6-6e04-4d81-b8b3-d52c55d57285"},{"uid":"7087d1d9-f27d-4f3d-9704-976eed1aa58e","sectionTitle":"Section","linkId":"11e9dc1a-8f6a-4755-80c8-7d8235aa4ea4"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ef51115e-cac9-445a-aaa3-1b00e1fb12d3","linkId":"ef51115e-cac9-445a-aaa3-1b00e1fb12d3","name":"deals","folder":"Systemak Pages/","paths":{"en":"deals","default":"deals"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"4319aa3c-3e12-4077-9a85-2ff4ceefaf08","sectionTitle":"Section","linkId":"a5a2e3a1-6580-47b8-8ea3-c2d9cf77e85a"},{"uid":"4b0a712e-63af-421f-87f3-c96bab78866e","sectionTitle":"Section Mobile1","linkId":"6693b0cc-033e-4a59-8885-1dafdfd6277f"},{"uid":"94631f32-c3aa-455c-8791-fc1889a0c691","sectionTitle":"Section","linkId":"79b1a2e7-83ea-484f-ab54-0a50e6e85d50"},{"uid":"3f91153f-8720-4f79-8ef2-af00bc419287","sectionTitle":"Section Mobile2","linkId":"ee272fb0-3290-4d4e-8091-3a3450aee820"},{"uid":"ddcdc3b4-ae96-463a-8635-d5717b59b6dd","sectionTitle":"Section","linkId":"97962c28-49b1-49ea-98bc-6bf6c0a7b28d"},{"uid":"267dde58-6e2b-44a3-9e5b-3bef894e66a5","sectionTitle":"Section Mobile3","linkId":"6ee49bac-09f0-40c9-b08f-6655db5d9c6b"},{"uid":"36a63303-be7a-4de0-9a16-6fe07c36ebee","sectionTitle":"Section Mobile4","linkId":"f2c1129e-45cc-4625-b386-d3b158fdc4c9"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b6d83d16-bb3f-4faa-9c20-fd4ce60a82ee","linkId":"b6d83d16-bb3f-4faa-9c20-fd4ce60a82ee","name":"Thank You","folder":"Signups/","paths":{"en":"thank-you","default":"thank-you"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4b4a62c0-694c-4613-b8c6-1a228ecd3c0f","sectionTitle":"Header","linkId":"411d0bba-46b2-4fdf-8de3-16e2ac675ff1"},{"uid":"1f84ff0c-0b16-4e0d-b2be-c99e18a596db","sectionTitle":"Hero Banner","linkId":"d5985e61-5c9a-41df-91d7-719843602fae"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"01a3f61c-5a30-4818-815e-cffaca5cf52b","linkId":"01a3f61c-5a30-4818-815e-cffaca5cf52b","name":"settings","folder":"Systemak Pages/","paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"463051d1-6089-43a7-bccf-347a0dc96a3d","sectionTitle":"Section","linkId":"4ebdda9f-f0a5-4c24-8068-32be9e56608c"},{"uid":"2be7b9d1-fabc-425b-acd4-a528fc1ee2a0","sectionTitle":"Section","linkId":"3a6ef80e-09da-4a89-bcbc-fa1842540990"},{"uid":"8679e90b-772c-47a7-b5cb-47c5fb4b5ef4","sectionTitle":"Section","linkId":"8c819d19-15da-4f88-8074-d8a5814d548c"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bdd94942-a276-4483-b494-0c55dfd10ff9","linkId":"bdd94942-a276-4483-b494-0c55dfd10ff9","name":"Signup","folder":"Signups/","paths":{"en":"signup","default":"signup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d4d7422a-5aea-4512-b42e-64b9b1563b3b","sectionTitle":"Header","linkId":"cb1b7c27-5542-4984-b178-01ba1a276b40"},{"uid":"234d4f0c-c050-4e3f-9959-293ccdd1b1ed","sectionTitle":"Hero Banner","linkId":"ba3b2b0a-e02f-49fe-865f-6974ef43cc33"},{"uid":"07b740e8-4a24-4256-8ef4-62f4e8c0fa50","sectionTitle":"CTA","linkId":"1baeaf0b-4800-4c5a-bdf0-060fcd58bcfe"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9d5e67d0-07ed-4410-97ec-44e08a2831c7","linkId":"9d5e67d0-07ed-4410-97ec-44e08a2831c7","name":"Privacy Policy","folder":"Systemak Pages/","paths":{"en":"privacy-policy","default":"privacy-policy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"8014d848-dacd-4c9e-996d-01268ef4f52e","sectionTitle":"Section","linkId":"98591f66-d155-4179-aa30-7e85b9a8d8ab"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c7fd9e3f-57e4-4b2f-8a0f-6303dea7494d","linkId":"c7fd9e3f-57e4-4b2f-8a0f-6303dea7494d","name":"Team Members","folder":"Systemak Pages/","paths":{"en":"team-members","default":"team-members"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b96ffb3-edb4-473a-9cb1-4420a5cf19af","sectionTitle":"Top Nav","linkId":"93ef3b69-c844-4c63-a137-23924138147f"},{"uid":"03d7c7eb-655f-46a4-8e8d-065ed98c642e","sectionTitle":"Sidemenu","linkId":"5586c10a-d2bf-4395-b51f-e40fea011ac8"},{"uid":"17ef5373-b1a5-413d-a142-27673c52a407","sectionTitle":"Section","linkId":"6557bbc6-a5de-4845-a868-49616a745f37"},{"uid":"9e3bc6f8-0895-4b4a-9699-3a573250836e","sectionTitle":"Section Mobile1","linkId":"6c97a8e6-a38d-4d6f-b537-4ec96da6dddc"},{"uid":"72254f98-0bfb-474b-b5d6-1f266c25ab14","sectionTitle":"Section","linkId":"2d0f0cfb-a861-4345-a80f-29d02370a6dc"},{"uid":"b60b74d7-0cd2-45a8-93df-09a9b29154d6","sectionTitle":"Section Mobile2","linkId":"0cf69a06-d57b-4fd5-a945-0850cd577266"},{"uid":"6d759530-83fe-42e6-aff5-cf2a2120e725","sectionTitle":"Section","linkId":"9d589208-7821-4f08-8016-ce9a837defc7"},{"uid":"a56719c2-683b-4268-8e65-5928df82e582","sectionTitle":"Section Mobile3","linkId":"d2871b66-0063-493d-808f-629f4f0c4545"},{"uid":"a4d3fb2d-9e83-4594-9612-182924248e40","sectionTitle":"Section Mobile4","linkId":"1d771f55-d174-4ab8-b368-29014ad08951"},{"uid":"abe4daca-079c-4145-8b36-5c045d8ecddc","sectionTitle":"Alert","linkId":"1d736625-f4c1-4046-ac02-066965c9d263"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"97e7b1ae-f88a-4697-849c-ee56ab49bb48","name":"JavaScript","namespace":"javascript"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"8bc1b5c9-29e4-4269-becb-a2e1a8de9127","name":"WeWeb Email","namespace":"wewebEmail"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 2;
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
