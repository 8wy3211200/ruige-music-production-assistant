# FabFilter Pro-L 2 真峰值限制

## 核心概念
- Pro-L 2 是 true peak limiter，适合母带、stem 和单轨峰值控制。
- 它提供多种 limiting algorithm、true peak、loudness metering、oversampling 和 dithering。
- 限制器不是越响越好，目标是电平、失真、瞬态和响度的平衡。
- Modern 通用，Aggressive 更适合 EDM，Bus 适合鼓和单轨，Safe 目标是安全少失真。
- 先设 Output/True Peak 上限，再推 Gain 找响度。

## 使用场景
- 母带响度、drum bus 控峰、stem mastering、导出前防削顶。
- 需要流媒体安全时，启用 true peak 并留合理 ceiling。
- 需要鼓总线态度时，用 Bus 或 Aggressive，小心瞬态失真。
- 需要透明母带时，用 Modern 或 Safe，少量 gain reduction。

## 核心参数
- 需要判断限制内容时，用 Audition Limiting 听 delta。
- Gain：推入限制器的响度。
- Output/Ceiling：最终峰值上限。
- Style/Algorithm：决定限制性格。
- True Peak：控制采样间峰值。
- Oversampling：降低失真，代价是 CPU。

## 实战案例
- Loudness Metering：观察 momentary、short term、integrated、LRA。
- 母带：True Peak 开启，ceiling 留余量，gain reduction 尽量只在峰值处发生。
- 鼓总线：Bus 风格，限制偶发峰值，不追求透明。
- EDM demo：Aggressive 快速做响，但检查低频是否糊。

## 补充提醒
- 交付前：比较 unity gain，确认更响不是错觉。
