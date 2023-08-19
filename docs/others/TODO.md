しなきゃいけないこと
・fastApi による構築
・lambda 上で構築。S3 に画像ファイルのアップロードするよう構築。

したいこと
　・mermaid によるシーケンス図作成

細かい話
・curl -X 大文字
・doc より redoc の方がモダンに見える。まぁ使いやすい方で。

## path param

・定義済みの値を設定するときは Enum クラスを使って定義。そして、それを関数引数の型として当ててあげればＯＫ。
async def get_model(model_name: ModelName):＜＝この部分をパスパラメータといってんな...。

## query param

パスパラメータで無いけど、関数引数になんか渡してみる。
optional な書き方が結構冗長に見えるんだけどな。
async def query_param(aaa: str, bbb: Union[str, None] = None)


async def read_items(
    q: Union[str, None] = Query(
        default=None, min_length=3, max_length=50, pattern="^fixedquery$"
    )
):
という感じで色々オプションがある。必須なら
async def read_items(q: str = Query(min_length=3)):

この辺は文字列バリデーション。


