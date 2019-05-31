# CLI Lab
## タスク 5

  **"アレクサ、オス目黒さんに調子はどうって聞いて" などのユーザー発話に返答するように、あなたの Alexa スキルの機能を拡張してみましょう。**

1. まずは対話モデルを編集して VUI (Voice UI) を変更します。お好みのコードエディタで `models/ja-JP.json` を開いてください。

2. 次の JSON コードをコピーして `26行目` と `27行目` の間にペーストします. 余裕があったらもっといろんなパターンを追加してみてください。途中の行にはカンマをお忘れなく。

  ```
        {
          "name": "HowAreYouIntent",
          "slots": [

          ],
          "samples": [
            "調子はどう",
            "ご機嫌いかが",
            "元気"
          ]
        },
   ```
**ノート:** 最後の中カッコの後ろのカンマもお忘れなく

3. 変更した対話モデルを保存してください。

4. 次に、lambda 関数 (`lambda/custom/index.js`) を開いて、次のコードをコピーして `35行目` にペーストしてください。

  ```
const HowAreYouIntentHandler = {

	canHandle(handlerInput) {
    		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      		&& handlerInput.requestEnvelope.request.intent.name === 'HowAreYouIntent';
	},
	handle(handlerInput) {

		const speechText = 'I\'m doing just great!';

		return handlerInput.responseBuilder
			.speak(speechText)
			.withSimpleCard('Hello World', speechText)
			.getResponse();
	},
};
  ```
5. speechText 変数の内容を、返答させたい好きなものに変更してください。例えば、"すこぶる快調ですよ" などなんでも結構です。

6. lambda 関数の `113行目` にスクロールダウンして `HowAreYouIntentHandler,` をインテントハンドラーの配列に追加してください。 

次のようになるはずです:

  ```
    .addRequestHandlers(
	    LaunchRequestHandler,
	    HelloWorldIntentHandler,
	    HowAreYouIntentHandler,
	    HelpIntentHandler,
	    CancelAndStopIntentHandler,
	    SessionEndedRequestHandler
    )
  ```
  **ノート:** カンマの過不足に注意してください。
  
  
6. lambda 関数の変更も保存してください。対話モデルと lambda 関数の両方を変更しているので、`ask deploy` とターミナルウィンドウでコマンド入力して、対話モデルと lambda 関数の両方をデプロイするようにしてください。


7. ターミナルウィンドウから `ask simulate -l ja-JP -t "オス目黒に調子はどうって聞いて"` と入力して、ここから直接テストしてみます。 

これまでの練習で呼び出し名を変更している場合は、`オス目黒さん` ではなくその名前を使うことをお忘れなく。

お疲れさまでした! 変更内容は、お手元のデバイス、[alexa developer console](https://developer.amazon.com/alexa/console/ask) の「テスト」ページ、[echosim.io](https://www.echosim.io) などでももちろん確認できます。新たに拡張した対話 "アレクサ、オス目黒に調子はどうって聞いて" を試してみてください。あるいは、"アレクサ、オス目黒を開いて" と発話してスキルを起動したのち、"調子はどお" と発話しても動くはずです。
