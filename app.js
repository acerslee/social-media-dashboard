$(document).ready(function() {

  // factory functions

  function SocialMediaDashBoard (username, followers, count) {
    this.username = username;
    this.followers = followers;
    this.count = count;
  }

  function OverviewBox (title, platform, views, change) {
    this.title = title;
    this.platform = platform;
    this.views = views;
    this.change = change;
  }

  //functions to append the info into HTML

  function appendSocialMediaInfo (object) {
    var $username = $('<h2 id = "username"></h2>');
    var $followers = $('<h1 id = "followers"></h1>');
    var $followersText = $('<p class = "followers-text"></p>')
    var $count = $('<p class = "range"></p>');

    $username
      .text(object.username)
      .appendTo('#social-media-dashboard');
    $followers
      .text(object.followers)
      .appendTo('#social-media-dashboard');
    $followersText
      .text('FOLLOWERS')
      .appendTo('#social-media-dashboard');
    $count
      .text(object.count)
      .appendTo('#social-media-dashboard');
  }


  function appendOverviewInfo (object) {
    var $titleBox = $('<p class = "title"></p>');
    //need to add icon selector
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

  const facebookHandle = new SocialMediaDashBoard('@nathanf', 1987, '12 Today');
  const twitterHandle = new SocialMediaDashBoard('@nathanf', 1044, '99 Today');
  const instagramHandle = new SocialMediaDashBoard('@realnathanf', '11k', '1099 Today');
  const youtubeHandle = new SocialMediaDashBoard('Nathan F.', 8239, '144 Today');

  appendSocialMediaInfo(facebookHandle);
  appendSocialMediaInfo(twitterHandle);
  appendSocialMediaInfo(instagramHandle);
  appendSocialMediaInfo(youtubeHandle);

  //overview objects
  const facebookViews = new OverviewBox('Page Views', 'facebook', 87, '3%');
  const facebookLikes = new OverviewBox('Likes', 'facebook', 52, '2%');
  const instaLikes = new OverviewBox('Likes', 'instagram', 5462, '2257%');
  const instaViews = new OverviewBox('Profile Views', 'instagram', '52k', '1375%');
  const retweets = new OverviewBox('Retweets', 'twitter', 117, '303%');
  const tweetLikes = new OverviewBox('Likes', 'twitter', 507, '503%');
  const youtubeLikes = new OverviewBox('Likes', 'youtube', 107, '19%');
  const youtubeViews = new OverviewBox('Total Views', 'youtube', 1407, '12%');

  appendOverviewInfo(facebookViews);
  appendOverviewInfo(facebookLikes);
  appendOverviewInfo(instaLikes);
  appendOverviewInfo(instaViews);
  appendOverviewInfo(retweets);
  appendOverviewInfo(tweetLikes);
  appendOverviewInfo(youtubeLikes);
  appendOverviewInfo(youtubeViews);

})