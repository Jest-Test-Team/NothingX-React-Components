# NothingX React Components

React 元件庫，對應 [NThing-UI-main](https://github.com/runixe786/NThing-UI) Rainmeter 皮膚的視覺風格：**Nothing OS / Nothing Phone** — 點陣字體、極簡黑白紅配色、硬體科技感與復古數位美學。

## 安裝

```bash
npm install nothingx-react-components
```

## npm url

- https://www.npmjs.com/package/@dennislee928/nothingx-react-components

## 使用方式

```tsx
import {
  Clock,
  DateWidget,
  Weather,
  Battery,
  MonitorCPU,
  NothingButton,
  nothing, // 設計 token
} from 'nothingx-react-components';

function App() {
  return (
    <div style={{ background: nothing.colors.bg, padding: 24 }}>
      <Clock />
      <NothingButton onClick={() => {}}>Click</NothingButton>
    </div>
  );
}
```

各元件為獨立 React 元件，可搭配任一 React / Next 專案。設計 token 見 `tsx/theme.ts`（`nothing.colors`、`nothing.radius`）。

## Demo 網站

專案內含 **demo-web**（Vite + React），依類別分頁展示所有元件：

```bash
cd demo-web
npm install
npm run dev
```

在瀏覽器開啟後可依分類瀏覽並預覽元件。

## 元件分類一覽

| 分類 | 說明 |
|------|------|
| **Core** | Clock, DateWidget, Weather, MonitorRAM, MonitorStorage, Battery, Music, Quotes, Calendar, Photos, CalendarEvent |
| **System & Hardware** | MonitorCPU, MonitorNetwork, WifiSignal, BluetoothStatus, Temperature, VolumeControl, BrightnessControl, FanSpeed, PowerMode, DeviceUptime |
| **Weather & Environment** | WeatherCurrent, WeatherForecast, AirQuality, SunriseSunset, MoonPhase |
| **Time & Productivity** | Stopwatch, Timer, WorldClock, AlarmList, TodoList, NoteWidget, Pomodoro, Calculator |
| **Network & Feeds** | NewsTicker, StockTicker, CryptoTracker, RSSFeed, DailyWord |
| **Health & Lifestyle** | StepCounter, HeartRate, WaterIntake, SleepSummary, ScreenTime |
| **Media & Entertainment** | AudioVisualizer, PodcastPlayer, RadioTuner, VoiceRecorder, MiniGameSnake |
| **Core UI (Nothing Style)** | DotMatrixText, NothingButton, NothingSwitch, DottedDivider, GlitchText, BarcodeGenerator, SegmentedDisplay, RadarScan, ProgressDots, NothingCard, PillBadge, GlitchImage |
| **Doomsday / Mortality** | DoomsdayClock, LifeCalendar, MortalityCountdown, EarthPopulation, CarbonPPM |
| **Developer & Terminal** | TerminalPrompt, GithubContributions, ServerPing, HexViewer, RegexTester, HashGenerator, BandwidthGraph, LocalhostPorts |
| **Space & Sci-Fi** | ISS_Tracker, MarsWeather, SolarFlareMonitor, StarMap, PhaseOfVenus |
| **Transport & Location** | FlightTracker, TrainSchedule, Speedometer, Compass, Altimeter, CoordinateTracker |
| **Smart Home & IoT** | SmartLightToggle, ThermostatDial, DoorLockStatus, SecurityCameraFeed, PowerConsumption, PlantMoisture |
| **Utility & Tools** | UnitConverter, MorseCodeTranslator, Metronome, Leveler, DecibelMeter, RandomNumberGen, QRScannerUI, BPMTapper |
| **Fun & Easter Eggs** | ConwayGameOfLife, BouncingLogo, Magic8Ball, TamagotchiPet, FortuneCookie, CoinFlip, DiceRoll |
| **Advanced UI** | CaptchaNothing, LoadingDataStream, RedactedText, AudioWaveform, TerminalBlink |
| **Sci-Fi 主題** | The Gods Themselves, Foundation, Robot series, Dune, Sci-Fi Meta 等 |

共 **150+** 個元件，詳見 `tsx/index.ts` 匯出。

## 發佈至 npm

1. 登入 npm：`npm login`
2. 確認 `package.json` 的 `name`、`version`（若名稱已被使用，可改為 scoped 如 `@your-scope/nothingx-react-components`）
3. 發佈：`npm publish`（若為 scoped 且首次公開：`npm publish --access public`）

```bash
npm login
npm publish
```

## 授權

MIT
