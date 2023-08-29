# limシナリオの実装を見ると
# aws_iam_role, aws_iam_role_policy, aws_lambda_function

resource "aws_iam_role" "image_api_lambda_role" {
  name = "image_api_lambda_role"
}

resource "aws_iam_role_policy" "image_api_lambda_role_policy" {
  role = aws_iam_role.image_api_lambda_role.id
  policy = jsonencode(
    {
      Version = "2012-10-17"
      Statement = [
        {
          Action = [
            "ec2:Describe*",
          ]
          Effect   = "Allow"
          Resource = "*"
        },
      ]
  })

}

#
data "archive_file" "lambda_api" {
  type        = "zip"
  source_file = "backend/src" # 動作未確認
  output_path = "${path.module}/lambda_function_payload.zip"
  # 除外したいファイルを指定する方法が知りたい

}

resource "aws_lambda_function" "image_api" {
  function_name    = "image_api"
  handler          = "main.handler"
  runtime          = "python3.10"
  role             = aws_iam_role.image_api_lambda_role.arn
  filename         = data.archive_file.lambda_api.output_path
  source_code_hash = data.archive_file.lambda_api.output_base64sha256

  # 環境変数の設定
  # ここで設定しておくと、lambda関数のコード内で環境変数を参照できる
  environment {
    variables = {
      "TABLE_NAME" = aws_dynamodb_table.image_api.name
    }
  }
}

# AWS::Lambda::Permissionのリソースを作成する必要がある。
# API GatewayからLambdaを呼び出すために必要な設定
resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.image_api.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = aws_api_gateway_deployment.image_api.execution_arn
}

