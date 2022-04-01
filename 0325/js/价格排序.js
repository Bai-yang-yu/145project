$(function () {
    // 获取
    // 1图片地址
    // 2价格
    // 3名字
    var arr = [];
    var Object = {};
    var sort_ = 0;
    $.each($('.cate_list').children('li'), function (i, n) {
        var src_ = $(n).find('img').attr('src');
        var price_ = $(n).find('span').html().substr(1) - 0;
        price_ = price_.toFixed(2);
        var name_ = $(n).find('.name').children('a').html();
        Object = {
            src: src_,
            price: price_,
            name: name_
        }
        arr.push(Object)
    })
    // console.log(arr);
    // console.log('arr[4]:' + arr[4], 'arr[6]:' + arr[6]);
    // if (arr[4].price > arr[6].price) {
    //     console.log('我更大' + arr[4]);
    // } else {
    //     console.log('我更大' + arr[6]);
    // }
    $('#sortPrice').children('.fl').click(function () {
        sort_ == 0 ? UtoD() : DtoU();
        append_();
        return false
    })
    function DtoU() {
        sort_ = 0;
        // for (i = 0; i < arr.length; i++) {
        //     for (j = i + 1; j < arr.length; j++) {
        //         if (arr[i].price - 0 > arr[j].price - 0) {
        //             var c = arr[i];
        //             arr[i] = arr[j];
        //             arr[j] = c;
        //         }
        //     }
        // }
        arr.sort(function (a, b) {
            return a.price - b.price;
        })
        // console.log(arr);
    }
    function UtoD() {
        sort_ = 1;
        // for (i = 0; i < arr.length; i++) {
        //     for (j = i + 1; j < arr.length; j++) {
        //         if (arr[i].price - 0 < arr[j].price - 0) {
        //             var c = arr[i];
        //             arr[i] = arr[j];
        //             arr[j] = c;
        //         }
        //     }
        // }
        arr.sort(function (a, b) {
            return b.price - a.price;
        })
        // console.log(arr);
    }
    // 渲染
    function append_() {
        $('.cate_list').html('');
        $.each(arr, function (i, n) {
            var html_ = $('<li><div class="img"><a href="#"><img src="" width="210" height="185" /></a></div><div class="price"><span></span></div><div class="name"><a href="#"></a></div><div class="carbg"><a href="#" class="ss">收藏</a><a href="#" class="j_car">加入购物车</a></div></li>');
            $('.cate_list').append(html_);
            $('.cate_list').children('li:last').find('img').attr('src', n.src);
            $('.cate_list').children('li:last').find('.price').children('span').html('￥' + n.price)
            $('.cate_list').children('li:last').find('.name').children('a').html(n.name)
        })
    }
})