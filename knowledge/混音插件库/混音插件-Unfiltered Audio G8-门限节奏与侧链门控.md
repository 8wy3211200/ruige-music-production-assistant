# Unfiltered Audio G8 门限节奏与侧链门控

## 核心概念
- `G8` 不是只会消噪的普通 gate。官方手册把它定位成既能做专业门限，又能做节奏切片、振幅合成和基于音量的创意路由。
- 它最值得保留的逻辑是：检测信号和输出信号被分开管理，所以你可以单独调分析增益、过滤检测源，甚至拿外部 sidechain 或 MIDI 去驱动门控行为。
- 除了常规 `Regular Gating`，它还有 `One-Shot` 和 `Cycle` 两种模式，这让它从“开关门”变成“可编排的包络发生器”。
- 对真实用户最有用的不是花哨玩法，而是它能同时覆盖：去噪、鼓轨收尾、节奏 duck、stutter、侧链门限和振幅分流。

## 使用场景
- 优先用在鼓、吉他、人声、噪声底较高的单轨，以及需要跟随节奏开关的 pad、氛围、长音素材上。
- 适合“底噪/串音怎么收”“怎么让某个持续声跟着 kick 节奏动”“怎么做门限式 tremolo / stutter”。
- 适合做外部 sidechain 节奏门控，也适合做 transient 导向的节奏塑形。
- 不该在只想简单剪静音的场景里硬上它，那个时候 clip gain 或手工编辑更直接。
- 也不该忽略它的 lookahead 和模式切换带来的延迟与行为差异。

## 核心参数
- 如果是小白，先动两个东西：`Threshold` 和 `Behavior Mode`。
- `Threshold`：决定什么时候开门。先用它把目标声音和不想要的底噪/串音分开，再谈后面的门限包络。
- `Behavior Mode`：`Regular` 是普通 gate；`One-Shot` 每次触发只跑一次包络，很适合改军鼓或 synth 起音；`Cycle` 会循环包络，适合 tremolo、stutter、颗粒式切片。
- `Attack / Hold / Release`：这三项决定门的手感。Attack 太快容易点头或 click，Hold 太短容易发抖，Release 太快容易收得假。
- `Reduction`：不是所有 gate 都要关死。很多真实场景留一点尾巴比完全切断更自然。
- `Hysteresis`：防止门在阈值附近来回抖动。串音和底噪场景里很关键。
- `RMS / Peak`：瞬态多的素材先试 `Peak`，更稳定的能量型素材可试 `RMS`。
- `Lookahead`：帮助提前抓瞬态，但会增加延迟。
- `External Sidechain`：让别的轨驱动门限，是节奏门控的核心。
- `Flip Mode` 与 `Reject Outputs`：这是它的创意入口。可以把被门挡掉的部分单独拿去做另一条效果链。

## 实战案例
- 鼓录音里镲片串进 tom 轨太多：先设 `Threshold` 和 `Hysteresis`，再在 `Peak` 检测下微调 `Attack / Release`，通常比盲目加深 reduction 更稳。
- 长音 pad 想跟 kick 一起喘：开 `External Sidechain`，用 kick 触发 gate，再调 `Attack / Hold / Release` 让门的摆动更像节奏而不是突兀断电。
- 军鼓想更短更脆：试 `One-Shot`，用固定包络去改每次击打的尾巴，而不是让它随着素材自己乱关。
- 想做门限 tremolo 或 stutter：切到 `Cycle`，用很短的 Attack/Hold/Release，必要时加 `Delay` 控制周期空隙。

## 补充提醒
- 萃取页码：pp. 2-15
- 重点萃取：Threshold 与检测链分离、Regular/One-Shot/Cycle、Lookahead、Hysteresis、External Sidechain、Flip Mode
