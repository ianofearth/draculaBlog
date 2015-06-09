Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');  //nested route, uses {{outlet}} to display stuff that is nested
    this.resource('email');
  });
  this.resource('recent-comments');
  this.resource('post', {path: 'posts/:post_id'});
});
