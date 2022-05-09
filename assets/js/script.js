$(function(){
    ////////////////////
    // ハンバーガーメニュー
    ////////////////////
    
    // 要素を変数に格納
    const $btn_hum = $('#hum');     // ハンバーガーメニューのボタン
    const $sp_menu = $('#sp_menu'); // スマホメニュー
    
    // メニューのローディングクラスを削除
    $sp_menu.removeClass("sp_loading");

    // スマホメニュー非表示
    $sp_menu.hide();

    // ハンバーガーメニューのボタンのクラスのトグル
    $btn_hum.click(function(){
        $btn_hum.toggleClass("header__btn_active");
        $sp_menu.toggleClass("sp_active");
        if($sp_menu.hasClass("sp_active")){
            $sp_menu.fadeIn();
        }
        else{
            $sp_menu.fadeOut();
        }
    });

});