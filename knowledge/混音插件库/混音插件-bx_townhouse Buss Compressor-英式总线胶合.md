# bx_townhouse Buss Compressor 英式总线胶合

## 核心概念
- `bx_townhouse Buss Compressor` 的重点不是“又一只 SSL 风格压缩”，而是更早期的 `SSL 4000 B` 总线压缩性格。
- 官方手册明确指出，大多数同类插件更常见的是后来的 `G Series` 味道，而 Townhouse 更接近早期英式总线压缩的冲劲和胶合。
- 它特别适合解决“混音元素都在，但还没抱成一团”的问题。
- 和库里的 `Vertigo VSC-2`、`AMEK Mastering Compressor` 分工不同：Townhouse 更偏英式 bus glue 和前冲感，不是最透明也不是最母带级精修。

## 使用场景
- 优先用在 mix bus、drum bus、music bus、钢琴总线。
- 适合摇滚、流行、电子这类需要节奏和总线粘合感的素材。
- 适合那些“整体还散、鼓和伴奏没有黏住、前后景不够统一”的问题。
- 不该先拿它修低频打架、齿音或频谱失衡，这些要先在别的层级解决。
- 也不该在本来就很扁的总线上继续重压。

## 核心参数
- 如果是小白，先动两个参数：`Threshold` 和 `SC Filter`。
- `Threshold`：Townhouse 没有现代花哨逻辑，先决定你到底要多少 GR，再谈别的。
- `Ratio`：官方给的是 `2:1 / 4:1 / 10:1`。总线胶合通常从低比率开始，别一上来就把总线当限幅器。
- `Attack`：快速会更抓、更贴，但容易把瞬态前缘压没；慢一点更容易保 punch。
- `Release`：手册给了 `Auto`，总线很多时候这就是最稳的起点。
- `SC Filter`：让压缩器少被低频带着走。总线一抽一吸太明显时，优先试它。
- `Headroom`：插件版的重要补强。它不是音量钮，而是决定内部工作电平和压缩强度的细调入口。
- `Mix`：并行压缩入口。Townhouse 很适合少量回混，保住瞬态又拿到胶合。

## 实战案例
- 混音总线还散：先用较低 ratio、较慢一点 attack、`Auto Release`，抓少量 GR，通常就能听到“抱团”。
- 鼓总线一压就被 kick 带着喘：先开 `SC Filter`，再决定 threshold 和 release。
- 想更有经典英式 bus glue，但又不想太扁：少量压缩后用 `Mix` 回一点干声，往往比继续减 threshold 更自然。
- 压完觉得密度有了但整体太闷：先看是不是 attack 太快或 GR 太多，不要第一反应拿高频 EQ 补回来。

## 补充提醒
- 萃取页码：pp. 2-7
- 重点萃取：4000 B 压缩定位、Threshold/Attack/Release、SC Filter、Headroom、Mix
