"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[129],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,m=u["".concat(o,".").concat(c)]||u[c]||A[c]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return A}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],l={title:"Tracker tips and tricks",sidebar_label:"Tips & tricks",tags:["Tracker"]},o=void 0,d={unversionedId:"development/tracker/tips/index",id:"development/tracker/tips/index",title:"Tracker tips and tricks",description:"Searching",source:"@site/general/development/tracker/tips/index.md",sourceDirName:"development/tracker/tips",slug:"/development/tracker/tips/",permalink:"/devdocs/general/development/tracker/tips/",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/development/tracker/tips/index.md",tags:[{label:"Tracker",permalink:"/devdocs/general/tags/tracker"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1650987734,formattedLastUpdatedAt:"26/04/2022",frontMatter:{title:"Tracker tips and tricks",sidebar_label:"Tips & tricks",tags:["Tracker"]},sidebar:"process",previous:{title:"Tracker guide",permalink:"/devdocs/general/development/tracker/guide"}},p={},A=[{value:"Searching",id:"searching",level:2},{value:"Quick search",id:"quick-search",level:3},{value:"Advanced search",id:"advanced-search",level:3},{value:"Using filters",id:"using-filters",level:2},{value:"Useful queries",id:"useful-queries",level:3}],u={toc:A};function c(e){var t=e.components,l=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"searching"},"Searching"),(0,i.kt)("h3",{id:"quick-search"},"Quick search"),(0,i.kt)("p",null,"On every tracker page you can find search box. Quick search is much more powerful than you might think."),(0,i.kt)("p",null,"Examples of the quick searches:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Quick search"),(0,i.kt)("th",{parentName:"tr",align:null},"Advanced search equivalent"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MDL Unresolved Bug abra cadabra")," ",(0,i.kt)("img",{src:n(2344).Z,width:"254",height:"49"})),(0,i.kt)("td",{parentName:"tr",align:null},"Find all unresolved Bugs in Moodle project that contain words ",(0,i.kt)("inlineCode",{parentName:"td"},"abra cadabra")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'project = MDL AND issuetype = Bug AND resolution = Unresolved AND text ~ "abra cadabra"')," ",(0,i.kt)("img",{src:n(9975).Z,width:"666",height:"41"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"my Unresolved")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"resolution = Unresolved AND assignee = currentUser()")),(0,i.kt)("td",{parentName:"tr",align:null},"Find all ongoing issues assigned to me")))),(0,i.kt)("p",null,"Quick search can pick up many other keywords, see more information on page ",(0,i.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/display/JIRA062/Using+Quick+Search"},"Using quick search")),(0,i.kt)("h3",{id:"advanced-search"},"Advanced search"),(0,i.kt)("p",null,"To get here either enter something in quick search or go to the link ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql="},"Tracker search page")," and switch it to \u201cAdvanced\u201d mode.\nNow you can enter queries in the Jira Query Language (JQL). Use as many AND, OR and parenthesis as you want. Some examples and interesting subqueries:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"JQL"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"project = MDL")),(0,i.kt)("td",{parentName:"tr",align:null},"only issues inside project Moodle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"resolution = Unresolved")),(0,i.kt)("td",{parentName:"tr",align:null},"Best way to search for open issues")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'type in (Improvement, "New Feature")')),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"votes > 50")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"component in (Assignment, Gradebook)")),(0,i.kt)("td",{parentName:"tr",align:null},"where component is either Assignment or Gradebook")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"component = Assignment AND component = Gradebook")),(0,i.kt)("td",{parentName:"tr",align:null},"where both Assignment and Gradebook are listed as components")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"labels = patch")),(0,i.kt)("td",{parentName:"tr",align:null},"issues containing particular label")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"labels is empty OR labels not in (triaged, triaging_in_progress)")),(0,i.kt)("td",{parentName:"tr",align:null},"issues NOT containing particular label(s)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=updatedDate%20%3E%20-7d"},(0,i.kt)("inlineCode",{parentName:"a"},"updatedDate > -7d"))),(0,i.kt)("td",{parentName:"tr",align:null},"updated in the last week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=assignee%20%3D%20currentUser%28%29%20AND%20resolution%20%3D%20Unresolved"},(0,i.kt)("inlineCode",{parentName:"a"},"assignee = currentUser() AND resolution = Unresolved"))),(0,i.kt)("td",{parentName:"tr",align:null},"open issues where you are an assignee")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=reporter%20%3D%20currentUser%28%29"},(0,i.kt)("inlineCode",{parentName:"a"},"reporter = currentUser()"))),(0,i.kt)("td",{parentName:"tr",align:null},"issues reported by you")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=Participants%20%20%3D%20currentUser()"},(0,i.kt)("inlineCode",{parentName:"a"},"Participants  = currentUser()"))),(0,i.kt)("td",{parentName:"tr",align:null},"issues where you commented, edited or otherwise participated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=%22Component%20watchers%22%20%3D%20currentUser()%20and%20resolution%20%3D%20Unresolved"},(0,i.kt)("inlineCode",{parentName:"a"},'"Component watchers" = currentUser() and resolution = Unresolved'))),(0,i.kt)("td",{parentName:"tr",align:null},"open issues in the components where you are an automatic watcher (only tracker admins can assign automatic watchers)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'assignee in membersOf("hq-developers"'),")"),(0,i.kt)("td",{parentName:"tr",align:null},"issues assigned to members of hq-developers group")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=status%20changed%20to%20%22Waiting%20for%20peer%20review%22%20before%20startofday%28-7%29%20and%20status%20%3D%20%22Waiting%20for%20peer%20review%22%60"},(0,i.kt)("inlineCode",{parentName:"a"},'status changed to "Waiting for peer review" before startofday(-7) and status = "Waiting for peer review"')),"`"),(0,i.kt)("td",{parentName:"tr",align:null},"issues waiting for peer review for over a week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'status WAS NOT "Development in progress"  BEFORE "2011/02/02"')),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'issue in linkedIssues("MDL-12345")')),(0,i.kt)("td",{parentName:"tr",align:null},"issues linked to particular issue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'issue in linkedIssues("MDL-12345","duplicated by")')),(0,i.kt)("td",{parentName:"tr",align:null},"Returns all the issues directly and indirectly duplicated by 'MDL-12345'. i.e. if there is 'MDL-12222'\u2009\u2009duplicated by 'MDL-12345'\u2009\u2009\u2009and 'MDL-11111'\u2009 duplicated by 'MDL-12222', both 'MDL-11111'\u2009and 'MDL-12222'\u2009will be returned as search results.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=issue%20in%20favouriteIssues%28%29"},(0,i.kt)("inlineCode",{parentName:"a"},"issue in favouriteIssues()"))),(0,i.kt)("td",{parentName:"tr",align:null},"issues that you marked as favourite")))),(0,i.kt)("p",null,"More documentation on ","[https://confluence.atlassian.com/jirasoftwareserver071/advanced-searching-800707146.html Advanced searching]"),(0,i.kt)("h2",{id:"using-filters"},"Using filters"),(0,i.kt)("p",null,'To create a filter click on "Save as" button above the search:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3272).Z,width:"452",height:"116"})),(0,i.kt)("p",null,'Now you can quickly access your filters but also you can subscribe to it, Click on "Details":'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9422).Z,width:"728",height:"375"})),(0,i.kt)("p",null,'and then on "New subscription":'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7741).Z,width:"616",height:"286"})),(0,i.kt)("p",null,"Now you will be notified daily about new issues in Assignment component. You can manage your filters and subscriptions on ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/ManageFilters.jspa"},"Manage filters")," page.\nWatchers automatically receive notifications about the updates of the issues they are watching. Using filter subscription you can either monitor issues that you are not watching or monitor issues that are in particular state and were not updated."),(0,i.kt)("h3",{id:"useful-queries"},"Useful queries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20mdl%20and%20resolution%20%3D%20unresolved%20and%20type%20in%20%28bug%29%20and%20%22Affected%20Branches%22%20!~%20MOODLE_310_STABLE%20and%20%22Affected%20Branches%22%20!~%20MOODLE_311_STABLE%20and%20reporter%20%3D%20currentUser%28%29"},"Issues reported by me not against current versions")," - make sure that you keep track of your own issues!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?jql=component%20in%20%28componentsLeadByUser%28%29%29%20AND%20resolution%20%3D%20Unresolved%20AND%20updatedDate%20%3E%20-14d%20AND%20project%20%3D%20MDL%20AND%20%28%20labels%20is%20EMPTY%20OR%20labels%20not%20in%20%28triaged%2C%20triaging_in_progress%29%29%20ORDER%20BY%20updatedDate%20ASC"},"Untriaged issues in my components")," (works only for component leads)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?jql=status%20changed%20to%20%22Waiting%20for%20peer%20review%22%20before%20startofday(-21)%20and%20status%20%3D%20%22Waiting%20for%20peer%20review%22"},"Waiting for peer review for 21 days")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?filter=19324"},"Integrated this week")," - subscribe to this filter on Fridays and keep yourself up-to-date with what is happening in Moodle")))}c.isMDXComponent=!0},9975:function(e,t){t.Z="data:image/png;base64,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"},3272:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAAB0CAIAAACUgNWJAAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAG/BJREFUeJzt3WdYFFfbB/B7Zit1F3aBBQQVULAiUWMDsRdU7CWW2JIoGlFjidEUu9HoqwZ7Ems0MfrE3gv2rlgICEjvZWEXWNgy5f2AhbI0GYOY+3flg9cw55x7ZuC/Z9qGiI6OVigUgBBCqAbI2i4AIYQ+BBimCCHEAQxThBDiAIYpQghxAMMUIYQ4gGGKEEIcwDBFCCEOYJgihBAHMEwRQogDGKYIIcQBDFOEEOIAv7YL+HCwLJuRkZGbm0tRVG3Xwg2BQCCVSuVyeW0XglAdgGHKmczMTADw8PAQCoW1XQs3tFptQkKCSqWSSqW1XQtC7zs8zeeMSqVycnL6YJIUAMRisbOzc05OTm0XglAdgDNTztA0TZIky7K1XQiXRCKRVqut7SoQqgNwZooQQhzAmSmXPrBpKUKo6rgLU4Mu7Fby+dvKsLiCzAIGAIDgWynMPVra9Opl72nDIzgbiTMFj0LGblCxDq6bVzg78Gq7GoRQXcZNmNI5mdtXhV5IAwAQSExc3ERigsnLLkhMVd1OVd0+n9J/rtfEFgK8poAQ+lBxEaaM7ur2sAtpAHb2M2a4+TrzX0/ydBnKwzv+ORypORkU0Xxds3YW7+H0lEt4mo/QfxYHk0U2N+d8GAMg6j+1UbdiSQoAIlvZ6MAm7cQA2pzL4dS/kTQsq9NhpCGE/m0czExprV4DACCsJzUSzYSlfMaqjoFSkWmJi5Jsfmz6kVMpt0Jz0wpYAJ6Vk6RDt/ojukglxVejDeHX4o8GZz6L1xayAMCzqidp17X+yG5S6cvV2Oxrjyb/mitu47l1mHb3luirCZRJe6/fpklNAAAYZVjKkXNpd8LzlVoWxOLGnoqBQ5w72Je8gEsSBKULORH1+2VljIoB4Mlc5ANGNervIajuddRKZ6ZMfsSJbZv/vBQSp6IABNZu7fynzJ3kbSeo5kAIofcNBzNTnrmJnA8A+RfvaHRGwoQwk5VO0oybYTN+CP/7njrPStK+g8LH05RNzD69J2T6xpQUw6u1GP2tHfcW7kq8F2ewdpd1aGf7sYdYn5R9dl/I7B2ZKuZl53whCQC63LyjP0dcTRO4NJI2VfBIAAA64ezTGT9GnQrJ08skni2krqa6yLtxPy14uC+i5ByZpO7vuL/0bxVtb/Wxp9RBTCtj0nevDDmcyNR855TAqG6s+HLNXcUnaw6evRx84fhvc9spD8ybtTdaz/FACKF/HQczU8LMakgn4eOr+hcH78+McBrcXfFxEzMrYbmXR6n05HU7MlTAbzux9ZwupiICAIDKSg9aEnbtceSGy9KVvU35ALq4hJ239QCmIxa3GeXyci6pjY9f+F1M7O0Xx/xk4+uTAMATAACw0UnX3FzXLnZ2Fb8cxZCctO5ATiGY9J3z0WRPIQ8AGEPowYffndEc2RbX8Uc3N9GrghIS/qAcvt3o1tqKAABWm7v/+4f/S9OcOp83aLJEBNVQycxUl3DnaYHHtCkDWsgIlmVNGnWb9pNZ/busCcOwtDpk349r/7gem8uCpWuPSYu+Hu4hStw3fvTf7X87OMNdCACgf75xxGf3hv+xZ4xt2sWtP249/ihVS1q6+o6dM390K0mpz0VGVbZDMwIYVci+lWv234jPB7Bo2Hn03AXjvIydUSCEqoeLPyOC33ys1/QOpgRA+uPEbevuT/rs2qRFj/9vf/ylp/kqQ6m16eiz8ZEsCJq7B7xKUgDgy20njbMWARt1PjXRAABAWtlMmdbky2lN+jd4c1Yudlb0bQgA2qfR+qJ5I0EAAQA06TPa8XWSAtDR5xMTAMRtG41uKXw5LSYFzfwb+dgIZAJNeHbxWaew91SXoiQFAEJs0a2rGQDkxWvyuJ2bCuw86hERBw/cSCygAYBlGULWzr9fewcRUfD454U74josP3n9zvXj37d4uvG7/dF6vmO3fg2yrl1NKJq56uMuX1O6DuzqQIX/MnvFXddZB67dvXNh08CCvfOWXMwqVarRDgF0EbuX7FL6bbp4+97Ns+v98g4s3xOh43QjEfqP4ubRKEJk2iPg4/b9Ms9dSr1+Pzs+n8lJzLmemHP9XAwQouZdG4wbbt/YjAAAMGgfheoBwKWTVFpi8kpYuitcIDs8Mycyl20oIwRWkrbtJUU/o7QGVa5BRwMATZMAANo8hin+UWAiaWtf7FICpX0SbgCAhm0szYqNQpjJvlrnXbp6iaxD8bZASGwEAAA6g76ad7IqmZmStn5LV8Uv+XH+iAOm9k0/+qh1m46+PTo1sRIAiD2/PnyOEZubkDQr/8ivveTkk6RC1tXOt1/9bceuJU1wbSjQxwcHZ7mO7Gyni9h9Jrv1wi98FDyK5rsNnOq3b8rRR6ruPa2KfTSW0yG/UKUFsYUpnzGAZbOxWy+NJygDhXfsEKoxDt+AIsydbYdOtB06kS1U5j+PUIWG5YQ8Vsbm6kIvR3wdov56iUd7KQG0PlEFAJASHLkupOSlAEafCgCgi81hQMYDAG1S+l+HEy4/zleXmSGWvoggMZUU3xSqaBSe3Iqo/GksM7FFyd1AkEAAsCxwHTIsaeszc7vv1IznD+7cu3//zuGl+zZYdl+05Ts/ezrtxq//t+fiPyl5FEHQOj3digEWeHad+zlvO3krbVxDu6SrwZluI31soPBxXE5h6LyeHYv1XC8hhwKr4t+xojfaoWnzyQHtp60e0Wdf8/adOvfoN6BzY0t8XQEhDryL10kJE5mFV0cLr45O41g66U70mm3JiTlpWw7Zt/pcKgZGSwEA5EVm3jTenM7XswBQGBf37Q+xMSwIHeR+7aSO1gILIcECE3P0+bHUMo1IsuQdeqaQAgBSRP6rT7ZW/pwpSxv0NGnVqH0/944Dxs8qfLZ57OSNO/w7jn4wd+kFj2+3nOzfyJKnfbrS/4sYAJZlSdvO/Z23n76VNvjjqxfTG43pJCdATRCkRd+tp5a1Nn3TL6XTFZ9g6qN2G++QX2/Q2pM9Y+5fCQ6+fGbFxN1Hv9r505B6+DQBQjX1jt/NJ3j1OrgtyMqZfqggLzwrxSB1AdJUAEDzfL7p+FWT8kdntDf2xsawIG7psWGWvd2bFSlhsLEwLY1nxgeg2ML36Wua9Ykngn6N7zR7WnspMDTD0AB8x+bOwv0qTU70o1RplyXdnEUGrVab+k9YNvXy+i/PtnN/5x3n7zwruJTpPrqDjADCxMFFkh8WnqZp5sADAKYwK11vqZAUv+XH5JXTIUvlZeUKrZza9JvYzn/86N2jRx2+nDzg0waYpgjVUI1vQLF0yj/pJ45En4imy5mVkZYKEQEAetrAAPBFDaQAQKdnlrc+AADoC0MSAYDXuq+tXfHINWgjlVWoii+qbwUAVGqqodQVAkpPFWopHV2FTqqPrRBPYqcP+fO7BZtOPYxJyVJmJIbfOPDjT7f4nQa1kMkVJupnd2PyKV3G/d9/Pqs3AXVytoFlWZaUe/dziv9rz7F090HtpMCyrNBt0ACHqJ1BJ1/k01TuizOrJ4+ZczTZUHwoQmy8Q0PioRlDx6+9EKPW6TRZkQ+eZQsV9SRkhWW/kz2F0Aen5nfz6ZhTz3ceSdi1JyW59I17AABgqaiHeSwA2FrKBQB8kWcLIQBE38jOLpVzusJ7t5UxOUUhy9IsAJBmJR5NYvPCEy5mAkBlVzP5wmYeAgCIvZ1TYhStauus66O/uL01qhamrKRl+wW7/m+cIvS3bz4dMWjgkE+mrzlP9V62e0kXKwvPgDm96d8n9/btG7CfGrni+9HuSVsnzz2ZRgPwbLz7OSY/UXoMbvvylp2w8WdBK/00+6b08e3iF7A3r9/K1cPqlZzlmxrv8KxwyKpvfRK3TO7bxbeb35cHqCHLv/O1wiejEKq5Gp/mE8K2w50cQ+OT414sWGeYNsbpYyfB606p3Lzbp6I236IA+N795dYkAPAa9nB2vfgi+nnU5osW83uai4sCwqC9ue/x2mtanof71q8dbPjixjK4l2p4fF9T6GppQgAAmxeVuHZHjq2CzEtj1Ol6A5iWXz3PtZeTc3BMQmTU1mDLed3MxAQAQ4WdenElH8DKrk/Dd3J9o5J5HEuBdbuJK7w/5728lMsyNEUZDBTD8Oz6/HDQfxlZdFVVT7fedzuApPWFOoplScWI/Q/Gkoy+UPvysigNNr6ztvacyyPgZQMDXWro8jrU0w7zf+u7kCQAgGVpykhThNBb4CBTRA0b/DDdsHRLSlJY/E+L4glTsb2MLybYwlxtqqrodFrQamTLAC9BUYLw7R3nfp67cEdGyO/3J16UtqgvFBn0cc9VSQUA5vIpkxU2PAAw8R1gfWhHdsaZR7PjbVvYQG6K+mGUzmmg1xx5dOBvas3N8NUgb93XpXs5VQkc680Znb3ggOrRnnsTTlu62ZCaFHWcigUwHTCloXu1nsXnEEsbdLSxGTxL6bXUmzehaG2BodjPtAWlZtIsrdcVVvjiVLkdllyOEOIGJxM00qad+3p3xbVLKdefqF4ka1MSixbzZI5WTVrKu3Wzb2VX/GY7qfBuGuQk//tE8q1Q9f27LACIZRbtfR0H9Ve4v/xmKULeqfkqKvq3k2n/hKWnAyl1sh4Q0HJkezORzm3svdD9z7RP7mbb+rqUXxXPuY9nkHPywePJdyJy/8kEEInc2ij8h9b3dnwfv1wVIVSnEdHR0QqForbL+BCEh4d7eHjUdhXce/78eZMmTWq7CoTed3jvASGEOID/Dygu4YNECP1n4cwUIYQ4gDNTzpAkSVEUj/dBvequ1+uFQmHl6yH0n4czU85YWlpmZGTQ9Lt5uao2GAyG9PR0qVRa24UgVAfgzJQzCoVCqVTGx8dT1Pv0jQA1IBAIrK2tra2ta7sQhOoADFPOEAQhl8vlcnltF4IQqgV4mo8QQhzAMEUIIQ5gmCKEEAcwTBFCiAMYpgghxAEMU4QQ4gCGKUIIcQDDFCGEOIBhihBCHMAwRQghDmCYIoQQBzBMEUKIAximCCHEAQxThBDiAIYpQghxAMMUIYQ4gGGKEEIcwDBFCCEOYJgihBAH+ACgVqtruwyEEKrb+AAgkUhquwyEEKrb8DQfIYQ4gGGKEEIcwDBFCCEOYJgihBAHMEwRQogD/Cqux7KsUqlUq9V6vf6dFoQQQnVRVcM0IyMDANzd3YVC4busByGE6qSqnuar1WpnZ2dMUoQQMqqqYUrTNI/He6elIIRQ3YU3oBBCiAMYpgghxAEMU4QQ4gCGKUIIcaCqj0ZVLC43dcPTv66khDxRvgAAT5lbFwevWS1HNLC056R/hP4LfHx8rl+/XttVoLfEQZjufn561s2Nar3m9ZInyhdPlC92R5ze0GnmBA+/mg+BEELvuZqe5u9+fnpi8MriSfqaWq+ZGLxy9/PTNRzivcCon50JTjJUs5Uhfu9YH5+hQc911WikC98wfMTP1WrCmbfbzDJ0EUGjRr6bTahyhW9qyL3ypc8rXfqNmfnT/56paC6GqAZD2tWNk7p1nnQ0namoVFSX1ShM43JTZ93cWPE6s25ujMtNrcko7wVt5OHd55Kq+SatPu7MeejVx/TGyUht1VuJGn3x6y+fNRJVbyxuvNVm1hTLsFVf+e0qFDec9kfw9evXgk9sm9kx749ZU4NC8ssdtEpDMJrI4GuR6opC+TUq7cTC2Yeolk4ionplozqlRqf5G57+ZXROKhWZB/sHPc6KKpq0bnj61wbvmWXW0sWfWrd0x7UEDcjbjv/+25FNTPUxJ9Yu33lHyZKE1GvMwvnD3M0MEUHjl2h6t1XdexqdpGs6eU676IOnQ2PitJ4z1y/sKY1YP25Jfg+vnAeR6Vkqc985K7/sJOOxWuP9LC0c0CHn1tOklHSybeBP87vb8kCfdP7nFb/eTNUxPPvOAd8H9nAQ6Muu6as/tmjJ5RT1g8nzP1+3cpBjFXeaNurkVZHfynGiH+cc+0fTorUZAFsQcXD5sgNPVQwDli0/+fa70U2IyFJLXBN2fPYDuWxfoIdAdX/7ohXH4klr164Dne8chm/2zWkcb2RD6Ar3kh2vBpvJap4fXLn890c5DMtTdA5YOq9vPWNtu9vyGNW9bQtXHE0Q2DZo09maAnnFh9slcfOEZZouzg+PK4ds3TyUDC5doZGhFel/v6lwcZt/tpRuUkkNBN/C6eOR363Vf/Z50OnhO0Y48qo/xKuuCCbt3PIxGyU+Iz8d49+2nriCaQlh0vSLoD4OkV9fePZmYSWlojooOjpaUwUPHjxgy/A8OB62dCr1X4N9w0IyI1mWjc1NKVrieXB82bb6uL0TB8w+lqhn9MnHA/uO2v5CE7NrXJ+pB2O1DKtPOhrYZ9T2KD2ri9wyzGfI2ge5NKO+saCH96jNoRqGUV2d1+/T/YkGbfjPg737Lb2pollafXup/+A1zwpZfbn9DFp1W0WzTM6VuX5j98TpWUPCgYm9Pv01NJ9mtbEHp/afdjSVMr4mnXZkst+82/mvy6czTk3v6V1cz2nH0ujiW6h5uGLk9KNpNJ15ZuawRbdyGZZlci4G9pt6Io1iWSrj6vpFW0LysksvyS8MWz9s+MZwLasNWz+079yz6RRTGP3nl729h2wM1xovr+K9VIPNZKnkQ5N6TjwQp2Np9d1VA/suupvPGm+rDf95mN+8cxkUS2VdWeLvPXhjuLaiw50fuWV4l8E/XMqgWOMHwujQrys02sR4Derg6T3GHUg0vCkmfu+YHl9eVjFvMUQJdEHCrQMrpwz0G/P1ltPPlPqyv+bF5N+c3XvSkVe/I0ZL9fb2rrAL9F6r0Wl+0b17AFjfKXB9p0AAaCVvFDJ8Vyt5o8dZUV6HJpZarRgmJ+RKsnN/X0cBIXDot/qvXyfUzw25luYypGd9EQEChy4DXbNvP86iAYBn/VGPZhYkIbZ1ksmad3I1JQgTOyfzwow8GgjgSbz6tpKQQFo27Vw/P/RZll5ZXj9Sz16eEhIIU/sGFgXpeTST8/hyksuYwU3MSBDV7zHYKeZCaC5rbM2ym07a+G06f72485v97YrtTTbvydGn9Qb72JCkrMPQRpFHHqoZIAQSayLxytlbUUpK3nnW8oBW5sLSS8xenQrSymeP8xv172DLI8Qu/Ua3MnvVtdHyyt9LhhpsJvAchmw9unm4sxBIyyYdnOj09ALGaA109rNHuS5928l5wJN93N9LWuLd47KHu6EAAERuvT624YHxA1He0C87NNKEqrCGYhtlJjeDArX2LYYoeW2ANHHq8Mk32w7tW9BBuWf2vONpVTrrBwCoeHehOombR6MmuPtJReYNLOy7OHhJReaPs6K6Hp+h0uWX34IuUGl55mZ8AgCAFJubgSE9p1AgkRRdViIEFhKBNqeAAQBCYFJ0ckXwSIG4qGCSR0DRLy5pIjMr+kXkm5jz9Xk6Q0G5/ZgKi4KKIAlgAegCpaYwdM2Y/hsIAABaS9dXamhja1Yfo3rwv1vJd4MH+i4uWiDIv5PduY/8o7kbAvfu2jNv+LeGBt0nzp8zxKPMkoavutCqdQKpedG2C6QKi1fHymh55e8lpkabaUi7uXvj/ltJWoIH+fGFsp7l1MAUqrV8CzNB0QE1kZqU+Jgue7hBD8AzlVnwodwDYZ5hdOiXHRppYqiwhmKN1Sm5PKnclARDSjWHoMGq5J8Mo4m7+fe+PYfuCjuMbWrxakAq8c/pn2+P1IGo8ZRfNo9yKvNnVvHuQnVSjcLUU+ZWNOvsenxGsH/QoIY+AFA2ST1lbmWa8kytTSi1WseCGQF0XkqSxtJUZmp4pNaxYEoAq89VG0yszUjIq6QGpjBbQwMAsAZNLiWUioVmVe2HZyo3N/P6/M+NXSXFbgzoo6qy6Uzm6cAxq54Uvlli0nLevqBXk1NGeedITNtVp1Z6WxIAAJp7iz/dfTOz10A7M9deAct7BVDqsEOL5q041GbnhAallmxrV9QhITQXGvIKKQAAoNTpGvrtHtqt0WYqL69afbP5mq0rW1qSqkvTR/xR3pqkyFJoyNMYWAACqLwsDW1boobSh1tqBwAEQZRbIaM8V8HQRpvQyRXV8Jo25vyFLNexjc0Y5YXqDvEGa8h6du6PPfvPJdh2GxWwY/5HimK3l/iOg9Yc6EmxQPDNpMb+xireXahOqtEHYhcHr6J/FAXolZSQo7HXy85JX69WfFwrT1/7uCMXYrWsIfX8sinfHE+z9OrqGPv3+VgtC/qky0diFJ0/klV+8sOoQ07eV9JAZ907E2vh1UIusK5qP6RVq+5Osf87H6dlgckN3b9s3YU0qpxhSD5Ja/L0r6dvFZ/m0xnXj8S59mlh8erPy7RJb4/kY1fiIvfOnPHLk1wG+BaODexELKOLLr2EfTUGX9bUQxR59lE2w2pjzx58kvdWU2QAogabyWhVuWBV39Gcx+SHnTgWozNodEae7QEAnqxpS/MXp29nUGBIu3H0cW6J1coe7hS6+E+NVFjO0C8rNLpRFdcAAMAUpj78Y8nXhwTDpne3Id9iiDc9ZV3e8EuIxH/Fnwc3fjW0taLUjXpSLLGWyWQya4nxO1OVl4rqnBrNTGe1HLE74nTRDf3HWVFdj80ou45EaDar5YiyywXOwxcHxC0O7L+9gLRtN/GHMS6mpk6Lv0xcNmfoPgPLt/MOWDyqgQAqfdpPYNfK4e6SiZtiUgsd/BctcBcB6Ty8iv3w6w3+YUbC0jnD9ugZsGgycPa3tnwwmjOktEVXt01Lh457vunXGU3FldREpVw6lujyacvXWQqEedM+7unbr/PXDndfsXxE3zwg+VbNhswLbNTIMNx9SfEl9QUpLxuZNJs802fe6pH+QQ5Ne/TtpEgpZ7jK1GAz+YpuE7qcXD168E4753afTPyizaJN8zY22+ZvpK24yYSvei9Y9YnfFrlrJz+felEGulj6lz3cgmKbY6xCPmts6J2BryvcUnajyPJq0MZu+aTrFgAAoU3z7mM2bBra1IQAMLp1FQ/xelfZ9F4e1LtK+59JPx4w8qcwGgDg/jDfdaTH7IPbhlS4u1BdRERHRysUikrXCw8Pb926ddnlRQ/tV9BwV9eF7+4lKF1E0Pjv2cV7Az1q5anMfwHDsCRJAGifrhq92mbt7s9cBJU3QnUUvk5ap9X0uvcED79dXRdKhGZlfyQRmr3TJP3g0alHAvyn/hmjZRnVkzP3qUYt7epukhIEEMSHsAShcnBwN3+Ch18XBy/8ohPO8RS9AsfcWzptwE4azBv7z1/S2shHVl1RdCmYID6EfyBkTE1P8xGqnqLJXfFUqotLECqDm+dMEaqqspFUF5cgVAY+K4wQQhzAMEUIIQ5gmCKEEAeqGqYkSdJ0lb/GASGE/mOqGqZSqTQhIcFg4Pb7xxFC6ANR1bv5tra2SqUyLCyMosp7rxshhP67qhqmBEHI5XK5HL8PHCGEjMAbUAghxAEMU4QQ4gCGKUIIcQDDFCGEOMAHALVaXdtlIIRQ3cYHAHt7/KI8hBCqETzNRwghDmCYIoQQBzBMEUKIAximCCHEAQxThBDiAIYpQghxAMMUIYQ4gGGKEEIcwDBFCCEOYJgihBAH/h9mWmmB3IVxqgAAAABJRU5ErkJggg=="},9422:function(e,t,n){t.Z=n.p+"assets/images/savefilter3-6d1c2be0466bc44ba8a8cc22611d8f5f.jpeg"},7741:function(e,t,n){t.Z=n.p+"assets/images/savefilter4-c1469f7725d361a0a14f699eca3bbc82.png"},2344:function(e,t){t.Z="data:image/png;base64,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"}}]);