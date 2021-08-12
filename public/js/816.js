"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[816],{4041:(e,t,a)=>{a.d(t,{H:()=>i});var i={props:{inputValue:{default:!1,type:String|Number|Boolean},inputValueFalse:{default:!1,type:String|Number|Boolean},inputValueTrue:{default:!0,type:String|Number|Boolean}},data:function(){return{editableValue:!1}},computed:{isChecked:function(){return this.editableValue===this.inputValueTrue}},mounted:function(){this.editableValue=this.inputValue,this.autofocus()},methods:{onInput:function(){this.$emit("input",this.isChecked?this.inputValueTrue:this.inputValueFalse),this.errorHideOnInput&&(this.hideError=!0)}}}},6584:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(6486),l=a.n(i);const r={name:"MetadataEditor",components:{InputGroup:a(3764).Z},model:{prop:"metadata"},props:{metadata:{required:!0,type:null|Object}},data:function(){return{editableMetadata:{canonical:"",description:"",title:"",og_description:"",og_image:"",og_title:"",og_type:"",og_url:""},tab_key_meta:"meta",tab_key_open_graph:"og",tab_selected:"meta"}},created:function(){try{this.metadata&&Object.keys(this.metadata).length&&(this.editableMetadata=l().cloneDeep(this.metadata))}catch(e){return}},methods:{getTabClass:function(e){var t="border-b-2 border-white pb-1 text-lg focus:outline-none ";return this.tab_selected===e?t+="text-theme-primary focus:border-theme-primary hover:border-theme-primary":t+="text-theme-base-subtle-contrast focus:border-theme-base-subtle-contrast hover:border-theme-base-subtle-contrast",t},onEditableMetadataUpdate:l().debounce((function(){this.$emit("input",this.editableMetadata)}),100),onOgImageFileManagerFileSelected:function(e){try{this.editableMetadata.og_image=e.url}catch(e){this.$errorToast(e)}},openOgImageFileManagerModal:function(){this.$store.commit("openFileManagerModel",this.onOgImageFileManagerFileSelected)},selectTab:function(e){this.tab_selected=e}},watch:{editableMetadata:{deep:!0,handler:"onEditableMetadataUpdate"}}};const n=(0,a(1900).Z)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"flex flex-row space-x-4"},[a("button",{class:e.getTabClass(e.tab_key_meta),attrs:{type:"button"},on:{click:function(t){return e.selectTab(e.tab_key_meta)}}},[e._v("\n            Metadata\n        ")]),e._v(" "),a("button",{class:e.getTabClass(e.tab_key_open_graph),attrs:{type:"button"},on:{click:function(t){return e.selectTab(e.tab_key_open_graph)}}},[e._v("\n            Open Graph Data\n        ")])]),e._v(" "),a("transition",{attrs:{name:"slide-left",mode:"out-in"}},[e.tab_selected===e.tab_key_meta?a("div",{key:"tab_key_meta"},[a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("metadata.title"),"input-id":"metadata_title","input-name":"metadata_title","input-type":"text","label-text":"Title"},on:{errorHidden:function(t){return e.clearPageErrorMessage("metadata.title")}},model:{value:e.editableMetadata.title,callback:function(t){e.$set(e.editableMetadata,"title",t)},expression:"editableMetadata.title"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("metadata.description"),"input-id":"metadata_description","input-name":"metadata_description","input-type":"text","label-text":"Meta Description"},on:{errorHidden:function(t){return e.clearPageErrorMessage("metadata.description")}},model:{value:e.editableMetadata.description,callback:function(t){e.$set(e.editableMetadata,"description",t)},expression:"editableMetadata.description"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("metadata.canonical"),"input-id":"metadata_canonical","input-name":"metadata_canonical","input-type":"text","label-text":"Canonical"},on:{errorHidden:function(t){return e.clearPageErrorMessage("metadata.canonical")}},model:{value:e.editableMetadata.canonical,callback:function(t){e.$set(e.editableMetadata,"canonical",t)},expression:"editableMetadata.canonical"}})],1):e._e(),e._v(" "),e.tab_selected===e.tab_key_open_graph?a("div",{key:"tab_key_open_graph"},[a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("metadata.og_title"),"input-id":"metadata_og_title","input-name":"metadata_og_title","input-type":"text","label-text":"OG Title"},on:{errorHidden:function(t){return e.clearPageErrorMessage("metadata.og_title")}},model:{value:e.editableMetadata.og_title,callback:function(t){e.$set(e.editableMetadata,"og_title",t)},expression:"editableMetadata.og_title"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("metadata.og_description"),"input-id":"metadata_og_description","input-name":"metadata_og_description","input-type":"text","label-text":"OG Description"},on:{errorHidden:function(t){return e.clearPageErrorMessage("metadata.og_description")}},model:{value:e.editableMetadata.og_description,callback:function(t){e.$set(e.editableMetadata,"og_description",t)},expression:"editableMetadata.og_description"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("metadata.og_type"),"input-id":"metadata_og_type","input-name":"metadata_og_type","input-type":"text","label-text":"OG Type"},on:{errorHidden:function(t){return e.clearPageErrorMessage("metadata.og_type")}},model:{value:e.editableMetadata.og_type,callback:function(t){e.$set(e.editableMetadata,"og_type",t)},expression:"editableMetadata.og_type"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("metadata.og_url"),"input-id":"metadata_og_url","input-name":"metadata_og_url","input-type":"text","label-text":"OG URL"},on:{errorHidden:function(t){return e.clearPageErrorMessage("metadata.og_url")}},model:{value:e.editableMetadata.og_url,callback:function(t){e.$set(e.editableMetadata,"og_url",t)},expression:"editableMetadata.og_url"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("metadata.og_image"),"input-class":"border border-theme-base-subtle font-medium px-3 py-2 rounded-l w-full focus:border-theme-primary focus:outline-none focus:ring-0","input-id":"metadata_og_image","input-name":"metadata_og_image","input-type":"text","input-wrapper-class":"flex flex-row items-center","label-text":"OG Image"},on:{errorHidden:function(t){return e.clearPageErrorMessage("metadata.og_image")}},scopedSlots:e._u([{key:"inputAppend",fn:function(){return[a("button",{staticClass:"border border-l-0 border-theme-primary-subtle button button-primary-subtle rounded-l-none",attrs:{type:"button"},on:{click:e.openOgImageFileManagerModal}},[e._v("\n                        Browse...\n                    ")])]},proxy:!0}],null,!1,343214399),model:{value:e.editableMetadata.og_image,callback:function(t){e.$set(e.editableMetadata,"og_image",t)},expression:"editableMetadata.og_image"}})],1):e._e()])],1)}),[],!1,null,null,null).exports},1061:(e,t,a)=>{a.d(t,{Z:()=>f});var i=a(6486),l=a.n(i),r=a(1304),n=a.n(r),s=a(952),o=a(1147);const u={name:"DateTimePickerGroup",mixins:[s.S],components:{FormFieldError:o.Z},props:{inputClass:{default:"",type:String},inputFormat:{default:"DD/MM/YYYY HH:mm",type:String},inputPlaceholder:{default:"Please select a date",type:String},inputTimeTitleFormat:{default:"DD/MM/YYYY HH:mm",type:String},inputTitleFormat:{default:"DD/MM/YYYY HH:mm",type:String},inputType:{default:"datetime",type:String},inputValueType:{default:"YYYY-MM-DD HH:mm",type:String}},data:function(){return{editableInput:"",isInitialised:!1}},mounted:function(){var e=this;this.editableInput=this.inputValue,this.$nextTick((function(){e.isInitialised=!0}))},methods:{onInput:function(){this.isInitialised&&(this.$emit("input",this.editableInput),this.errorHideOnInput&&(this.hideError=!0))},onInputValueChange:function(){this.inputValue!==this.editableInput&&(this.editableInput=this.inputValue)}},watch:{editableInput:{handler:"onInput"},inputValue:{handler:"onInputValueChange"}}};var d=a(1900);const p=(0,d.Z)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col"},[a("label",{class:e.formattedLabelClass,attrs:{for:e.inputId}},[e._t("default",(function(){return[a("span",{staticClass:"flex flex-row items-baseline"},[a("span",[e._v(e._s(e.labelText))]),e._v(" "),e.inputRequired?a("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])]}))],2),e._v(" "),a("date-picker",{class:e.formattedInputClass,attrs:{id:e.inputId,disabled:e.inputDisabled,format:e.inputFormat,placeholder:e.inputPlaceholder,required:e.inputRequired,"time-title-format":e.inputTimeTitleFormat,"title-format":e.inputTitleFormat,type:e.inputType,"value-type":e.inputValueType},model:{value:e.editableInput,callback:function(t){e.editableInput=t},expression:"editableInput"}}),e._v(" "),a("form-field-error",{attrs:{"error-class":e.errorClass,"error-message":e.errorMessage,"is-error":e.isError}})],1)}),[],!1,null,null,null).exports;var c=a(1274),m=a(3764),g=axios.CancelToken,h=g.source();const b={name:"UrlEditor",components:{DateTimePickerGroup:p,InlineCheckboxGroup:c.Z,InputGroup:m.Z},model:{prop:"urlData"},props:{computedUrl:{default:"",type:String},parentUrl:{default:null,type:null|String},urlData:{required:!0,type:null|Object}},data:function(){return{autoUpdateUrl:!0,editableUrlData:{expired_at:null,is_enabled:!1,published_at:null,url_main:""},isUrlChecked:!1,isUrlCheckLoading:!1,isUrlAvailable:!1,urlInput:""}},computed:{urlFull:function(){var e="";return this.parentUrl&&this.parentUrl.length&&(e+=this.parentUrl),(e+=this.urlInputSlugified).split("//").join("/")},urlInputSlugified:function(){if(!this.urlInput)return"/";var e=this.urlInput;return e.trim(),e.length?(0!==(e=n()(e,{lower:!0})).indexOf("/")&&(e="/"+e),e):"/"}},created:function(){try{var e;if(this.urlData&&Object.keys(this.urlData).length)this.editableUrlData=l().cloneDeep(this.urlData),this.urlInput=null!==(e=this.editableUrlData.url_main)&&void 0!==e?e:"";this.urlInput&&""!==this.urlInput&&(this.autoUpdateUrl=!1)}catch(e){return}},methods:{cancelUrlCheck:function(){this.isUrlCheckLoading&&(h.cancel("URL check cancelled"),h=g.source())},checkUrlIsAvailable:l().debounce((function(){var e=this;if(this.isUrlChecked=!1,this.cancelUrlCheck(),this.isUrlChecked=!1,this.isUrlAvailable=!1,this.urlInput.length){this.isUrlCheckLoading=!0;var t={url:this.urlFull,url_id:this.urlData.id?this.urlData.id:null};axios.get(this.$route("admin.api.cms.urls.available"),{params:t,cancelToken:h.token}).then((function(t){e.isUrlCheckLoading=!1,e.isUrlChecked=!0,e.isUrlAvailable=t.data})).catch((function(t){axios.isCancel(t)||(e.isUrlCheckLoading=!1,e.$errorToast("Failed to check URL availability"))}))}}),500),onComputedUrlUpdate:function(){this.autoUpdateUrl&&this.updateUrl(this.computedUrl)},onEditableUrlUpdate:l().debounce((function(){this.$emit("input",this.editableUrlData)}),100),onIsUrlAvailableUpdate:function(){this.$emit("isAvailable",this.isUrlAvailable)},onUrlInputInput:function(){this.autoUpdateUrl=!1,this.isUrlChecked=!1},onUrlInputUpdate:l().debounce((function(){this.urlInput.length&&this.updateUrl(this.urlInput)}),100),updateUrl:function(e){var t=e,a="/"===t.charAt(0);t=n()(t),a&&(t="/"+t),this.urlInput!==t&&(this.urlInput=t,this.isUrlChecked=!1),this.$set(this.editableUrlData,"url_main",t),this.checkUrlIsAvailable()}},watch:{computedUrl:{handler:"onComputedUrlUpdate"},editableUrlData:{deep:!0,handler:"onEditableUrlUpdate"},isUrlAvailable:{handler:"onIsUrlAvailableUpdate"},urlFull:{handler:"checkUrlIsAvailable"},urlInput:{handler:"onUrlInputUpdate"}}};const f=(0,d.Z)(b,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input-group",{attrs:{"error-message":e.getPageErrorMessage("url.url_main"),"input-id":"url_input","input-name":"url_input","input-required":!0,"input-type":"text","label-text":"URL"},on:{errorHidden:function(t){return e.clearPageErrorMessage("url.url_main")},input:e.onUrlInputInput},model:{value:e.urlInput,callback:function(t){e.urlInput=t},expression:"urlInput"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("url.url_full"),"input-disabled":!0,"input-id":"url_full","input-name":"url_full","input-type":"text","label-text":"Formatted URL"},on:{errorHidden:function(t){return e.clearPageErrorMessage("url.url_full")}},model:{value:e.urlFull,callback:function(t){e.urlFull=t},expression:"urlFull"}},[a("span",{staticClass:"flex flex-row items-center"},[a("span",{staticClass:"flex flex-row items-baseline"},[e._v("\n                Formatted URL\n                "),a("sup",{staticClass:"text-theme-danger-contrast"},[e._v("*")])]),e._v(" "),e.isUrlCheckLoading?a("icon-loader-circle",{staticClass:"animate-spin-slow h-4 ml-3 text-theme-base-subtle-contrast w-4"}):e.isUrlChecked&&this.urlInput.length?a("span",{staticClass:"flex flex-row font-normal items-center ml-3",class:{"text-theme-success-contrast":e.isUrlAvailable,"text-theme-danger-contrast":!e.isUrlAvailable}},[e.isUrlAvailable?[a("icon-check",{staticClass:"h-4 mr-1 w-4"}),e._v(" "),a("span",[e._v("URL is available")])]:e.isUrlAvailable?e._e():[a("icon-x",{staticClass:"h-4 mr-1 w-4"}),e._v(" "),a("span",[e._v("URL is unavailable")])]],2):e._e()],1)]),e._v(" "),a("div",{staticClass:"bg-theme-base-subtle h-px my-6"}),e._v(" "),a("inline-checkbox-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("url.is_enabled"),"input-id":"url_is_enabled","input-name":"url_is_enabled","label-text":"Enabled?"},on:{errorHidden:function(t){return e.clearPageErrorMessage("url.is_enabled")}},model:{value:e.editableUrlData.is_enabled,callback:function(t){e.$set(e.editableUrlData,"is_enabled",t)},expression:"editableUrlData.is_enabled"}}),e._v(" "),a("div",{staticClass:"flex flex-col md:flex-row md:mt-2 md:space-x-4"},[a("date-time-picker-group",{staticClass:"mt-4 md:flex-1",attrs:{"error-message":e.getPageErrorMessage("url.published_at"),"input-id":"url_published_at","input-name":"url_published_at","label-text":"Publish Date"},on:{errorHidden:function(t){return e.clearPageErrorMessage("url.published_at")}},model:{value:e.editableUrlData.published_at,callback:function(t){e.$set(e.editableUrlData,"published_at",t)},expression:"editableUrlData.published_at"}}),e._v(" "),a("date-time-picker-group",{staticClass:"mt-4 md:flex-1",attrs:{"error-message":e.getPageErrorMessage("url.expired_at"),"input-id":"url_expired_at","input-name":"url_expired_at","label-text":"Expiry Date"},on:{errorHidden:function(t){return e.clearPageErrorMessage("url.expired_at")}},model:{value:e.editableUrlData.expired_at,callback:function(t){e.$set(e.editableUrlData,"expired_at",t)},expression:"editableUrlData.expired_at"}})],1)],1)}),[],!1,null,null,null).exports},1274:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(952),l=a(4041),r=a(1147);const n={name:"InlineCheckboxGroup",mixins:[i.S,l.H],components:{FormFieldError:r.Z},props:{inputClass:{default:"cursor-pointer form-checkbox h-5 mr-2 rounded text-theme-primary w-5 focus:border-theme-primary focus:outline-none focus:ring focus:ring-primary",type:String},labelClass:{default:"cursor-pointer flex-1 font-medium select-none text-theme-base-contrast text-sm tracking-wider",type:String}}};const s=(0,a(1900).Z)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col"},[a("div",{staticClass:"flex flex-row"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editableValue,expression:"editableValue"}],ref:e.inputId,class:e.formattedInputClass,attrs:{id:e.inputId,disabled:e.inputDisabled,"false-value":e.inputValueFalse,name:e.inputName,required:e.inputRequired,"true-value":e.inputValueTrue,type:"checkbox"},domProps:{checked:Array.isArray(e.editableValue)?e._i(e.editableValue,null)>-1:e._q(e.editableValue,e.inputValueTrue)},on:{change:[function(t){var a=e.editableValue,i=t.target,l=i.checked?e.inputValueTrue:e.inputValueFalse;if(Array.isArray(a)){var r=e._i(a,null);i.checked?r<0&&(e.editableValue=a.concat([null])):r>-1&&(e.editableValue=a.slice(0,r).concat(a.slice(r+1)))}else e.editableValue=l},e.onInput],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput.apply(null,arguments)}}}),e._v(" "),a("label",{class:e.labelClass,attrs:{for:e.inputId}},[a("span",{staticClass:"flex flex-row items-baseline"},[a("span",[e._v(e._s(e.labelText))]),e._v(" "),e.inputRequired?a("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])])]),e._v(" "),a("form-field-error",{attrs:{"error-class":e.errorClass,"error-message":e.errorMessage,"is-error":e.isError}})],1)}),[],!1,null,null,null).exports},1816:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var i=a(6486),l=a.n(i),r=a(1304),n=a.n(r),s=a(3764),o=a(6584),u=a(8271),d=a(1061),p=axios.CancelToken,c=p.source();const m={name:"AdminCmsPageEdit",components:{InputGroup:s.Z,MetadataEditor:o.Z,SelectGroup:u.Z,UrlEditor:d.Z},layout:"admin-layout",props:{layouts:{type:Object,required:!0},page:{type:Object,required:!0},parentPages:{type:Object|Array|null,required:!0},templates:{type:Object,required:!0}},data:function(){return{autoUpdateSlug:!1,formData:{},isInitialisedTemplate:!1,isInitialisedContent:!1,isInitialised_url:!1,isLoadingTemplate:!1,isUrlAvailable:!1,selectedTemplate:null}},computed:{parentPagesUrls:function(){try{if(!Object.keys(this.parentPages).length)return null;var e={};return l().forEach(this.parentPages,(function(t,a){e[a]={id:t.id,label:t.name+" => "+t.url.url_full,url_full:t.url.url_full,url_main:t.url.url_main}})),e}catch(e){return null}},parentPagesMap:function(){try{if(!Object.keys(this.parentPages).length)return null;var e={};return l().forEach(this.parentPages,(function(t,a){e[t.id]=a})),e}catch(e){return null}},selectedParentPage:function(){try{return this.formData.parent_id?this.parentPages[this.parentPagesMap[this.formData.parent_id]]:null}catch(e){return null}},selectedParentPageUrl:function(){try{return this.selectedParentPage.url.url_full}catch(e){return null}},selectedTemplateHasFields:function(){try{return!!this.selectedTemplate&&this.selectedTemplate.template_fields.length}catch(e){return!1}},selectedTemplateId:function(){var e;return null!==(e=this.formData.template_id)&&void 0!==e?e:""}},created:function(){this.formData={content:{},id:this.page.id,layout_id:this.page.layout_id,metadata:l().cloneDeep(this.page.metadata),name:this.page.name,parent_id:this.page.parent_id,slug:this.page.slug,template_id:this.page.template_id,url:{}},this.selectedTemplate=l().cloneDeep(this.page.template),this.setInitialContent(),this.setInitialUrl()},methods:{cancelLoadTemplate:function(){this.isLoadingTemplate&&(c.cancel("Template load cancelled"),c=p.source())},doesObjectHaveKeys:function(e){try{return Object.keys(e).length}catch(e){return!1}},pageHasContentField:function(e){try{return this.page.content.hasOwnProperty(e)}catch(e){return!1}},onNameInput:function(){this.autoUpdateSlug&&(this.formData.slug=this.slugify(this.formData.name))},onSelectedTemplateIdChange:l().debounce((function(){var e=this;this.isInitialisedTemplate?(this.selectedTemplate=null,this.cancelLoadTemplate(),this.selectedTemplateId&&(this.isLoadingTemplate=!0,axios.get(this.$route("admin.api.cms.templates.show",this.selectedTemplateId)).then((function(t){e.selectedTemplate=l().cloneDeep(t.data.data),e.setNewTemplateContent()})).catch((function(t){axios.isCancel(t)||(e.$errorToast("Failed to load selected template"),console.log(t))})).finally((function(){e.isLoadingTemplate=!1})))):this.isInitialisedTemplate=!0}),500),onSlugBlur:function(){this.formData.slug=this.slugify(this.formData.slug)},onSlugInput:function(){this.autoUpdateSlug=!1},onUrlIsAvailableEvent:function(e){this.isUrlAvailable=e},setInitialContent:function(){var e=this,t={};this.doesObjectHaveKeys(this.page.content)&&(t=l().cloneDeep(this.page.content)),l().forEach(this.selectedTemplate.template_fields,(function(a){e.pageHasContentField(a.id)||(t[a.id]={data:"",template_field_id:a.id})})),this.formData.content=l().cloneDeep(t),this.isInitialisedContent=!0},setInitialUrl:function(){var e={};this.doesObjectHaveKeys(this.page.url)&&(e=l().cloneDeep(this.page.url)),this.formData.url=l().cloneDeep(e),this.isInitialised_url=!0},setNewTemplateContent:function(){this.selectedTemplateHasFields||(this.formData.content={});var e={};l().forEach(this.selectedTemplate.template_fields,(function(t){e[t.id]={data:"",template_field_id:t.id}})),this.$set(this.formData,"content",l().cloneDeep(e))},slugify:function(e){return e&&e.length?n()(e,{lower:!0}):""},submit:function(){this.isUrlAvailable?this.$inertia.put(this.$route("admin.cms.pages.update",this.page.id),this.formData):this.$errorToast("Unable to save page. URL is unavailable")}},watch:{selectedTemplateId:{handler:"onSelectedTemplateIdChange"}}};const g=(0,a(1900).Z)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"max-w-5xl mx-auto",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e.userCan("cms.edit")?a("div",{staticClass:"flex flex-row items-center mb-6"},[a("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v("\n            Edit Page\n        ")]),e._v(" "),e.userCan("cms.view")?a("inertia-link",{staticClass:"\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center mr-2\n            ",attrs:{href:e.$route("admin.cms.pages.index")}},[a("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),e._v(" "),a("span",{staticClass:"hidden md:inline"},[e._v("\n                Back\n            ")])],1):e._e(),e._v(" "),a("button",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{type:"submit"}},[a("icon-save",{staticClass:"w-5 md:mr-2"}),e._v(" "),a("span",{staticClass:"hidden md:inline"},[e._v("\n                Save Changes\n            ")])],1)],1):e._e(),e._v(" "),a("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[a("div",{staticClass:"block px-6 w-full"},[a("select-group",{attrs:{"error-message":e.getPageErrorMessage("layout_id"),"label-text":"Layout","input-any-option-enabled":!0,"input-any-option-label":"Please select a Layout","input-autofocus":!0,"input-id":"layout_id","input-name":"layout_id","input-options":e.layouts,"input-option-label-key":"name","input-option-value-key":"id","input-required":!0},on:{errorHidden:function(t){return e.clearPageErrorMessage("layout_id")}},model:{value:e.formData.layout_id,callback:function(t){e.$set(e.formData,"layout_id",t)},expression:"formData.layout_id"}}),e._v(" "),a("select-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("template_id"),"label-text":"Template","input-any-option-enabled":!0,"input-any-option-label":"Please select a template","input-id":"template_id","input-name":"template_id","input-options":e.templates,"input-option-label-key":"name","input-option-value-key":"id","input-required":!0},on:{errorHidden:function(t){return e.clearPageErrorMessage("template_id")}},model:{value:e.formData.template_id,callback:function(t){e.$set(e.formData,"template_id",t)},expression:"formData.template_id"}}),e._v(" "),e.parentPagesUrls?a("select-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("parent_id"),"label-text":"Parent Page","input-any-option-enabled":!0,"input-any-option-label":"Please select a parent (optional)","input-id":"parent_id","input-name":"parent_id","input-options":e.parentPagesUrls,"input-option-label-key":"label","input-option-value-key":"id"},on:{errorHidden:function(t){return e.clearPageErrorMessage("parent_id")}},model:{value:e.formData.parent_id,callback:function(t){e.$set(e.formData,"parent_id",t)},expression:"formData.parent_id"}}):e._e(),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("name"),"input-autocomplete":"page_name","input-id":"name","input-name":"name","input-required":!0,"input-type":"text","label-text":"Page Name"},on:{errorHidden:function(t){return e.clearPageErrorMessage("name")},input:e.onNameInput},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("slug"),"input-autocomplete":"page_slug","input-id":"slug","input-name":"slug","input-required":!0,"input-type":"text","label-text":"Page Slug"},on:{blur:e.onSlugBlur,errorHidden:function(t){return e.clearPageErrorMessage("slug")},input:e.onSlugInput},model:{value:e.formData.slug,callback:function(t){e.$set(e.formData,"slug",t)},expression:"formData.slug"}})],1)]),e._v(" "),a("div",{staticClass:"bg-white mt-6 overflow-x-hidden px-6 py-6 shadow-subtle rounded-lg"},[a("metadata-editor",{model:{value:e.formData.metadata,callback:function(t){e.$set(e.formData,"metadata",t)},expression:"formData.metadata"}})],1),e._v(" "),e.isInitialised_url?a("div",{staticClass:"bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg"},[a("url-editor",{attrs:{"parent-url":e.selectedParentPageUrl},on:{isAvailable:e.onUrlIsAvailableEvent},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1):e._e(),e._v(" "),!this.isLoadingTemplate&&e.selectedTemplateHasFields&&e.isInitialisedContent?a("div",{staticClass:"bg-white mt-6 px-4 py-6 shadow-subtle rounded-lg"},[a("p",{staticClass:"text-lg"},[e._v("Fields")]),e._v(" "),a("content-editor",{staticClass:"mt-4",attrs:{"template-fields":e.selectedTemplate.template_fields},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1):e._e()])}),[],!1,null,null,null).exports}}]);