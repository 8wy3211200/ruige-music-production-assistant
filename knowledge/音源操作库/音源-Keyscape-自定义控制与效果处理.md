# Keyscape 自定义控制与效果处理

## 核心概念
- Keyscape 的 Custom Controls 是把复杂建模和效果压成可演奏控制的入口。
- 常用控制包括 Amplifier、Character、Chorus、Compression、Damper、Echo、EQ、Feel、Filter、Image、Lo-Fi、Mix。
- 处理顺序要围绕编曲角色：先触感，再音色，再空间和效果。
- 不要把 Keyscape 当完整混音链，必要时把音源内部效果和外部混音插件分工。
- 控制改动应另存 patch，形成项目专用键盘色板。

## 使用场景
- 电钢需要更复古时，用 Character、Chorus、Lo-Fi 和 Echo。
- 钢琴需要贴近主唱时，先调 Damper、Compression、EQ，再进外部总线。
- 伴奏键盘占空间太多时，用 Image 和 Filter 收窄。
- Lo-fi 或氛围段落需要把音色做旧，而不是只降采样率。

## 核心参数
- Character：改变音色个性，适合从干净到复古的方向调整。
- Compression：控制动态，伴奏可轻压，独奏保留更多起伏。
- Damper：影响钢琴踏板和共鸣感，太多会糊。
- Echo：做节奏呼应时跟随歌曲速度，不要盖过主旋律。
- Filter：收高频或低频，让键盘退到合适层次。
- Image：控制宽度，低频键盘和主钢琴不宜过宽。

## 实战案例
- Rhodes 伴奏：加少量 Chorus，Echo 只在空拍显现，Filter 收掉刺耳高频。
- C7 主钢琴：Compression 轻压峰值，Damper 保持自然，外部混响统一空间。
- Lo-fi 键盘：Character 加旧化，Image 收窄，Echo 做短反馈。
- 副歌叠层：一个干净钢琴居中，一个电钢窄宽度低电平铺底。
