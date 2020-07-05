"use strict";
Object.defineProperty(exports,"__esModule",{value:true});
var resource=(function(){
 function resource(){}
 resource.loading=null;
 return resource;
}());
exports.resource=resource;
function showLoading(isFirstTime){
 try {
  if (!resource.loading){
   resource.loading=window.sysLoading;
  }
  if (resource.loading){
   resource.loading.style.display='block';
   if (isFirstTime){
    resource.loading.classList.add('dark');
   }
   else {
    resource.loading.classList.remove('dark');
   }
  }
 }
 catch (er){
  console.log(er);
 }
}
exports.showLoading=showLoading;
function hideLoading(){
 try {
  if (!resource.loading){
   resource.loading=window.sysLoading;
  }
  if (resource.loading){
   resource.loading.style.display='none';
  }
 }
 catch (er){
  console.log(er);
 }
}
exports.hideLoading=hideLoading;
var DefaultLoadingService=(function(){
 function DefaultLoadingService(){}
 DefaultLoadingService.prototype.showLoading=function(firstTime){
  showLoading(firstTime);
 };
 DefaultLoadingService.prototype.hideLoading=function(){
  hideLoading();
 };
 return DefaultLoadingService;
}());
exports.loading=new DefaultLoadingService();
