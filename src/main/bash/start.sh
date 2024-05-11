#! /bin/bash

set -euo pipefail

BASE_PATH="$(dirname "$0")/../../.."
cd "$BASE_PATH"

BUILD_PATH=".build"

node "$BUILD_PATH/src/main/typescript/EntryPoint.js"
