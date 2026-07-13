# FabFilter Pro-G 门限与扩展

## 核心概念
- Pro-G 是 gate/expander，用来清理噪声、控制漏音或增强动态对比。
- 它包含多种程序相关算法、threshold、ratio、range、attack、release、hold 和 sidechain。
- Gate 不是只能全关，Range 可决定关闭时衰减多少。
- Sidechain filtering 能让门限只对目标频段敏感。
- 实战上宁愿少关一点，也不要切掉自然尾音。

## 使用场景
- 鼓漏音控制、电吉他进失真前清理、口播降底噪、鼓总线动态增强。
- 需要清理 snare 漏镲时，用 sidechain filter 锁定 snare 主体。
- 需要人声降噪时，用 expander 小幅衰减，不要硬 gate。
- 需要增强鼓 punch 时，用 expand 让重击更突出。

## 核心参数
- 需要特殊节奏门效果时，可用外部 sidechain。
- Threshold：信号超过时打开或扩展。
- Ratio/Range：决定衰减强度和最大衰减。
- Attack：太慢会吃音头，太快可能点击。
- Hold：保持打开时间，避免字尾或鼓尾被砍。
- Release：关闭速度，决定自然尾巴。

## 实战案例
- Side Chain：过滤或外部触发门限。
- Snare：threshold 只让击打打开，range 设 -10 到 -20 dB 保留自然漏音。
- 人声房噪：低 ratio expansion，release 慢一点，避免字间抽吸。
- 电吉他：进 amp 前 gate，attack 快，release 跟 palm mute 节奏。

## 补充提醒
- 创意门：鼓组触发 pad 的外部 sidechain，形成节奏切割。
