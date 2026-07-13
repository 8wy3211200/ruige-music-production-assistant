# SSL E-Channel 通道条快速塑形

## 核心概念
- SSL E-Channel 结合 EQ、动态、滤波和通道电平，适合像调台一样快速塑形。
- 动态区包含 compressor/limiter 和 expander/gate，EQ 可路由到 dynamics sidechain。
- E/G 风格的差异主要用于不同 EQ 手感和颜色。
- Split、Dyn S-C 等路由决定滤波和 EQ 在动态中的作用。
- 通道条适合每轨小幅整理，不是每个模块都必须打开。

## 使用场景
- 鼓、人声、吉他、贝斯、合成器分轨的快速清理和成形。
- 需要去低频脏东西时，先用 HPF，再考虑 EQ。
- 需要控制动态时，轻压缩保持通道前后稳定。
- 需要门限清理鼓漏音时，用 expander/gate 小心设置 release。

## 核心参数
- 需要齿音或频率触发动态时，用 EQ/filters 进 sidechain。
- HPF/LPF：先处理无用频段。
- Compressor Threshold/Ratio：决定压缩强度。
- Fast Attack：需要抓瞬态时打开，不需要时保留 punch。
- Release：跟随歌曲速度，太快会抖，太慢会闷。
- Gate Range：决定关闭时衰减多少，不一定全静音。

## 实战案例
- Dyn S-C/Split：改变 EQ、filter 和 dynamics 的关系。
- Snare：HPF 去低频，快 attack 控峰值，release 跟节奏回弹。
- 人声：轻压缩稳定电平，少量高频架增强存在感。
- 电吉他：LPF 去毛刺，LMF 切浑浊，压缩少量。

## 补充提醒
- 鼓漏音：Gate Range 不设到无限，让自然尾巴保留一点。
