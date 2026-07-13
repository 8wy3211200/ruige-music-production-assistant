# Trilian Multi 与分层低频

## 核心概念
- Multi 可以把多个贝斯 Part 组合成一个可演奏低频系统。
- 分层低频要明确职责：sub 负责重量，mid 负责可听性，noise/attack 负责音头。
- 不要让多个层都占同一低频，否则混音会松散。
- Multi 适合写作阶段快速建立声音，混音阶段可分输出精修。
- 保存自定义 Multi 能复用一套低频审美。

## 使用场景
- 电子副歌、影视 trailer、现代流行低频增强、现场键盘左手分层。
- 需要不同力度触发不同层时，用 velocity range。
- 需要不同键区触发不同音色时，用 key range。
- 需要混音可控时，将每个 Part 路由到不同输出。

## 核心参数
- 需要统一宏控制时，映射 filter、level 或 effects 到控制器。
- Part：Multi 中的独立声音单元。
- Key Range：限制每层覆盖的音域。
- Velocity Range：让轻重触发不同层。
- Output Routing：把 sub、mid、attack 分进 DAW。
- FX：内部效果定色，最终动态在 DAW 里处理。

## 实战案例
- Save Multi：项目专用低频组合必须另存。
- 副歌低频：sub 只到 120 Hz，mid bass 低切后补可听轮廓。
- Trailer 下潜：低频 drone 加 distortion 层，失真层只留中低频。
- 现场左手：低区 sub，高区 synth bass，避免高音触发巨大低频。

## 补充提醒
- 混音定稿：把 Multi 拆到多输出，分别压缩和 EQ。
