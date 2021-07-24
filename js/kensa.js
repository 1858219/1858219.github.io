
// 各変数とチェックボックスの状態確認
var sing = 0;
var play = 0;
var rytm = 0;
var sound = 0;
var checkbox1 = document.getElementById('sayYes1');
var checkbox2 = document.getElementById('sayYes2');
var checkbox3 = document.getElementById('sayYes3');
var checkbox4 = document.getElementById('sayYes4');

//最終結果表示用
var resultMessage;

//チェック状態の受け渡し
var checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', sayYes_check);

//適性診断
function sayYes_check(){

    //各チェックの状態を１か0であらわす。
    if(checkbox1.checked){
        sing += 1;
        console.log(sing);
    }
    else{

        console.log(sing);
    }
    if(checkbox2.checked){
        play += 1;
        console.log(play);
    }
    else{
        console.log(play);
    }
    if(checkbox3.checked){
        rytm += 1;
        console.log(rytm);
    }
    else{
        console.log(rytm);
    }
    if(checkbox4.checked){
        sound += 1;
        console.log(sound);
    }
    else{

        console.log(sound);
    }

    //それぞれのの状態に適した結果をリザルトへ渡す。
    if(sing == 1 && play == 1 && rytm == 1 && sound == 1){
        resultMessage = "難易度は高いですが、歌って楽器ができるギターボーカル！"
    }

    else if(sing == 1 && play == 0 && rytm == 1 && sound == 1){
        resultMessage = "歌いたいけど目立ちたくないあなたにはベースがおすすめです！コーラスなどでまずは歌って慣れてきたらボーカルを！"
    }
    else if(sing == 1 && play == 0 && rytm == 1 && sound == 0){
        resultMessage = "まずはキーボードやベースがおすすめ！コーラスから入って場慣れしてみましょう！"
    }
    else if(sing == 1 && play == 0 && rytm == 0 && sound == 1){
        resultMessage = "頑張ってボーカルに挑戦してみましょう！最初は身内ライブなどで場慣れしてみましょう！"
    }
    else if(sing == 1 && play == 0 && rytm == 0 && sound == 0){
        resultMessage = "あなたにはキーボードがおすすめです！コーラスなどでまずは歌って慣れてきたらボーカルを"
    }
    else if(sing == 1 && play == 1 && rytm == 0 && sound == 1){
        resultMessage = "一番のオススメはボーカル！歌いまくろう！"
    }
    else if(sing == 1 && play == 1 && rytm == 0 && sound == 0){
        resultMessage = "一番のオススメはボーカル！バラードなど、やわらかい曲ができるとよいですね！"
    }
    else if(sing == 1 && play == 1 && rytm == 1 && sound == 0){
        resultMessage = "一番のオススメはボーカル！二番目がギターです！"
    }
   
    
    else if(sing == 0 && play == 1 && rytm == 1 && sound == 1){
        resultMessage = "一番のオススメはギター！二番目がドラムです！"
    }
    else if(sing == 0 && play == 1 && rytm == 1 && sound == 0){
        resultMessage = "一番のオススメはドラム！次いでギター！"
    }
    else if(sing == 0 && play == 1 && rytm == 0 && sound == 1){
        resultMessage = "一番のオススメはギター！"
    }
    else if(sing == 0 && play == 1 && rytm == 0 && sound == 0){
        resultMessage = "一番のオススメはギター！次にキーボードです！"
    }
    else if(sing == 0 && play == 0 && rytm == 1 && sound == 1){
        resultMessage = "一番のオススメはベース！二番目がドラムです！"
    }
    else if(sing == 0 && play == 0 && rytm == 1 && sound == 0){
        resultMessage = "一番のオススメはベース！"
    }
    else if(sing == 0 && play == 0 && rytm == 0 && sound == 1){
        resultMessage = "一番のオススメはギター！二番目がボーカルです！"
    }
    else if(sing == 0 && play == 0 && rytm == 0 && sound == 0){
        resultMessage = "とりあえず全部のパートの楽器などに触ってみましょう！"
    }

    //htmlに結果を渡す
    var html_resultMessage = document.getElementById("result");
        html_resultMessage.innerHTML = resultMessage;

    //最後に状態をリセット
    sing = 0;
    play = 0;
    rytm = 0;
    sound = 0;
}