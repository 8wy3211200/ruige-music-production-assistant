# VoiceMeeter没声音与设备识别排查

适用问题：
- 安装后电脑突然没声音
- VoiceMeeter 里没有电平，或者有电平但听不到
- Zoom、Discord、OBS 识别不到正确输入
- 换了 USB 口、插拔设备、改了 Windows 声音设置后突然断流

核心结论：
- VoiceMeeter 一旦被设成默认音频设备，它就必须处于运行状态，否则系统可能直接没声音。
- 这类问题大多数不是“软件坏了”，而是默认设备、A1 输出、应用内音频设置、独占占用这几层没对齐。

先按这个顺序排查：
1. 确认 VoiceMeeter 正在运行。
   如果 Windows 默认播放设备已经指向 VoiceMeeter，但 VoiceMeeter 没开，就等于把系统声音送进了一台没开机的调音台。
2. 检查 Windows 声音默认设备。
   看清楚默认播放、默认通信、默认录音分别指向谁。做语音/直播时，`Communications` 选项更适合设成 `Do Nothing`，避免系统自动压低别的声音。
3. 检查 `A1` 有没有选到真正可用的输出设备。
   `A1` 是主输出。如果这里选错、设备离线、驱动掉了，VoiceMeeter 可能有路由但你就是听不到。
4. 检查物理输入有没有选对。
   麦克风要进 `IN1` 或 `IN2`，优先先试 `WDM`，不行再退到 `MME`。
5. 检查应用内音频设置。
   很多软件不会跟着 Windows 默认设备自动改，尤其是 `Zoom`、`Discord`、`OBS`、播放器、游戏。VoiceMeeter 装好后，应用里很可能还留着旧设备名。
6. 如果是“刚刚还好好的，改完设置就没声了”，先重启音频引擎。
   官方手册明确提到：改 Windows 声音属性、插拔 USB 设备、或别的软件占用了同一设备后，VoiceMeeter 音频流可能会停。此时先重启 Audio Engine，或者重新选一次 `A1` / 输入设备。

最容易被忽略的点：
- Windows 的 `Listen to this device` 会干扰 VoiceMeeter 路由，没特殊需要就关掉。
- 同一块物理设备如果被别的软件独占，VoiceMeeter 可能拿不到它。
- VoiceMeeter 可以不选 `A1` 靠内部时钟运行，但这样不等于你已经有正常监听输出。
- 只看一个地方最容易误判。要同时看 Windows 默认设备、VoiceMeeter 表头和应用内设备选择。

遇到“完全没电平”时怎么分层定位：
- Windows 播放器都没声：先查默认播放设备和 `A1`。
- VoiceMeeter 有输入电平，但耳机没声：先查 `A` 是否打开、`A1` 是否活着。
- VoiceMeeter 有输出，但 OBS/Discord 没收声：先查软件输入是不是选成了 `Voicemeeter Output / Out B1`。

- `VB-Audio Voicemeeter Standard User Manual` v1.1.2.2（DEC 2025）

一句话总结：
VoiceMeeter 没声音，先别急着重装；先对齐“默认设备、A1、输入源、应用内设备选择”这四层。
