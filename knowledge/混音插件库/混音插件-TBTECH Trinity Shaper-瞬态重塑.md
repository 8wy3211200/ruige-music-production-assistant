# TBTECH Trinity Shaper 瞬态重塑

## 核心概念
- `Trinity Shaper` 可以理解成比传统 transient shaper 更细一层的工具。它不只分 `Attack / Sustain`，而是把声音拆成 `Attack / Body / Sustain` 三段。
- 官方手册里对 `Body` 的解释很关键：很多声音是否“有 punch”，不只取决于最前面的音头，还取决于音头后面那几十毫秒的身体感能不能跟上。
- 所以它比两旋钮瞬态工具更适合解决“音头出来了，但还不够有肉”“尾巴收了，但 punch 还是不对”这类问题。
- 它还有每一段各自的 HP / LP、长度调整、单频段与多频段模式，这就是它比传统瞬态塑形器更像“精细重塑器”的原因。

## 使用场景
- 优先用在鼓、打击乐、Bass、拨弦乐器，以及 Drum Bus 这类需要更精细瞬态结构的素材。
- 单个乐器轨道更适合先用 `Single-band`，总线、鼓组、甚至整段复杂素材更适合 `Multi-band`。
- 很适合“Attack 推了之后太尖”“Sustain 减了之后太空”“想要的是更结实的 punch，不是更刺的前沿”这种问题。
- 不该把它默认当母带总线插件。它虽有多频段和总线能力，但本质还是瞬态结构工具，容易过头。
- 对零基础用户来说，也不要一上来 Attack / Body / Sustain 三段全拧，先解决一个明确问题。

## 核心参数
- 如果是小白，先动两个参数：`Attack` 和 `Body`。
- `Attack`：负责最前面 1-10ms 左右的瞬态。更有敲击感、更有点头感，就动它。
- `Body`：这是它相对传统 shaper 最值钱的部分，负责瞬态之后 20-50ms 左右的“肉”和 punch。
- `Sustain`：负责尾巴和延音。拖尾太长、房间太糊、低频不利索时很好用。
- `HP / LP`：每一段都能只作用某个频段。比如只推低频 Attack，或只收高频 Sustain。
- `Attack Length / Body Length`：不同乐器瞬态长度不一样，Bass Drum 和 Hi-Hat 肯定不能一刀切，这两个参数就是拿来做匹配的。
- `Dry Mix`：做并行瞬态处理很实用，50% 是一个很稳的起点。
- `Limit`：官方默认启用，是为了避免数字硬削波。推 Attack 时尤其重要。
- `Multi-band`：复杂素材用。单个鼓或单个 Bass 通常先别急着开多段。

## 实战案例
- 军鼓想更有 punch，但一推 Attack 就只剩尖：先补 `Body`，再回头少量调 `Attack`，通常比只推 Attack 更接近“厚实而不是刺”。
- Snare 低频不够扎实：给 `Attack` 或 `Body` 加 LP，只让较低频段的击打感上来，不让高频一起炸。
- Kick 太拖：先减 `Sustain`，如果 punch 也跟着没了，再补一点 `Body`。
- Drum Bus 想更结实：开 `Multi-band`，只对低中频那段多给一点 `Body`，高频保持克制，会比全频一起顶更稳。
- 拨片 Bass 想更利索：少量加 `Attack`，必要时减一点 `Sustain`；如果只是想让击弦更“结实”而不是更尖，优先动 `Body`。

## 补充提醒
- 萃取页码：pp. 13-25
- 重点萃取：Attack / Body / Sustain 三段逻辑、长度控制、多频段模式、并行与限制
