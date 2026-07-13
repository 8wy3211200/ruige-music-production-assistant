# FabFilter Pro-C 3 风格压缩

## 核心概念
- Pro-C 3 是现代压缩器，核心是风格选择、动态参数、sidechain 和精确计量。
- 它支持 stereo、surround、mid/side、side-chain EQ filtering 和 analog character。
- 先选 Style 再调 threshold/ratio，比一开始硬拧参数更快。
- 界面可在简洁压缩器和详细计量之间切换。
- 压缩目标要明确：控峰值、增加密度、胶合总线、塑造律动或 ducking。

## 使用场景
- 人声稳定、鼓总线 glue、贝斯控制、母带轻压、旁链 ducking。
- 需要透明控制时选 clean/mastering 类风格。
- 需要音乐性泵动时选 bus/punch/pumping 类方向。
- 需要频率选择性触发时，用 side-chain filtering。

## 核心参数
- 需要并行感时，用 mix 或 range 限制压缩深度。
- Threshold：决定何时开始压缩。
- Ratio：决定超过阈值后的压缩强度。
- Attack/Release：决定瞬态保留和回弹速度。
- Knee/Range：让压缩更柔和或限制最大压缩量。
- Style/Character：决定检测和声音个性。

## 实战案例
- Side Chain EQ：只让目标频段触发压缩。
- 主唱：Vocal 风格，慢一点 attack，release 跟语速，压 3-6 dB。
- 鼓总线：Bus 或 Punch，保留 kick/snare 瞬态，少量 glue。
- 贝斯：中等 attack，release 对齐律动，避免低频忽大忽小。

## 补充提醒
- 电子 ducking：外部 sidechain 来自 kick，range 控制下潜深度。
