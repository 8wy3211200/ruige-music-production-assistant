# Studio One 插件扫描与管理

## 这是什么
- 这页解决的是“插件装了为什么不显示”“为什么启动时卡在扫库”“为什么某个插件修好了还是不回来”“VST2 / VST3 / AU 在哪里看”。
- Studio One 的官方思路不是“死命强扫”，而是先扫描、再隔离坏插件、再通过 `Plug-In Manager` 和 `Blocklist` 做恢复。
- 另外，很多人不会区分“插件被扫描到”和“插件预设被索引到”。这两件事不是一回事。

## 怎么操作
- 首次启动时，官方文档明确写的是：宿主会扫描外部 `VST2 / VST3` 插件，检查兼容性和功能。
- 如果扫描中发现有缺陷或不兼容的插件，它会被自动隔离到 `blocklist`，避免宿主启动就崩。
- 打开 `Plug-In Manager`：
  - 在 Browser 相关页面底部可以直接点 `Plug-In Manager`。
  - 这里可以触发 `Update Plug-Ins` 做完整重扫。
- 恢复被拦截的插件：
  - 路径在 `StudioPro/Options/Locations/VST Plug-ins`。
  - 如果你已经重装或修复过那个插件，再点 `Reset Blocklist`。
- `Scan at startup`：
  - 同样在 `Options/Locations/VST Plug-ins` 里。
  - 关掉后启动会更快，但宿主也不会主动知道你刚装了新插件或插件刚更新过。
  - 所以“昨天刚装，今天 Browser 里还没有”，先看这里是不是被关了。
- Browser 与格式：
  - 官方在 Browser / Process Rack 文档里明确写到，兼容插件会按 `AU`、`VST2`、`VST3` 格式文件夹呈现。
  - 对用户来说，最实用的判断是：如果同一个插件同时有 `VST2` 和 `VST3`，优先先试 `VST3`；如果是 macOS 且 AU 能看到、VST3 反而异常，再按 AU 单独排查。
- `Re-Index Presets`：
  - 当你移动、删除、重命名了插件预设，但宿主搜索结果还停留在旧状态时，用这个功能重建预设索引。
  - 它解决的是“预设显示不对”，不是“插件本体没被扫描到”。
- 问题工程的安全打开：
  - 开始页右键某个工程，可以用 `Open with Options...`，临时禁用插件来定位到底是哪一个实例把工程拖挂。

### 常用内置插件入口
- `Ampire`：
  - 窗口核心是四块：`Toolbar`、`Gallery`、`Edit Section`、`Pedalboard`。
  - 最常问的是三个入口：调输入输出和调音器看 `Toolbar`，换箱头 / 箱体看 `Gallery`，前后级效果顺序看 `Pedalboard`。
  - `Pedalboard` 最多可放 8 个 stomp，还能拖动蓝线改成前级前或后级后。
- `Fat Channel XT`：
  - 最值得用户先会的是 `Stacked Mode`、处理器切换按钮、`Swap Comp/EQ Order`、`Compressor / EQ Model Selectors`。
  - 想换压缩器或 EQ 模型，不是在插件列表里再插一个，而是在 `Fat Channel XT` 里点模型菜单切换。
- `Analog Delay`：
  - 官方描述里最实用的几个关键词就是 `tempo sync`、`LFO`、`filtered feedback`。
  - 用户问“为什么延迟不跟拍”时，先确认是不是没切到 tempo sync。

## 常见误区与排查
- 误区：插件修好了，宿主就会自动把它放出来。
  - 正解：如果它之前已经进了 `blocklist`，修好后还要 `Reset Blocklist`，必要时再 `Update Plug-Ins`。
- 误区：为了加快启动，把 `Scan at startup` 关掉后，之后装新插件还指望它自动出现。
  - 正解：关掉后就要手动触发扫描，否则宿主根本不知道有新插件。
- 误区：插件没显示，就去重建预设索引。
  - 正解：`Re-Index Presets` 只管预设搜索，不管插件扫描。
- 症状：某工程一开就卡、闪退，怀疑是插件实例。
  - 先用开始页的 `Open with Options...` 禁用插件打开工程。
  - 再回头逐个启用定位问题实例。
- 症状：搜索结果顺序怪、某些扫描行为异常。
  - `Fender Studio Pro 8.0.2` 官方更新里修过 `Improved plug-in ordering after search`，也修过 `Full plug-in scan forced when changing time zones`。
  - 如果你遇到的行为和旧版描述一致，先确认当前版本。
- 症状：某些 `VST3` 在高精度处理下裂音、尖峰。
  - 这不是纯“扫不到”的问题，而是版本兼容问题。`8.0.1` 官方 release notes 已修过一类 `VST3` 在 `64-bit process precision` 下的 crackles / spikes。

## 补充提醒
- 萃取边界：不搬整本插件百科，只保留“装得上、看得到、能定位、会打开”这几个高频问题。
