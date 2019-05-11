//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ]
  },
  //监听页面加载事件
  onLoad: function () {
  },
  //点击搜索框
  tapToSearchPage: function() {
    //TODO
    console.log("TODO:跳转到搜索页面");
  },
  //监听页面下拉刷新事件
  onPullDownRefresh: function() {
    //TODO
    wx.showLoading({
      title: "loading...",
      mask: true
    });
    setTimeout(function() {
      wx.hideLoading();
      wx.stopPullDownRefresh();
    }, 3000);
  }
})
