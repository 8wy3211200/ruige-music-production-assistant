# Studio One 音频设备与Buffer

## 这是什么
- 这页管的是 `Audio Device`、`Device Buffer Size`、Windows 下的 `Internal Buffer Size`、`Dropout Protection`、`Low-Latency Monitoring`、`Sample Rate` 和当前总延迟。
- 用户最常见的问题不是“不会录”，而是录音时延迟大、一降 buffer 就爆音，或者工程一重就卡。
- 在 Studio One 这套逻辑里，`设备缓冲` 和 `处理缓冲` 不是一回事。只会死降 buffer，通常会把问题越调越糟。

## 怎么操作
- 进入位置：`Studio Pro/Options/Audio Setup`。开始页也可以点 `Configure Audio Device`。
- 先选对设备：Studio Pro 会从系统已安装设备里自动选一个音频设备。排查没声或延迟异常时，先确认不是又切回了板载声卡。
- `Control Panel`：如果你的声卡驱动自带控制面板，优先在驱动面板确认采样率、时钟和缓冲，再回 Studio Pro 看宿主显示是否一致。
- `Device Buffer Size`：录音、弹软音源、实时监听时，从低值开始往上试。官方建议就是选“最低但仍能稳定工作”的 buffer。
- Windows 的 `Internal Buffer Size`：默认用 `Lock` 跟随 `Device Buffer Size`。如果你不确定，不要手动拆开；官方明确建议拿不准就保持锁定。带 DSP 的外置方案更建议保持锁定。
- `Dropout Protection`：这会改变 `Process Buffer Size`，让大工程回放和插件处理更稳定。想兼顾大工程稳定和低监听延迟，不要只调 `Device Buffer Size`，而要配合 `Dropout Protection`。
- `Enable low latency monitoring for instruments`：手弹软音源觉得“手感慢”时先开；如果某个超重型音源反而更不稳，再关掉单独比对。
- `Use native low latency monitoring instead of onboard DSP`：需要在宿主里直接听到通道插入效果时，用原生低延迟监听；如果靠声卡自带 DSP 返听，延迟可能更稳，但通道插入效果不会进监听链。
- `Monitoring Latencies`：这里会直接显示输入、输出、总延迟、采样率和位深。排查“到底慢多少”先看这里，不要只靠体感猜。
- `Process Precision`：默认 `32-bit floating point` 就是安全起点。需要切到 `64-bit` 时，先确认第三方插件已经更新，因为 `8.0.1` 官方 release notes 明确修过“部分 VST3 在 64-bit precision 下出现 crackles / spikes”。
- `Enable Multi-Processing`：官方默认开启。除非你就在定位性能异常，否则先别关。
- Windows only 的 `Release Audio Device in Background`：默认关闭。只有你希望最小化 Studio Pro 后把当前声卡释放给别的软件时再开。

## 常见误区与排查
- 误区：一有延迟就把 `Device Buffer Size` 拉到最低。
  - 正解：实时监听手感主要看 `Device Buffer Size`，大工程稳定性更多看 `Dropout Protection / Process Buffer Size`。
- 误区：监听链里挂了高延迟插件，还要求边录边“零延迟”。
  - 正解：官方写得很清楚，原生低延迟监听下，只有增加 `3 ms` 以内延迟的插入效果还能实时听到；更高延迟的插件在 armed / monitor 状态下不会进入监听路径。
- 误区：Windows 下把 `Internal Buffer Size` 解锁乱试。
  - 正解：先保持 `Lock`，除非你明确知道设备驱动和宿主内部缓冲的关系。
- 症状：录音一开就爆音、卡顿，但停播后又正常。
  - 先把 `Device Buffer Size` 回退一级。
  - 再提高 `Dropout Protection`，给回放和处理更多余量。
  - 再去 `Performance Monitor` 看是不是某几个乐器或插入插件把 CPU 顶满。
- 症状：切到 `64-bit` precision 后才出现 crackle / spike。
  - 先回到 `32-bit` 验证，再更新对应 VST3。这个坑在 `Fender Studio Pro 8.0.1` 官方更新里有明确修复记录。
- 症状：最小化 Studio Pro 后别的软件突然抢声卡，或者 Studio Pro 切回来没声。
  - 检查 Windows 的 `Release Audio Device in Background` 有没有被打开。

## 补充提醒
- 萃取边界：只保留设备、buffer、延迟、稳定性和实时监听相关内容，不展开整本安装手册。
