# Cubase Sampler Track 与 AudioWarp

## 核心概念
- Sampler Track 让音频样本通过 MIDI 演奏，AudioWarp 负责时间拉伸和对齐。
- 采样编曲可以先用 Sampler Control 找音高、起点和包络，再进入 MIDI 编写。
- AudioWarp Quantize 可让音频事件跟上网格或 groove。
- 相位相关素材要注意 Phase-Coherent AudioWarp，尤其是多麦克风鼓或乐器组。
- 采样变乐器时要先清理起点和音量，再设计音色。

## 使用场景
- 人声切片、鼓 one-shot、采样 hook、loop 对齐、音频素材再创作。
- 需要把一段 audio 变成可弹音色时，创建 Sampler Track。
- 需要修鼓 loop timing 时，使用 AudioWarp 和 Quantize。
- 需要切片变奏时，先复制采样，再用不同起点和 pitch。

## 核心参数
- 需要节省 CPU 时，可把采样轨冻结。
- Sampler Control：编辑样本波形、起点、循环和播放。
- Root Key/Pitch：决定 MIDI 演奏的音准基础。
- AudioWarp Quantize：把音频事件对齐节拍。
- Phase-Coherent AudioWarp：保持多轨相位一致。
- Track Freeze：冻结采样轨和效果。

## 实战案例
- Automation：控制 filter、pitch 或 volume 做变化。
- 人声 chops：拖入 Sampler Track，设 root key，按旋律重弹。
- 鼓 loop：AudioWarp 对齐 kick/snare，再保留少量原始 swing。
- 采样 hook：复制两轨，一轨正常，一轨降八度只留低频支撑。

## 补充提醒
- 多麦鼓修正：先建 group，再用相位一致的 AudioWarp。
