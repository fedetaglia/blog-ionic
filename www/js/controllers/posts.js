// INDEX
angular.module('blog')
.controller('PostsCtrl',[ 'Post', '$scope', function(Post, $scope) {
  $scope.posts = Post.index();
}]);

// SHOW
angular.module('blog')
.controller('PostCtrl', [ 'Post', '$scope', '$stateParams', function(Post, $scope, $stateParams) {
  $scope.post = Post.get({id: $stateParams.postId })
}]);

// CREATE
angular.module('blog')
.controller('NewPostCtrl', [ 'Post', '$scope', function(Post, $scope) {
  $scope.newPost = function() {
    Post.save($scope.postData);
  }
}]);