# CLI Lab
## タスク 1
1. まずは [ASK CLIのインストールと初期化](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) を参照して、CLIをインストールください。

 **早く終わった方は** ぜひ周りの方を助けてあげてください。または、以下のドキュメントを参照して CLI コマンドを見てみてください。
 
 **リンク:**
 [ASK CLIのコマンド](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html)

  
 ## 問題解決のヒント
 
 **1. npmをインストールしたら、'file/folder/here/' への書き込み権限に関するエラーが大量にでました。どうしたらいいですか**
 
   `sudo npm install -g ask-cli` のようなコマンドを使って、管理者権限で npm のインストールを試してみてください。

   それでもうまくいかない場合、`sudo chown -R $USER /usr/local` でそのフォルダの所有者を変更して、その後 `sudo npm install -g ask-cli` を再度試してみてください。

   **ノート:** この操作には、ご利用の機材の管理者パスワードが必要です。


 **2. pythonでエラーが発生します。**
 
   一度 ask-cli をアンインストールして、再インストールしてみてください。

   アンインストール方法: `npm uninstall -g ask-cli`

   インストール方法: `npm install-g ask-cli`  
   

**3. インストールは成功するのですが、`ask` コマンドを実行しても何も起こりません。**

   ご利用のターミナルウィンドウもしくはコマンドプロンプトを一旦閉じて、再度開きなおしてみてください。
