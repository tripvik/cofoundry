/*! UberCMS 2017-06-01 */
angular.module("cms.pageTemplates",["ngRoute","cms.shared"]).constant("_",window._).constant("pageTemplates.modulePath","/Admin/Modules/PageTemplates/Js/"),angular.module("cms.pageTemplates").config(["$routeProvider","shared.routingUtilities","pageTemplates.modulePath",function(a,b,c){b.registerCrudRoutes(a,c,"PageTemplate")}]),angular.module("cms.pageTemplates").factory("pageTemplates.pageModuleTypeService",["$http","shared.serviceBase",function(a,b){var c={},d=b+"page-module-types";return c.getAll=function(){return a.get(d)},c}]),angular.module("cms.pageTemplates").factory("pageTemplates.pageTemplateService",["$http","shared.serviceBase",function(a,b){function c(a){return e+"/"+a}var d={},e=b+"page-templates";return d.getAll=function(b){return a.get(e,{params:b})},d.getById=function(b){return a.get(c(b))},d}]),angular.module("cms.pageTemplates").controller("PageTemplateDetailsController",["$routeParams","$location","shared.LoadState","pageTemplates.pageTemplateService","pageTemplates.modulePath",function(a,b,c,d,e){function f(){j.editMode=!1,j.globalLoadState=new c,j.formLoadState=new c(!0),g().then(i.bind(null,j.formLoadState))}function g(){function b(a){j.pageTemplate=a,j.command=h(a),j.editMode=!1}var c=a.id;return d.getById(c).then(b)}function h(a){return _.pick(a,"pageTemplateId","name","description")}function i(a){j.globalLoadState.off(),a&&_.isFunction(a.off)&&a.off()}var j=this;f()}]),angular.module("cms.pageTemplates").controller("PageTemplateListController",["_","shared.LoadState","shared.SearchQuery","pageTemplates.pageTemplateService",function(a,b,c,d){function e(){i.gridLoadState=new b,i.query=new c({onChanged:g}),i.filter=i.query.getFilters(),i.toggleFilter=f,f(!1),h()}function f(b){i.isFilterVisible=a.isUndefined(b)?!i.isFilterVisible:b}function g(){f(!1),h()}function h(){return i.gridLoadState.on(),d.getAll(i.query.getParameters()).then(function(a){i.result=a,i.gridLoadState.off()})}var i=this;e()}]);