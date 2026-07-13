# Ableton Live Session 编曲与场景

## 核心概念
- Session View 是非线性编曲入口，Clip Slot 按轨道和 Scene 组织。
- 一个轨道同一时间只能播放一个 Session Clip，Scene 可以横向触发多个轨道。
- Session Clip 会优先于 Arrangement Clip，Back to Arrangement 用来回到线性编排。
- 用 Session 试段落，用 Arrangement 定结构，是 Live 高效编曲的核心。
- 场景命名和颜色能让复杂 demo 快速变成歌曲结构。

## 使用场景
- 电子音乐 jam、段落试错、现场触发、快速 demo、loop-based 编曲。
- 需要试副歌大小时，把不同鼓、贝斯、和声组合成不同 Scene。
- 需要录下即兴结构时，把 Session 演奏录入 Arrangement。
- 需要保持节奏整齐时，设置 global launch quantization。

## 核心参数
- 需要 clip 自动变化时，用 Follow Actions。
- Scene：横向触发一组 clips，代表段落或变体。
- Launch Quantization：控制触发点对齐小节或拍。
- Back to Arrangement：回到线性时间线播放。
- Follow Actions：让 clip 按规则自动跳转或循环。
- Session Record：把即兴触发记录为编曲结构。

## 实战案例
- Track Stop Buttons：管理某轨是否在 Scene 中停掉。
- 写副歌：Scene 1 主鼓+贝斯，Scene 2 加 pad，Scene 3 加主旋律，快速比较大小。
- 现场过门：设置 Follow Action 让 fill 播一遍后回主 loop。
- demo 结构：Session 里 jam 完，录到 Arrangement 后剪成正式段落。

## 补充提醒
- 避免混乱：每个 Scene 只代表一个明确段落，不把所有想法塞一排。
