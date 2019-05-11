//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        index: 0,
        url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      },
      {
        index: 1,
        url: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640'
      },
      {
        index: 2,
        url: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      }
    ],
    imgSwiperCurrent: 0
  },
  //监听页面加载事件
  onLoad: function () {
  },
  //点击搜索框
  tapToSearchPage: function() {
    //TODO
    console.log("TODO:跳转到搜索页面");
  },
  //监听轮播图切换事件
  onImgSwiperChange: function(e) {
    //当轮播图切换图片时，标记当前swiper下标
    this.setData({
      imgSwiperCurrent: e.detail.current
    });
  },
  //监听轮播图点击事件
  tapImgSwiper: function() {
    //TODO
    console.log("当前点击的是第" + this.data.imgSwiperCurrent + "张图。");
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
