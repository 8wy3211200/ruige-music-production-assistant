#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  printf 'Usage: %s <regex-pattern> [limit]\n' "$0" >&2
  exit 2
fi

pattern=$1
limit=${2:-20}

if [[ ! $limit =~ ^[1-9][0-9]*$ ]]; then
  printf 'limit must be a positive integer\n' >&2
  exit 2
fi

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
skill_dir=$(cd -- "$script_dir/.." && pwd)
if [[ -d $skill_dir/knowledge ]]; then
  knowledge_root=$(cd -- "$skill_dir/knowledge" && pwd)
else
  knowledge_root=$(cd -- "$skill_dir/../knowledge" && pwd)
fi

matches=$(rg -l -i --glob '*.md' -- "$pattern" "$knowledge_root" || true)
if [[ -z $matches ]]; then
  printf '未找到匹配内容\n'
  exit 0
fi

printf '%s\n' "$matches" | sed -n "1,${limit}p"
