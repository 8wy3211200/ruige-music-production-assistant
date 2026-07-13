# bx_digital V3 M/S母带均衡

## 核心概念
- `bx_digital V3` 的核心从来不只是“一个 EQ”，而是 `M/S mastering`、`Mono Maker`、`Stereo Width`、`Bass Shift / Presence Shift` 和 `Dynamic EQ` 组成的母带整形系统。
- 官方手册非常强调它的 M/S 工作流：把整段立体声拆成 Mid 和 Side 两个更容易判断的单声道和声像维度，再分别处理。
- 它对真实问答最有用的价值，不是让用户学完所有功能，而是知道什么时候该用它处理“中心不稳、侧边太亮、低频不够 mono、整体不够宽但又怕散”。
- 这是一个很典型的“母带和总线工具”。单轨当然能用，但它最值钱的地方还是立体声整体管理。

## 使用场景
- 优先用在母带、立体声总线、子总线的 M/S 修整和声像管理。
- 优先用在“中间和侧边问题不同”的场景，比如主唱太顶但侧边还不够开、Side 太亮、中间低频不够稳。
- 也很适合修“立体声看起来宽，但低频和中心发虚”的场景，因为 `Mono Maker` 和 `Stereo Width` 是它的强项。
- 不该先给只想做普通 EQ 的用户。它的真正价值在 M/S 维度，不在“普通五段 EQ”本身。
- 如果用户连 Mid / Side 都没概念，先别让他一上来在母带乱 solo M / S 开始修。

## 核心参数
- 如果是小白，先动两个参数：`Modus` 和 `Mono Maker`。
- `Modus`：决定当前是普通 `L/R`、`M/S Master` 还是 `M/S Record`。绝大多数母带场景先用 `M/S Master`。
- `Mono Maker`：官方反复强调它是低频收拢神器。常见起点就是 `100-200 Hz` 左右。
- `Stereo Width`：不是简单把 sides 拉大，而是对侧边量级做管理。前提仍然是先把低频中心站稳。
- `Pan M` / `Pan S` / `Balance L/R`：这些不是花活，而是修中心偏移、立体声不平衡时非常有价值。
- `Bass Shift` / `Presence Shift`：一键式倾斜增强，适合快速让低频更 punch 或让存在感更明显。
- `Dynamic EQ`：比老版 de-esser 更灵活，能 pre/post 放置、快慢切换，也能 solo 听被处理部分。
- `Gain Scale`：整套 EQ 曲线方向对了之后，一键整体加深或收回来，非常适合母带。

## 实战案例
- 整体不够宽但又怕 Bass 变散：先用 `Mono Maker` 稳住低频，再少量加 `Stereo Width`。
- 主唱和军鼓中心不够稳：进 `M/S Master`，solo `S` 检查那些本该在中心的元素是不是还残留太多在 Side。
- 中间亮度够了但侧边太闷：只给 `Side` 做高频提升，比整段一起提亮更干净。
- 总线轻 de-ess：用 `Dynamic EQ` 只压中间高频，常比全频拉暗更合理。
- 混音有点左偏右偏：先用 `Balance L/R` 或 `Pan M / Pan S` 修平衡，再判断是不是还需要 EQ。

## 补充提醒
- 萃取页码：pp. 5-11
- 重点萃取：M/S mastering 工作流、Mono Maker、Stereo Width、Shifter、Dynamic EQ、平衡控制
