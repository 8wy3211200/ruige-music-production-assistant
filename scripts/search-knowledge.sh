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
knowledge_root=$(cd -- "$skill_dir/knowledge" && pwd)

rg -l -i --glob '*.md' -- "$pattern" "$knowledge_root" | sed -n "1,${limit}p"
