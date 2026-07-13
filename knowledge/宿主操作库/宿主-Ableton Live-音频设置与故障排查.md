# Ableton Live 音频设置与故障排查

## 核心概念
- Live 11 / 12 里最容易影响稳定性的不是编曲操作本身，而是 `Audio`、`Link, Tempo & MIDI`、`Plug-Ins` 这三页设置有没有先理顺。
- `Session View` 负责非线性触发，`Clip View` 负责 loop、warp、gain、pitch；很多“节奏不对”“触发混乱”“导入后爆音”的问题，其实都出在这两层。
- `Driver`、`Buffer`、`Sample Rate`、`Latency Compensation` 是同一条链路上的变量，低延迟越激进，越容易把 CPU、磁盘、插件兼容性问题暴露出来。
- Live 12 菜单叫 `Settings`，Live 11 手册更多写 `Preferences`，但音频、插件、控制器的排查逻辑基本一致。

## 使用场景
- 打开 Live 没声、输入输出不对、耳机 cue 出不来。
- 录音或弹软件音源延迟大，一降 buffer 就爆音或卡顿。
- VST2 / VST3 / AU 装好了，但 Live 浏览器里不显示，或扫库时闪退。
- MIDI 键盘能被识别，但不能控制参数，或者推子一切页就跳值。
- 导入 loop、人声、整轨后不跟拍，或者 Warp 后 CPU 明显飙高。

## 核心参数
- 安装 / 授权：官方流程是从 `ableton.com` 的 `User Account` 下载对应安装器，安装完成后再授权。手册明确写了每个 Live license 带两次授权，因此常见卡点先核对账号、版本和授权状态是不是对应。
- Driver / Device：macOS 走 `CoreAudio`，必要时可在 `Driver Type` 里切别的驱动；Windows 先选稳定的 `ASIO` 驱动，再在驱动自己的控制面板里管设备。先确认 input/output device 都指向你真正用的那块接口。
- Buffer / Latency：实时弹奏和软件监听时，先用当前机器“能稳定运行的最低 buffer”；如果出现 crackle、dropout、节奏发抖，就回退到更大 buffer，再继续查高负载轨道和插件。`Overall Latency` 更适合在 monitor=`Off` 时校正录音偏移。
- Monitoring：monitor=`In` / `Auto` 时，`Keep Monitoring Latency in Recorded Audio` 会按你听到的时间点落录音；录软件音源或软件效果通常保持开启，录原声乐器或依赖外部直通监听时可关掉。`Reduced Latency When Monitoring` 能进一步压低监听延迟，但 return 轨和部分补偿链路可能不同步。
- Sample Rate：工程开始前先定采样率，不要做到一半再改；官方明确提醒，混用不同采样率素材会触发实时转换。要长期稳定，先离线转到工程采样率，再导入 Live。
- Input / Output Config：在 Audio Settings 里只启用真正会用到的 `ins/outs`，可以减少持续 CPU 负担；通道可设成 mono 或 stereo，也可以重命名。耳机 cue 出不来时，先确认 `Main` 和 `Cue Out` 走的是不同物理输出。
- Plug-in scanning：Live 支持 `VST2`、`VST3`，以及 macOS 的 `AU2` / `AU3`。Windows 重点看 `Use VST Plug-In Custom Folder`；macOS 可同时用 `System Folders` 和 `Custom Folder`。第一次没显示时先去 `Plug-Ins Settings` 激活源；若怀疑某插件导致启动崩溃，可按住 `Alt/Option` 跳过扫描。连续两次扫库崩溃的插件，Live 会先标记为 unavailable，通常要重装或移出目录后再扫。
- MIDI controller：原生支持的控制器直接在 `Control Surface` 下拉里选，并配对 input/output；非原生控制器至少要在 `MIDI Ports` 里把 `Remote` 打开。带电动推子、灯环、LED 反馈的设备，output 端的 `Remote` 也要开，否则 Live 回不去状态。Bank 切页后参数跳值明显时，优先用 `Value Scaling`，其次 `Pick-Up`。
- Warp / Clip / Session：`Clip View` 决定 loop、warp、gain、pitch；`Session View` 里一个轨同一时间只会播一个 clip，Session clip 会覆盖同轨 Arrangement，恢复靠 `Back to Arrangement`。鼓 loop 优先 `Beats`；整轨或复合素材再试 `Complex` / `Complex Pro`，但这两种模式更吃 CPU，不要默认全开。
- CPU / 爆音 / 卡顿：先看 CPU meter 和 per-track performance impact，冻结最重的轨道；禁用不用的 I/O；磁盘 overload 时优先改 mono input、减少同时读写的音频通道、必要时给 clip 开 `RAM Mode`。不是必须跟拍的 one-shot、FX、spoken word，就不要强开 Warp。

## 实战案例
- 工程没声或录不到：先查 `Driver Type` 和 input/output device，再查 `Input/Output Config` 有没有把需要的通道启用；最后才看 track arm、monitor、`Main/Cue Out`。
- 一边弹一边爆音：先把 buffer 调到机器能稳定承受的最低值，再试 `Reduced Latency When Monitoring`；如果还不稳，关掉不用的 I/O、冻结高 impact 轨，别在录音模板里默认挂 `Complex Pro`、高延迟 reverb 和重型母带链。
- 插件不显示或启动闪退：先确认 `Plug-In Sources` 已激活，再核对 `Custom Folder` / `System Folders`；启动就崩时用 `Alt/Option` 跳过扫描定位问题插件。若同一插件重复把 Live 扫崩，先重装或移出目录，不要反复强扫。
- Loop 不跟拍或 Warp 后发虚：先在 `Clip View` 判断这段音频该不该 Warp；鼓 loop 用 `Beats`，长整轨或人声再试别的模式。真的要用 `Complex` / `Complex Pro` 时，优先只给必要片段开，不要全工程一把梭。
