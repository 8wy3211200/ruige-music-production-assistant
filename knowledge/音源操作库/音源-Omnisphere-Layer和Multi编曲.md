# Omnisphere Layer 和 Multi 编曲

## 核心概念
- Omnisphere 的声音结构从 Soundsource 到 Layer、Part、Patch、Multi，适合做可演奏的复合音色。
- Layer 用来叠同一声音内部的两个来源，Multi 用来组合多个 Part。
- Stack Mode 适合键盘分区和分层，Live Mode 适合演出或快速切换。
- 编曲时不要所有层都全频，分层要有频段、音头和空间分工。
- 复杂音色应保存为 Multi，方便跨项目复用。

## 使用场景
- 副歌铺大、电影转场、一个键盘控制多层音色、现场演出切换。
- 需要同一 MIDI 触发 pad、bell、sub 三层时，用 Multi 或 Layer。
- 需要左右手分区时，用 Stack 或 Multi 的键盘范围。
- 需要一键切换多个段落音色时，用 Live Mode。

## 核心参数
- 需要声音内部变化时，Layer 内部调制比外部插件更自然。
- Layer A/B：分配不同 soundsource 或 synth oscillator。
- Part：Multi 中的独立音色单元，可独立路由和控制。
- Key Range：限定层的键盘范围，避免低频层跑到高音。
- Velocity Range：让轻弹和重弹触发不同层。
- Output Routing：把重低频、pad、lead 分到不同混音通道。

## 实战案例
- Live/Stack：分别解决切换和分区问题。
- 副歌大 pad：Layer A 负责暖底，Layer B 加空气高频，低频留给贝斯。
- 电影 hit：Multi 里叠击打、低频下潜和反向纹理，分轨输出混音。
- 现场键盘：左手 bass，右手 keys，顶端键区放 transition FX。

## 补充提醒
- 编曲草稿：一个 Multi 先承载主要氛围，定稿后再拆分混音。
