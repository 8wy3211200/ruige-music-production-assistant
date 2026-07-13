# Trilian 贝斯 MIDI 演奏技法

## 核心概念
- 贝斯 MIDI 的真实感来自音长、力度、连奏、滑音和位置变化，而不是只跟根音。
- Trilian 的 soundsource、layer 和 patch 架构支持不同演奏细节。
- 写贝斯先定右手感觉：指弹、拨片、slap、synth，再决定音符密度。
- 真实贝斯要留休止和换把，不要每个音都满长度粘连。
- 需要用 MIDI 控制器和 automation 做演奏表情，而不是全靠音量。

## 使用场景
- 流行根音律动、R&B ghost note、funk slap、摇滚拨片、电子低频线。
- 鼓和贝斯不贴时，先修音符起点和长度。
- 低频糊时，先检查重叠长音和延音释放。
- 想要滑音时，安排目标音和起始音的重叠关系。

## 核心参数
- 需要人味时，用 velocity 和 timing 形成重弱拍差异。
- Velocity：决定音头强弱和部分音色触发。
- Legato/Slide：用于连接目标音，避免机械跳音。
- Release：控制音尾，快歌短、慢歌可稍长。
- Layer：可叠低频和指噪，但要分层控制。
- MIDI Learn：把常用表情参数映射到推子。

## 实战案例
- Automation：对 filter、level 或 effects 做段落变化。
- 四分根音贝斯：每小节重拍长一点，弱拍短一点，kick 后留空间。
- R&B 贝斯：主音前加低力度 ghost note，注意不要抢主唱。
- Rock 拨片：velocity 较稳定，轻微提前跟鼓形成冲击。

## 补充提醒
- Synth sub：音符严格短，避免和 kick 低频重叠太久。
