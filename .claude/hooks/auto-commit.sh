#!/bin/bash
# Claude Code Stop Hook - Auto commit & push
set -e

REPO_DIR="/Users/yaweili/Desktop/FP-Workspace"
cd "$REPO_DIR"

# Check if there are any changes (modified, staged, or untracked)
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  # No changes, nothing to do
  exit 0
fi

# Commit and push
git add -A
git commit -m "[AI] $(date '+%Y-%m-%d %H:%M') - auto commit" || exit 0
git push 2>/dev/null || echo "[auto-commit] push failed, will retry next time"
