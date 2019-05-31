 # CLI Lab
## タスク 2
  **CLIのセットアップができたら、さっそく最初のプロジェクトに取り掛かりましょう**

1. ターミナルウィンドウ(もしくはコマンドプロンプト)を開いて、任意の作業ディレクトリに移動してください。

**ノート:** ターミナルウィンドウを開いたら、この Lab の間はウィンドウを閉じないでおきましょう。

2. 次のコマンドを入力してください 

  ```
ask new
  ```

3. スキル名を指定してください。

コマンドを実行すると "Please type in your new skill name:" と入力が促されますので、スキル名を入力してください。スキル名はなんでもかまいませんが、内容を連想させるようなものがおすすめです。ここでは `hello-world` としておきましょう。

**確認:** *"New Project for Alexa Skill Created"* というメッセージが出ているはずです

4. `/hello-world` ディレクトリに移動

CLI は "hello-world" という名のディレクトリを作成して、 その中に Alexa スキルプロジェクトに必要なファイルを生成します。

5. `skill.json` ファイルを開き、`5行目`の`"en-US"` を `"ja-JP"` に修正し保存します。

6. `models`フォルダ内の `en-US.json` ファイルの名前を `ja-JP.json` に変更します。

7. `ja-JP.json` ファイルを開き、`4行目`の`"invocationName"`の値`"greeter"`を `"ハローワールド"`に修正し保存します。

8. ターミナルウィンドウから次のコマンドを入力してください:

  ```
ask deploy
  ```

このコマンドは、あなたの Alexa スキルの lambda 関数と対話モデルをクラウドにデプロイします。

9. [AWS コンソール](https://aws.amazon.com/lambda/) にログインして、lambda 関数がデプロイされているか確認してください。

10. 同様に [alexa developer console](https://developer.amazon.com/alexa/console/ask) にログインして、対話モデルがデプロイされているか確認してください。

11. アカウントに紐づいた Echo デバイスでデプロイしたスキルをテストします。"アレクサ、ハローワールドを開いて" と話しかけてみてください。 もしデバイスをお持ちでなければ、[alexa developer console](https://developer.amazon.com/alexa/console/ask) の「テスト」ページ、もしくは [echosim.io](https://www.echosim.io) でテストすることもできます。

**早く終わった方は** ぜひ周りの方を助けてあげてください。
