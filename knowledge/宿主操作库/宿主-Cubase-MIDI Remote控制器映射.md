# Cubase MIDI Remote 控制器映射

## 核心概念
- MIDI Remote 用来把实体控制器映射到 Cubase 参数、插件和 MixConsole。
- 控制器映射的目的不是炫技，而是把常用演奏和混音动作变成肌肉记忆。
- Mapping Assistant 适合快速建立控制关系，Manager 适合管理设备脚本。
- 远程控制要少而稳定，优先映射 transport、常用 CC、表情、音量和宏。
- 演奏型音源的表情参数应优先分配到推子或踏板。

## 使用场景
- 写弦乐表情、控制滤波、现场录自动化、快速平衡 MixConsole。
- 需要录入真实动态时，把 CC1/CC11 或音源主控映射到硬件。
- 需要混音时，把少数 bus fader 和 send 映射到控制器。
- 需要切换 patch 或浏览声音时，映射安全的前后步进。

## 核心参数
- 需要避免误触时，不映射不常用或危险参数。
- MIDI Remote Tab：加载设备脚本和查看控制器。
- Mapping Assistant：建立硬件到参数的映射。
- MIDI Remote Manager：管理已连接设备和脚本。
- Quick Controls：为轨道或插件暴露少量关键参数。
- Host Automation：录下控制器动作。

## 实战案例
- Exclusive Ports：避免同一 MIDI 端口被重复使用造成冲突。
- 弦乐录制：推子控制 Dynamics，踏板控制 Expression，边弹边录自动化。
- 合成器滤波：旋钮映射 cutoff 和 resonance，用手推过门。
- 粗混：8 个推子映射 8 个 group，快速做段落平衡。

## 补充提醒
- 现场模板：只保留 transport、scene marker 和少量宏，降低误操作。
