// service: Factory
angular.module('app.factories')


.factory('posts', [function(){
  var o = {
    posts: [
      { title: 'Culo', id: 1 },
      { title: 'Cacca', id: 2 },
      { title: 'Tette', id: 3 }
    ]
  };
  return o
}])