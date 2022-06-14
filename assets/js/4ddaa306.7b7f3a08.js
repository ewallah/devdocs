"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[95659],{8319:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return m}});var r=o(83117),s=o(80102),a=(o(67294),o(3905)),l=o(13904),i=["components"],n={title:"Moodle 2.6.4",tags:["Release notes","Moodle 2.6"],sidebar_position:4,moodleVersion:"2.6.4"},d=void 0,p={unversionedId:"releases/2.6/2.6.4",id:"releases/2.6/2.6.4",title:"Moodle 2.6.4",description:"Release date: 14 July, 2014",source:"@site/general/releases/2.6/2.6.4.md",sourceDirName:"releases/2.6",slug:"/releases/2.6/2.6.4",permalink:"/devdocs/general/releases/2.6/2.6.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.6/2.6.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.6",permalink:"/devdocs/general/tags/moodle-2-6"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655178347,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 2.6.4",tags:["Release notes","Moodle 2.6"],sidebar_position:4,moodleVersion:"2.6.4"},sidebar:"releaseNotes",previous:{title:"Moodle 2.6.3",permalink:"/devdocs/general/releases/2.6/2.6.3"},next:{title:"Moodle 2.6.5",permalink:"/devdocs/general/releases/2.6/2.6.5"}},u={},m=[{value:"Highlights",id:"highlights",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,o=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("p",null,"Release date: 14 July, 2014"),(0,a.kt)("p",null,"Here is ",(0,a.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.6.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.6.4"),"."),(0,a.kt)("h2",{id:"highlights"},"Highlights"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41383"},"MDL-41383")," - File picker works when zooming in and out of browser"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45580"},"MDL-45580")," - PDF Annotations working with multiple attempts")),(0,a.kt)("h2",{id:"api-changes"},"API changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43669"},"MDL-43669")," - Configuration option added so that mail can be sent from noreply address exclusively")),(0,a.kt)("h2",{id:"security-issues"},"Security issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264262"},"MSA-14-0021")," Code injection in Repositories"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264263"},"MSA-14-0022")," XML External Entity vulnerability in LTI module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264264"},"MSA-14-0023")," XML External Entity vulnerability in IMSCC and IMSCP"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264265"},"MSA-14-0024")," Cross-site scripting vulnerability in profile field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264266"},"MSA-14-0025")," Remote code execution in Quiz"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264267"},"MSA-14-0026")," Information leak in profile and notes pages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264268"},"MSA-14-0027")," Forum group posting issue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264269"},"MSA-14-0028")," Cross-site scripting possible in external badges"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264270"},"MSA-14-0029")," Cross-site scripting vulnerability in exception dialogues"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264273"},"MSA-14-0032")," Cross-site scripting in advanced grading methods")),(0,a.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45579"},"MDL-45579")," - Duplicate group enrolment keys for the same course are no longer allowed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43848"},"MDL-43848")," - New message popup no longer shows sender or contents of message")),(0,a.kt)("h2",{id:"translations"},"Translations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.6.4"},"Notes de mise \xe0 jour de Moodle 2.6.4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.6.4"},"Notas de Moodle 2.6.4"))))}h.isMDXComponent=!0}}]);