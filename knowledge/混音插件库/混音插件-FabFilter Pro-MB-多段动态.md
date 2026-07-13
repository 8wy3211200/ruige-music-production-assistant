# FabFilter Pro-MB 多段动态

## 核心概念
- Pro-MB 用多段压缩和扩展处理频率相关动态问题。
- 它适合动态 EQ 和全带压缩都不够精准的场景。
- 每个 band 都要有明确目标，不能把全频切成很多段乱压。
- 自由 band 结构让你只在有问题的区域建立处理。
- Sidechain 和扩展模式可用于频段 ducking 或增强。

## 使用场景
- 低频忽大忽小、人声低中频拥堵、镲片刺耳、母带局部控制、kick/bass 让位。
- 需要只控制低频峰值时，只建一个低频 band。
- 需要主唱出现时压伴奏中频，可用外部 sidechain。
- 需要让瞬态更明显时，用 upward expansion 或合适 range。

## 核心参数
- 需要母带透明处理时，band 数少、ratio 小、attack/release 慢。
- Band Range：决定频段范围。
- Threshold/Ratio：控制该频段动态。
- Attack/Release：决定响应速度。
- Range：限制最大增益变化。
- Sidechain：内部或外部触发。

## 实战案例
- Solo Band：调参时听目标频段，最后必须回全频判断。
- 贝斯低频：只压 40-120 Hz 峰值，保留 700 Hz 指感。
- 人声浑浊：200-400 Hz 动态压，唱大时自动收。
- 伴奏让位：主唱 sidechain 触发 1-4 kHz 轻压。

## 补充提醒
- 母带：只对刺耳高频轻微下压，避免全曲变暗。
