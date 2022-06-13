"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5472],{26764:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=a(83117),l=a(80102),o=(a(67294),a(3905)),i=a(13904),n=["components"],s={title:"Moodle 1.6.2",tags:["Release notes"],sidebar_position:2,moodleVersion:"1.6.2"},d=void 0,u={unversionedId:"releases/1.6/1.6.2",id:"releases/1.6/1.6.2",title:"Moodle 1.6.2",description:"Release date: 12th September 2006",source:"@site/general/releases/1.6/1.6.2.md",sourceDirName:"releases/1.6",slug:"/releases/1.6/1.6.2",permalink:"/devdocs/general/releases/1.6/1.6.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.6/1.6.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655128613,formattedLastUpdatedAt:"13/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 1.6.2",tags:["Release notes"],sidebar_position:2,moodleVersion:"1.6.2"},sidebar:"releaseNotes",previous:{title:"Moodle 1.6.1",permalink:"/devdocs/general/releases/1.6/1.6.1"},next:{title:"Moodle 1.6.3",permalink:"/devdocs/general/releases/1.6/1.6.3"}},p={},c=[{value:"Security",id:"security",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"New Features",id:"new-features",level:2},{value:"Known Problems",id:"known-problems",level:2}],m={toc:c};function k(e){var t=e.components,a=(0,l.Z)(e,n);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,(0,r.Z)({frontMatter:s},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("p",null,"Release date: 12th September 2006"),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed handling of uploaded files in Database module"),(0,o.kt)("li",{parentName:"ul"},"Module instance id is now properly validated when creating course module object; developers should use get_coursemodule_from_id() to get valid $cm"),(0,o.kt)("li",{parentName:"ul"},"Default error reporting level was lowered to 5, E_WARNINGs are no longer displayed on production sites with debug off."),(0,o.kt)("li",{parentName:"ul"},"Multiple problems leading to information leakage fixed in help.php file"),(0,o.kt)("li",{parentName:"ul"},"Fixed information leakage from scheduled backups"),(0,o.kt)("li",{parentName:"ul"},"Added basic detection of dataroot accessible from Internet, web installer now better suggests dataroot location outside of web file area"),(0,o.kt)("li",{parentName:"ul"},"Swf is now disabled by default in Mediaplugin"),(0,o.kt)("li",{parentName:"ul"},"forgot_password.php does not allow remote email or username enumeration by default, the old behavior can be enabled by setting protectusernames to No in site configuration"),(0,o.kt)("li",{parentName:"ul"},"Undisclosed SQL injections fixed by automatic data conversions in adodb layer"),(0,o.kt)("li",{parentName:"ul"},"Theoretical XSS problems fixed in doc/index.php and files/index.php scripts"),(0,o.kt)("li",{parentName:"ul"},"Access to tex and algebra files is blocked when filters are disabled"),(0,o.kt)("li",{parentName:"ul"},"Request for redirection in jumpto.php protected with sesskey")),(0,o.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed error when upgrading forum read tracking"),(0,o.kt)("li",{parentName:"ul"},"Locales from language packs should finally work - please check your configuration variables and empty the locale field"),(0,o.kt)("li",{parentName:"ul"},"Added missing link for course request"),(0,o.kt)("li",{parentName:"ul"},"Fixed several glossary problems with non-ascii characters"),(0,o.kt)("li",{parentName:"ul"},"Fixed bug where you could not regrade a quiz question where the teacher had added a comment with a ' character."),(0,o.kt)("li",{parentName:"ul"},"Quiz import of BlackBoard V6 files now much more reliable"),(0,o.kt)("li",{parentName:"ul"},"Fixed scheduled backups - they were broken in 1.6 and 1.6.1"),(0,o.kt)("li",{parentName:"ul"},"Fixed missing guest icons from course listing"),(0,o.kt)("li",{parentName:"ul"},"Database sessions respect sessiontimeout setting"),(0,o.kt)("li",{parentName:"ul"},'Fixed redirect problems during upgrade resulting in "Table xxx already exists"'),(0,o.kt)("li",{parentName:"ul"},'Lesson module: the "(Continue)" no longer displays for 3 seconds after branch tables.'),(0,o.kt)("li",{parentName:"ul"},"Lesson module: now properly checks import formats for support."),(0,o.kt)("li",{parentName:"ul"},"Lesson module: feedback is set properly during the import process."),(0,o.kt)("li",{parentName:"ul"},"and many other smaller fixes")),(0,o.kt)("h2",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Authorize.net Payment Gateway: Auto configures credit card types if the merchant does not accept some types of credit cards")),(0,o.kt)("h2",{id:"known-problems"},"Known Problems"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Broken images in published question categories")))}k.isMDXComponent=!0}}]);