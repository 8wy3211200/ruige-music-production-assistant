# FabFilter Pro-DS 齿音控制

## 核心概念
- Pro-DS 是齿音控制器，本质是只在尖锐 s、sh、ch 区域触发的动态处理。
- 它适合在人声链中放在压缩前后测试，常见位置是 EQ 后、主压缩前或后。
- Wide Band 更自然，Split Band 更少影响整体音色。
- Audition/Listen 用来确认插件到底抓到了什么。
- 不要把所有高频都压暗，只压刺耳瞬间。

## 使用场景
- 主唱齿音、和声叠层刺耳、口播、亮女声、镲片类尖锐素材。
- 需要保留空气感时，减少 range 或用 split band。
- 需要强力控齿音时，先定位频段，再逐步加 threshold/reduction。
- 需要判断是否过度时，听 bypass 后人声是否突然变活。

## 核心参数
- 需要叠唱统一时，在 group 上轻微 Pro-DS。
- Threshold：决定触发灵敏度。
- Range：限制最大衰减量，避免过度暗淡。
- Detection：选择 vocal/allround 等检测方向。
- Wide/Split Band：决定全频衰减还是只处理高频带。
- Audition：只听被检测的齿音内容。

## 实战案例
- Lookahead/Processing：保证尖峰被及时抓住。
- 女声主唱：先 Audition 找 s 区域，再让每次齿音衰减 2-5 dB。
- 和声组：每轨少量处理，group 再轻压，避免叠加刺耳。
- 齿音后仍刺：先检查 6-9 kHz EQ 提升是否过量。

## 补充提醒
- 过度变闷：降低 range，或改 split band 保留整体亮度。
