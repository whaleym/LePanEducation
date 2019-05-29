//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isLoadSuccess: false,
    swiperImgUrls: [],
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
      }
    ],
    carticon: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
    isCartViewShow: false,
    animationData: {},
    cartInfo: {
      img: '',
      price: 0,
      stock: 0,
      choose: '请选择价格 数量',
      choosenum: 1,
      choosedata: [],
      chooseList: [
        {
          id: 0,
          title: '团体人数',
          dataList: [
            {
              id: 0,
              groupid: 0,
              content: '原价',
              status: false
            },
            {
              id: 1,
              groupid: 0,
              content: '单人报名',
              status: false
            },
            {
              id: 2,
              groupid: 0,
              content: '3人及以上报团',
              status: false
            }
          ]
        },
        {
          id: 1,
          title: '营期',
          dataList: [
            {
              id: 0,
              groupid: 1,
              content: '第一期：06月29日-07月03日',
              status: false
            },
            {
              id: 1,
              groupid: 1,
              content: '第二期：07月08日-07月12日',
              status: false
            },
            {
              id: 2,
              groupid: 1,
              content: '第三期：08月19日-08月23日',
              status: false
            }
          ]
        }
      ]
    }
  },

  //监听页面加载事件
  onLoad: function () {
    wx.showLoading({
      title: 'loading...',
      mask: true
    });

    wx.request({
      url: 'http://www.zhouxqyy.com/yuximin/PageConfigs/indexConfigs.json',
      success: res => {
        console.log(res.data);
        if(!res.data.swiperImgUrls) {
          console.log("获取数据失败，请重试！！！");
          return;
        }

        this.setData({
          isLoadSuccess: true,
          swiperImgUrls: res.data.swiperImgUrls
        });
      },
      fail: err => {
        console.log(err);
      },
      complete: res => {
        wx.hideLoading();
      }
    });
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
    var t = this;
    var info = e.currentTarget.dataset.info;

    wx.showLoading({
      title: "loading...",
      mask: true
    });

    var cartInfo = this.data.cartInfo;
    cartInfo.img = info.img;
    cartInfo.price = info.price;
    cartInfo.stock = 4;
    cartInfo.choose = '请选择价格 数量';
    cartInfo.choosedata = [];
    cartInfo.choosenum = 1;
    for(var i in cartInfo.chooseList) {
      var temp = cartInfo.chooseList[i];
      for(var j in temp.dataList) {
        temp.dataList[j].status = false;
      }
    }

    this.setData({
      cartInfo: cartInfo
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

  //增加所选商品数量
  addChooseNum: function() {
    var info = this.data.cartInfo;

    if(info.choosenum >= info.stock)
      return;

    info.choosenum++;
    this.setData({
      cartInfo: info
    });
  },

  //减少所选商品数量
  subChooseNum: function() {
    var info = this.data.cartInfo;
    
    if(info.choosenum <= 1)
      return;

    info.choosenum--;
    this.setData({
      cartInfo: info
    });
  },

  //监听输入商品数量事件
  inputChooseNum: function(e) {
    var info = this.data.cartInfo;

    if(e.detail.value > info.stock) {
      wx.showToast({
        title: '购买数量超出库存',
        icon: 'none'
      });
      info.choosenum = info.stock;
      this.setData({
        cartInfo: info
      });
    } else if (e.detail.value < 1) {
      info.choosenum = 1;
      this.setData({
        cartInfo: info
      });
    }
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
  },

  //购物车内选择商品类型
  cartSelected: function(e) {
    var dataset = e.currentTarget.dataset;
    var cartdata = this.data.cartInfo;
    for(var i in cartdata.chooseList) {
      var temp = cartdata.chooseList[i];
      if(dataset.groupid != temp.id)
        continue;

      for(var j in temp.dataList) {
        var temp1 = temp.dataList[j];
        if(temp1.id == dataset.num) {
          temp1.status = !temp1.status;
          this.setCartSelectData(i, j, temp1.status);
        } else {
          temp1.status = false;
        }
      }
    }

    this.setData({
      cartInfo: cartdata
    });
    this.updateCartView();
  },

  //设置所选中的信息
  setCartSelectData: function(groupid, dataid, isSeleted) {
    var cartInfo = this.data.cartInfo;
    var choosedata = cartInfo.choosedata;

    if(isSeleted) {
      //去除数组中相同groupid的项
      this.deleteSameItemInArray(groupid, choosedata);

      choosedata.push({
        groupid: groupid,
        dataid: dataid
      });
      choosedata.sort(function(a, b) {
        return a.groupid - b.groupid;
      })
    } else {
      for(var i in choosedata) {
        if(choosedata[i].groupid == groupid && choosedata[i].dataid == dataid) {
          choosedata.splice(i, 1);
        }
      }
    }

    this.setData({
      cartInfo: cartInfo
    });
  },

  //去除数组中相同groupid的项
  deleteSameItemInArray: function(key, array) {
    for(var i in array) {
      if(array[i].groupid == key) {
        array.splice(i, 1);
      }
    }
  },

  //更新购物车弹框显示
  updateCartView: function() {
    var cartInfo = this.data.cartInfo;

    if(cartInfo.choosedata.length == 0) {
      console.log("没有选择，显示初始内容");
      return;
    }

    for(var i in cartInfo.choosedata) {
      console.log(cartInfo.choosedata[i].groupid, cartInfo.choosedata[i].dataid);
    }
  },

  //根据groupid和dataid获取chooseList对应的数据
  getChooseDataList: function(groupid, dataid) {
    var chooseList = this.data.cartInfo.chooseList;
    for(var i in chooseList) {
      if(groupid != chooseList[i].id)
        continue;
      for(var j in chooseList[i].dataList) {
        var temp = chooseList[i].dataList;
        if(dataid == temp[j].id) {
          return temp[j].content;
        }
      }
    }
  }


})
