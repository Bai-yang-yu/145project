$(function () {
    // 左侧菜单
    $('.leftNav').find('.fj').hover(
        function () {
            $(this).siblings('.zj').show();
        },
        function () {
            $(this).siblings('.zj').hide();
        })
    // 轮播图
    var timer;
    var timeIndex = 0;
    // 轮播图-下标切换
    function timeNum() {
        $('.top_slide_wrap').children('.num').children('li').removeClass().eq(timeIndex).addClass('active');
    };
    // 轮播图-图片切换
    function slide() {
        $('.top_slide_wrap').children('.slide_box').fadeOut(
            function () {
                $('.top_slide_wrap').children('.slide_box').fadeIn(timeNum());
                $('.slide_box').children('li').removeClass();
                $('.slide_box').children('li').eq(timeIndex).addClass('active');
                $('.slide_box').children('li').css('top', timeIndex * -401 + 'px');
            }
        );
    }
    // 轮播图-自动播放
    function time_() {
        timer = setInterval(
            function () {
                timeIndex++;
                timeIndex > 2 ? timeIndex = 0 : timeIndex;
                slide()
            }
            , 2000);
    }
    time_();
    // 轮播图-点击下标
    $('.top_slide_wrap').children('.num').children('li').hover(
        function () {
            clearInterval(timer);
            if (timeIndex != $(this).index()) {
                timeIndex = $(this).index();
                timeNum();
                slide();
            } else {
                timeNum();
            }
        },
        function () {
            time_()
        })
    // 下拉菜单
    $('.ss_list').children('a').hover(
        function () {
            $('.ss_list_bg').stop().slideDown();
        }
        ,
        function () {
            $('.ss_list_bg').stop().slideUp()
        })
    // 滑动列表
    var timer2;
    var newsTop = 0;
    function slideUp_() {
        timer2 = setInterval(
            function () {
                newsTop -= 1;
                newsTop <= -150 ? newsTop = 0 : newsTop;
                $('#express').children('li').css('top', newsTop)
            }, 80)
    }
    slideUp_();
    $('#express').hover(
        function () {
            clearInterval(timer2)
        },
        function () {
            slideUp_()
        })
    // 购物车
    $('.car_t,.last').hover(function () {
        $('.last').stop().fadeIn()
    }, function () {
        $('.last').stop().fadeOut()
    })
    var shopCar = {};
    shopCar.list = [];
    shopCar.tNum = 0;
    shopCar.tPrice = 0;
    // 初始化数据
    $.each($('.shop').find('li'), function (i, n) {
        var num_ = $(n).find('.J_inputCount').val() - 0;
        var price_ = $(n).find('.J_smallTotalPrice').text().slice(1) - 0;
        shopCar.list.push({
            num: num_,
            price: price_,
            tp: num_ * price_
        });
        shopCar.tNum += num_;
        shopCar.tPrice += shopCar.list[i].tp;
    })
    total()
    // 加
    $('.J_btnAddCount').click(function () {
        var index_ = $(this).parents('li').index();
        var num_ = shopCar.list[index_].num + 1;
        dataChange(index_, num_)
    })
    // 减
    $('.J_btnDelCount').click(function () {
        var index_ = $(this).parents('li').index();
        var num_ = shopCar.list[index_].num - 1;
        if (num_ >= 1) {
            dataChange(index_, num_);
        } else if (confirm('是否要删除该商品?')) {
            del(index_)
        }

    })
    // 重新修改总计值
    function total() {
        shopCar.tNum = 0
        shopCar.tPrice = 0
        $.each(shopCar.list, function (a, b) {
            shopCar.tNum += b.num;
            shopCar.tPrice += b.tp;
            $('.J_totalPrice').html('￥' + shopCar.tPrice);
            $('.J_totalCount').html('(' + shopCar.tNum + ')');
        })
    }
    // 改变数据
    function dataChange(i, n) {
        shopCar.list[i].num = n;
        shopCar.list[i].tp = shopCar.list[i].num * shopCar.list[i].price;
        total();
        $('.J_inputCount').eq(i).val(n);
        $('.J_count').eq(i).html('共' + n + '件商品')
        $('.J_smallTotalPrice').eq(i).html('￥' + shopCar.list[i].tp);
    }
    // 删除按钮
    $('.close').click(function () {
        var i = $(this).parents('li').index();
        del(i)
    })
    // 删除功能
    function del(i) {
        $('.shop').find('li').eq(i).remove();
        shopCar.list.splice(i, 1);
        total();
        if ($('.shop').find('li').length == 0) {
            $('.shop').hide();
            $('.noshop').show()
        }
    }
})

