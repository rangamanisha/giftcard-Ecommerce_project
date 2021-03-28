#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { FrontendStack } from "../lib/frontend-stack";
import { BackendStack } from "../lib/backend-stack";

const env = {
  account: process.env.ACCOUNT,
  region: process.env.REGION,
};

const app = new cdk.App();
new FrontendStack(app, "FrontendStack", { stackName: `${process.env.ENVIRONMENT_NAME}-Frontend`, env: env });
new BackendStack(app, "BackendStack", { stackName: `${process.env.BACKEND_ENVIRONMENT_NAME}-Backend`, env: env });
