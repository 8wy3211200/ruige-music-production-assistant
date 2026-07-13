# Cubase Expression Maps 技法管理

## 核心概念
- Expression Maps 用来把音源技法映射成可读的音乐表达，而不是散落的 keyswitch。
- 它适合管弦、吉他、贝斯等多技法音源，能让 MIDI 编辑更清楚。
- Cubase 可导入 VST Instrument 的 key switches，也可手动添加。
- Articulations controller lanes 能把技法变化显示在 Key Editor 中。
- 技法管理越早标准化，越少在后期找错音色。

## 使用场景
- BBCSO、Kontakt 弦乐、Ample Bass、吉他音源的多技法编程。
- 需要交付 MIDI 时，用文字化 articulation 比裸 keyswitch 更可读。
- 需要同一音源多轨复用时，先建统一 expression map。
- 需要修错技法时，在 articulation lane 查比在低音区查更快。

## 核心参数
- 需要多个互斥技法时，用 mutual exclusion 逻辑整理。
- Expression Map：技法名称到触发方式的映射。
- Articulations Lane：在 Key Editor 中显示技法事件。
- Key Switch Import：从 VST Instrument 导入 keyswitch。
- Direction/Attribute：区分持续性技法和单音技法。
- Mutual Exclusion：避免 long 和 staccato 等互斥状态同时存在。

## 实战案例
- Track Assignment：每条 MIDI/Instrument track 指定正确 map。
- 弦乐轨：Long、Spiccato、Pizzicato 写成 articulation，不再裸放 C0/D0。
- 贝斯轨：Slide、Mute、Sustain 标清楚，混音前也能读懂演奏。
- 旧工程整理：先把低音区 keyswitch 翻译为 expression map，再清理无效音。

## 补充提醒
- 协作：导出 map 随工程附上，避免对方打开后技法错乱。
