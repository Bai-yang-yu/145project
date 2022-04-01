$(function () {
    // 排他点击
    $('#choice1').find('li').click(function () {
        $(this).addClass('checked').siblings('li').removeClass()
    })
    $('#choice2').find('li').click(function () {
        $(this).addClass('checked').siblings('li').removeClass()
    })
    // 数量更改
    var n_ipt_num = 1;
    $('.j_nums').find('.n_btn_1').click(function () {
        n_ipt_num++;
        n_ipt_change()
    })
    $('.j_nums').find('.n_btn_2').click(function () {
        n_ipt_num--;
        n_ipt_change()
    })
    function n_ipt_change() {
        if (n_ipt_num <= 1) {
            n_ipt_num = 1
            $('.j_nums').find('.n_btn_2').attr('disabled', 'true')
        } else (
            $('.j_nums').find('.n_btn_2').removeAttr('disabled')
        )
        $('.n_ipt').val(n_ipt_num)
    }
    // 组合购买
    var list_sum = 0;
    $('.team_list').find('input').change(function () {
        list_sum = 0;
        $.each($('.team_list').find('input:checked'), function (i, n) {
            list_sum += $(n).parent().siblings().html().substr(1) - 0;
        })
        list_count()
    })
    $('.team_sum').find('input').change(function () {
        list_count()
    })
    function list_count() {
        var list_num = $('.team_sum').find('input').val() - 0;
        var tPrice = list_num * list_sum
        $('.team_sum').find('span').html(tPrice)
    }
})