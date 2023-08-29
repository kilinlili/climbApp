//https://github.com/terraform-aws-modules/terraform-aws-apigateway-v2/blob/master/main.tf

resource "aws_api_gateway_rest_api" "image_api" {
  name          = var.api-gw-name
  description   = "API Gateway for image api"
}

# /{proxy+}
resource "aws_api_gateway_resource" "root_proxy" {
  path_part   = "{proxy+}"
  rest_api_id = aws_api_gateway_rest_api.image_api.id
  parent_id   = aws_api_gateway_rest_api.image_api.root_resource_id
}
# /{proxy+} method:ANY
resource "aws_api_gateway_method" "root_proxy_any" {
  rest_api_id = aws_api_gateway_rest_api.image_api.id
  resource_id = aws_api_gateway_resource.root.id
  http_method = "ANY"
  authorization = "NONE"
}
# /{proxy+} integration
resource "aws_api_gateway_integration" "root_proxy_any_integration" {
  rest_api_id             = aws_api_gateway_rest_api.image_api.id
  resource_id             = aws_api_gateway_resource.root.id
  http_method             = aws_api_gateway_method.root_proxy_any.http_method
  integration_http_method = "ANY"
  type                    = "AWS_PROXY"
  uri                     = "arn:aws:lambda:ap-northeast-1:369311474110:function:sample"
}

# /sampleApi1
resource "aws_api_gateway_resource" "sampleApi1" {
  path_part   = "sampleApi1"
  rest_api_id = aws_api_gateway_rest_api.image_api.id
  parent_id   = aws_api_gateway_rest_api.image_api.root_resource_id
}

# /sampleApi1/{proxy+}
resource "aws_api_gateway_resource" "sampleApi1_proxy" {
  path_part   = "{proxy+}"
  rest_api_id = aws_api_gateway_rest_api.sampleApi1.id
  parent_id   = aws_api_gateway_rest_api.sampleApi1.root_resource_id
}

# /sampleApi1/{proxy+} method:ANY
resource "aws_api_gateway_method" "sampleApi1_proxy_any" {
  rest_api_id = aws_api_gateway_rest_api.image_api.id
  resource_id = aws_api_gateway_resource.sampleApi1_proxy.id
  http_method = "ANY"
  authorization = "NONE"
}

# /sampleApi1/{proxy+} integration
resource "aws_api_gateway_integration" "sampleApi1_proxy_any_integration" {
  rest_api_id             = aws_api_gateway_rest_api.image_api.id
  resource_id             = aws_api_gateway_resource.sampleApi1_proxy.id
  http_method             = aws_api_gateway_method.sampleApi1_proxy_any.http_method
  integration_http_method = "ANY"
  type                    = "AWS_PROXY"
  uri                     = "arn:aws:lambda:ap-northeast-1:369311474110:function:sample"
}

# method responseについては設定しない


resource "aws_api_gateway_deployment" "example" {
  # depends_onは必要かな？
  depends_on      = [aws_api_gateway_integration.example, aws_api_gateway_integration_response.example, aws_api_gateway_method_response.example]
  rest_api_id      = aws_api_gateway_rest_api.image_api.id
  stage_name       = "dev"
  description      = "dev stage"
  variables {
    environment = "development"
  }
}
