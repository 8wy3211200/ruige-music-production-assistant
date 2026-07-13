# BBCSO 技法切换 MIDI 编程

## 核心概念
- BBCSO 的技法选择器可以用 keyswitch、CC range、velocity range、MIDI channel、speed 等方式触发。
- 技法切换要服务乐句，不是把所有技法塞进一个轨道。
- Shift-Click 可叠选技法，适合做组合或快速比较。
- Keyswitch 可移动位置，避免和实际演奏音域冲突。
- 速度触发和力度触发适合让快慢句自动换技法，但要先测试边界。

## 使用场景
- 同一弦乐轨里在 long、staccato、pizzicato 之间切换。
- 需要把短音和长音写在一条乐句上，减少轨道数量。
- 快速 ostinato 想自动进入短技法，慢速线条保持 legato。
- 交付 MIDI 时，需要让别人看得懂技法触发逻辑。

## 核心参数
- Keyswitch：用低音区音符切换技法，适合确定性最高的编程。
- CC Range：用控制器数值范围切换，适合连续控制多技法区域。
- Velocity Range：用力度区间切换，适合短音强弱带出不同质感。
- MIDI Channel：按通道切换，适合复杂模板和分轨路由。
- Speed：按演奏速度触发，适合快句自动转短技法。
- Lock：技法区锁定后可防止误触改变设置。

## 实战案例
- 弦乐句：小节开头放 keyswitch 到 legato，句尾切 tremolo 做悬念。
- 动作节奏：把 staccato 设为高速度触发，慢音仍回到 sustain。
- 拨奏点缀：低音区 keyswitch 切 pizzicato，只在需要的音符前提前一点放置。
- 共享工程：把技法触发统一放在音符前 1/16，方便排查误切。
