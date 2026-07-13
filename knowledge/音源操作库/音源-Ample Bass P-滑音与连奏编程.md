# Ample Bass P 滑音与连奏编程

## 核心概念
- 贝斯滑音和 hammer-on/pull-off 是连接音符的演奏事件，不是普通 pitch bend 替代品。
- Ample Bass P 使用指定 keyswitch 和重叠音符触发 legato slide 或 HP。
- 滑音速度可由目标音 velocity 影响，高力度通常更快。
- Poly Legato 可让多根弦同时做相同间隔滑动。
- 滑音后会自动回到前一个技法，编程时要预留触发位置。

## 使用场景
- 句尾滑出、目标音装饰、funk 快速连奏、摇滚上行过渡、和弦式滑动。
- 需要真实滑入时，先按 slide in keyswitch 再弹目标音。
- 需要从一个音滑到另一个音时，重叠起始音和目标音。
- 需要 hammer-on/pull-off 时，用更短更轻的连接，不要像大滑音。

## 核心参数
- 需要多音滑动时，确保起始音在不同弦逻辑上可成立。
- Slide In/Out：D#0 触发，按时机区分进入或滑出。
- Legato Slide：E0 后重叠两音触发滑音。
- Hammer-On/Pull-Off：F0 后重叠音符触发。
- Destination Velocity：影响两品以上滑音速度。
- High Velocity Keyswitch：部分情况下决定是否改变 position。

## 实战案例
- Note Overlap：触发连奏的关键，不要留断口。
- 副歌前上滑：低音保持，目标音提前重叠 1/16，velocity 中高。
- 句尾滑出：目标长音末尾按 slide out，让尾巴自然离开。
- 快速 funk：用 HP 替代每个音重新拨弦，音符短且重叠轻微。

## 补充提醒
- 和弦滑动：多起始音同时触发，再到同间隔目标音，做特殊过门。
