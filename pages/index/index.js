//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImgUrls: [
      {
        index: 0,
        url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
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
    swiperImgCurrent: 0,
    itemList: [
      {
        index: 0,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程1',
        price: '999.00'
      },
      {
        index: 1,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程2',
        price: '999.00'
      },
      {
        index: 2,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程3',
        price: '999.00'
      },
      {
        index: 3,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程4',
        price: '999.00'
      }],
      iconsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
  },
  //监听页面加载事件
  onLoad: function () {
  },
  //点击搜索框
  tapToSearchPage: function() {
    //TODO
    console.log("TODO:跳转到搜索页面");
    wx.navigateTo({
      url: '../test/test',
    })
  },
  //监听轮播图切换事件
  onImgSwiperChange: function(e) {
    //当轮播图切换图片时，标记当前swiper下标
    this.setData({
      swiperImgCurrent: e.detail.current
    });
  },
  //监听轮播图点击事件
  tapImgSwiper: function() {
    //TODO
    console.log("当前点击的是第" + this.data.swiperImgCurrent + "张图。");
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
  },
  //查看商品详情
  tapToDetails: function() {
    //TODO
    console.log("查看商品详情");
  },
  //商品添加到购物车
  addToCart: function() {
    //TODO
    console.log("加入购物车");
  }
})
