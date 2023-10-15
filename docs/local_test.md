# ローカルにおける動作確認方法

## ローカル上で立ち上げた API サーバに対してリクエストを送る手順

### 1.仮想環境を立ち上げる

\*-env : 仮想環境名(e.g. lambda-env)

```
cd backend
```

後に

```bash
source lambda-env/bin/activate
```

or

```bash
./run.sh # 仮想環境lamda-envが存在していなければこちらを実行して仮想環境を用意する
source lambda-env/bin/activate
```

### 2.サーバの起動

カレントディレクトリが backend/

```
start_server.sh
```

### 3.API を呼び出す

サンプルとしてテスト用 sampleApi を呼び出す。

```
curl -X GET "http://localhost:8000/sampleApi2/hello" -H  "accept: application/json"
```

期待した結果が得られていれば OK

## 作成した API の ユニットテスト をする

ディレクトリ構成は以下とする。
カレントディレクトリは backend/

指定したルーティング対象をテストする

```
python -m pytest test/test_sample.py
```

```bash
## 結果の例

(lambda-env) $ python -m pytest test/test_sample.py
=============================================================================== test session starts ===============================================================================
platform linux -- Python 3.10.10, pytest-7.4.0, pluggy-1.2.0
rootdir: ~/bol-app/backend
plugins: anyio-3.7.1
collected 1 item

test/test_sample.py .
```

全てのユニットテストを行う

```
python -m pytest
```
