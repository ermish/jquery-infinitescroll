//Author: Philip Ermish
//Created: 5/12/2013
//License: GNU General Public License
// 	This program is free software: you can redistribute it and/or modify
// 	it under the terms of the GNU General Public License as published by
// 	the Free Software Foundation, either version 3 of the License, or
//	 (at your option) any later version.

// 	This program is distributed in the hope that it will be useful,
// 	but WITHOUT ANY WARRANTY; without even the implied warranty of
// 	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//	 GNU General Public License for more details.

// 	You should have received a copy of the GNU General Public License
// 	along with this program.  If not, see <http://www.gnu.org/licenses/>.

(function(e){e.fn.endlessScroll=function(){var t=this;var n=this;t.currentlyScrolling=false;t.settings={pageStart:0,pageSize:25,heightBuffer:50,smartScrolling:true,loadingHtml:'<div class="scrollLoading">Loading more...</div>',url:"",data:{},requestType:"GET",customFunction:""};t.setup=function(n){t.settings=e.extend({},t.settings,n);r();if(t.settings.smartScrolling==true){function i(){if(t.currentlyScrolling==false&&u()==true)t.scroll();window.setTimeout(i,200)}i()}else{e(window).scroll(function(){if(t.currentlyScrolling==false&&u()==true)t.scroll()})}return this};t.scroll=function(){i();if(t.settings.customFunction!=""){t.settings.customFunction(t.settings.pageStart,o(),t.settings.data);r();s();return this}if(t.settings.url!=""){var u={pageStart:t.settings.pageStart,pageEnd:o()};var a=e.extend(u,t.settings.data);e.ajax({type:t.settings.requestType,url:t.settings.url,data:a,success:function(e){n.append(e);r();s()},error:function(){n.append('<div class="scrollError" style="position: fixed; bottom: 0; right: 0; font-weight: bold; font-size: 20px; border: 2px;">Error loading data.</div>');var t=e(".scrollError");t.fadeOut(3e3);setTimeout(function(){t.remove()},3e3)}})}return this};var r=function(){e(".scrollLoading").remove();n.append('<div class="scrollActivator"> </div>');t.currentlyScrolling=false};var i=function(){t.currentlyScrolling=true;n.find(".scrollActivator").remove();n.after(t.settings.loadingHtml)};var s=function(){t.settings.pageStart+=t.settings.pageSize};var o=function(){return t.settings.pageStart+t.settings.pageSize};var u=function(){var n=e(window).height()+e(window).scrollTop();var r=t.find(".scrollActivator");if(typeof r==="undefined")return false;var i=r.offset().top;var s=(e(document).height()-i)*((t.settings.heightBuffer+.001)/100);var o=i+s;return o<=n&&r.is(":visible")};return this}})(jQuery)