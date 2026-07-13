# bx_limiter True Peak 真峰值限制

## 核心概念
- `bx_limiter True Peak` 的卖点不是单纯“更响”，而是官方手册强调的 `True Peak` 安全、较好的瞬态保留、稳定立体声和可调音色。
- 它有两个核心模式：`Classic` 更稳、更保守；`Modern` 更快、更响，更适合现代强瞬态风格。
- 它不是一个只有 Ceiling 的黑箱 limiter，还加了 `Foundation`、HP / LP、`XL Saturation`、并行 `Limiter Mix` 和完整 loudness / true peak 监控。
- 所以它特别适合知识库里的“最后一段限制，同时还想稍微修一修低频基础和整体边缘”的场景。

## 使用场景
- 优先用在母带最终限制、总线最终安全限幅、重瞬态鼓总线或吉他总线增密。
- 优先用在“要更响，但别立刻塌、别立刻散、别出 ISP”这类问题。
- 也适合给 Kick、鼓总线增加厚度和现代冲击感，官方手册甚至专门提到这类单轨 / 总线用法。
- 不该先拿它修混音平衡。Limiter 不是救混音比例的第一步。
- 如果用户只是想达标流媒体峰值，不一定要把它打得很狠；很多时候 `Output Dim` 和安全 ceiling 比额外 1dB 响度更重要。

## 核心参数
- 如果是小白，先动两个参数：`Gain` 和 `Ceiling`。
- `Gain`：把信号推向 limiter；`Ceiling` 决定最后真峰值上限。两者配合才是真正的“多响”和“多安全”。
- `Link`：一颗旋钮同时改 `Gain` 和 `Ceiling` 的比例关系，适合快速找 loudness sweet spot。
- `Limiter Mode`：`Classic` 更保守，`Modern` 更快更 punch。重 EDM、Hip-Hop、现代鼓常更适合 `Modern`。
- `Foundation`：官方手册把它当 tone shaping 核心之一。想让低频更有基础、更厚一点时很好用。
- `Channel Link`：默认推荐大约 `75%`。太低会让左右各压各的，立体声可能漂；太高又可能更容易整体被某一边带着动。
- `Output Dim`：非常实用。比如交付 `-1 dBTP` 时，直接这里退，不用重新改整套 limiting 量。
- `True Peak / Loudness / Dynamic Range` 监控：这是它比很多简单 limiter 更值得在母带上用的原因。

## 实战案例
- 流媒体交付：先把声音做到满意，再用 `Output Dim` 控到目标真峰值，比如 `-1 dBTP` 左右的安全区。
- 现代鼓总线想更顶：试 `Modern` 模式，少量加 `Foundation`，但要看 true peak 和 gain reduction，别只听“更炸”。
- 总线一响就散：先把 `Channel Link` 往默认中间值附近靠，再决定是不是模式和 foundation 问题。
- 高频有点毛、低频不够稳：先轻微用 HP / LP 和 `Foundation` 修边，再谈更激进的增益推进。
- 想更厚一点但又别上额外饱和：少量 `XL Saturation` 可以帮忙，但它是辅助手段，不是主菜。

## 补充提醒
- 萃取页码：pp. 2-10
- 重点萃取：Classic / Modern、Gain / Ceiling / Link、Foundation、XL、Channel Link、True Peak 监控
