# FabFilter Pro-R 2 混响与 IR 空间

## 核心概念
- Pro-R 2 在算法混响基础上加入更强的空间控制、Decay Rate EQ、Post EQ、IR import 和 Atmos 支持。
- IR import 适合把真实空间或特殊硬件空间纳入同一工作流。
- Spectrum analyzer 帮助判断混响频谱堆积。
- 混响要按声源前后景分层，不要所有轨道共用一个巨大空间。
- Pro-R 2 更适合做主空间 return 和精细空间设计。

## 使用场景
- 电影空间、主唱 plate、真实房间 IR、Atmos 或 surround 工程、专辑统一空间。
- 需要真实场地质感时，导入合适 impulse response。
- 需要低频尾巴可控时，用 Decay Rate EQ 单独缩短低频。
- 需要后期统一时，建立几个 return：small、plate、hall、special。

## 核心参数
- 需要防止混响占满频谱时，看 analyzer 后再 EQ。
- Space/Decay：空间规模和尾长。
- Character：控制空间个性和密度。
- Decay Rate EQ：分频段控制尾巴。
- Post EQ：混响返回最终修色。
- IR Import：加载真实或外部 impulse response。

## 实战案例
- Surround/Atmos：处理多声道空间。
- 人声：plate return，低频 decay 缩短，高频略暗。
- 鼓 room：短空间增强真实感，不要拖长到影响 groove。
- 管弦大厅：以音源麦克风为主，Pro-R 2 只补统一尾部。

## 补充提醒
- 特殊转场：IR 空间单独 return，段落结束后自动化 mute。
