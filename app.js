$(document).ready(function() {

  // factory function
  function OverviewBox (title, platform, views, change) {
    this.title = title;
    this.platform = platform;
    this.views = views;
    this.change = change;
  }

  //function to append the info into HTML
  function appendInfo (object) {
    var $titleBox = $('<p class = "title"></p>');
    // var $icon = $();
    var $numbers = $('<p class = "numbers"></p>');
    var $changeRange = $('<p class = "range"></p>');

    $titleBox
      .text(object.title)
      .appendTo('#overview-dashboard');
    $numbers
      .text(object.views)
      .appendTo('#overview-dashboard');
    $changeRange
      .text(object.change)
      .appendTo('#overview-dashboard');
  }

  //function to add media icon according to platform
  function platformDecider() {

  }

  const facebookViews = new OverviewBox('Page Views', 'facebook', 87, '3%');
  appendInfo(facebookViews);
  const facebookLikes = new OverviewBox('Likes', 'facebook', 52, '2%');
  appendInfo(facebookLikes);
  const instaLikes = new OverviewBox('Likes', 'instagram', 5462, '2257%');
  appendInfo(instaLikes);
  const instaViews = new OverviewBox('Profile Views', 'instagram', '52k', '1375%');
  appendInfo(instaViews);
  const retweets = new OverviewBox('Retweets', 'twitter', 117, '303%');
  appendInfo(retweets);
  const tweetLikes = new OverviewBox('Likes', 'twitter', 507, '503%');
  appendInfo(tweetLikes);
  const youtubeLikes = new OverviewBox('Likes', 'youtube', 107, '19%');
  appendInfo(youtubeLikes);
  const youtubeViews = new OverviewBox('Total Views', 'youtube', 1407, '12%');
  appendInfo(youtubeViews);

})