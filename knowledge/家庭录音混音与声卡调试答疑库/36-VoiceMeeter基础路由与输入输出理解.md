# VoiceMeeter基础路由与输入输出理解

适用问题：
- `Voicemeeter Input`、`Voicemeeter Output`、`A1`、`B` 到底分别是什么
- 为什么系统声音进了 VoiceMeeter，但直播软件里还是没有
- 为什么麦克风有电平，但耳机里听不到
- 物理声卡、Windows 音频设备、虚拟通道之间到底是什么关系

核心结论：
- VoiceMeeter 本质上是在 Windows 音频和物理声卡之间插了一个虚拟调音台。
- 你只要分清“声音从哪来、进哪条条子、送到哪个 Bus、最后去哪个设备/软件”，大多数路由问题都能自己定位。

这东西是干什么的：
- `物理输入`：麦克风、声卡 Line In 这类真实硬件输入，进 `IN1`、`IN2`。
- `虚拟输入`：Windows 或播放器把声音送到 `Voicemeeter Input`，会进虚拟输入条。
- `A Bus`：给你自己监听，最后落到 `A1`、`A2` 这类真实输出设备。
- `B Bus`：给其他软件收声，其他软件里通常把输入源选成 `Voicemeeter Output` 或 `Voicemeeter Out B1`。
- `A1` 不只是“听哪里”，还是整个 VoiceMeeter 引擎的主时钟、主采样率和主 Buffer 参考。

怎么理解最不容易乱：
1. 先只接一台你真正要监听的设备到 `A1`。
2. 麦克风只先进一条物理输入，不要一上来就同时开很多来源。
3. 系统声音先统一走 `Voicemeeter Input`，这样网页、播放器、伴奏软件都会进同一条虚拟输入。
4. 自己听用 `A`，给直播/会议软件送用 `B`。
5. 先看 VoiceMeeter 里有没有电平，再看下游软件有没有收到，不要反过来猜。

物理声卡、Windows 设备、虚拟通道的关系：
- 物理声卡决定你真实插了什么麦克风、耳机、音箱。
- Windows 看到的是“播放设备”和“录音设备”。
- VoiceMeeter 安装后，会在 Windows 里额外提供一组虚拟播放/录音设备。
- 这些虚拟设备不是“又多了一张声卡”，而是给软件和 VoiceMeeter 之间搭桥。

最常见误区/排查点：
- 把 `Voicemeeter Input` 和 `Voicemeeter Output` 搞反。前者通常给系统或播放器播放，后者通常给 OBS、会议软件当输入。
- 没把 Windows 默认播放设备切到 `Voicemeeter Input`，结果系统声音根本没进 VoiceMeeter。
- 直接把直播软件输入选成物理麦克风，导致观众只能听到人声，听不到伴奏或系统声。
- 同时把多个物理输出都拿来监听，出现轻微错位或小回声，还以为是插件或直播软件有问题。

- `VB-Audio Voicemeeter Standard User Manual` v1.1.2.2（DEC 2025）

一句话总结：
VoiceMeeter 不是“神秘跳线器”，它就是一台虚拟调音台；先分清输入、Bus 和最终去向，路由问题就会简单很多。
