"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[96358],{70553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var s=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(13904),r=["components"],l={title:"Penetration testing",tags:["Security","Processes","Testing"]},p=void 0,d={unversionedId:"development/process/security/penetration-testing",id:"development/process/security/penetration-testing",title:"Penetration testing",description:"This is information for people who want to performing a penetration test of their Moodle instance as well as information for pen testers.",source:"@site/general/development/process/security/penetration-testing.md",sourceDirName:"development/process/security",slug:"/development/process/security/penetration-testing",permalink:"/devdocs/general/development/process/security/penetration-testing",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/security/penetration-testing.md",tags:[{label:"Security",permalink:"/devdocs/general/tags/security"},{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Testing",permalink:"/devdocs/general/tags/testing"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655178347,formattedLastUpdatedAt:"14/06/2022",frontMatter:{title:"Penetration testing",tags:["Security","Processes","Testing"]},sidebar:"process",previous:{title:"Security",permalink:"/devdocs/general/development/process/security"},next:{title:"Moodle App Development process",permalink:"/devdocs/general/development/process-moodleapp"}},m={},c=[{value:"Preparing for a penetration test",id:"preparing-for-a-penetration-test",level:2},{value:"Set debugging to normal",id:"set-debugging-to-normal",level:3},{value:"Setup the environment like production",id:"setup-the-environment-like-production",level:3},{value:"Common non-issues",id:"common-non-issues",level:2},{value:"XSS risks and capabilities",id:"xss-risks-and-capabilities",level:3},{value:"The sesskey param is a CSRF token",id:"the-sesskey-param-is-a-csrf-token",level:3}],h={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,(0,s.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("p",null,"This is information for people who want to performing a penetration test of their Moodle instance as well as information for pen testers."),(0,a.kt)("h2",{id:"preparing-for-a-penetration-test"},"Preparing for a penetration test"),(0,a.kt)("h3",{id:"set-debugging-to-normal"},"Set debugging to normal"),(0,a.kt)("p",null,"Either turn off all debugging which can disclose stacktraces etc, or show the pen testers how this can be toggled."),(0,a.kt)("h3",{id:"setup-the-environment-like-production"},"Setup the environment like production"),(0,a.kt)("p",null,"Sometimes a dedicated penetration test environment is setup and it is setup more like a dev / uat / stage environment which might have things like debugging on (see above). Generally a penetration test env should mirror a production configuration to avoid wasting pen testers time."),(0,a.kt)("h2",{id:"common-non-issues"},"Common non-issues"),(0,a.kt)("p",null,"There are a number of things which pen testers often flag as issues which are more just the way Moodle works and are often misunderstood."),(0,a.kt)("h3",{id:"xss-risks-and-capabilities"},"XSS risks and capabilities"),(0,a.kt)("p",null,"Moodle has a fine grained capabilities and roles system for providing access control to the whole system. Various capabilities inherently have an XSS risk, for instance an admin setting which allows an admin to inject arbitrary html and js into the sites header or footer. This is both known, and should be considered a feature and not a bug. So the presence of an XSS risk in itself is not a new or unknown issue."),(0,a.kt)("p",null,"However if a penetration test finds that actions can be taken which expose an XSS risk, ",(0,a.kt)("strong",{parentName:"p"},"AND")," that the test user has ",(0,a.kt)("strong",{parentName:"p"},"NOT")," been granted capabilities that grant them an explicit XSS risk, then there is a real issue and either the XSS risk should be closed, or it should be disclosed in the definition of that capability."),(0,a.kt)("p",null,"The most trivial example would be the ability to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/master/lib/db/access.php#L58-L60"},"edit ",(0,a.kt)("inlineCode",{parentName:"a"},"site:config"))," which has the RISK_XSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    'moodle/site:config' => [\n        'riskbitmask' => RISK_SPAM | RISK_PERSONAL | RISK_XSS | RISK_CONFIG | RISK_DATALOSS,\n        'captype' => 'write',\n        'contextlevel' => CONTEXT_SYSTEM,\n        'archetypes' => []\n    ]\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Roles_and_permissions"},"Roles and permissions")," page to learn how they work."))),(0,a.kt)("h3",{id:"the-sesskey-param-is-a-csrf-token"},"The sesskey param is a CSRF token"),(0,a.kt)("p",null,"Many penetration tests highlight the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"?sesskey=xxx")," HTTP param as an issue because it leaks to session id. The moodle session is stored in a normal cookie, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"sesskey")," is actually instead a somewhat poorly named CSRF token param."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Learn more about how the sesskey works in Moodle in the ",(0,a.kt)("a",{parentName:"p",href:"/general/development/policies/security/crosssite-request-forgery#session-key"},"Cross-site request forgery")," page."))))}u.isMDXComponent=!0}}]);