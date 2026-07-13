# Studio One 导出与Mixdown

## 这是什么
- 这页解决的是“整首怎么导出”“为什么导出来被截尾”“为什么 stem 和整混不一样”“为什么这次必须实时导出”“Zip 打包到底带不带插件”。
- `Mixdown` 是整首或整个输出总线的成品导出，`Export Stems` 是把轨道或通道拆开单独导出，`Mixdown Selection` 则更像工程内部合并片段。
- 用户最容易踩的坑不是按钮找不到，而是 `Export Range` 选错、效果尾音被截掉、外部硬件工程却强行离线导出。

## 怎么操作
### 1. 导出整首 Mixdown
- 进入位置：`Session/Export Mixdown`，或直接按 `Ctrl + E`。
- 文件位置和命名：
  - 默认会落到当前 Session 的 `Mixdown` 文件夹。
  - 你改过一次位置后，这个 Session 后续会沿用该位置，直到你关闭工程。
- 常用格式：
  - 官方列出的常见格式包括 `Wave`、`AIFF`、`FLAC`、`CAF`、`M4A`、`Ogg Vorbis`、`Opus`、`MP3`。
  - 要做标准音频 CD，官方给的直接建议是 `16-bit / 44.1 kHz Wave`。
- `Export Range` 最关键：
  - `Session Content`：导出时间线上全部事件内容。对粗心用户最稳，因为不用先把 loop 或 start/end marker 设准。
  - `Between Loop`：只导出左右 locator 之间。
  - `Between Session Start/End Marker`：按 Marker Track 里的起止 marker 导出。
  - `Between Each Marker`：按 marker 分段导出多个文件。
  - `Between Selected Markers`：只导出你指定的两个 marker 之间。
  - `AutoTail`：只在 `Session Content` 下可用，用来给尾部混响 / delay 留额外时间，避免自然衰减被切掉。
- `Target Loudness / Adjust Loudness`：
  - 导出时可以按平台 preset 做响度和 true peak 调整。
  - 但官方也明确提醒：如果素材动态范围太大，`Target Loudness` 和 `Max True Peak` 会冲突，这时 `Max True Peak` 优先。
- 其他高频选项：
  - `Output`：默认是 `Main Out`，如果你有子输出总线，也能选。
  - `Speaker Format`：`Original`、`Mono`、`Stereo`、`Split Mono`。
  - `Processing`：`Automatic`、`Offline`、`Realtime`。
  - `Bypass Master Effects`：想导一个不带主输出母带链的 pre-master 时很有用。
  - `Write tempo to Audio Files`：把 tempo 信息写入导出文件，方便后续项目再用。
  - `Import to Track`：导完后自动回灌到工程新轨道，适合快速 A/B。

### 2. 导出 Stems
- 进入位置：`Session/Export Stems`，或按 `Ctrl + Shift + E`。
- `Sources` 有两种：
  - `Tracks`：按编排页里的轨道导。
  - `Channels`：按 Console 里的通道导。
- 一个非常关键的官方说明：
  - 选中的每个 track / channel 导出来，等价于你把它 solo 后听到的结果。
  - 也就是说，它会包含该轨或该通道上的 `Inserts` 和 `Sends`。
  - 如果你不想把这些处理带进去，导出前先关掉对应处理。
- Stems 也有和 Mixdown 类似的 `Export Range`：
  - `Session Content`
  - `Between Loop`
  - `Between Session Start/End Marker`
  - `Between Each Marker`
  - `Between Selected Markers`
  - `AutoTail`
- 高频选项：
  - `Split Mono`：把多声道输出拆成独立单声道文件。
  - `Keep Speaker Format`：即使轨道接到了不同格式的 bus / output，也保留轨道本身的声道格式。
  - `Use Realtime Processing`：工程含外部 MIDI 乐器或外部硬件处理时要开。
  - `Write tempo to audio files`：方便别的工程继续跟 tempo。

### 3. 什么时候必须实时导出
- 如果工程里用了 `External Instrument`，官方明确写了：`bouncing`、`rendering`、`mixdown` 会自动切到实时。
- 如果用了处于工作状态的 `External Effect`，也要实时导出，硬件插入才能被真正录进结果。
- 反过来，如果工程没有这些外部链路，离线导出通常更快也更稳。

### 4. Zip 打包不是“带插件导出”
- `Export to Zip` 适合备份和分享工程。
- 官方明确说明：商业插件、Sound Sets 等不会被打进 Zip，这是版权原因，不是你漏选了。
- Zip 也只会带被工程实际引用的文件，不会把未使用文件和 alternate versions 全塞进去。

## 常见误区与排查
- 误区：每次都用 `Between Loop`，结果导出来老是缺头少尾。
  - 正解：如果你只是想“整首稳稳导完”，优先先用 `Session Content`。
- 误区：尾音被切，就以为是插件坏了。
  - 正解：先看是不是没用 `AutoTail`，或者 range 选成了 loop / marker。
- 误区：导出的 stem 和整混听感不同，不知道为什么。
  - 正解：官方定义就是“相当于 solo 后听到的结果”。如果你的 send / insert / bus 结构和整混依赖关系复杂，stems 听起来和整首不完全一样是正常的。
- 误区：外部合成器 / 外部硬件工程还强制离线导出。
  - 正解：有外部链路就该实时导，不然数据和音频不会按真实时间流过硬件。
- 误区：要交给母带工程师的预混还带着主输出 limiter。
  - 正解：直接勾 `Bypass Master Effects` 导一个不带母带链的版本。
- 误区：Zip 发给别人，对方却说插件和音色没跟过去。
  - 正解：Zip 不会打包商业插件和版权内容，官方就是这么设计的。
- 版本提醒：
  - `8.0.2` 官方更新强调了 `Export Mixdown` 里的 `Session Content` 选项，目的就是减少 loop / marker 没设对导致的漏导。
  - `8.0.1` 官方更新里也出现过“某些 automation 节点在 export 时被忽略”的修复项。遇到导出与工程回放不一致，先看版本。

## 补充提醒
- 萃取边界：不展开 SoundCloud、TuneCore、Notion 联动，只保留真实交付最常问的导出逻辑。
