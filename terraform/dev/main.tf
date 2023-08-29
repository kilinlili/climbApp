terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region  = "ap-northeast-1"
  profile = "kilin.haruhara"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0477d3aed9e98876c"
  instance_type = "t2.micro"

  tags = {
    Name = "kilin_test_terraform_ec2_instance"
  }
}
