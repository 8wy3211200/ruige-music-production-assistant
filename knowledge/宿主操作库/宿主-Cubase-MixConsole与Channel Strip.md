# Cubase MixConsole 与 Channel Strip

## 核心概念
- MixConsole 是 Cubase 的混音中心，Channel Strip 用来快速做通道级处理。
- Insert、Send、EQ、Channel Strip、Routing 和 Metering 要分工清楚。
- Lower Zone 的 MixConsole 适合编曲阶段快速平衡，独立窗口适合正式混音。
- Send Effects 用于共享空间，Insert Effects 用于通道个性处理。
- 冻结 Insert Effects 能在大工程里释放性能。

## 使用场景
- 编曲阶段粗混、正式混音、通道整理、效果路由、导出前检查。
- 需要统一混响时，用 FX Channel + Send，不要每轨插独立混响。
- 需要快速修声部时，先用 Channel Strip 的 gate/comp/EQ。
- 需要组织大工程时，同步 Project 和 MixConsole 可见性。

## 核心参数
- 需要导出 stem 时，确保 insert、EQ、send 和 routing 被正确包含。
- Insert Effects：通道专属处理。
- Send Effects：共享混响、延迟和并行处理。
- Channel Strip：快速 gate、compress、EQ、saturation 等处理入口。
- VCA/Group：组织多个通道的整体控制。
- Control Room：监听和参考音量管理。

## 实战案例
- Freeze Inserts：降低 CPU，定稿前再解冻微调。
- 人声：insert 放清理和压缩，send 到统一 plate 和 delay。
- 弦乐组：单轨少处理，group 上统一 EQ 和轻压缩。
- 鼓组：kick/snare 分轨 insert，整体 drum bus 做 glue。

## 补充提醒
- 导出前：检查 MixConsole 是否有隐藏但仍出声的通道。
