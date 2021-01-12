$(document).ready(function() {

  // factory functions

  function SocialMediaDashBoard (platform, username, followers, trend, count) {
    this.platform = platform;
    this.username = username;
    this.followers = followers;
    this.trend = trend;
    this.count = count;
  }

  function OverviewBox (title, platform, views, trend, change) {
    this.title = title;
    this.platform = platform;
    this.views = views;
    this.trend = trend;
    this.change = change;
  }

  //functions to append the info into HTML

  function appendSocialMediaInfo (object) {
    var $mediaBox = $('<div class = "media-box"></div>');
    var $icon = $('<img class = "images-social">');
    var $username = $('<h2 id = "username"></h2>');
    var $followers = $('<h1 id = "followers"></h1>');
    var $followersText = $('<p class = "followers-text"></p>')
    var $trendContainer = $('<div class = "trend-container"></div>')
    var $trend = $('<img class = "trend">');
    var $count = $('<p class = "range"></p>');

    $mediaBox
      .css("border-color", topBorderStyling(object.platform))
      .appendTo('#social-media-dashboard');
    $icon
      .attr("src",platformDecider(object.platform));
    $username
      .text(' ' + object.username)
      .prepend($icon)
      .appendTo($mediaBox);
    $followers
      .text(object.followers)
      .appendTo($mediaBox);
    $followersText
      .text(mediaText(object.platform))
      .appendTo($mediaBox);
    $trendContainer.appendTo($mediaBox);
    $trend
      .attr("src",trendDirection(object.trend));
    $count
      .text(object.count)
      .prepend($trend)
      .css("color",trendDirectionCSS(object.trend))
      .appendTo($trendContainer);
  }

  function appendOverviewInfo (object) {
    var $overviewBox = $('<div class = "overview-box"></div>');
    var $titleHeading = $('<h3 class = "title"></h3>');
    var $icon = $('<img class = "images-overview">');
    var $numbers = $('<h1 class = "numbers"></h1>');
    var $trendContainer = $('<div class = "trend-container"></div>');
    var $trend = $('<img class = "trend">');
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
    $trendContainer.appendTo($overviewBox);
    $trend
      .attr("src",trendDirection(object.trend));
    $changeRange
      .text(object.change)
      .prepend($trend)
      .css("color",trendDirectionCSS(object.trend))
      .appendTo($trendContainer);
  }

  //styling functions
  function platformDecider (platform) {
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

  function topBorderStyling (platform) {
    if (platform === 'facebook' || platform === 'twitter') {
      return '#2196F3';
    } else if (platform === 'instagram') {
      return 'linear-gradient(90deg, rgba(255,200,0,1) 23%, rgba(255,129,39,1) 52%, rgba(209,83,218,1) 88%)';
    } else {
      return '#fa3232';
    }
  }

  function mediaText (platform) {
    if (platform !== "youtube") {
      return 'F O L L O W E R S';
    } else {
      return 'S U B S C R I B E R S';
    }
  }

  function trendDirection (trend) {
    if (trend === 'up') {
      return 'images/icon-up.svg';
    } else {
      return 'images/icon-down.svg';
    }
  }

  function trendDirectionCSS (trend) {
    if (trend === 'up') {
      return 'green';
    } else {
      return '#fa3232';
    }
  }

  const facebookHandle = new SocialMediaDashBoard('facebook','@nathanf', 1987, 'up', '12 Today');
  const twitterHandle = new SocialMediaDashBoard('twitter','@nathanf', 1044, 'up', '99 Today');
  const instagramHandle = new SocialMediaDashBoard('instagram','@realnathanf', '11k', 'up', '1099 Today');
  const youtubeHandle = new SocialMediaDashBoard('youtube','Nathan F.', 8239, 'down', '144 Today');

  appendSocialMediaInfo(facebookHandle);
  appendSocialMediaInfo(twitterHandle);
  appendSocialMediaInfo(instagramHandle);
  appendSocialMediaInfo(youtubeHandle);

  //overview objects
  const facebookViews = new OverviewBox('Page Views', 'facebook', 87, 'up', '3%');
  const facebookLikes = new OverviewBox('Likes', 'facebook', 52, 'down', '2%');
  const instaLikes = new OverviewBox('Likes', 'instagram', 5462, 'up', '2257%');
  const instaViews = new OverviewBox('Profile Views', 'instagram', '52k', 'up', '1375%');
  const retweets = new OverviewBox('Retweets', 'twitter', 117, 'up', '303%');
  const tweetLikes = new OverviewBox('Likes', 'twitter', 507, 'up', '503%');
  const youtubeLikes = new OverviewBox('Likes', 'youtube', 107, 'down', '19%');
  const youtubeViews = new OverviewBox('Total Views', 'youtube', 1407, 'down', '12%');

  appendOverviewInfo(facebookViews);
  appendOverviewInfo(facebookLikes);
  appendOverviewInfo(instaLikes);
  appendOverviewInfo(instaViews);
  appendOverviewInfo(retweets);
  appendOverviewInfo(tweetLikes);
  appendOverviewInfo(youtubeLikes);
  appendOverviewInfo(youtubeViews);

})