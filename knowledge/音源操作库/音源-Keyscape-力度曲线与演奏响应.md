# Keyscape 力度曲线与演奏响应

## 核心概念
- Keyscape 的真实感很大部分来自控制器力度曲线，而不是后期 EQ。
- 不同 MIDI 键盘的输出力度差异很大，进入编曲前要先调 Velocity Curve。
- 力度曲线决定音色从柔到亮的过渡，也决定演奏是否容易爆。
- Standalone 的 Keyboard、Settings 和 Velocity Curve 是排查响应的入口。
- 写 MIDI 时，力度曲线和音符 velocity 要一起看。

## 使用场景
- 同一段钢琴在不同键盘上忽强忽弱时，先调曲线。
- 电钢太硬或太闷时，先看是否 velocity 长期挤在高区或低区。
- 演出需要一致触感时，把控制器设置和曲线一起保存。
- MIDI 手动画完后，用曲线微调整体触感，而不是逐音大改。

## 核心参数
- Velocity Curve：匹配键盘手感和音色响应的核心参数。
- Curve Presets：先用预设找大方向，再微调。
- Controller Keyboard Setup：把常用控制器按手册流程校准。
- MIDI Learn：把常用音色控制分配到旋钮或踏板。
- Host Automation：需要在 DAW 中自动化时优先使用宿主自动化。
- Flow Capture：独立模式下捕捉灵感演奏，后续转成 MIDI 修整。

## 实战案例
- 重手键盘手：曲线调软，让中等力度也能保持温暖，不要频繁打到最亮层。
- 轻手编曲者：曲线调敏感，让弱弹也能触发足够清晰的音头。
- 电钢律动：重拍 velocity 高 10-20，弱拍保留回弹，曲线不要过陡。
- 钢琴 MIDI 修整：先整体校准曲线，再局部处理过响的旋律音。
