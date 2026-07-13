# Clipper和Limiter的区别及使用方式？

**症状：** 提响度时只知道用Limiter，不知道还有Clipper可以选择。

**原因：** Limiter是"软"限制，允许瞬态稍微超过阈值再压下来；Clipper是"硬"削波，超过阈值的部分直接截掉。

**解决：** 两种方式对比——Limiter声音更"软"但容易在高响度时产生可闻失真；Clipper声音更"硬"但失真更可控。推荐组合使用：先加Clipper处理瞬态峰值，再加Limiter控制整体响度。这样Limiter承担的工作量减少，失真概率降低。具体参数建议：Clipper阈值设置在-1dB到-3dB之间，Limiter ceiling设置在-0.3dB真峰值。

**常见误区：** 只用Limiter提响度，尤其在响度要求很高（超过-9LUFS）时，Limiteralone会产生明显失真；或者只用Clipper导致声音太"硬"。

**关键词：** #响度, #母带, #压缩, #插件

---
