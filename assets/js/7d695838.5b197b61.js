"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[77171],{28702:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return n},metadata:function(){return d},toc:function(){return u}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),s=r(13904),i=["components"],n={title:"Moodle 3.11.4",tags:["Release notes","Moodle 3.11"],sidebar_position:4,moodleVersion:"3.11.4"},m=void 0,d={unversionedId:"releases/3.11/3.11.4",id:"releases/3.11/3.11.4",title:"Moodle 3.11.4",description:"Release date: 8 November 2021",source:"@site/general/releases/3.11/3.11.4.md",sourceDirName:"releases/3.11",slug:"/releases/3.11/3.11.4",permalink:"/devdocs/general/releases/3.11/3.11.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.11/3.11.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.11",permalink:"/devdocs/general/tags/moodle-3-11"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655178347,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 3.11.4",tags:["Release notes","Moodle 3.11"],sidebar_position:4,moodleVersion:"3.11.4"},sidebar:"releaseNotes",previous:{title:"Moodle 3.11.3",permalink:"/devdocs/general/releases/3.11/3.11.3"},next:{title:"Moodle 3.11.5",permalink:"/devdocs/general/releases/3.11/3.11.5"}},p={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,a.Z)({frontMatter:n},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 8 November 2021"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.11.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.11.4"),"."),(0,l.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66203"},"MDL-66203"),' - The submission status stays "Submitted for grading" after a submission is removed by or for the student'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65943"},"MDL-65943")," - RecordRTC Content Does Not Playback in iOS (multiple browsers)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26633"},"MDL-26633")," - Unable to randomly allocate more than 30 reviews per submission / reviewer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72566"},"MDL-72566")," - Activity information performance enhancement could cause 'invalidcoursemodule' exception"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64576"},"MDL-64576")," - Course completion activity dates are incorrect if course completion criteria have been edited"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71344"},"MDL-71344")," - Drag and drop question type: does not work correctly with multiple questions on one page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72607"},"MDL-72607")," - Domain restricted Vimeo videos require an updated URL format to load correctly"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72316"},"MDL-72316")," - SVG files being downloaded instead of served in SCORM activities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71970"},"MDL-71970"),' - Fatal error with H5P due to incompatible "Declaration of core_h5p\\framework::fetchExternalData"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72590"},"MDL-72590")," - When unenrolling from a course with self enrolment, the course name does not pass filters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71750"},"MDL-71750")," - File upload: Submit buttons aren't disabled when upload multiple files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72743"},"MDL-72743")," - Make question restore more fault tolerant of missing user data in course backups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72621"},"MDL-72621")," - Drop support for $CFG->admin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72515"},"MDL-72515")," - Plugins overview page calls curl unnecessarily"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72507"},"MDL-72507")," - Quiz auto-save does not detect uploaded files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51165"},"MDL-51165")," - Trailing slash in URL supplied to URL Resource causes extra click to open"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72884"},"MDL-72884"),' - Inserting an SVG file using the "Insert image" doesn\'t work well with "Auto-size"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56773"},"MDL-56773")," - Atto equation editor textarea input should be left aligned in RTL mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72013"},"MDL-72013")," - Add jsdoc validation checks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72064"},"MDL-72064")," - Too easy to accidentally change your answer to a multiple-choice questions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72060"},"MDL-72060")," - LTI gradebookservice is user gradable in course not working as expected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72599"},"MDL-72599")," - Cannot configure or delete blocks added to admin/index.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39324"},"MDL-39324")," - Adding custom video dimensions to a URL resource reverts media icon back to default"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71306"},"MDL-71306")," - Error when cancelling add cohort_sync enrolment method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72767"},"MDL-72767")," - Forum digests may not be sent to a user if new posts made near to the digest send time"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72275"},"MDL-72275"),' - Timeline block "sort by courses" sometimes fetches incorrect or no results for time periods'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71785"},"MDL-71785")," - Empty quiz section name behaves like new page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72342"},"MDL-72342")," - Group import from CSV is broken by byte order mark"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72110"},"MDL-72110")," - Admin home page preference not respected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72309"},"MDL-72309")," - Course creation without category"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71137"},"MDL-71137")," - File upload: The progress bars are displaying error when drag-and-drop multiple files sequentially"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68325"},"MDL-68325")," - 'Complete another course' allows to select courses that has completion tracking disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71961"},"MDL-71961")," - Disable quiz navigation buttons while file uploads are in progress"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72857"},"MDL-72857")," - Issued badge page doesn't filter site/course names (e.g. multi-lang content)")),(0,l.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72673"},"MDL-72673")," - Duplicate element IDs in Glossary"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72669"},"MDL-72669")," - Invalid HTML in multi-answer (Cloze) questions: blank ",(0,l.kt)("inlineCode",{parentName:"li"},"<option>")," content is not allowed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72674"},"MDL-72674")," -  Give feedback about this software link does not warn users that it opens in a new window"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71352"},"MDL-71352")," - Red/green color for fail/pass in grader report is not accessible"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72426"},"MDL-72426")," - Insufficient colour contrast for the notification and message badges"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71602"},"MDL-71602")," - Essay question type: no lable for the editor where the student enters their response")),(0,l.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72464"},"MDL-72464")," - Web service get_active_tokens doesn't return those without expiry date")),(0,l.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=429095"},"MSA-21-0038")," Remote code execution risk when restoring malformed backup file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=429096"},"MSA-21-0039")," Upgrade moodle-mlbackend-python and update its reference in /lib/mlbackend/python/classes/processor.php (upstream). ",(0,l.kt)("strong",{parentName:"li"},"Please note:")," If you are using Moodle Analytics, an upgrade to mlbackend version 2.6.4 is required. See the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Analytics_settings#Versions"},"Analytics settings documentation")," for more information about how to upgrade."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=429097"},"MSA-21-0040")," Reflected XSS in filetype admin tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=429099"},"MSA-21-0041")," CSRF risk on delete related badge feature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=429100"},"MSA-21-0042")," IDOR in a calendar web service allows fetching of other users' action events")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.11.4"},"Notes de mise \xe0 jour de Moodle 3.11.4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.11.4"},"Notas de Moodle 3.11.4"))))}k.isMDXComponent=!0}}]);