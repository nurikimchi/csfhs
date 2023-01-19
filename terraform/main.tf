terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "0.11.4"
    }
  }
}

variable "vercel_api_token" {
  type = string
}

variable "supabase_url" {
  type = string
}

variable "supabase_key" {
  type = string
}

provider "vercel" {
  api_token = var.vercel_api_token
}

resource "vercel_project" "website" {
  name      = "csfhs-website"
  framework = "sveltekit"

  git_repository = {
    type = "github"
    repo = "estebangarcia21/csfhs"
  }

  environment = [
    {
      key    = "PUBLIC_SUPABASE_URL"
      target = ["production", "preview", "development"]
      value  = var.supabase_url
    },
    {
      key    = "PUBLIC_SUPABASE_ANON_KEY"
      target = ["production", "preview", "development"]
      value  = var.supabase_key
    }
  ]
}
