angular.module('blog')

.factory('Post', ['$resource', 'ApiUrl', function($resource, ApiUrl) {
  return $resource(
    ApiUrl + "/posts/:id",
    { id: "@id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
}]);