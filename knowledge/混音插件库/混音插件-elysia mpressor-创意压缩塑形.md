# elysia mpressor 创意压缩塑形

## 核心概念
- `elysia mpressor` 不是传统“越隐形越好”的压缩器，它本来就是一台创意压缩和动态效果机器。
- 官方手册里最关键的三件事是：`negative ratios`、`Anti Log` 释放曲线、以及放在控制路径里的 `Gain Reduction Limiter`。
- 这意味着它既能做常规硬膝压缩，也能做 reverse、ducking、transient enhancer、极端 drum crush 等动态效果。
- 和 `alpha compressor` 的边界非常明确：`alpha` 更偏母带雕刻，`mpressor` 更偏创意和个性。

## 使用场景
- 优先用在鼓、贝斯、吉他、效果链、并行压缩、创意 ducking。
- 适合那些“我要明显听到压缩在干活”“我要 envelope 被改造”的场景。
- 适合用外部 sidechain 做 groove ducking、frequency-dependent compression 和效果总线控制。
- 不该先拿它做超温柔的母带透明压缩。
- 如果用户只会传统 ratio/threshold 逻辑，这只插件很容易一上来就过头。

## 核心参数
- 如果是小白，先动两个地方：`Ratio` 和 `GR Limit`。
- `Ratio`：它不只到高正比率，还能到负比率。手册明确说负比率会让信号越大反而输出越低，非常适合做怪异动态效果。
- `GR Limit`：这是 mpressor 的王牌。它不是音频路径里的 limiter，而是限制控制电压，让你在很极端的压缩逻辑下仍保住上限。
- `Attack + Auto Fast`：既能非常快，也能在需要时自动缩短，只在重峰值来时更激进。
- `Release + Anti Log`：`Anti Log` 会让释放行为更怪、更有个性，适合做节奏和反向感。
- `Gain`：补偿的同时也会引入更多谐波，因为它在输入级工作。想要干净就别把 makeup 当普通透明输出用。
- `Niveau Filter`：压缩后音色倾斜修整，可直接把失真和压缩结果再往一个方向推。
- `SC Extern`：做 groove ducking、频率依赖压缩和 FX ducking 的关键入口。

## 实战案例
- 鼓想更大更狠：先试高 ratio、较快释放，再用 `GR Limit` 控住别压过头，这是它和普通快压最大的不同。
- 想做 reverse 感动态：负比率加 `Anti Log` 是手册里直接给的强项思路。
- 想强调起音但不想整体变小：利用 `GR Limit` 和合适 gain，可以做出类似 transient enhancer 的包络重塑。
- 想让 pad、reverb 或 synth 跟 kick 一起呼吸：用外部 sidechain 做 ducking，比手动画自动化更直接。

## 补充提醒
- 萃取页码：pp. 2, 4-27
- 重点萃取：negative ratio、Anti Log release、GR Limit、Gain 引入谐波、外部 sidechain、创意应用
