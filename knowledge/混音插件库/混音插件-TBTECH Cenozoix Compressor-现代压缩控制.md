# TBTECH Cenozoix Compressor 现代压缩控制

## 核心概念
- `Cenozoix` 不是一台“只有一个味道”的压缩器，而是把现代压缩、复古建模、并行、谐波、侧链 EQ 和大量细节控制整合在一起的综合型压缩平台。
- 它最有辨识度的不是常规 `Threshold / Ratio / Attack / Release`，而是 `Clamp`、`De-Click`、`Punch/Pump`、`Tight`、`Sensitive` 这些更偏“结果导向”的高级控制。
- 官方手册里有个很重要的方向：很多传统压缩器要么慢 attack 漏瞬态，要么快 attack 把声音压死。Cenozoix 就是在补这条缝。
- 所以它适合“我知道自己想要什么结果，但普通压缩器很难又稳又细地做到”的场景。

## 使用场景
- 优先用在鼓、军鼓、Kick、Bass、Vocal、总线和母带前的复杂动态控制。
- 优先用在“瞬态要保住，但又不能有乱飞 clicks”“压得明显，但别太假”“既想 tight 又不想全硬掉”的场景。
- 也很适合教学里做“不同压缩风格对比”，因为它同时有现代风格和大量 vintage inspired styles。
- 不该先给刚学压缩的用户当第一只压缩器。它太强，也意味着太容易乱。
- 如果只是做一个简单总线 glue，`VSC-2`、`SSL Bus Comp` 这类往往更快。Cenozoix 更像精密多面手。

## 核心参数
- 如果是小白，先动两个参数：`Style` 和 `Threshold`。
- `Style`：这是它最快的入口。先决定要 Clean、Mastering、Bus、Vocal、Drum，还是 Glue VCA、FET、Opto 这类方向，再细调。
- `Range`：这是很多人忽略但非常实用的参数。它限制最大压缩量，能让压缩自然很多，尤其适合怕压过头的场景。
- `Clamp`：专门补长 attack 漏掉的瞬态，不是简单把 attack 调更快。很适合既想保 punch 又想收住毛躁的鼓和人声爆破。
- `De-Click`：专门处理超快 clicks，尤其是军鼓、硬瞬态 percussion。它不是 de-noise，而是对极短点击做专门处理。
- `Punch/Pump`：把整体压缩形状往 punch 或 pumping 推一点点。手册也提醒别推太狠，通常少量就够。
- `Tight`：让低频部分的 attack/release 更快，声音更紧，但也更容易带来失真和人工感。
- `Sensitive / Auto Release`：让 release 自适应不同瞬态长度。复杂素材、总线和母带前很实用。
- `Peak / RMS`、`FF / FB`、`Odd / Even`：这是它从“会用”到“会精调”的进阶参数。对于 AI 推荐，知道它能决定压缩质感就够了，不必一上来全讲。

## 实战案例
- 军鼓前沿太硬、有 clicks：先试 `De-Click`，再根据 punch 需要补一点 `Clamp`，往往比单纯把 attack 拉快更自然。
- Drum Bus 想更硬、更现代：先试 `Drum` 或 `Tight` 风格，再少量加 `Punch`。如果低频开始糊或脏，就别再加 Tight。
- Vocal 想稳但别被压扁：先试 `Vocal` 或 `Vintage Opto` 风格，再用 `Range` 限住最大压缩量，保自然。
- Bass 想大又别散：可以试 `Diode-Bridge`、`Virtual-Mu` 或 `Vintage Tube` 方向，但要根据实际素材决定。需要更紧就少量加 `Tight`，需要更自然就加 `Sensitive`。
- 母带或总线轻压：先试 `Mastering` 或 `Bus` 风格，再让 `Sensitive` 或 `Auto Release` 去减少压缩痕迹。

## 补充提醒
- 萃取页码：pp. 13-32
- 重点萃取：Clamp、De-Click、Punch/Pump、Tight、Sensitive、风格系统、侧链和 Drive
