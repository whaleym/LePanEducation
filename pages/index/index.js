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
    categoryList: [
      {
        index: 0,
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '分类1'
      },
      {
        index: 1,
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '分类2'
      },
      {
        index: 2,
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '分类3'
      },
      {
        index: 3,
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '分类4'
      },
      {
        index: 4,
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '分类5'
      },
      {
        index: 5,
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '分类6'
      }
    ],
    goodsList: [
      {
        index: 0,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '夏令营|航空小镇',
        price: '1280.00'
      },
      {
        index: 1,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '夏令营|西安研学：盛世中华·历史篇章',
        price: '2300.00'
      },
      {
        index: 2,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程3',
        price: '3333.00'
      },
      {
        index: 3,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程4',
        price: '4444.00'
      },
      {
        index: 4,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程5',
        price: '5555.00'
      },
      {
        index: 5,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程6',
        price: '6666.00'
      },
      {
        index: 6,
        signupimg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title: '测试课程7',
        price: '7777.00'
      }],
      carticon: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      isCartViewShow: false,
      animationData: {},
      cartInfo: {
        img: '',
        price: '',
        stock: '',
        choose: '请选择价格 数量'
      }
  },
  //监听页面加载事件
  onLoad: function () {
  },
  //点击搜索框
  tapToSearchPage: function() {
    //TODO
    wx.showToast({
      title: 'TODO:跳转到搜索页面',
      icon: 'none'
    });
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
    wx.showToast({
      title: 'TODO:前往页面' + (this.data.swiperImgCurrent + 1),
      icon: 'none'
    });
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
  //跳转到商品分类
  tapToCategory: function(e) {
    wx.showToast({
      title: 'TODO:跳转到分类' + (e.currentTarget.dataset.num + 1),
      icon: 'none'
    });
  },
  //查看商品详情
  tapToDetails: function(e) {
    //TODO
    wx.showToast({
      title: 'TODO:查看商品' + (e.currentTarget.dataset.num + 1),
      icon: 'none'
    });
  },
  //显示购物车窗口
  showCartView: function(e) {
    //TODO
    //获取当前点击的商品信息
    //将商品信息赋值到弹出框
    //处理弹框动画

    var t = this;
    var info = e.currentTarget.dataset.info;

    wx.showLoading({
      title: "loading...",
      mask: true
    });

    this.setData({
      cartInfo: {
        img: info.img,
        price: '￥' + info.price,
        stock: '库存' + 40 + '件',
        choose: '请选择价格 数量'
      }
    });

    //处理弹出动画
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear'
    });
    animation.translateY(500).step();
    this.setData({
      animationData: animation.export(),
      isCartViewShow: true
    });
    wx.hideLoading();
    setTimeout(function() {
      animation.translateY(0).step();
      t.setData({
        animationData: animation.export()
      });
    }, 200);
  },
  //隐藏购物车窗口
  hideCartView: function() {
    var t = this;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear'
    });
    animation.translateY(500).step();
    this.setData({
      animationData: animation.export()
    });
    setTimeout(function() {
      animation.translateY(0).step();
      t.setData({
        animationData: animation.export(),
        isCartViewShow: false
      });
    }, 200);
  },
  //商品加入购物车
  addToCart: function() {
    //TODO
    wx.showToast({
      title: 'TODO:加入购物车',
      icon: 'none'
    });
  },
  //立即购买
  buyNow: function() {
    //TODO
    wx.showToast({
      title: 'TODO:立即购买',
      icon: 'none'
    });
  },
  //弹窗屏蔽底层滚动响应的空函数，无须任何处理
  emptyHandler: function() {
  },
  //预览图片
  previewImg: function(e) {
    var arrImg = [];
    arrImg[0] = e.currentTarget.dataset.src;
    wx.previewImage({
      urls: arrImg
    });
  }
})
