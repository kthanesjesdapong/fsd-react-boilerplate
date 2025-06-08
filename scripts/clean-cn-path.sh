#!/bin/bash
grep -rl "@/shared/utils/cn/index" src/shared | xargs sed -i '' 's|@/shared/utils/cn/index|@/shared/utils/cn|g'