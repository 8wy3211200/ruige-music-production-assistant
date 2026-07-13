# AMEK Mastering Compressor 母带压缩胶合

## 核心概念
- `AMEK Mastering Compressor` 最核心的思路不是传统 attack / release，而是 `Slow / Fast / Peak` 三组 detector 的混合控制。
- 官方手册明确说，它像把三台互补压缩器塞到一台里，再通过 `Timing`、`Fast`、`Peak`、`Release Hysteresis` 去决定谁在主导。
- 这让它非常适合“想要透明、聪明、母带级压缩”，而不是追求一耳朵明显的风格泵动。
- 另一个关键点是 `VCA Clip` 和 3 段 sidechain EQ，这让它不仅能压，还能更精确地决定“让谁触发压缩、让什么瞬态更有 punch”。

## 使用场景
- 优先用在母带、总线、混音总线轻胶合、透明动态控制。
- 也适合人声、Bass、原声乐器这类既要细腻又要稳的单轨场景，官方手册也特别提到有 mono 版就是为了这些用途。
- 优先用在“想压，但别让人马上听出压缩器存在”的场景。
- 不该先用在需要明显 pumping、强个性挤压或暴力砸瞬态的场景，那不是它的强项。
- 对零基础用户来说，它比普通压缩器更抽象，所以推荐时要先讲 detector 逻辑，不要一上来堆参数名。

## 核心参数
- 如果是小白，先动两个参数：`Threshold` 和 `Timing`。
- `Threshold`：在 Soft 和 Hard knee 下逻辑不同。Hard 更像经典输入推阈值，Soft 则是更平滑、程序相关的软比率。
- `Timing`：一颗旋钮同时决定 Slow / Fast RMS detectors 的时间感，是它最核心的 envelope 入口。
- `Fast` / `Peak`：决定快 detector 和 peak detector 在整体压缩里的权重。想更抓峰值，就往上加。
- `Release Hysteresis`：让快 detector 在某个区间里接管慢 detector，很像更高级的 auto timing。
- `VCA Clip`：不是硬削波，而是模拟 VCA 高电平下的软削波，官方建议用 LED 去找“稍微圆一点但别硬削”的甜点。
- `SC HPF` + sidechain 低/高频 EQ：决定低频、主唱齿音、某些频段到底多大程度触发压缩。非常适合母带精修。
- `Sidechain Link Amount / Mode`：不是简单 linked / unlinked，而是连续量加 `MAX / AVG` 模式，这在宽声像母带里很好用。

## 实战案例
- 混音总线轻胶合：先用 `Soft` ratio 思路，少量压缩，再根据节奏感调 `Timing`。想更透明，就少碰 `Peak`。
- 母带低频一来整段就塌：先开 `SC HPF`，必要时再用 sidechain low band 去减少某个低频对压缩的主导权。
- 主唱太亮但整体不能暗：用 sidechain 高频去让某个高频区域更容易触发压缩，等于更聪明的总线 de-ess。
- 瞬态想更圆一点：少量推 `VCA Clip`，以 LED 偶尔到黄红为边界，不要把它当失真器。

## 补充提醒
- 萃取页码：pp. 2-10
- 重点萃取：三 detector 结构、Timing / Fast / Peak / Release Hysteresis、VCA Clip、sidechain EQ、link 模式
