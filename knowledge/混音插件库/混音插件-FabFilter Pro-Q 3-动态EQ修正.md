# FabFilter Pro-Q 3 动态 EQ 修正

## 核心概念
- Pro-Q 3 是工作马 EQ，关键功能是高效频段编辑、动态 EQ、M/S 和频谱辅助。
- 动态 EQ 适合只在问题出现时处理，而不是永久削掉频率。
- Per-band mid/side 可让中心和两侧分开修正。
- Spectrum Grab、EQ Match 和 analyzer 用于定位问题，但最终以耳朵判断。
- 处理模式要按场景选择：zero latency、natural phase 或 linear phase。

## 使用场景
- 人声齿音前的刺耳区、贝斯低频峰值、母带局部共振、立体声侧边清理。
- 需要只压某几个词的鼻音时，用动态 bell。
- 需要让低频居中干净时，side 低切，mid 保留主体。
- 需要母带透明修正时，少量宽 Q 和 natural/linear phase。

## 核心参数
- 需要快速找共振时，用 solo 和 analyzer 辅助。
- Frequency/Gain/Q：每段 EQ 的核心三件套。
- Dynamic Range：决定该频段动态处理深度。
- Threshold：决定何时触发动态 EQ。
- Stereo Placement：Left/Right、Mid/Side 分别处理。
- Processing Mode：决定延迟、相位和透明度。

## 实战案例
- Spectrum Analyzer：观察但不替代听感。
- 人声 300 Hz：动态削 2-3 dB，只在大声字触发。
- 贝斯 60 Hz：动态压峰值，避免每个音低频不均。
- 母带侧边：Side 低切到合适位置，保持低频中心稳定。

## 补充提醒
- 刺耳吉他：扫到 3-5 kHz 共振，用窄 Q 动态控制。
