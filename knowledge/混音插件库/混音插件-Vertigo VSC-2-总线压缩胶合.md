# Vertigo VSC-2 总线压缩胶合

## 核心概念
- `Vertigo VSC-2` 是一类非常典型的“总线 / 母带 / 立体声文件先上去听听会不会更凝聚”的 VCA 压缩器。
- 官方手册把它的核心价值放在 stereo bus、tracking、mastering 三个方向：既精准，又会随着增益压缩和补偿增益带来谐波颜色。
- 它不是那种一耳朵就很夸张的风格压缩器，强项是“把东西收拢、变稳、变有 glue，同时还保住立体声重心”。
- 这台压缩器最值得记住的特殊点有三个：`Soft Mode`、`SC Filter`、以及它对立体声峰值的处理方式。
- `Soft Mode` 不是普通 soft knee，而是官方说的 `TipToe` 模式，会从很低比率开始、随着输入变大再自动往上加比率，所以压缩起点更不容易被听出来。

## 使用场景
- 优先推荐给“总线压缩胶合”“母带前级轻压”“鼓组更稳但别太扁”“立体声文件更聚拢”这类问题。
- 优先用在需要 `1-4 dB` 左右增益压缩就能变得更整齐的场景，而不是追求夸张 pumping。
- 也适合在 Bass、Snare 这类需要精细控制瞬态但又不想太失真的素材上试。
- 不该先把它当最终响度限制器。官方手册明确写了 `Brick` 也不是 brickwall limiter，最后冲响度还得靠真正的 limiter。
- 如果用户要的是明显“吸气感”“抽吸感”“大幅并行压扁”，它不是第一优先，先去找更有个性的压缩器。

## 核心参数
- 如果是小白，先动两个参数：`Threshold` 和 `Ratio / Soft Mode`。
- `Threshold`：官方建议先把阈值拧到最右，再慢慢往回收，听到合适的压缩量。这个习惯很适合总线压缩。
- `Ratio / Soft Mode`：想要更隐形、更顺的胶合感，先试 `Soft Mode`；想更明确一点，再试 `2:1` 或 `4:1`。
- `Attack`：官方给的实用起点是先从 `3 ms` 开始听。想保留 Bass / Drum 的前沿冲击，就别一上来选最短。
- `Release`：太快会 nervy、会 pump，太慢会 squashed。鼓组和节奏性强的东西，先听 `0.1 / 0.3 / Auto` 这几个方向。
- `SC Filter 60 / 90 Hz`：低频一多就把压缩器带着上下喘时，先开 sidechain filter，让它少被 Kick 和低频 Bass 误触发。
- `Make Up Gain`：除了补音量，也会改变颜色。官方手册甚至专门说过，想只加一点谐波色彩、不做压缩，可以把 `Threshold` 开高，再用 `Make Up Gain` 推颜色。
- `Brick`：把它理解成更硬的峰值控制，不要把它误当 true peak 或最后一道母带墙。

## 实战案例
- 混音总线胶合：先试 `Soft Mode`，`Attack` 从 `3 ms` 起，`Release` 先试 `Auto` 或 `0.3 s`，只压 `1-2 dB`。如果 Kick 一来整段就喘，先开 `SC Filter`。
- 鼓总线：可以比总线更重一点，用 `4:1` 或更快 release，让鼓组更往前。但如果军鼓边缘开始硬、镲片开始喘，就退回去。
- Bass 轨：官方手册举了 Bass attack 的例子，说明长一点的 attack 能保留拨弦前沿，所以别机械地全用最快 attack。
- 想要“有胶水也有一点色彩”但不想真压很多：把 `Threshold` 收高，少压或不压，再用 `Make Up Gain` 做对比监听。
- 需要更宽一点的立体感时，手册提到了用 `Mono` 模式做 unlinked 压缩会有 widen 效果，但这更像高级玩法，不建议给小白当默认推荐。

## 补充提醒
- 萃取页码：pp. 2-5
- 重点萃取：Threshold、Soft Mode、Brick、Attack/Release、Make Up Gain、SC Filter、Stereo Mode
