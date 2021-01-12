$(document).ready(function() {

  // factory functions

  function SocialMediaDashBoard (platform, username, followers, count) {
    this.platform = platform;
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
    var $mediaBox = $('<div class = "media-box"></div>');
    var $icon = $('<img class = "images">');
    var $username = $('<h2 id = "username"></h2>');
    var $followers = $('<h1 id = "followers"></h1>');
    var $followersText = $('<p class = "followers-text"></p>')
    var $count = $('<p class = "range"></p>');

    $mediaBox
      .appendTo('#social-media-dashboard')
    $icon
      .attr("src",platformDecider(object.platform))
      .appendTo($mediaBox);
    $username
      .text(object.username)
      .appendTo($mediaBox);
    $followers
      .text(object.followers)
      .appendTo($mediaBox);
    $followersText
      .text('FOLLOWERS')
      .appendTo($mediaBox);
    $count
      .text(object.count)
      .appendTo($mediaBox);
  }

  function appendOverviewInfo (object) {
    var $overviewBox = $('<div class = "overview-box"></div>');
    var $titleHeading = $('<p class = "title"></p>');
    var $icon = $('<img class = "images">');
    var $numbers = $('<p class = "numbers"></p>');
    var $changeRange = $('<p class = "range"></p>');

    $overviewBox
      .appendTo('#overview-dashboard');
    $titleHeading
      .text(object.title)
      .appendTo($overviewBox);
    $icon
      .attr("src",platformDecider(object.platform))
      .appendTo($overviewBox);
    $numbers
      .text(object.views)
      .appendTo($overviewBox);
    $changeRange
      .text(object.change)
      .appendTo($overviewBox);
  }

  //function to add media icon according to platform
  function platformDecider(platform) {
    if (platform === 'facebook') {
      return 'images/icon-facebook.svg';
    } else if (platform === 'twitter') {
      return 'images/icon-twitter.svg';
    } else if (platform === 'instagram') {
      return 'images/icon-instagram.svg';
    } else {
      return 'images/icon-youtube.svg';
    }
  }

  const facebookHandle = new SocialMediaDashBoard('facebook','@nathanf', 1987, '12 Today');
  const twitterHandle = new SocialMediaDashBoard('twitter','@nathanf', 1044, '99 Today');
  const instagramHandle = new SocialMediaDashBoard('instagram','@realnathanf', '11k', '1099 Today');
  const youtubeHandle = new SocialMediaDashBoard('youtube','Nathan F.', 8239, '144 Today');

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