module.exports = {
  /**
   * 资源文件所在项目目录，如果就在根目录，此参数给空即可，如果不是，格式如：“alipay/tiny/games/”
   */
  appFold: "",

  /**
   * 生成的资源配置文件，只扫描 <res> 目录下的资源
   */
  resourceName: "resources.js",

  /**
   * 生成的资源配置模版
   *
   * 默认是：
   * var RESOURCES = {
   *  <% list.forEach(function(item, i){ %>
   *  '<%= item.name %>': '<%= item.path %>',
   *  <% }); %>
   * };
   *
   * 也可以输出成 ES6：
   * <% list.forEach(function(item, i){ %>
   * import <%= item.name %> from '<%= item.path %>';
   * <% }); %>
   * export {
   * <% list.forEach(function(item, i){ %>
   *   <%= item.name %>,
   * <% }); %>
   * };
   */
  resourceTemplate: "" //为空会使用默认模版
};
