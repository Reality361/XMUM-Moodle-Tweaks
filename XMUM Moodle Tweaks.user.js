// ==UserScript==
// @name         XMUM Moodle Tweaks
// @namespace    http://tampermonkey.net/
// @version      2024-12-18
// @description  Try to take over the moodle!
// @author       Reality361
// @match        https://l.xmu.edu.my/*
// @icon         https://l.xmu.edu.my/pluginfile.php/1/core_admin/favicon/64x64/1726281221/XMUM%20Logo.PNG
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/521051/XMUM%20Moodle%20Tweaks.user.js
// @updateURL https://update.greasyfork.org/scripts/521051/XMUM%20Moodle%20Tweaks.meta.js
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...
    // Add E-Services tab at the top
    var navBarElement = document.querySelector("ul.nav.more-nav.navbar-nav");
    var EServices = document.createElement("li");
    EServices.innerHTML = "<li data-key=\"\" class=\"nav-item\" role=\"none\" data-forceintomoremenu=\"false\" id=\"yui_3_17_2_1_1734448446301_77\"><a role=\"menuitem\" class=\"nav-link\" href=\"https://eservices.xmu.edu.my/\" target=\"_blank\" tabindex=\"-1\" aria-current=\"true\" id=\"yui_3_17_2_1_1734448446301_76\">E-Services</a></li>";
    var myCoursesElement = document.querySelector('[data-key="mycourses"]');
    navBarElement.insertBefore(EServices, myCoursesElement.nextSibling); // insertAfter()

    /*
    var dashboardElement = document.querySelector('[data-key="myhome"]');
    dashboardElement.style.display = "none";
    */
    // Hide "?" button at the bottom
    var moodleBtnElement = document.querySelector('button.btn.btn-icon.bg-secondary.icon-no-margin.btn-footer-popover');
    moodleBtnElement.style.display = "none";

    // Optimize items in the course view
    var activityElements = document.querySelectorAll('div.activity-item');
    activityElements.forEach(element => {
        element.style.padding = "0";
    });
    var itemIconElements = document.querySelectorAll('div.activityiconcontainer.content.courseicon.align-self-start.mr-3, div.activityiconcontainer.collaboration.courseicon.align-self-start.mr-3');
    itemIconElements.forEach(element => {
        element.style.height = "30px";
    });
    var collapseBtnElements = document.querySelectorAll('.btn.btn-icon.mr-1.icons-collapse-expand.justify-content-center.stretched-link');
    collapseBtnElements.forEach(element => {
        element.style.height = "20px";
    });
    var sectionnameElements = document.querySelectorAll('.sectionname.course-content-item.d-flex.align-self-stretch.align-items-center.mb-0');
    sectionnameElements.forEach(h3Element => {
        // new h6
        let h6Element = document.createElement('h6');

        // copy h3 to h6
        h6Element.innerHTML = h3Element.innerHTML;
        for (let i = 0; i < h3Element.attributes.length; i++) {
            h6Element.setAttribute(h3Element.attributes[i].name, h3Element.attributes[i].value);
        }

        // replace h3 with h6
        h3Element.parentNode.replaceChild(h6Element, h3Element);
    });
    var itemPlaceHolderBtnElements = document.querySelectorAll('li.section');
    itemPlaceHolderBtnElements.forEach(element => {
        element.style.paddingTop = "0";
        element.style.paddingBottom = "0";
    });
    var pageHeaderElement = document.getElementById('page-header');
    pageHeaderElement.style.display = "none";
    // Change color from #0f47ad to #003153
    var secondaryNavigationElements = document.querySelectorAll('.secondary-navigation');
    secondaryNavigationElements.forEach(element => {
        element.style.backgroundColor = "#003153";
    });
    // Change color from #0f47ad to #003153
    var drawerBtnElements = document.querySelectorAll('.btn.icon-no-margin');
    drawerBtnElements.forEach(element => {
        element.style.backgroundColor = "#003153";
    });
    var crossElements = document.querySelectorAll('.icon.fa.fa-times.fa-fw');
    crossElements.forEach(element => {
        element.style.filter = "invert(100%)";
    });
})();