# Black Box Analog Design HG-2MS 定向电子管饱和

## 核心概念
- `HG-2MS` 可以理解成 `HG-2` 的进阶控制版。核心声音仍是 Black Box 的电子管饱和，但新增了双通道独立、`M/S`、可选滤波型饱和、`Density`、`Calibration` 和更完整的空间工具。
- 官方手册最重要的升级点是：平行 `Saturation` 支路终于可以只打某一段频率，而不是全频一起染色。
- 所以它比标准 `HG-2` 更适合精确回答“我只想让 sides 更亮一点”“只想让低频 growl、一点都不碰中频主体”。
- 分工边界很清楚：标准 `HG-2` 更适合快速整体甜化，`HG-2MS` 更适合定向、分区、M/S 细做。

## 使用场景
- 优先用在总线、母带、overheads、贝斯、吉他、人声总线。
- 适合那些“饱和要有，但只想作用在某个频段/某个声像区域”的场景。
- 适合 M/S 饱和，让中间保持稳而 sides 更亮、更活，或者反过来。
- 不该先拿它做最简单的“整条总线加一点味”，那时普通 `HG-2` 反而更快。
- 如果素材本来就很糊，再把低中频饱和推高只会更糊。

## 核心参数
- 如果是小白，先动两个地方：`Filter Type` 和 `Density`。
- `Filter Type`：决定平行饱和到底是全频、只高频、只低频，还是只打一段/避开一段。
- `Sat. Freq. + Q / Slope`：这是它真正区别于标准 `HG-2` 的地方。你可以把饱和精确引到想要的区域。
- `Pentode / Triode`：仍然是主体厚度与颗粒感的双核心，且前后串联，会互相推动。
- `Alt Tube`：只切平行饱和那组管子，会更激进，不会改变 Pentode/Triode 本体。
- `Density`：统一加推动力，但会补偿整体响度，非常适合找“刚刚有味道”的点。
- `Calibration`：用 `Dark / Normal / Bright` 微调顶端倾向，别动不动就靠 Air 或 EQ 去补。
- `M/S`、`Mono Maker`、`Stereo Width`：这组决定它能不能做真正的总线与母带定向饱和。

## 实战案例
- overhead 想更闪但不想把鼓主体一起做脏：让饱和支路走 `High Pass` 或 `Bandpass`，只喂高频。
- 母带 sides 想多一点 texture，中间主体不动：切 `M/S`，只在 `Side` 上加轻微饱和。
- 贝斯想更毛但又不想影响上面拨弦定义：低通或低频 bandpass 只饱和底部区域。
- 一开就很爽但很快糊：先退 `Density`，再看是不是滤波范围太宽，而不是先把 Pentode/Triode 全关掉。

## 补充提醒
- 萃取页码：pp. 2-11
- 重点萃取：相对 HG-2 的升级点、定向滤波饱和、M/S、Density、Calibration、Mono Maker / Stereo Width
