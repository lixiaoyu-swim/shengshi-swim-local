const STORAGE_KEY = "breaking-waves-data-v1";
const DATA_CACHE_PREFIX = "shengshi-team-data-v1:";
const LOCAL_ONLY_MODE = true;
const LOCAL_DATA_KEY = "shengshi-swim-local-data-v1";
const BACKUP_META_KEY = "shengshi-swim-backup-meta-v1";
const APP_VERSION = "1.2.0";
const BACKUP_REMINDER_DAYS = 7;

const EVENTS = [
  { key: "free50", stroke: "自由泳", distance: 50, short: "50 自", label: "自由泳 50 米" },
  { key: "free100", stroke: "自由泳", distance: 100, short: "100 自", label: "自由泳 100 米" },
  { key: "free200", stroke: "自由泳", distance: 200, short: "200 自", label: "自由泳 200 米" },
  { key: "free400", stroke: "自由泳", distance: 400, short: "400 自", label: "自由泳 400 米" },
  { key: "free800", stroke: "自由泳", distance: 800, short: "800 自", label: "自由泳 800 米" },
  { key: "free1500", stroke: "自由泳", distance: 1500, short: "1500 自", label: "自由泳 1500 米" },
  { key: "back50", stroke: "仰泳", distance: 50, short: "50 仰", label: "仰泳 50 米" },
  { key: "back100", stroke: "仰泳", distance: 100, short: "100 仰", label: "仰泳 100 米" },
  { key: "back200", stroke: "仰泳", distance: 200, short: "200 仰", label: "仰泳 200 米" },
  { key: "breast50", stroke: "蛙泳", distance: 50, short: "50 蛙", label: "蛙泳 50 米" },
  { key: "breast100", stroke: "蛙泳", distance: 100, short: "100 蛙", label: "蛙泳 100 米" },
  { key: "breast200", stroke: "蛙泳", distance: 200, short: "200 蛙", label: "蛙泳 200 米" },
  { key: "fly50", stroke: "蝶泳", distance: 50, short: "50 蝶", label: "蝶泳 50 米" },
  { key: "fly100", stroke: "蝶泳", distance: 100, short: "100 蝶", label: "蝶泳 100 米" },
  { key: "fly200", stroke: "蝶泳", distance: 200, short: "200 蝶", label: "蝶泳 200 米" },
  { key: "im200", stroke: "混合泳", distance: 200, short: "200 混", label: "混合泳 200 米" },
  { key: "im400", stroke: "混合泳", distance: 400, short: "400 混", label: "混合泳 400 米" },
];

const EVENT_MAP = Object.fromEntries(EVENTS.map((event) => [event.key, event]));
const STROKES = ["自由泳", "仰泳", "蛙泳", "蝶泳"];
const ALL_STROKES = [...STROKES, "混合泳"];
const STROKE_SHORT = { 自由泳: "自", 仰泳: "仰", 蛙泳: "蛙", 蝶泳: "蝶", 混合泳: "混" };
const AVATAR_STYLES = [
  ["#e9f2f7", "#15577c"],
  ["#e4f6f2", "#087f7b"],
  ["#fff1dc", "#9c6b16"],
  ["#f8ebe8", "#a85143"],
  ["#eae9f7", "#5752a3"],
  ["#e6f3e8", "#357447"],
];

const ICONS = {
  plus: '<svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24"><path d="m9.3 18.4 6.4-6.4-6.4-6.4 1.4-1.4 7.8 7.8-7.8 7.8-1.4-1.4Z"/></svg>',
  back:
    '<svg viewBox="0 0 24 24"><path d="m14.7 5.6-6.4 6.4 6.4 6.4-1.4 1.4L5.5 12l7.8-7.8 1.4 1.4Z"/></svg>',
  edit:
    '<svg viewBox="0 0 24 24"><path d="M4 19h4.2L19 8.2 15.8 5 5 15.8V19Zm12.9-15.3 2.4 2.4c.5.5.5 1.3 0 1.8l-1.2 1.2-4.2-4.2 1.2-1.2c.5-.5 1.3-.5 1.8 0Z"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24"><path d="M7 21a2 2 0 0 1-2-2V7h14v12a2 2 0 0 1-2 2H7Zm10-16H7V3h3l1-1h2l1 1h3v2Z"/></svg>',
  check:
    '<svg viewBox="0 0 24 24"><path d="M9.2 18.2 3.8 12.8l1.4-1.4 4 4L18.8 5.8l1.4 1.4-11 11Z"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24"><path d="m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5Z"/></svg>',
  users:
    '<svg viewBox="0 0 24 24"><path d="M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 1c-2.67 0-8 1.34-8 4v3h13v-3c0-2.66-2.67-4-5-4ZM8 14c-3.11 0-6 1.56-6 3.5V20h4v-3c0-1.1.42-2.11 1.14-2.96A9.5 9.5 0 0 1 8 14Z"/></svg>',
  flag:
    '<svg viewBox="0 0 24 24"><path d="M5 3h2v18H5V3Zm3 1h11l-2.5 4L19 12H8V4Z"/></svg>',
  download:
    '<svg viewBox="0 0 24 24"><path d="M11 4h2v8l3-3 1.4 1.4L12 16 6.6 10.4 8 9l3 3V4Zm-6 14h14v2H5v-2Z"/></svg>',
  upload:
    '<svg viewBox="0 0 24 24"><path d="M11 20h2v-8l3 3 1.4-1.4L12 8l-5.4 5.6L8 15l3-3v8ZM5 4h14v2H5V4Z"/></svg>',
  settings:
    '<svg viewBox="0 0 24 24"><path d="m19.43 12.98.04-.98-.04-.98 2.11-1.65-2-3.46-2.49 1a7.8 7.8 0 0 0-1.69-.98L15 3.3h-4l-.37 2.63c-.6.24-1.17.57-1.69.98l-2.49-1-2 3.46 2.11 1.65-.04.98.04.98-2.11 1.65 2 3.46 2.49-1c.52.41 1.09.74 1.69.98L13 20.7h4l.37-2.63c.6-.24 1.17-.57 1.69-.98l2.49 1 2-3.46-2.12-1.65ZM13 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"/></svg>',
  user:
    '<svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5Z"/></svg>',
  search:
    '<svg viewBox="0 0 24 24"><path d="M10.5 4a6.5 6.5 0 1 0 4.06 11.58L19.14 20l1.42-1.42-4.57-4.58A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24"><path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm11 8H6v10h12V10ZM6 8h12V6H6v2Z"/></svg>',
  note:
    '<svg viewBox="0 0 24 24"><path d="M5 3h14v18H5V3Zm3 4v2h8V7H8Zm0 4v2h8v-2H8Zm0 4v2h5v-2H8Z"/></svg>',
  lock:
    '<svg viewBox="0 0 24 24"><path d="M7 10V7a5 5 0 0 1 10 0v3h2v11H5V10h2Zm2 0h6V7a3 3 0 0 0-6 0v3Z"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5.05 3.41 9.75 8 11 4.59-1.25 8-5.95 8-11V5l-8-3Zm0 2.18 6 2.25V11c0 3.84-2.47 7.61-6 8.84C8.47 18.61 6 14.84 6 11V6.43l6-2.25Z"/></svg>',
  logout:
    '<svg viewBox="0 0 24 24"><path d="M10 4H5v16h5v-2H7V6h3V4Zm5.6 3.2L14.2 8.6l2.4 2.4H9v2h7.6l-2.4 2.4 1.4 1.4L21 12l-5.4-4.8Z"/></svg>',
};

const ui = {
  studentSearch: "",
  studentGroup: "all",
  studentStatus: "all",
  recordSearch: "",
  recordEvent: "all",
  penaltyStatus: "all",
  chartEventByStudent: {},
};

let state = {
  version: 4,
  coach: { name: "李教练", title: "主教练", avatar: "" },
  students: [],
  records: [],
  penalties: [],
};
let modalSubmitHandler = null;
let toastTimer = null;
let pendingImport = null;
let currentSession = LOCAL_ONLY_MODE
  ? { id: "local-device", username: "local", displayName: "本机用户", role: "user" }
  : null;
let activeDataKey = LOCAL_ONLY_MODE ? LOCAL_DATA_KEY : null;
let remoteSaveTimer = null;
let adminUsers = [];
let authMode = "user";
let installPromptEvent = null;
let serviceWorkerRegistration = null;
let runtimeNoticeAction = null;
let runtimeNoticeKind = "";
let reloadingForUpdate = false;
let waitingForUpdateActivation = false;
let storageEstimate = null;

function uid(prefix = "id") {
  const random =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${random}`;
}

function todayISO() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function addDaysISO(dateString, days) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day + days);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function seedState() {
  const students = [
    {
      id: "student-lin",
      name: "林小屿",
      gender: "女",
      birthDate: "2011-03-18",
      group: "竞赛 A 组",
      status: "active",
      guardian: "林女士",
      phone: "138 0000 1024",
      joinedAt: "2024-09-01",
      notes: "主项自由泳，近期重点改善转身节奏。",
      createdAt: "2024-09-01T08:00:00.000Z",
    },
    {
      id: "student-chen",
      name: "陈一川",
      gender: "男",
      birthDate: "2010-08-06",
      group: "竞赛 A 组",
      status: "active",
      guardian: "陈先生",
      phone: "139 0000 2048",
      joinedAt: "2023-10-15",
      notes: "蛙泳主项，耐速训练稳定。",
      createdAt: "2023-10-15T08:00:00.000Z",
    },
    {
      id: "student-wang",
      name: "王知夏",
      gender: "女",
      birthDate: "2012-05-22",
      group: "竞赛 B 组",
      status: "active",
      guardian: "王先生",
      phone: "137 0000 4096",
      joinedAt: "2025-02-20",
      notes: "仰泳和混合泳项目进步明显。",
      createdAt: "2025-02-20T08:00:00.000Z",
    },
    {
      id: "student-zhou",
      name: "周沐阳",
      gender: "男",
      birthDate: "2013-11-12",
      group: "基础组",
      status: "active",
      guardian: "周女士",
      phone: "136 0000 8192",
      joinedAt: "2025-09-08",
      notes: "补齐蝶泳与长距离自由泳训练。",
      createdAt: "2025-09-08T08:00:00.000Z",
    },
    {
      id: "student-xu",
      name: "许安然",
      gender: "女",
      birthDate: "2009-01-29",
      group: "竞赛 A 组",
      status: "paused",
      guardian: "许先生",
      phone: "135 0000 6012",
      joinedAt: "2022-09-01",
      notes: "因学业安排暂时停训。",
      createdAt: "2022-09-01T08:00:00.000Z",
    },
  ];

  const rows = [
    ["student-lin", "free50", "2026-09-12", "30.86"],
    ["student-lin", "free50", "2026-10-17", "30.71"],
    ["student-lin", "free50", "2026-11-15", "30.64"],
    ["student-lin", "free100", "2026-08-20", "67.42"],
    ["student-lin", "free100", "2026-09-26", "66.88"],
    ["student-lin", "free100", "2026-10-30", "66.25"],
    ["student-lin", "free100", "2026-11-21", "65.64"],
    ["student-lin", "free200", "2026-09-01", "144.62"],
    ["student-lin", "free200", "2026-10-11", "142.84"],
    ["student-lin", "free200", "2026-11-18", "142.31"],
    ["student-lin", "back100", "2026-10-10", "77.16"],
    ["student-lin", "back100", "2026-11-16", "76.54"],
    ["student-lin", "im200", "2026-10-25", "158.34"],
    ["student-lin", "im200", "2026-11-22", "156.92"],
    ["student-lin", "free800", "2026-10-05", "650.22"],
    ["student-lin", "free800", "2026-11-20", "642.68"],
    ["student-chen", "breast50", "2026-08-28", "34.82"],
    ["student-chen", "breast50", "2026-10-02", "34.51"],
    ["student-chen", "breast50", "2026-11-14", "34.27"],
    ["student-chen", "breast100", "2026-09-06", "75.64"],
    ["student-chen", "breast100", "2026-10-18", "74.98"],
    ["student-chen", "breast100", "2026-11-20", "74.41"],
    ["student-chen", "breast200", "2026-09-19", "164.28"],
    ["student-chen", "breast200", "2026-11-08", "161.96"],
    ["student-chen", "free100", "2026-08-30", "71.22"],
    ["student-chen", "free100", "2026-11-12", "69.84"],
    ["student-chen", "im400", "2026-09-27", "337.58"],
    ["student-chen", "im400", "2026-11-23", "332.16"],
    ["student-wang", "back50", "2026-08-16", "36.12"],
    ["student-wang", "back50", "2026-10-09", "35.68"],
    ["student-wang", "back100", "2026-09-04", "76.34"],
    ["student-wang", "back100", "2026-10-16", "75.22"],
    ["student-wang", "back100", "2026-11-19", "74.83"],
    ["student-wang", "im200", "2026-09-21", "164.71"],
    ["student-wang", "im200", "2026-11-17", "161.23"],
    ["student-wang", "im400", "2026-10-23", "350.88"],
    ["student-wang", "im400", "2026-11-22", "346.14"],
    ["student-wang", "free200", "2026-11-09", "151.16"],
    ["student-wang", "fly100", "2026-10-04", "82.54"],
    ["student-wang", "fly100", "2026-11-13", "80.91"],
    ["student-zhou", "free50", "2026-09-15", "34.84"],
    ["student-zhou", "free50", "2026-10-24", "34.21"],
    ["student-zhou", "free50", "2026-11-21", "33.96"],
    ["student-zhou", "free100", "2026-09-29", "78.62"],
    ["student-zhou", "free100", "2026-11-15", "76.44"],
    ["student-zhou", "fly50", "2026-10-08", "39.72"],
    ["student-zhou", "fly50", "2026-11-14", "38.86"],
    ["student-zhou", "free400", "2026-10-12", "351.26"],
    ["student-zhou", "free400", "2026-11-18", "344.92"],
  ];

  const records = rows.map(([studentId, eventKey, date, rawTime], index) => ({
    id: `record-${index + 1}`,
    studentId,
    eventKey,
    date,
    seconds: parseTime(rawTime),
    note: index % 7 === 0 ? "队内测试" : "",
    createdAt: `${date}T${String(7 + (index % 9)).padStart(2, "0")}:20:00.000Z`,
    technical: createDemoTechnical(EVENT_MAP[eventKey], parseTime(rawTime), index),
  }));

  const penalties = [
    {
      id: "penalty-1",
      studentId: "student-lin",
      count: 4,
      stroke: "自由泳",
      distance: 800,
      date: "2026-11-20",
      status: "pending",
      note: "转身节奏训练未达标",
      createdAt: "2026-11-20T11:20:00.000Z",
      progress: [],
    },
    {
      id: "penalty-2",
      studentId: "student-chen",
      count: 2,
      stroke: "蛙泳",
      distance: 400,
      date: "2026-11-18",
      status: "completed",
      note: "技术练习补量",
      createdAt: "2026-11-18T10:10:00.000Z",
      progress: [
        {
          id: "penalty-progress-demo-1",
          date: "2026-11-18",
          meters: 800,
          note: "训练后一次完成",
          createdAt: "2026-11-18T11:30:00.000Z",
        },
      ],
    },
    {
      id: "penalty-3",
      studentId: "student-wang",
      count: 3,
      stroke: "仰泳",
      distance: 400,
      date: "2026-11-22",
      status: "pending",
      note: "出发反应练习",
      createdAt: "2026-11-22T09:45:00.000Z",
      progress: [],
    },
    {
      id: "penalty-4",
      studentId: "student-zhou",
      count: 2,
      stroke: "蝶泳",
      distance: 200,
      date: "2026-11-23",
      status: "pending",
      note: "陆上补练缺席",
      createdAt: "2026-11-23T08:00:00.000Z",
      progress: [],
    },
  ];

  return {
    version: 4,
    coach: { name: "李教练", title: "主教练", avatar: "" },
    students,
    records,
    penalties,
  };
}

function normaliseState(raw) {
  if (!raw || !Array.isArray(raw.students) || !Array.isArray(raw.records) || !Array.isArray(raw.penalties)) {
    throw new Error("数据格式不正确");
  }
  return {
    version: 4,
    coach: {
      name: String(raw.coach?.name || "李教练").slice(0, 40),
      title: String(raw.coach?.title || "主教练").slice(0, 40),
      avatar:
        typeof raw.coach?.avatar === "string" &&
        /^data:image\/(?:jpeg|png|webp);base64,/i.test(raw.coach.avatar) &&
        raw.coach.avatar.length < 2_000_000
          ? raw.coach.avatar
          : "",
    },
    students: raw.students.filter((student) => student?.id && student?.name),
    records: raw.records
      .filter(
        (record) =>
          record?.id &&
          record?.studentId &&
          EVENT_MAP[record?.eventKey] &&
          Number.isFinite(Number(record?.seconds)) &&
          record?.date,
      )
      .map((record) => {
        const demoIndex = String(record.id).match(/^record-(\d+)$/)?.[1];
        return {
          ...record,
          technical:
            record.technical ||
            (demoIndex
              ? createDemoTechnical(EVENT_MAP[record.eventKey], Number(record.seconds), Number(demoIndex) - 1)
              : null),
        };
      }),
    penalties: raw.penalties
      .filter(
        (penalty) => penalty?.id && penalty?.studentId && Number(penalty?.count) > 0 && penalty?.stroke,
      )
      .map((penalty) => {
        const targetMeters = Number(penalty.count) * Number(penalty.distance);
        let progress = Array.isArray(penalty.progress)
          ? penalty.progress
              .filter((item) => Number(item?.meters) > 0)
              .map((item) => ({
                id: item.id || uid("penalty-progress"),
                date: item.date || penalty.date || todayISO(),
                meters: Number(item.meters),
                note: String(item.note || ""),
                createdAt: item.createdAt || new Date().toISOString(),
              }))
          : [];
        const completed = progress.reduce((sum, item) => sum + item.meters, 0);
        if (penalty.status === "completed" && completed === 0) {
          progress = [
            {
              id: uid("penalty-progress"),
              date: penalty.date || todayISO(),
              meters: targetMeters,
              note: "历史完成记录",
              createdAt: new Date().toISOString(),
            },
          ];
        }
        return {
          ...penalty,
          progress,
          status:
            progress.reduce((sum, item) => sum + item.meters, 0) >= targetMeters
              ? "completed"
              : "pending",
        };
      }),
  };
}

function loadState(storageKey = activeDataKey || STORAGE_KEY) {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? normaliseState(JSON.parse(raw)) : seedState();
  } catch (error) {
    console.warn("读取本地数据失败，已载入示例数据。", error);
    return seedState();
  }
}

function saveState() {
  if (activeDataKey) {
    try {
      localStorage.setItem(activeDataKey, JSON.stringify(state));
      updateBackupMeta({
        dirtySinceBackup: true,
        lastChangeAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error("保存本机数据失败。", error);
      showRuntimeNotice({
        kind: "warning",
        message: "本机存储空间不足，刚才的修改可能无法在重新打开后保留。请立即导出备份并移除部分头像。",
        actionLabel: "导出备份",
        onAction: exportData,
        dismissible: false,
      });
    }
  }
  if (!LOCAL_ONLY_MODE && currentSession) scheduleRemoteSave();
}

function getBackupMeta() {
  try {
    const raw = JSON.parse(localStorage.getItem(BACKUP_META_KEY) || "{}");
    return {
      lastBackupAt: typeof raw.lastBackupAt === "string" ? raw.lastBackupAt : "",
      lastBackupMethod: typeof raw.lastBackupMethod === "string" ? raw.lastBackupMethod : "",
      lastChangeAt: typeof raw.lastChangeAt === "string" ? raw.lastChangeAt : "",
      dirtySinceBackup: Boolean(raw.dirtySinceBackup),
      backupSnoozedUntil: typeof raw.backupSnoozedUntil === "string" ? raw.backupSnoozedUntil : "",
    };
  } catch {
    return {
      lastBackupAt: "",
      lastBackupMethod: "",
      lastChangeAt: "",
      dirtySinceBackup: false,
      backupSnoozedUntil: "",
    };
  }
}

function updateBackupMeta(patch) {
  try {
    const next = { ...getBackupMeta(), ...patch };
    localStorage.setItem(BACKUP_META_KEY, JSON.stringify(next));
    return next;
  } catch (error) {
    console.warn("无法记录备份状态。", error);
    return getBackupMeta();
  }
}

function markBackupComplete(method) {
  updateBackupMeta({
    lastBackupAt: new Date().toISOString(),
    lastBackupMethod: method,
    dirtySinceBackup: false,
    backupSnoozedUntil: "",
  });
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes < 0) return "未知";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function formatBackupDate(value) {
  if (!value) return "尚未备份";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "尚未备份";
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function backupNeedsAttention() {
  const meta = getBackupMeta();
  if (!state.students.length && !state.records.length && !state.penalties.length) return false;
  if (!meta.dirtySinceBackup && meta.lastBackupAt) return false;
  if (meta.backupSnoozedUntil && new Date(meta.backupSnoozedUntil).getTime() > Date.now()) return false;
  if (!meta.lastBackupAt) return true;
  return Date.now() - new Date(meta.lastBackupAt).getTime() >= BACKUP_REMINDER_DAYS * 86_400_000;
}

async function apiRequest(path, options = {}) {
  const { headers = {}, ...requestOptions } = options;
  const response = await fetch(path, {
    credentials: "same-origin",
    ...requestOptions,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });
  let payload = {};
  try {
    payload = await response.json();
  } catch {
    payload = {};
  }
  if (!response.ok) {
    const error = new Error(payload.error || `请求失败（${response.status}）`);
    error.status = response.status;
    throw error;
  }
  return payload;
}

function emptyDataState() {
  return {
    version: 4,
    coach: { name: "李教练", title: "主教练", avatar: "" },
    students: [],
    records: [],
    penalties: [],
  };
}

async function flushRemoteSave() {
  if (!currentSession) return;
  clearTimeout(remoteSaveTimer);
  remoteSaveTimer = null;
  await apiRequest("/api/data", {
    method: "PUT",
    body: state,
  });
}

function scheduleRemoteSave() {
  clearTimeout(remoteSaveTimer);
  remoteSaveTimer = setTimeout(() => {
    flushRemoteSave().catch((error) => {
      console.warn("同步数据失败，当前修改已保存在本机缓存。", error);
      showToast("云端同步失败，修改已暂存在本机");
    });
  }, 250);
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseTime(value) {
  const clean = String(value ?? "")
    .trim()
    .replace("：", ":")
    .replace(",", ".")
    .replace("。", ".");
  if (!clean) return null;
  let seconds = null;
  if (clean.includes(":")) {
    const parts = clean.split(":");
    if (parts.length !== 2) return null;
    const minutes = Number(parts[0]);
    const secs = Number(parts[1]);
    if (!Number.isFinite(minutes) || !Number.isFinite(secs) || minutes < 0 || secs < 0 || secs >= 60) {
      return null;
    }
    seconds = minutes * 60 + secs;
  } else {
    const direct = Number(clean);
    if (!Number.isFinite(direct) || direct <= 0) return null;
    seconds = direct;
  }
  return seconds > 0 ? Math.round(seconds * 100) / 100 : null;
}

function formatTime(seconds) {
  if (!Number.isFinite(Number(seconds))) return "—";
  const total = Number(seconds);
  const minutes = Math.floor(total / 60);
  const secs = total - minutes * 60;
  if (minutes === 0) return secs.toFixed(2);
  return `${minutes}:${secs.toFixed(2).padStart(5, "0")}`;
}

function toDateObject(dateString) {
  if (!dateString) return null;
  const [year, month, day] = dateString.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function formatDate(dateString, includeYear = false) {
  const date = toDateObject(dateString);
  if (!date) return "—";
  return new Intl.DateTimeFormat("zh-CN", {
    year: includeYear ? "numeric" : undefined,
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatTimestampDate(timestamp, includeYear = false) {
  if (!timestamp) return "—";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "—";
  return formatDate(
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
    includeYear,
  );
}

function formatShortDate(dateString) {
  const date = toDateObject(dateString);
  if (!date) return "";
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function monthKey(dateString) {
  return String(dateString).slice(0, 7);
}

function getStudent(id) {
  return state.students.find((student) => student.id === id);
}

function getStudentRecords(studentId) {
  return state.records
    .filter((record) => record.studentId === studentId)
    .sort((a, b) => {
      const dateCompare = String(a.date).localeCompare(String(b.date));
      return dateCompare || String(a.createdAt || "").localeCompare(String(b.createdAt || ""));
    });
}

function getStudentPenalties(studentId) {
  return state.penalties
    .filter((penalty) => penalty.studentId === studentId)
    .sort(sortPenalties);
}

function getPB(studentId, eventKey) {
  const records = state.records.filter(
    (record) => record.studentId === studentId && record.eventKey === eventKey,
  );
  if (!records.length) return null;
  return records.reduce((best, record) => (record.seconds < best.seconds ? record : best), records[0]);
}

function getEventRanking(eventKey) {
  const entries = state.students
    .map((student) => ({ student, record: getPB(student.id, eventKey) }))
    .filter((entry) => entry.record)
    .sort(
      (a, b) =>
        a.record.seconds - b.record.seconds ||
        a.student.name.localeCompare(b.student.name, "zh-CN"),
    );
  let previousSeconds = null;
  let previousRank = 0;
  return entries.map((entry, index) => {
    const rank =
      previousSeconds !== null && Math.abs(entry.record.seconds - previousSeconds) < 0.0001
        ? previousRank
        : index + 1;
    previousSeconds = entry.record.seconds;
    previousRank = rank;
    return { ...entry, rank };
  });
}

function getStudentEventRank(studentId, eventKey) {
  const ranking = getEventRanking(eventKey);
  const entry = ranking.find((item) => item.student.id === studentId);
  return entry ? { rank: entry.rank, total: ranking.length } : null;
}

function getRecordEventRank(record) {
  if (!record || !EVENT_MAP[record.eventKey] || !Number.isFinite(Number(record.seconds))) return null;
  const eventRecords = state.records.filter((item) => item.eventKey === record.eventKey);
  const betterResults = eventRecords.filter(
    (item) => Number(item.seconds) < Number(record.seconds) - 0.0001,
  ).length;
  return { rank: betterResults + 1, total: eventRecords.length };
}

function rankBadge(rankInfo, emptyLabel = "暂无排名") {
  if (!rankInfo) return `<span class="record-inline-rank muted">${esc(emptyLabel)}</span>`;
  return `<span class="record-inline-rank">项目第 ${rankInfo.rank} 名${rankInfo.total ? ` / ${rankInfo.total}` : ""}</span>`;
}

function createDemoTechnical(event, seconds, index) {
  if (!event || !seconds) return null;
  const splitCount = Math.ceil(event.distance / 25);
  const underwaterKicks = 2 + ((index + event.distance / 50) % 5);
  const breakoutTime = Math.round(Math.min(seconds * 0.13, 8.2) * 100) / 100;
  const breakoutDistance = 5 + (index % 3) * 2.5;
  const splits = Array.from({ length: splitCount }, (_, splitIndex) => {
    const distance = (splitIndex + 1) * 25;
    const idealCumulative = (seconds * distance) / event.distance;
    const wobble = (((splitIndex + index * 3) % 5) - 2) * 0.045;
    const timeSeconds =
      distance === event.distance
        ? seconds
        : Math.round(Math.min(seconds, idealCumulative + wobble) * 100) / 100;
    return {
      distance,
      timeSeconds: splitIndex === 0 ? Math.max(timeSeconds, 0.1) : timeSeconds,
      swolf: 12 + ((index + splitIndex * 3) % 9),
    };
  });
  for (let splitIndex = 1; splitIndex < splits.length - 1; splitIndex += 1) {
    if (splits[splitIndex].timeSeconds <= splits[splitIndex - 1].timeSeconds) {
      splits[splitIndex].timeSeconds = Math.round((splits[splitIndex - 1].timeSeconds + 0.5) * 100) / 100;
    }
  }
  return {
    underwaterKicks,
    breakoutTime,
    breakoutDistance,
    splits,
    note: index % 2 === 0 ? "跳发后水下节奏保持稳定，出水后第一划衔接较顺。" : "",
    updatedAt: new Date().toISOString(),
  };
}

function emptyTechnical() {
  return {
    underwaterKicks: null,
    breakoutTime: null,
    breakoutDistance: null,
    splits: [],
    note: "",
  };
}

function getTechnical(record) {
  const technical = record?.technical || {};
  return {
    underwaterKicks: Number.isFinite(Number(technical.underwaterKicks))
      ? Number(technical.underwaterKicks)
      : null,
    breakoutTime: Number.isFinite(Number(technical.breakoutTime))
      ? Number(technical.breakoutTime)
      : null,
    breakoutDistance: Number.isFinite(Number(technical.breakoutDistance))
      ? Number(technical.breakoutDistance)
      : null,
    splits: Array.isArray(technical.splits)
      ? technical.splits
          .map((split) => ({
            distance: Number(split.distance),
            timeSeconds: Number.isFinite(Number(split.timeSeconds)) ? Number(split.timeSeconds) : null,
            swolf: Number.isFinite(Number(split.swolf)) ? Number(split.swolf) : null,
          }))
          .filter((split) => split.distance > 0)
          .sort((a, b) => a.distance - b.distance)
      : [],
    note: String(technical.note || ""),
    updatedAt: technical.updatedAt || null,
  };
}

function checkpointDistances(eventDistance) {
  return Array.from({ length: Math.ceil(eventDistance / 25) }, (_, index) => (index + 1) * 25);
}

function buildSplitRows(record) {
  const event = EVENT_MAP[record.eventKey];
  const technical = getTechnical(record);
  const splitMap = new Map(technical.splits.map((split) => [split.distance, split]));
  let previousCumulative = 0;
  return checkpointDistances(event?.distance || 0).map((distance) => {
    const split = splitMap.get(distance);
    const cumulative = split?.timeSeconds ?? null;
    const segmentTime = cumulative !== null && cumulative >= previousCumulative
      ? Math.round((cumulative - previousCumulative) * 100) / 100
      : null;
    if (cumulative !== null) previousCumulative = cumulative;
    return {
      distance,
      cumulative,
      segmentTime,
      swolf: split?.swolf ?? null,
      isFifty: distance % 50 === 0,
    };
  });
}

function technicalCompleteness(record) {
  const technical = getTechnical(record);
  const event = EVENT_MAP[record.eventKey];
  const checks = [
    technical.underwaterKicks !== null,
    technical.breakoutTime !== null,
    technical.breakoutDistance !== null,
    technical.splits.some((split) => split.timeSeconds !== null),
    technical.splits.some((split) => split.swolf !== null),
  ];
  const splitRows = buildSplitRows(record);
  const timeCoverage = splitRows.filter((split) => split.cumulative !== null).length;
  return {
    complete: checks.every(Boolean),
    score: checks.filter(Boolean).length,
    timeCoverage,
    totalCheckpoints: checkpointDistances(event?.distance || 0).length,
  };
}

function roundedRectCount(studentId) {
  return EVENTS.filter((event) => getPB(studentId, event.key)).length;
}

function penaltyTargetMeters(penalty) {
  return Math.max(0, Number(penalty?.distance || 0) * Number(penalty?.count || 0));
}

function penaltyCompletedMeters(penalty) {
  return Array.isArray(penalty?.progress)
    ? penalty.progress.reduce((sum, item) => sum + Math.max(0, Number(item.meters || 0)), 0)
    : 0;
}

function penaltyRemainingMeters(penalty) {
  return Math.max(0, penaltyTargetMeters(penalty) - penaltyCompletedMeters(penalty));
}

function syncPenaltyStatus(penalty) {
  penalty.status = penaltyRemainingMeters(penalty) === 0 ? "completed" : "pending";
  return penalty.status;
}

function pendingPenaltyMeters(studentId = null) {
  return state.penalties
    .filter((penalty) => !studentId || penalty.studentId === studentId)
    .reduce((sum, penalty) => sum + penaltyRemainingMeters(penalty), 0);
}

function sortPenalties(a, b) {
  return String(b.date).localeCompare(String(a.date)) || String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
}

function initials(name) {
  const clean = String(name || "").trim();
  if (!clean) return "?";
  if (/[\u4e00-\u9fa5]/.test(clean)) return clean.slice(-1);
  return clean
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function avatarFor(student) {
  const index = Math.max(0, state.students.findIndex((item) => item.id === student.id));
  return AVATAR_STYLES[index % AVATAR_STYLES.length];
}

function statusBadge(status) {
  return status === "active"
    ? '<span class="status-dot">在队</span>'
    : '<span class="status-dot paused">离队</span>';
}

function strokeTag(penalty) {
  return `<span class="tag coral">${esc(penalty.stroke)} ${esc(penalty.distance)} 米</span>`;
}

function penaltyStatusTag(status) {
  return status === "completed"
    ? '<span class="tag green">已完成</span>'
    : '<span class="tag coral">待完成</span>';
}

function isAdmin() {
  return currentSession?.role === "admin";
}

function accountInitials(user = currentSession) {
  return initials(user?.displayName || user?.username || "账号");
}

function showAuthPage(mode = "user", notice = "", prefillUsername = "") {
  authMode = mode === "admin" ? "admin" : mode === "register" ? "register" : "user";
  currentSession = null;
  activeDataKey = null;
  state = emptyDataState();
  document.body.classList.add("auth-mode");
  if (location.hash !== "#login") history.replaceState(null, "", "#login");
  setActiveNav(null);
  document.title = "账号登录 · 省实游泳队";
  document.querySelector("#app").innerHTML = `
    <div class="auth-page">
      <section class="auth-showcase">
        <a class="brand auth-brand" href="#login">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 44 44">
              <path d="M7 27.5c4.2-4.6 8.5-4.6 12.7 0 4.3 4.5 8.6 4.5 12.8 0l4.5-4.8" />
              <path d="M7 34.5c4.2-4.6 8.5-4.6 12.7 0 4.3 4.5 8.6 4.5 12.8 0l4.5-4.8" />
              <path class="brand-sun" d="M30 8.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
            </svg>
          </span>
          <span><strong>省实游泳队</strong><small>SWIM TEAM</small></span>
        </a>
        <div class="auth-showcase-copy">
          <span class="hero-kicker">TEAM OPERATIONS</span>
          <h1>每个账号，<br />都有独立的训练空间。</h1>
          <p>学生档案、成绩曲线和累计惩罚会按账号安全隔离。队员可自行注册，管理员可统一管理账号。</p>
          <div class="auth-assurance">
            <span>${ICONS.shield} 独立数据空间</span>
            <span>${ICONS.lock} 密码加密存储</span>
          </div>
        </div>
        <div class="auth-orbit" aria-hidden="true">
          <div class="lane-ring">
            <svg viewBox="0 0 80 80">
              <circle class="sun-dot" cx="54" cy="23" r="10" />
              <path d="M13 48c10-11 20-11 30 0 10 11 20 11 29 0" />
              <path d="M13 58c10-11 20-11 30 0 10 11 20 11 29 0" />
            </svg>
          </div>
        </div>
      </section>
      <section class="auth-panel">
        <div class="auth-card">
          <div class="auth-mobile-brand">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 44 44">
                <path d="M7 27.5c4.2-4.6 8.5-4.6 12.7 0 4.3 4.5 8.6 4.5 12.8 0l4.5-4.8" />
                <path d="M7 34.5c4.2-4.6 8.5-4.6 12.7 0 4.3 4.5 8.6 4.5 12.8 0l4.5-4.8" />
                <path class="brand-sun" d="M30 8.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
              </svg>
            </span>
            <span>省实游泳队</span>
          </div>
          <div class="auth-tabs" role="tablist" aria-label="登录类型">
            <button class="${authMode === "user" ? "active" : ""}" data-auth-mode="user" role="tab" aria-selected="${authMode === "user"}">账号登录</button>
            <button class="${authMode === "register" ? "active" : ""}" data-auth-mode="register" role="tab" aria-selected="${authMode === "register"}">注册账号</button>
            <button class="${authMode === "admin" ? "active" : ""}" data-auth-mode="admin" role="tab" aria-selected="${authMode === "admin"}">管理员登录</button>
          </div>
          <div class="auth-heading">
            <span class="eyebrow">${authMode === "admin" ? "ADMIN ACCESS" : authMode === "register" ? "CREATE ACCOUNT" : "WELCOME BACK"}</span>
            <h2>${authMode === "admin" ? "管理员控制台" : authMode === "register" ? "创建你的账号" : "登录你的训练空间"}</h2>
            <p>${authMode === "admin" ? "仅管理员账号可进入账号管理控制台。" : authMode === "register" ? "注册后自动获得独立数据空间，管理员仍可管理账号状态。" : "使用自己的账号登录，只显示你自己的训练数据。"}</p>
          </div>
          ${
            notice
              ? `<div class="auth-success" role="status">${ICONS.check}<span>${esc(notice)}</span></div>`
              : ""
          }
          <form id="loginForm" class="auth-form">
            ${
              authMode === "register"
                ? `<div class="field">
                    <label for="registerDisplayName">显示名称</label>
                    <input id="registerDisplayName" name="displayName" autocomplete="name" maxlength="40" placeholder="例如：林教练" />
                  </div>`
                : ""
            }
            <div class="field">
              <label for="loginUsername">${authMode === "register" ? "登录账号 *" : "账号"}</label>
              <input id="loginUsername" name="username" autocomplete="username" required minlength="3" maxlength="32" value="${esc(prefillUsername)}" placeholder="请输入账号" />
            </div>
            <div class="field">
              <label for="loginPassword">${authMode === "register" ? "设置密码 *" : "密码"}</label>
              <div class="password-field">
                <input id="loginPassword" name="password" type="password" autocomplete="${authMode === "register" ? "new-password" : "current-password"}" required minlength="${authMode === "register" ? "8" : "1"}" maxlength="128" placeholder="${authMode === "register" ? "至少 8 个字符" : "请输入密码"}" />
                <button type="button" id="togglePassword" aria-label="显示密码">${ICONS.lock}</button>
              </div>
            </div>
            ${
              authMode === "register"
                ? `<div class="field">
                    <label for="registerConfirmPassword">确认密码 *</label>
                    <input id="registerConfirmPassword" name="confirmPassword" type="password" autocomplete="new-password" required minlength="8" maxlength="128" placeholder="再次输入密码" />
                  </div>`
                : ""
            }
            <p class="auth-error" id="loginError" hidden></p>
            <button class="button button-primary auth-submit" type="submit">
              ${authMode === "admin" ? "进入管理员控制台" : authMode === "register" ? "创建账号并登录" : "登录"}
            </button>
          </form>
          <div class="auth-note">
            ${ICONS.lock}
            <span>账号之间数据彼此隔离。密码不会以明文保存在服务器中。</span>
          </div>
        </div>
      </section>
    </div>
  `;

  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => showAuthPage(button.dataset.authMode));
  });
  document.querySelector("#togglePassword").addEventListener("click", () => {
    const password = document.querySelector("#loginPassword");
    const showing = password.type === "text";
    password.type = showing ? "password" : "text";
    document.querySelector("#togglePassword").setAttribute("aria-label", showing ? "显示密码" : "隐藏密码");
    password.focus();
  });
  document.querySelector("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const submit = form.querySelector("button[type=submit]");
    const error = document.querySelector("#loginError");
    error.hidden = true;
    submit.disabled = true;
    submit.textContent = authMode === "register" ? "正在创建…" : "正在验证…";
    try {
      let result;
      if (authMode === "register") {
        if (form.password.value !== form.confirmPassword.value) {
          throw new Error("两次输入的密码不一致");
        }
        const registeredUsername = form.username.value.trim();
        await apiRequest("/api/register", {
          method: "POST",
          body: {
            username: registeredUsername,
            displayName: form.displayName.value.trim(),
            password: form.password.value,
          },
        });
        showAuthPage("user", `注册成功！请使用账号 ${registeredUsername} 登录。`, registeredUsername);
        return;
      }
      result = await apiRequest("/api/login", {
        method: "POST",
        body: {
          username: form.username.value.trim(),
          password: form.password.value,
          requireAdmin: authMode === "admin",
        },
      });
      await enterSession(result.user, authMode === "admin" ? "accounts" : "dashboard");
    } catch (requestError) {
      error.textContent = requestError.message;
      error.hidden = false;
    } finally {
      submit.disabled = false;
      submit.textContent = authMode === "admin" ? "进入管理员控制台" : authMode === "register" ? "创建账号并登录" : "登录";
    }
  });
  requestAnimationFrame(() =>
    document
      .querySelector(
        authMode === "register"
          ? "#registerDisplayName"
          : prefillUsername
            ? "#loginPassword"
            : "#loginUsername",
      )
      ?.focus(),
  );
}

async function loadDataForSession(user) {
  let remoteData = null;
  let migratedLegacyData = false;
  try {
    const result = await apiRequest("/api/data");
    remoteData = result.data;
  } catch (error) {
    console.warn("读取服务器数据失败。", error);
  }

  let resolved = remoteData;
  if (!resolved) {
    try {
      const cached = localStorage.getItem(activeDataKey);
      if (cached) resolved = JSON.parse(cached);
    } catch {
      resolved = null;
    }
  }
  if (!resolved && user.role === "admin") {
    try {
      const legacy = localStorage.getItem(STORAGE_KEY);
      if (legacy) {
        resolved = JSON.parse(legacy);
        migratedLegacyData = true;
      }
    } catch {
      resolved = null;
    }
  }

  try {
    state = resolved ? normaliseState(resolved) : emptyDataState();
  } catch {
    state = emptyDataState();
  }
  localStorage.setItem(activeDataKey, JSON.stringify(state));
  if (remoteData && user.role === "admin") localStorage.removeItem(STORAGE_KEY);
  if (!remoteData) {
    await flushRemoteSave();
    if (migratedLegacyData) localStorage.removeItem(STORAGE_KEY);
  }
}

async function loadAdminUsers() {
  if (!isAdmin()) {
    adminUsers = [];
    return;
  }
  const result = await apiRequest("/api/admin/users");
  adminUsers = result.users;
}

async function enterSession(user, landingRoute = null) {
  currentSession = user;
  activeDataKey = `${DATA_CACHE_PREFIX}${user.id}`;
  document.body.classList.remove("auth-mode");
  await loadDataForSession(user);
  if (user.role === "admin") {
    try {
      await loadAdminUsers();
    } catch (error) {
      console.warn("读取账号列表失败。", error);
    }
  }
  if (landingRoute) history.replaceState(null, "", `#${landingRoute}`);
  render();
}

async function logout() {
  try {
    await flushRemoteSave();
  } catch {
    // The local account-scoped cache still retains the latest data.
  }
  try {
    await apiRequest("/api/logout", { method: "POST" });
  } catch (error) {
    console.warn("退出接口请求失败。", error);
  }
  currentSession = null;
  activeDataKey = null;
  adminUsers = [];
  history.replaceState(null, "", "#login");
  showAuthPage("user");
}

function renderAccountChrome() {
  const note = document.querySelector(".sidebar-note");
  if (!note || !currentSession) return;
  if (LOCAL_ONLY_MODE) {
    note.innerHTML = `
      <span class="sidebar-note-mark">S</span>
      <div class="sidebar-account-copy">
        <strong>单机模式</strong>
        <p>数据仅保存在本机</p>
      </div>
      <span class="local-mode-dot" aria-label="离线可用"></span>
    `;
    return;
  }
  note.innerHTML = `
    <span class="sidebar-note-mark">${esc(accountInitials())}</span>
    <div class="sidebar-account-copy">
      <strong>${esc(currentSession.displayName || currentSession.username)}</strong>
      <p>${currentSession.role === "admin" ? "管理员账号" : `@${esc(currentSession.username)}`}</p>
    </div>
    <button class="sidebar-logout" data-action="logout" aria-label="退出登录">${ICONS.logout}</button>
  `;
}

function routeInfo() {
  const raw = (location.hash || "#dashboard").slice(1);
  if (raw.startsWith("student/")) {
    return { name: "student", id: raw.slice("student/".length) };
  }
  if (raw.startsWith("record/")) {
    return { name: "recordDetail", id: raw.slice("record/".length) };
  }
  if (raw.startsWith("penalty/")) {
    return { name: "penaltyDetail", id: raw.slice("penalty/".length) };
  }
  return { name: raw || "dashboard", id: null };
}

function setActiveNav(route) {
  const active =
    ["student", "team-status"].includes(route)
      ? "students"
      : ["recordDetail", "event-rankings", "month-records"].includes(route)
        ? "records"
        : route === "penaltyDetail"
          ? "penalties"
          : route === "accounts"
            ? "settings"
          : route;
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.route === active);
  });
  document.querySelectorAll(".bottom-nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.route === active);
  });
}

function navigate(route) {
  const target = `#${route}`;
  if (location.hash === target) {
    render();
  } else {
    location.hash = target;
  }
}

function render(focusId = null) {
  if (!currentSession) {
    showAuthPage(authMode);
    return;
  }
  const route = routeInfo();
  const app = document.querySelector("#app");
  let html = "";

  if (route.name === "student") {
    html = renderStudentPage(route.id);
  } else if (route.name === "team-status") {
    html = renderTeamStatusPage();
  } else if (route.name === "recordDetail") {
    html = renderRecordDetailPage(route.id);
  } else if (route.name === "event-rankings") {
    html = renderEventRankingsPage();
  } else if (route.name === "month-records") {
    html = renderMonthRecordsPage();
  } else if (route.name === "penaltyDetail") {
    html = renderPenaltyDetailPage(route.id);
  } else if (route.name === "accounts") {
    html = renderAccountsPage();
  } else if (route.name === "students") {
    html = renderStudentsPage();
  } else if (route.name === "records") {
    html = renderRecordsPage();
  } else if (route.name === "penalties") {
    html = renderPenaltiesPage();
  } else if (route.name === "settings") {
    html = renderSettingsPage();
  } else {
    html = renderDashboardPage();
  }

  app.innerHTML = html;
  setActiveNav(route.name);
  document.title = pageTitle(route);
  const mobileQuickAdd = document.querySelector("#mobileQuickAdd");
  if (mobileQuickAdd)
    mobileQuickAdd.hidden = [
      "settings",
      "recordDetail",
      "penaltyDetail",
      "accounts",
      "team-status",
      "event-rankings",
      "month-records",
    ].includes(route.name);
  renderAccountChrome();
  if (route.name === "settings") refreshStorageEstimate();

  if (focusId) {
    requestAnimationFrame(() => {
      const input = document.getElementById(focusId);
      if (input) {
        input.focus();
        if (typeof input.setSelectionRange === "function" && input.value) {
          const length = input.value.length;
          input.setSelectionRange(length, length);
        }
      }
    });
  }
}

function pageTitle(route) {
  if (route.name === "student") {
    const student = getStudent(route.id);
    return student ? `${student.name} · 省实游泳队` : "学生档案 · 省实游泳队";
  }
  if (route.name === "recordDetail") {
    const record = state.records.find((item) => item.id === route.id);
    const student = record ? getStudent(record.studentId) : null;
    return record
      ? `${student?.name || "成绩"} · ${EVENT_MAP[record.eventKey]?.label || "详情"} · 省实游泳队`
      : "成绩详情 · 省实游泳队";
  }
  if (route.name === "penaltyDetail") {
    const penalty = state.penalties.find((item) => item.id === route.id);
    const student = penalty ? getStudent(penalty.studentId) : null;
    return penalty
      ? `${student?.name || "学生"} · ${penalty.stroke}惩罚 · 省实游泳队`
      : "惩罚详情 · 省实游泳队";
  }
  if (route.name === "team-status") return "队员状态 · 省实游泳队";
  if (route.name === "event-rankings") return "项目排名 · 省实游泳队";
  if (route.name === "month-records") return "本月新成绩 · 省实游泳队";
  if (route.name === "accounts") return "账户管理 · 省实游泳队";
  const titles = {
    dashboard: "总览 · 省实游泳队",
    students: "学生档案 · 省实游泳队",
    records: "比赛成绩 · 省实游泳队",
    penalties: "长距离惩罚 · 省实游泳队",
    settings: "数据设置 · 省实游泳队",
    accounts: "账户管理 · 省实游泳队",
    "team-status": "队员状态 · 省实游泳队",
    "event-rankings": "项目排名 · 省实游泳队",
    "month-records": "本月新成绩 · 省实游泳队",
  };
  return titles[route.name] || "省实游泳队 · 队伍管理";
}

function pageHeader(kicker, title, subtitle, actions = "") {
  return `
    <header class="page-head">
      <div>
        <span class="eyebrow">${esc(kicker)}</span>
        <h1 class="page-title">${esc(title)}</h1>
        <p class="page-subtitle">${esc(subtitle)}</p>
      </div>
      ${actions ? `<div class="page-actions">${actions}</div>` : ""}
    </header>
  `;
}

function addStudentButton(label = "添加学生") {
  return `
    <button class="button button-primary" data-action="add-student">
      ${ICONS.plus}<span>${esc(label)}</span>
    </button>
  `;
}

function renderDashboardPage() {
  const activeStudents = state.students.filter((student) => student.status === "active");
  const pendingPenalties = state.penalties.filter((penalty) => penalty.status !== "completed");
  const pendingMeters = pendingPenalties.reduce((sum, penalty) => sum + penaltyRemainingMeters(penalty), 0);
  const currentMonth = todayISO().slice(0, 7);
  const monthRecords = state.records.filter((record) => monthKey(record.date) === currentMonth);
  const today = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date());

  const groups = [...new Set(state.students.map((student) => student.group).filter(Boolean))];
  const groupRows = groups.map((group, index) => {
    const total = state.students.filter((student) => student.group === group).length;
    const active = state.students.filter((student) => student.group === group && student.status === "active").length;
    const percent = state.students.length ? Math.round((active / state.students.length) * 100) : 0;
    const colors = ["var(--aqua)", "var(--navy)", "var(--sun)", "var(--coral)", "#7d72bd"];
    return `
      <div class="group-row">
        <strong>${esc(group)}</strong>
        <span>${active}/${total} 人在训</span>
        <div class="progress-track"><i style="width:${percent}%;--bar-color:${colors[index % colors.length]}"></i></div>
      </div>
    `;
  });

  const activities = buildActivityFeed().slice(0, 6);
  const activityHtml = activities.length
    ? activities
        .map((item) => {
          const student = getStudent(item.studentId);
          const isPenalty = item.type === "penalty";
          return `
            <div class="activity-row">
              <div class="activity-icon ${isPenalty ? "penalty" : ""}">${isPenalty ? ICONS.flag : ICONS.chart}</div>
              <div class="activity-main">
                <strong>${esc(student?.name || "未知学生")} · ${isPenalty ? `${esc(item.stroke)} ${esc(item.distance)} 米` : esc(EVENT_MAP[item.eventKey]?.label || "成绩")}</strong>
                <p>${isPenalty ? `长距离惩罚 × ${item.count} · ${item.status === "completed" ? "已完成" : "待完成"}` : formatDate(item.date, true)}</p>
              </div>
              <div class="activity-value">${isPenalty ? `×${esc(item.count)}` : formatTime(item.seconds)}</div>
            </div>
          `;
        })
        .join("")
    : `<div class="empty-state" style="min-height:180px"><div><p>还没有训练动态</p></div></div>`;

  return `
    <div class="page">
      <section class="hero">
        <div class="hero-copy">
          <div class="hero-kicker">${esc(today)}</div>
          <h1>每一次入水，<br /><span>都在靠近<em>更快的自己</em>。</span></h1>
          <p>集中管理队员档案、比赛表现与训练惩罚，让每一段进步都有迹可循。</p>
          <div class="inline-actions">
            <button class="button button-light" data-action="add-record">${ICONS.plus}录入成绩</button>
            <button class="button button-light" data-route="students">查看队员</button>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="lane-ring">
            <svg viewBox="0 0 80 80">
              <circle class="sun-dot" cx="54" cy="23" r="10" />
              <path d="M13 48c10-11 20-11 30 0 10 11 20 11 29 0" />
              <path d="M13 58c10-11 20-11 30 0 10 11 20 11 29 0" />
              <path d="M13 68c10-11 20-11 30 0 10 11 20 11 29 0" />
            </svg>
          </div>
        </div>
      </section>

      ${renderCoachBanner()}

      <section class="stats-grid" aria-label="训练数据概览">
        ${statCard("在队队员", activeStudents.length, "人", "队员总数", state.students.length, "var(--aqua)", "var(--aqua-soft)", "team-status")}
        ${statCard("成绩记录", state.records.length, "条", "覆盖项目", new Set(state.records.map((record) => record.eventKey)).size, "var(--navy)", "var(--navy-soft)", "event-rankings")}
        ${statCard("待完成米数", pendingMeters, "米", "涉及队员", new Set(pendingPenalties.map((penalty) => penalty.studentId)).size, "var(--coral)", "var(--coral-soft)", "penalties")}
        ${statCard("本月新成绩", monthRecords.length, "条", "当前月份", monthRecords.length ? "有新记录" : "暂无记录", "var(--sun)", "var(--sun-soft)", "month-records")}
      </section>

      <div class="content-grid">
        <section class="card card-pad">
          <div class="section-head">
            <div>
              <h2>最近动态</h2>
              <p>成绩与惩罚记录会集中显示在这里</p>
            </div>
            <button class="section-link" data-route="records">查看全部成绩</button>
          </div>
          <div class="activity-list">${activityHtml}</div>
        </section>

        <aside class="card card-pad">
          <div class="section-head">
            <div>
              <h2>队伍构成</h2>
              <p>当前各训练组人数</p>
            </div>
            <span class="badge aqua">${activeStudents.length} 人在训</span>
          </div>
          <div class="group-list">
            ${
              groupRows.length
                ? groupRows.join("")
                : `<div class="empty-state" style="min-height:160px"><div><p>添加学生后显示分组</p></div></div>`
            }
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderCoachBanner() {
  const coach = state.coach || { name: "李教练", title: "主教练", avatar: "" };
  const coachInitial =
    String(coach.name || "李教练")
      .replace(/教练|老师/g, "")
      .slice(0, 1) || "李";
  return `
    <section class="coach-banner">
      <button class="coach-avatar-button" data-action="edit-coach" aria-label="${coach.avatar ? "更换教练头像" : "添加教练头像"}">
        <span class="coach-avatar">
          ${coach.avatar ? `<img src="${esc(coach.avatar)}" alt="${esc(coach.name)}头像" />` : `<strong>${esc(coachInitial)}</strong>`}
        </span>
        <span class="coach-camera">${ICONS.edit}</span>
      </button>
      <div class="coach-copy">
        <span class="eyebrow">HEAD COACH</span>
        <h2>${esc(coach.name || "李教练")}</h2>
        <p>${esc(coach.title || "主教练")} · 负责队伍训练与成绩复盘</p>
      </div>
      <button class="button button-ghost coach-action" data-action="edit-coach">
        ${ICONS.edit}${coach.avatar ? "更换头像" : "添加头像"}
      </button>
      <span class="coach-hint">点击头像，可从手机相册选择照片</span>
    </section>
  `;
}

function statCard(label, value, unit, footLabel, footValue, color, tint, route = "") {
  const content = `
    <div class="stat-label"><span></span>${esc(label)}</div>
    <div class="stat-value"><strong>${esc(value)}</strong><small>${esc(unit)}</small></div>
    <div class="stat-foot">${esc(footLabel)} · ${esc(footValue)}</div>
    ${route ? `<span class="stat-open">查看详情 ${ICONS.arrow}</span>` : ""}
  `;
  if (route) {
    return `
      <a class="stat-card stat-card-link" href="#${esc(route)}" data-route="${esc(route)}" style="--stat-color:${color};--stat-tint:${tint}">
        ${content}
      </a>
    `;
  }
  return `
    <article class="stat-card" style="--stat-color:${color};--stat-tint:${tint}">
      ${content}
    </article>
  `;
}

function buildActivityFeed() {
  const records = state.records.map((record) => ({ ...record, type: "record" }));
  const penalties = state.penalties.map((penalty) => ({ ...penalty, type: "penalty" }));
  return [...records, ...penalties].sort((a, b) => {
    const compareDate = String(b.date).localeCompare(String(a.date));
    return compareDate || String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
  });
}

function renderStudentsPage() {
  const groups = [...new Set(state.students.map((student) => student.group).filter(Boolean))].sort();
  const term = ui.studentSearch.trim().toLowerCase();
  const students = state.students
    .filter((student) => ui.studentGroup === "all" || student.group === ui.studentGroup)
    .filter((student) => ui.studentStatus === "all" || student.status === ui.studentStatus)
    .filter((student) => {
      if (!term) return true;
      return [student.name, student.group, student.guardian, student.notes].some((value) =>
        String(value || "").toLowerCase().includes(term),
      );
    })
    .sort((a, b) => {
      if (a.status !== b.status) return a.status === "active" ? -1 : 1;
      return a.name.localeCompare(b.name, "zh-CN");
    });

  return `
    <div class="page">
      ${pageHeader(
        "ATHLETE ROSTER",
        "学生档案",
        `共 ${state.students.length} 名队员，${state.students.filter((student) => student.status === "active").length} 人正在训练。`,
        addStudentButton(),
      )}
      <div class="toolbar">
        <label class="search-box">
          ${ICONS.search}
          <input id="studentSearch" type="search" value="${esc(ui.studentSearch)}" placeholder="搜索姓名、分组或备注" autocomplete="off" />
        </label>
        <select class="select" id="studentGroup" aria-label="按分组筛选">
          <option value="all">全部分组</option>
          ${groups.map((group) => `<option value="${esc(group)}" ${ui.studentGroup === group ? "selected" : ""}>${esc(group)}</option>`).join("")}
        </select>
        <select class="select" id="studentStatus" aria-label="按状态筛选">
          <option value="all" ${ui.studentStatus === "all" ? "selected" : ""}>全部状态</option>
          <option value="active" ${ui.studentStatus === "active" ? "selected" : ""}>在队</option>
          <option value="paused" ${ui.studentStatus === "paused" ? "selected" : ""}>离队</option>
        </select>
      </div>

      ${
        students.length
          ? `<section class="student-grid">${students.map(studentCard).join("")}</section>`
          : emptyState(
              "users",
              "没有匹配的学生",
              state.students.length ? "试试调整搜索词或筛选条件。" : "先添加第一名队员，建立完整的训练档案。",
              state.students.length
                ? '<button class="button button-ghost" data-action="clear-student-filters">清除筛选</button>'
                : addStudentButton("添加第一名学生"),
            )
      }
    </div>
  `;
}

function studentCard(student) {
  const [background, color] = avatarFor(student);
  const pbs = state.records.filter((record) => record.studentId === student.id);
  const pbCount = roundedRectCount(student.id);
  const pending = pendingPenaltyMeters(student.id);
  return `
    <article class="student-card" data-student-id="${esc(student.id)}" tabindex="0" role="link" aria-label="查看 ${esc(student.name)} 的档案">
      <div class="student-top">
        <div class="avatar" style="--avatar-color:${background};--avatar-ink:${color}">${esc(initials(student.name))}</div>
        <div class="student-name">
          <strong>${esc(student.name)} ${statusBadge(student.status)}</strong>
          <p>${esc(student.group || "未分组")} · ${esc(student.gender || "未填写")}</p>
        </div>
        <span class="card-arrow">${ICONS.arrow}</span>
      </div>
      <div class="student-stats">
        <div class="student-stat"><strong>${pbCount}</strong><span>项目 PB</span></div>
        <div class="student-stat"><strong>${pbs.length}</strong><span>成绩记录</span></div>
        <div class="student-stat"><strong>${pending}</strong><span>待罚米数</span></div>
      </div>
      <div class="student-card-foot">
        <span class="badge ${pending ? "coral" : "green"}">${pending ? `待完成 ${pending} 米` : "无待完成惩罚"}</span>
        <button class="row-action" data-action="edit-student" data-id="${esc(student.id)}" aria-label="编辑 ${esc(student.name)}">
          ${ICONS.edit}
        </button>
      </div>
    </article>
  `;
}

function detailBackLink(route, label) {
  return `<button class="back-link" data-route="${esc(route)}">${ICONS.back}<span>${esc(label)}</span></button>`;
}

function renderTeamStatusPage() {
  const activeStudents = state.students
    .filter((student) => student.status === "active")
    .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
  const departedStudents = state.students
    .filter((student) => student.status !== "active")
    .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));

  const renderGroup = (title, copy, students, emptyCopy) => `
    <section class="roster-status-section">
      <div class="roster-status-head">
        <div>
          <span class="eyebrow">${title === "在队队员" ? "ACTIVE ROSTER" : "DEPARTED ROSTER"}</span>
          <h2>${esc(title)}</h2>
          <p>${esc(copy)}</p>
        </div>
        <span class="badge ${title === "在队队员" ? "green" : "gray"}">${students.length} 人</span>
      </div>
      ${
        students.length
          ? `<div class="student-grid">${students.map(studentCard).join("")}</div>`
          : `<div class="chart-empty" style="min-height:150px">${esc(emptyCopy)}</div>`
      }
    </section>
  `;

  return `
    <div class="page">
      <div class="detail-breadcrumb">
        ${detailBackLink("dashboard", "返回总览")}
        <span>点击学生卡片进入完整档案</span>
      </div>
      ${pageHeader(
        "TEAM STATUS",
        "队员状态",
        `共 ${state.students.length} 名队员，可以按在队和离队状态查看，并直接进入每名学生的详细档案。`,
        addStudentButton(),
      )}
      <div class="profile-summary roster-summary">
        <div class="summary-item"><span>在队队员</span><strong>${activeStudents.length} 人</strong></div>
        <div class="summary-item"><span>离队队员</span><strong>${departedStudents.length} 人</strong></div>
        <div class="summary-item"><span>训练分组</span><strong>${new Set(state.students.map((student) => student.group).filter(Boolean)).size} 组</strong></div>
        <div class="summary-item"><span>队员总数</span><strong>${state.students.length} 人</strong></div>
      </div>
      <div class="roster-status-stack">
        ${renderGroup("在队队员", "当前正常参加训练的学生。", activeStudents, "当前没有在队队员。")}
        ${renderGroup("离队队员", "已暂停训练或离队的学生，历史档案仍然保留。", departedStudents, "当前没有离队队员。")}
      </div>
    </div>
  `;
}

function renderEventRankingsPage() {
  const eventsWithRanking = EVENTS.map((event) => ({
    event,
    ranking: getEventRanking(event.key),
  }));
  const rankedProjects = eventsWithRanking.filter((item) => item.ranking.length > 0);

  return `
    <div class="page">
      <div class="detail-breadcrumb">
        ${detailBackLink("dashboard", "返回总览")}
        <button class="back-link" data-route="records">查看全部成绩记录 ${ICONS.arrow}</button>
      </div>
      ${pageHeader(
        "EVENT RANKINGS",
        "全部项目排名",
        "每项按各学生当前个人最好成绩从快到慢排名；并列成绩显示相同名次。点击姓名进入学生档案。",
      )}
      <div class="profile-summary ranking-summary">
        <div class="summary-item"><span>全部项目</span><strong>${EVENTS.length} 项</strong></div>
        <div class="summary-item"><span>已有排名项目</span><strong>${rankedProjects.length} 项</strong></div>
        <div class="summary-item"><span>成绩记录</span><strong>${state.records.length} 条</strong></div>
        <div class="summary-item"><span>参与排名队员</span><strong>${new Set(rankedProjects.flatMap((item) => item.ranking.map((entry) => entry.student.id))).size} 人</strong></div>
      </div>
      <div class="ranking-event-grid">
        ${eventsWithRanking
          .map(
            ({ event, ranking }) => `
              <section class="ranking-event-card">
                <div class="ranking-event-head">
                  <div>
                    <span class="badge ${event.stroke === "混合泳" ? "coral" : "aqua"}">${esc(event.stroke)}</span>
                    <h2>${esc(event.label)}</h2>
                  </div>
                  <span>${ranking.length} 人</span>
                </div>
                ${
                  ranking.length
                    ? `<div class="ranking-list">
                        ${ranking
                          .map(
                            (entry) => `
                              <button class="ranking-row" data-route="student/${esc(entry.student.id)}" aria-label="查看 ${esc(entry.student.name)} 的档案">
                                <span class="ranking-position rank-${Math.min(entry.rank, 4)}">${entry.rank}</span>
                                <span class="ranking-person">
                                  <strong>${esc(entry.student.name)}</strong>
                                  <small>${esc(entry.student.group || "未分组")}</small>
                                </span>
                                <strong class="ranking-time">${formatTime(entry.record.seconds)}</strong>
                              </button>
                            `,
                          )
                          .join("")}
                      </div>`
                    : '<div class="ranking-empty">暂无该项目成绩</div>'
                }
              </section>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMonthRecordsPage() {
  const currentMonth = todayISO().slice(0, 7);
  const monthRecords = state.records
    .filter((record) => monthKey(record.date) === currentMonth)
    .sort(
      (a, b) =>
        String(b.date).localeCompare(String(a.date)) ||
        String(b.createdAt || "").localeCompare(String(a.createdAt || "")),
    );
  const grouped = monthRecords.reduce((groups, record) => {
    (groups[record.date] ||= []).push(record);
    return groups;
  }, {});
  const studentCount = new Set(monthRecords.map((record) => record.studentId)).size;
  const eventCount = new Set(monthRecords.map((record) => record.eventKey)).size;
  const monthLabel = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
  }).format(new Date());

  return `
    <div class="page">
      <div class="detail-breadcrumb">
        ${detailBackLink("dashboard", "返回总览")}
        <span>${esc(monthLabel)}</span>
      </div>
      ${pageHeader(
        "MONTHLY RESULTS",
        "本月新成绩",
        `查看 ${monthLabel} 录入的全部比赛与训练成绩，点击记录进入完整分段和技术详情。`,
        `<button class="button button-primary" data-action="add-record">${ICONS.plus}<span>录入成绩</span></button>`,
      )}
      <div class="profile-summary monthly-summary">
        <div class="summary-item"><span>本月新成绩</span><strong>${monthRecords.length} 条</strong></div>
        <div class="summary-item"><span>涉及队员</span><strong>${studentCount} 人</strong></div>
        <div class="summary-item"><span>覆盖项目</span><strong>${eventCount} 项</strong></div>
        <div class="summary-item"><span>记录日期</span><strong>${Object.keys(grouped).length} 天</strong></div>
      </div>
      ${
        monthRecords.length
          ? Object.entries(grouped)
              .map(
                ([date, records]) => `
                  <section class="date-group">
                    <div class="date-label">${esc(formatDate(date, true))} · ${records.length} 条新成绩</div>
                    <div class="card card-pad monthly-records-card">
                      <div class="record-list">
                        ${records
                          .map((record) => {
                            const student = getStudent(record.studentId);
                            const rankInfo = getRecordEventRank(record);
                            return `
                              <div class="record-row monthly-record-row clickable" data-record-id="${esc(record.id)}" tabindex="0" role="link" aria-label="查看 ${esc(student?.name || "学生")} ${esc(EVENT_MAP[record.eventKey]?.label || "成绩")} 详情">
                                <div class="record-name">
                                  <strong>${esc(student?.name || "已删除学生")} · ${esc(EVENT_MAP[record.eventKey]?.label || "成绩")}</strong>
                                  <p>${rankBadge(rankInfo)}${record.note ? ` · ${esc(record.note)}` : ""}</p>
                                </div>
                                <span class="record-value">${formatTime(record.seconds)}<i class="record-open-arrow">${ICONS.arrow}</i></span>
                              </div>
                            `;
                          })
                          .join("")}
                      </div>
                    </div>
                  </section>
                `,
              )
              .join("")
          : emptyState(
              "chart",
              "本月还没有新成绩",
              "录入成绩后，本月新增记录会自动汇总到这里。",
              `<button class="button button-primary" data-action="add-record">${ICONS.plus}录入第一条成绩</button>`,
            )
      }
    </div>
  `;
}

function emptyState(icon, title, copy, action = "") {
  const iconSvg = ICONS[icon] || ICONS.users;
  return `
    <section class="empty-state">
      <div>
        <div class="empty-state-icon">${iconSvg}</div>
        <h3>${esc(title)}</h3>
        <p>${esc(copy)}</p>
        ${action}
      </div>
    </section>
  `;
}

function renderStudentPage(studentId) {
  const student = getStudent(studentId);
  if (!student) {
    return `
      <div class="page">
        ${emptyState("user", "找不到这名学生", "该档案可能已被删除，或链接不完整。", '<button class="button button-primary" data-route="students">返回学生列表</button>')}
      </div>
    `;
  }

  const records = getStudentRecords(student.id);
  const penalties = getStudentPenalties(student.id);
  const pending = pendingPenaltyMeters(student.id);
  const availableEvent = EVENTS.find((event) => records.some((record) => record.eventKey === event.key));
  const chartEvent = EVENT_MAP[ui.chartEventByStudent[student.id]] ? ui.chartEventByStudent[student.id] : availableEvent?.key || "free100";
  ui.chartEventByStudent[student.id] = chartEvent;
  const pbCount = roundedRectCount(student.id);
  const [avatarBg, avatarInk] = avatarFor(student);
  const age = student.birthDate
    ? Math.max(0, new Date().getFullYear() - toDateObject(student.birthDate).getFullYear())
    : null;
  const pendingPenalties = penalties.filter((penalty) => penalty.status !== "completed");

  return `
    <div class="page">
      <section class="profile-hero">
        <div class="profile-avatar" style="background:${avatarBg};color:${avatarInk}">${esc(initials(student.name))}</div>
        <div>
          <div class="profile-title">
            <h1>${esc(student.name)}</h1>
            <span class="badge ${student.status === "active" ? "green" : "gray"}">${student.status === "active" ? "在队训练" : "已离队"}</span>
          </div>
          <div class="profile-meta">
            <span>${esc(student.group || "未分组")}</span>
            <span>${esc(student.gender || "性别未填")}${age !== null ? ` · ${age} 岁` : ""}</span>
            <span>加入于 ${esc(formatDate(student.joinedAt, true))}</span>
            ${student.guardian ? `<span>联系人 ${esc(student.guardian)}</span>` : ""}
            ${student.phone ? `<span>电话 ${esc(student.phone)}</span>` : ""}
          </div>
        </div>
        <div class="profile-actions">
          <button class="button button-light" data-action="edit-student" data-id="${esc(student.id)}">${ICONS.edit}编辑资料</button>
          <button class="button button-aqua" data-action="add-record" data-student-id="${esc(student.id)}">${ICONS.plus}录入成绩</button>
        </div>
      </section>

      <section class="profile-summary">
        <div class="summary-item"><span>个人最好项目</span><strong>${pbCount} / ${EVENTS.length}</strong></div>
        <div class="summary-item"><span>成绩记录总数</span><strong>${records.length}</strong></div>
        <div class="summary-item"><span>待完成惩罚</span><strong>${pending} 米</strong></div>
        <div class="summary-item"><span>最近一次训练</span><strong>${records.length ? esc(formatDate(records.at(-1).date)) : "暂无"}</strong></div>
      </section>

      ${
        student.notes
          ? `<div class="student-note"><span>TRAINING NOTE</span><p>${esc(student.notes)}</p></div>`
          : ""
      }

      <div class="profile-grid">
        <div>
          <section class="card chart-card" style="margin-bottom:18px">
            <div class="chart-toolbar">
              <div>
                <span class="eyebrow">PROGRESS CURVE</span>
                <h2 class="card-title">进退步曲线</h2>
                <p class="card-subtitle">日期越靠右越新，数值越低代表成绩越好</p>
              </div>
              <select class="select" id="chartEvent" data-student-id="${esc(student.id)}" aria-label="选择成绩项目">
                ${EVENTS.map((event) => `<option value="${event.key}" ${event.key === chartEvent ? "selected" : ""}>${esc(event.label)}</option>`).join("")}
              </select>
            </div>
            ${renderProgressChart(student.id, chartEvent)}
          </section>

          <section class="card card-pad">
            <div class="section-head">
              <div>
                <h2>个人最好成绩</h2>
                <p>共 ${pbCount} 个项目已有有效记录</p>
              </div>
              <span class="badge aqua">PB</span>
            </div>
            <div class="pb-grid">
              ${EVENTS.map((event) => {
                const pb = getPB(student.id, event.key);
                const rankInfo = getStudentEventRank(student.id, event.key);
                return `
                  <button class="pb-card ${pb ? "has-rank" : "empty"}" data-action="chart-event" data-student-id="${esc(student.id)}" data-event="${event.key}" aria-label="查看${esc(event.label)}曲线">
                    <span>${esc(event.short)}</span>
                    <strong>${pb ? formatTime(pb.seconds) : "—"}</strong>
                    <small class="pb-rank">${rankInfo ? `第 ${rankInfo.rank} 名 / ${rankInfo.total}` : "暂无排名"}</small>
                  </button>
                `;
              }).join("")}
            </div>
          </section>
        </div>

        <aside>
          <section class="card card-pad" style="margin-bottom:18px">
            <div class="section-head">
              <div>
                <h2>惩罚记录</h2>
                <p>长距离技术与体能补练</p>
              </div>
              <button class="section-link" data-action="add-penalty" data-student-id="${esc(student.id)}">新增</button>
            </div>
            ${
              penalties.length
                ? `<div class="penalty-ledger">
                    ${penalties
                      .slice(0, 6)
                      .map(
                        (penalty) => {
                          const completedMeters = penaltyCompletedMeters(penalty);
                          const targetMeters = penaltyTargetMeters(penalty);
                          return `
                          <div class="penalty-ledger-row clickable" data-penalty-id="${esc(penalty.id)}" tabindex="0" role="link" aria-label="查看 ${esc(penalty.stroke)} 惩罚详情">
                            <div class="record-name">
                              <strong>${esc(penalty.stroke)} ${esc(penalty.distance)} 米 × ${esc(penalty.count)}</strong>
                              <p>已完成 ${completedMeters} / ${targetMeters} 米 · ${esc(formatDate(penalty.date, true))}${penalty.note ? ` · ${esc(penalty.note)}` : ""}</p>
                            </div>
                            ${penaltyStatusTag(penalty.status)}
                            <button class="row-action" data-action="add-penalty-progress" data-id="${esc(penalty.id)}" aria-label="记录完成量">
                              ${ICONS.plus}
                            </button>
                          </div>
                        `;
                        },
                      )
                      .join("")}
                  </div>`
                : `<div class="chart-empty" style="min-height:150px">还没有惩罚记录<br />当前待完成 ${pending} 米</div>`
            }
            ${pendingPenalties.length ? `<div class="modal-summary">当前待完成合计 ${pending} 米，可按每次实际游进距离累计扣除。</div>` : ""}
          </section>

          <section class="card card-pad">
            <div class="section-head">
              <div>
                <h2>最近成绩</h2>
                <p>按测试日期排序</p>
              </div>
              <span class="badge">${records.length} 条</span>
            </div>
            ${
              records.length
                ? `<div class="record-list">
                    ${[...records]
                      .reverse()
                      .slice(0, 8)
                      .map(
                        (record) => `
                          <div class="record-row clickable" data-record-id="${esc(record.id)}" tabindex="0" role="link" aria-label="查看 ${esc(EVENT_MAP[record.eventKey]?.label || "成绩")} 详情">
                            <div class="record-name">
                              <strong>${esc(EVENT_MAP[record.eventKey]?.label || "成绩")}</strong>
                              <p>${rankBadge(getRecordEventRank(record))} · ${esc(formatDate(record.date, true))}${record.note ? ` · ${esc(record.note)}` : ""}</p>
                            </div>
                            <span class="record-value">${formatTime(record.seconds)}</span>
                            <div class="row-actions">
                              <button class="row-action" data-action="edit-record" data-id="${esc(record.id)}" aria-label="编辑成绩">${ICONS.edit}</button>
                              <button class="row-action danger" data-action="delete-record" data-id="${esc(record.id)}" aria-label="删除成绩">${ICONS.trash}</button>
                            </div>
                          </div>
                        `,
                      )
                      .join("")}
                  </div>`
                : `<div class="chart-empty" style="min-height:180px">还没有成绩记录<br />点击“录入成绩”开始追踪</div>`
            }
          </section>
        </aside>
      </div>
    </div>
  `;
}

function renderProgressChart(studentId, eventKey) {
  const records = getStudentRecords(studentId).filter((record) => record.eventKey === eventKey);
  if (!records.length) {
    return `<div class="chart-empty">该项目还没有成绩记录<br />录入两次及以上成绩后即可查看变化趋势</div>`;
  }

  const width = 640;
  const height = 225;
  const left = 49;
  const right = 16;
  const top = 17;
  const bottom = 39;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const values = records.map((record) => record.seconds);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const rawRange = maxValue - minValue;
  const range = rawRange === 0 ? Math.max(2, minValue * 0.03) : Math.max(rawRange, 1.2);
  const minPlot = minValue - range * 0.18;
  const maxPlot = maxValue + range * 0.18;
  const stepX = records.length === 1 ? 0 : plotWidth / (records.length - 1);
  const points = records.map((record, index) => {
    const x = left + (records.length === 1 ? plotWidth / 2 : stepX * index);
    const y = top + ((record.seconds - minPlot) / (maxPlot - minPlot)) * plotHeight;
    return { ...record, x, y };
  });
  const best = points.reduce((winner, point) => (point.seconds < winner.seconds ? point : winner), points[0]);
  const baseY = top + plotHeight;
  const linePath = points.map((point, index) => `${index ? "L" : "M"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  const areaPath = `${linePath} L ${points.at(-1).x.toFixed(2)} ${baseY} L ${points[0].x.toFixed(2)} ${baseY} Z`;
  const yTicks = [0, 0.5, 1].map((ratio) => ({
    y: top + plotHeight * ratio,
    value: maxPlot - (maxPlot - minPlot) * ratio,
  }));
  const xTickIndexes = [...new Set([0, Math.floor((records.length - 1) / 2), records.length - 1])];
  const latest = records.at(-1);
  const previous = records.length > 1 ? records.at(-2) : null;
  const change = previous ? previous.seconds - latest.seconds : null;
  const changeLabel = change === null ? "等待下次测试" : change > 0.004 ? `进步 ${change.toFixed(2)} 秒` : change < -0.004 ? `退步 ${Math.abs(change).toFixed(2)} 秒` : "与上次持平";
  const pb = getPB(studentId, eventKey);

  return `
    <div class="chart-header">
      <div>
        <h2>${esc(EVENT_MAP[eventKey]?.label || "成绩")}</h2>
        <p>共 ${records.length} 次有效测试</p>
      </div>
      <span class="badge ${change > 0 ? "green" : change < 0 ? "coral" : "aqua"}">${esc(changeLabel)}</span>
    </div>
    <div class="chart-wrap">
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(EVENT_MAP[eventKey]?.label || "项目")}成绩变化曲线">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#16a6a2" stop-opacity=".2" />
            <stop offset="100%" stop-color="#16a6a2" stop-opacity="0" />
          </linearGradient>
        </defs>
        ${yTicks
          .map(
            (tick) => `
              <line class="chart-grid-line" x1="${left}" x2="${width - right}" y1="${tick.y}" y2="${tick.y}" />
              <text class="chart-axis" x="${left - 8}" y="${tick.y + 3}" text-anchor="end">${formatTime(tick.value)}</text>
            `,
          )
          .join("")}
        <path class="chart-area" d="${areaPath}" />
        <path class="chart-line" d="${linePath}" />
        ${points
          .map(
            (point) => `
              <circle class="chart-point ${point.id === best.id ? "best" : ""}" cx="${point.x}" cy="${point.y}" r="${point.id === best.id ? 5 : 4}" />
            `,
          )
          .join("")}
        ${xTickIndexes
          .map((index) => {
            const point = points[index];
            return `<text class="chart-axis" x="${point.x}" y="${height - 12}" text-anchor="${index === 0 ? "start" : index === records.length - 1 ? "end" : "middle"}">${formatShortDate(point.date)}</text>`;
          })
          .join("")}
      </svg>
      <div class="chart-values">
        <div><span>个人最好</span><strong>${pb ? formatTime(pb.seconds) : "—"}</strong></div>
        <div><span>最近成绩</span><strong>${formatTime(latest.seconds)}</strong></div>
        <div><span>较上次</span><strong style="color:${change > 0 ? "var(--green)" : change < 0 ? "var(--coral)" : "var(--ink)"}">${change === null ? "—" : `${change > 0 ? "−" : change < 0 ? "+" : ""}${Math.abs(change).toFixed(2)}s`}</strong></div>
      </div>
    </div>
  `;
}

function renderRecordDetailPage(recordId) {
  const record = state.records.find((item) => item.id === recordId);
  if (!record) {
    return `
      <div class="page">
        ${emptyState("chart", "找不到这条成绩", "该记录可能已被删除，或链接不完整。", '<button class="button button-primary" data-route="records">返回成绩列表</button>')}
      </div>
    `;
  }

  const student = getStudent(record.studentId);
  const event = EVENT_MAP[record.eventKey];
  const technical = getTechnical(record);
  const splitRows = buildSplitRows(record);
  const filledSplits = splitRows.filter((split) => split.cumulative !== null || split.swolf !== null);
  const completeness = technicalCompleteness(record);
  const pb = getPB(record.studentId, record.eventKey);
  const isPB = pb?.id === record.id;
  const recordRank = getRecordEventRank(record);
  const pbDelta = pb ? record.seconds - pb.seconds : null;
  const swolfValues = filledSplits.map((split) => split.swolf).filter((value) => value !== null);
  const averageSWOF = swolfValues.length
    ? Math.round(swolfValues.reduce((sum, value) => sum + value, 0) / swolfValues.length)
    : null;
  const fiftyRows = filledSplits.filter((split) => split.isFifty);
  const fiftySWOF = fiftyRows.map((split) => split.swolf).filter((value) => value !== null);
  const fiftyAverageSWOF = fiftySWOF.length
    ? Math.round(fiftySWOF.reduce((sum, value) => sum + value, 0) / fiftySWOF.length)
    : null;
  const maxSegmentTime = Math.max(1, ...filledSplits.map((split) => split.segmentTime || 0));
  const breakoutPercent =
    technical.breakoutDistance !== null
      ? Math.max(3, Math.min(98, (technical.breakoutDistance / 25) * 100))
      : null;

  return `
    <div class="page record-detail-page">
      <div class="detail-breadcrumb">
        <button class="back-link" data-route="records">${ICONS.back}<span>返回成绩列表</span></button>
        <span>${esc(student?.group || "游泳队")} / ${esc(event?.label || "成绩")}</span>
      </div>

      <section class="record-detail-hero">
        <div class="record-detail-copy">
          <div class="hero-kicker">${esc(formatDate(record.date, true))} · 成绩技术档案</div>
          <h1>${esc(student?.name || "未知学生")} · ${esc(event?.label || "成绩")}</h1>
          <p>${record.note ? esc(record.note) : "逐段记录用时、SWOF 与出发水下技术，让每一次测试都可以复盘。"}</p>
          <div class="record-detail-actions">
            <button class="button button-aqua" data-action="edit-technical" data-id="${esc(record.id)}">${ICONS.chart}完善技术数据</button>
            <button class="button button-light" data-action="edit-record" data-id="${esc(record.id)}">${ICONS.edit}编辑成绩</button>
          </div>
        </div>
        <div class="record-time-block">
          <span>本场成绩</span>
          <strong>${formatTime(record.seconds)}</strong>
          <div class="record-time-badge ${isPB ? "pb" : ""}">
            ${isPB ? "PERSONAL BEST" : pbDelta !== null ? `距 PB ${Math.abs(pbDelta).toFixed(2)} 秒` : "暂无 PB 对比"}
          </div>
          <div class="record-rank-badge">${rankBadge(recordRank)}</div>
        </div>
      </section>

      <section class="record-tech-summary" aria-label="技术数据摘要">
        <article>
          <span>跳发后水下腿</span>
          <strong>${technical.underwaterKicks ?? "—"}<small>${technical.underwaterKicks !== null ? "次" : ""}</small></strong>
        </article>
        <article>
          <span>出水时间</span>
          <strong>${technical.breakoutTime !== null ? formatTime(technical.breakoutTime) : "—"}<small>${technical.breakoutTime !== null ? "秒" : ""}</small></strong>
        </article>
        <article>
          <span>出水距离</span>
          <strong>${technical.breakoutDistance ?? "—"}<small>${technical.breakoutDistance !== null ? "米" : ""}</small></strong>
        </article>
        <article>
          <span>SWOF 平均</span>
          <strong>${averageSWOF ?? "—"}<small>${averageSWOF !== null ? "划/段" : ""}</small></strong>
        </article>
      </section>

      <div class="record-detail-grid">
        <section class="card card-pad">
          <div class="section-head">
            <div>
              <span class="eyebrow">SPLITS & SWOF</span>
              <h2>分段用时与划手次数</h2>
              <p>每 25 米记录一次；50 米节点使用蓝色高亮</p>
            </div>
            <span class="badge ${completeness.complete ? "green" : completeness.timeCoverage ? "aqua" : "coral"}">
              ${completeness.timeCoverage}/${completeness.totalCheckpoints} 段已记录
            </span>
          </div>

          ${
            filledSplits.length
              ? `
                <div class="split-table">
                  <div class="split-table-head">
                    <span>检查点</span>
                    <span>本段用时</span>
                    <span>累计用时</span>
                    <span>SWOF</span>
                  </div>
                  <div class="split-table-scroll">
                    ${splitRows
                      .map((split) => {
                        const hasData = split.cumulative !== null || split.swolf !== null;
                        const barWidth = split.segmentTime
                          ? Math.max(8, (split.segmentTime / maxSegmentTime) * 100)
                          : 0;
                        return `
                          <div class="split-table-row ${split.isFifty ? "is-fifty" : ""} ${hasData ? "" : "is-empty"}">
                            <div class="split-distance">
                              <strong>${split.distance} 米</strong>
                              ${split.isFifty ? '<span class="badge">50M</span>' : "<span>25M</span>"}
                            </div>
                            <div class="split-segment">
                              <span>${split.segmentTime !== null ? formatTime(split.segmentTime) : "—"}</span>
                              <i style="width:${barWidth}%"></i>
                            </div>
                            <span class="split-cumulative">${split.cumulative !== null ? formatTime(split.cumulative) : "—"}</span>
                            <strong class="split-swolf">${split.swolf ?? "—"}</strong>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </div>
              `
              : `
                ${emptyState(
                  "chart",
                  "还没有分段技术数据",
                  "记录每 25 米累计用时和 SWOF 划手次数后，这里会显示完整分段表。",
                  `<button class="button button-primary" data-action="edit-technical" data-id="${esc(record.id)}">${ICONS.plus}添加技术数据</button>`,
                )}
              `
          }
        </section>

        <aside class="record-detail-side">
          <section class="card card-pad">
            <div class="section-head">
              <div>
                <h2>出发与水下</h2>
                <p>跳发后到第一次出水</p>
              </div>
              <span class="badge ${technical.underwaterKicks !== null ? "aqua" : "gray"}">
                ${technical.underwaterKicks !== null ? `${technical.underwaterKicks} 次腿` : "待记录"}
              </span>
            </div>
            <div class="breakout-pool">
              <div class="pool-lane">
                <span class="pool-start">出发</span>
                <span class="pool-wave"></span>
                ${
                  breakoutPercent !== null
                    ? `<span class="breakout-marker" style="left:${breakoutPercent}%"><i></i><b>出水</b></span>`
                    : ""
                }
              </div>
              <div class="pool-scale"><span>0m</span><span>12.5m</span><span>25m</span></div>
            </div>
            <div class="tech-mini-grid">
              <div><span>水下腿</span><strong>${technical.underwaterKicks ?? "—"} 次</strong></div>
              <div><span>出水时间</span><strong>${technical.breakoutTime !== null ? formatTime(technical.breakoutTime) : "—"}</strong></div>
              <div><span>出水距离</span><strong>${technical.breakoutDistance !== null ? `${technical.breakoutDistance} m` : "—"}</strong></div>
            </div>
            ${
              technical.note
                ? `<div class="technical-note"><span>技术观察</span><p>${esc(technical.note)}</p></div>`
                : ""
            }
          </section>

          <section class="card card-pad">
            <div class="section-head">
              <div>
                <h2>SWOF 概览</h2>
                <p>划手次数越少，通常说明每划推进更有效</p>
              </div>
            </div>
            <div class="swolf-overview">
              <div class="swolf-ring" style="--swolf-angle:${Math.min(360, (averageSWOF || 0) * 12)}deg">
                <strong>${averageSWOF ?? "—"}</strong>
                <span>每 25 米平均</span>
              </div>
              <div class="swolf-breakdown">
                <div><span>25 米样本</span><strong>${swolfValues.length} 段</strong></div>
                <div><span>50 米节点平均</span><strong>${fiftyAverageSWOF ?? "—"}</strong></div>
                <div><span>技术完整度</span><strong>${completeness.score}/5</strong></div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  `;
}

function renderRecordsPage() {
  const term = ui.recordSearch.trim().toLowerCase();
  const records = [...state.records]
    .filter((record) => ui.recordEvent === "all" || record.eventKey === ui.recordEvent)
    .filter((record) => {
      if (!term) return true;
      const student = getStudent(record.studentId);
      return [student?.name, EVENT_MAP[record.eventKey]?.label, record.note].some((value) =>
        String(value || "").toLowerCase().includes(term),
      );
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)) || String(b.createdAt || "").localeCompare(String(a.createdAt || "")));

  const grouped = records.reduce((groups, record) => {
    (groups[record.date] ||= []).push(record);
    return groups;
  }, {});
  const strokeStats = STROKES.map((stroke) => {
    const count = state.records.filter((record) => EVENT_MAP[record.eventKey]?.stroke === stroke).length;
    return { stroke, count };
  });
  const maxStrokeCount = Math.max(1, ...strokeStats.map((item) => item.count));
  const recentPBs = state.students
    .flatMap((student) =>
      EVENTS.map((event) => {
        const pb = getPB(student.id, event.key);
        return pb ? { ...pb, studentName: student.name, eventLabel: event.label } : null;
      }),
    )
    .filter(Boolean)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 5);

  return `
    <div class="page">
      ${pageHeader(
        "PERFORMANCE LOG",
        "比赛成绩",
        "覆盖四种泳姿、混合泳与自由泳长距离项目；点击任意成绩即可查看分段与出发技术详情。",
        `<button class="button button-primary" data-action="add-record">${ICONS.plus}<span>录入成绩</span></button>`,
      )}
      <div class="toolbar">
        <label class="search-box">
          ${ICONS.search}
          <input id="recordSearch" type="search" value="${esc(ui.recordSearch)}" placeholder="搜索学生、项目或备注" autocomplete="off" />
        </label>
        <select class="select" id="recordEvent" aria-label="按项目筛选">
          <option value="all">全部项目</option>
          ${["自由泳", "仰泳", "蛙泳", "蝶泳", "混合泳"]
            .map(
              (stroke) => `
                <optgroup label="${stroke}">
                  ${EVENTS.filter((event) => event.stroke === stroke)
                    .map((event) => `<option value="${event.key}" ${ui.recordEvent === event.key ? "selected" : ""}>${esc(event.label)}</option>`)
                    .join("")}
                </optgroup>
              `,
            )
            .join("")}
        </select>
      </div>

      <div class="records-layout">
        <section>
          ${
            records.length
              ? Object.entries(grouped)
                  .map(
                    ([date, dayRecords]) => `
                      <div class="date-group">
                        <div class="date-label">${esc(formatDate(date, true))} · ${dayRecords.length} 条</div>
                        <div class="card card-pad" style="padding-top:6px;padding-bottom:6px">
                          <div class="record-list">
                            ${dayRecords
                              .map((record) => {
                                const student = getStudent(record.studentId);
                                return `
                                  <div class="record-row clickable" data-record-id="${esc(record.id)}" tabindex="0" role="link" aria-label="查看 ${esc(student?.name || "学生")} ${esc(EVENT_MAP[record.eventKey]?.label || "成绩")} 详情">
                                    <div class="record-name">
                                      <strong>${esc(student?.name || "已删除学生")} · ${esc(EVENT_MAP[record.eventKey]?.label || "成绩")}</strong>
                                      <p>${rankBadge(getRecordEventRank(record))} · ${record.note ? esc(record.note) : "训练成绩"}</p>
                                    </div>
                                    <span class="record-value">${formatTime(record.seconds)}<i class="record-open-arrow">${ICONS.arrow}</i></span>
                                    <div class="row-actions">
                                      <button class="row-action" data-action="edit-record" data-id="${esc(record.id)}" aria-label="编辑成绩">${ICONS.edit}</button>
                                      <button class="row-action danger" data-action="delete-record" data-id="${esc(record.id)}" aria-label="删除成绩">${ICONS.trash}</button>
                                    </div>
                                  </div>
                                `;
                              })
                              .join("")}
                          </div>
                        </div>
                      </div>
                    `,
                  )
                  .join("")
              : emptyState("chart", "没有匹配的成绩", "调整筛选条件，或录入一条新成绩。", `<button class="button button-primary" data-action="add-record">${ICONS.plus}录入成绩</button>`)
          }
        </section>

        <aside>
          <section class="card card-pad" style="margin-bottom:18px">
            <div class="section-head">
              <div>
                <h2>项目覆盖</h2>
                <p>各泳姿累计记录数量</p>
              </div>
            </div>
            <div class="group-list">
              ${strokeStats
                .map(
                  (item) => `
                    <div class="group-row">
                      <strong>${esc(item.stroke)}</strong>
                      <span>${item.count} 条</span>
                      <div class="progress-track"><i style="width:${(item.count / maxStrokeCount) * 100}%;--bar-color:${item.stroke === "自由泳" ? "var(--aqua)" : item.stroke === "蛙泳" ? "var(--sun)" : item.stroke === "仰泳" ? "var(--navy)" : "var(--coral)"}"></i></div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section class="card card-pad">
            <div class="section-head">
              <div>
                <h2>近期个人最好成绩</h2>
                <p>最近创造 PB 的项目</p>
              </div>
            </div>
            ${
              recentPBs.length
                ? `<div class="record-list">
                    ${recentPBs
                      .map(
                        (pb) => `
                          <div class="record-row clickable" data-record-id="${esc(pb.id)}" tabindex="0" role="link" aria-label="查看 ${esc(pb.studentName)} ${esc(pb.eventLabel)} 详情">
                            <div class="record-name">
                              <strong>${esc(pb.studentName)} · ${esc(pb.eventLabel)}</strong>
                              <p>${rankBadge(getStudentEventRank(pb.studentId, pb.eventKey))} · ${esc(formatDate(pb.date, true))}</p>
                            </div>
                            <span class="record-value">${formatTime(pb.seconds)}<i class="record-open-arrow">${ICONS.arrow}</i></span>
                          </div>
                        `,
                      )
                      .join("")}
                  </div>`
                : `<div class="chart-empty" style="min-height:150px">暂无 PB 数据</div>`
            }
          </section>
        </aside>
      </div>
    </div>
  `;
}

function renderPenaltyDetailPage(penaltyId) {
  const penalty = state.penalties.find((item) => item.id === penaltyId);
  if (!penalty) {
    return `
      <div class="page">
        ${emptyState("flag", "找不到这条惩罚", "该记录可能已被删除，或链接不完整。", '<button class="button button-primary" data-route="penalties">返回惩罚列表</button>')}
      </div>
    `;
  }

  const student = getStudent(penalty.studentId);
  const targetMeters = penaltyTargetMeters(penalty);
  const completedMeters = penaltyCompletedMeters(penalty);
  const remainingMeters = penaltyRemainingMeters(penalty);
  const progressPercent = targetMeters ? Math.min(100, (completedMeters / targetMeters) * 100) : 0;
  const progress = [...(penalty.progress || [])].sort(
    (a, b) => String(b.date).localeCompare(String(a.date)) || String(b.createdAt || "").localeCompare(String(a.createdAt || "")),
  );
  const equivalentLaps = Number(penalty.distance) > 0 ? completedMeters / Number(penalty.distance) : 0;
  const isCompleted = remainingMeters === 0;

  return `
    <div class="page penalty-detail-page">
      <div class="detail-breadcrumb">
        <button class="back-link" data-route="penalties">${ICONS.back}<span>返回惩罚列表</span></button>
        <span>${esc(student?.group || "游泳队")} / 长距离惩罚</span>
      </div>

      <section class="penalty-detail-hero ${isCompleted ? "is-completed" : ""}">
        <div class="penalty-detail-copy">
          <div class="hero-kicker">${esc(formatDate(penalty.date, true))} · 累计完成制</div>
          <h1>${esc(student?.name || "未知学生")} · ${esc(penalty.stroke)}</h1>
          <div class="penalty-target-line">${esc(penalty.distance)} 米 × ${esc(penalty.count)} 趟 = <strong>${targetMeters} 米</strong></div>
          <p>游多少算多少。每次训练后录入实际完成距离，剩余目标会自动累计扣减。</p>
          <div class="record-detail-actions">
            <button class="button button-aqua" data-action="add-penalty-progress" data-id="${esc(penalty.id)}">${ICONS.plus}记录本次完成量</button>
            <button class="button button-light" data-action="edit-penalty" data-id="${esc(penalty.id)}">${ICONS.edit}编辑目标</button>
          </div>
        </div>
        <div class="penalty-progress-hero">
          <div class="penalty-progress-ring" style="--penalty-progress:${progressPercent * 3.6}deg">
            <div><strong>${Math.round(progressPercent)}%</strong><span>累计完成</span></div>
          </div>
          <div class="penalty-progress-caption">
            <strong>${completedMeters} <small>/ ${targetMeters} 米</small></strong>
            <span>${isCompleted ? "目标已完成" : `还差 ${remainingMeters} 米`}</span>
          </div>
        </div>
      </section>

      <section class="record-tech-summary penalty-detail-summary">
        <article><span>目标总距离</span><strong>${targetMeters}<small>米</small></strong></article>
        <article><span>累计已完成</span><strong>${completedMeters}<small>米</small></strong></article>
        <article><span>剩余距离</span><strong>${remainingMeters}<small>米</small></strong></article>
        <article><span>按单趟折算</span><strong>${equivalentLaps.toFixed(1)}<small>/${esc(penalty.count)} 趟</small></strong></article>
      </section>

      <div class="penalty-detail-grid">
        <section class="card card-pad">
          <div class="section-head">
            <div>
              <span class="eyebrow">COMPLETION LOG</span>
              <h2>累计完成明细</h2>
              <p>每次完成的距离会累加，不要求一次游完整组目标</p>
            </div>
            <button class="button button-small button-primary" data-action="add-penalty-progress" data-id="${esc(penalty.id)}">${ICONS.plus}新增完成量</button>
          </div>
          ${
            progress.length
              ? `<div class="progress-log">
                  ${progress
                    .map(
                      (item) => `
                        <div class="progress-log-row">
                          <div class="progress-log-icon">${ICONS.check}</div>
                          <div class="record-name">
                            <strong>完成 ${esc(item.meters)} 米</strong>
                            <p>${esc(formatDate(item.date, true))}${item.note ? ` · ${esc(item.note)}` : ""}</p>
                          </div>
                          <div class="row-actions">
                            <button class="row-action" data-action="edit-penalty-progress" data-id="${esc(penalty.id)}" data-progress-id="${esc(item.id)}" aria-label="编辑完成量">${ICONS.edit}</button>
                            <button class="row-action danger" data-action="delete-penalty-progress" data-id="${esc(penalty.id)}" data-progress-id="${esc(item.id)}" aria-label="删除完成量">${ICONS.trash}</button>
                          </div>
                        </div>
                      `,
                    )
                    .join("")}
                </div>`
              : emptyState(
                  "flag",
                  "还没有完成记录",
                  "例如目标 3200 米，今天游了 600 米，就记录 600 米，剩余距离会自动变成 2600 米。",
                  `<button class="button button-primary" data-action="add-penalty-progress" data-id="${esc(penalty.id)}">${ICONS.plus}记录第一次完成量</button>`,
                )
          }
        </section>

        <aside class="penalty-detail-side">
          <section class="card card-pad">
            <div class="section-head">
              <div>
                <h2>目标进度</h2>
                <p>完成状态由累计距离自动判断</p>
              </div>
              <span class="badge ${isCompleted ? "green" : "coral"}">${isCompleted ? "已完成" : "进行中"}</span>
            </div>
            <div class="penalty-large-progress">
              <div class="penalty-large-progress-head">
                <strong>${completedMeters} 米</strong>
                <span>目标 ${targetMeters} 米</span>
              </div>
              <div class="penalty-progress-track"><i style="width:${progressPercent}%"></i></div>
              <div class="penalty-progress-labels">
                <span>已游 ${completedMeters} 米</span>
                <span>${remainingMeters ? `剩余 ${remainingMeters} 米` : "已达标"}</span>
              </div>
            </div>
            <div class="penalty-config-list">
              <div><span>泳姿</span><strong>${esc(penalty.stroke)}</strong></div>
              <div><span>单趟距离</span><strong>${esc(penalty.distance)} 米</strong></div>
              <div><span>目标数量</span><strong>${esc(penalty.count)} 趟</strong></div>
              <div><span>开始日期</span><strong>${esc(formatDate(penalty.date, true))}</strong></div>
            </div>
          </section>

          <section class="card card-pad">
            <div class="section-head">
              <div>
                <h2>惩罚说明</h2>
                <p>原始原因与教练备注</p>
              </div>
            </div>
            <div class="penalty-note-box">${penalty.note ? esc(penalty.note) : "暂无备注"}</div>
            <div class="inline-actions" style="margin-top:14px">
              <button class="button button-small button-ghost" data-action="edit-penalty" data-id="${esc(penalty.id)}">编辑记录</button>
              <button class="button button-small button-danger" data-action="delete-penalty" data-id="${esc(penalty.id)}">删除惩罚</button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  `;
}

function renderPenaltiesPage() {
  const pendingPenalties = state.penalties.filter((penalty) => penalty.status !== "completed");
  const pendingMeters = pendingPenalties.reduce((sum, penalty) => sum + penaltyRemainingMeters(penalty), 0);
  const penalties = [...state.penalties]
    .filter((penalty) => ui.penaltyStatus === "all" || penalty.status === ui.penaltyStatus)
    .sort(sortPenalties);

  return `
    <div class="page">
      ${pageHeader(
        "TRAINING CONSEQUENCES",
        "长距离惩罚",
        `当前待完成 ${pendingMeters} 米，支持按每次实际游进距离累计扣除。`,
        `<button class="button button-primary" data-action="add-penalty">${ICONS.plus}<span>新增惩罚</span></button>`,
      )}
      <section class="penalty-overview">
        ${STROKES.map((stroke) => {
          const strokePending = pendingPenalties
            .filter((penalty) => penalty.stroke === stroke)
            .reduce((sum, penalty) => sum + penaltyRemainingMeters(penalty), 0);
          const total = state.penalties
            .filter((penalty) => penalty.stroke === stroke)
            .reduce((sum, penalty) => sum + penaltyTargetMeters(penalty), 0);
          return `
            <article class="penalty-type-card">
              <div class="penalty-type-top">
                <strong>${esc(stroke)}</strong>
                <span class="badge ${strokePending ? "coral" : "green"}">${strokePending ? "待完成" : "已清零"}</span>
              </div>
              <div class="penalty-count" style="margin-top:16px">${strokePending} <small>米待补</small></div>
              <p>累计目标 ${total} 米</p>
            </article>
          `;
        }).join("")}
      </section>

      <div class="toolbar">
        <div class="tabs" style="width:auto">
          <button class="tab ${ui.penaltyStatus === "all" ? "active" : ""}" data-action="filter-penalty" data-status="all">全部</button>
          <button class="tab ${ui.penaltyStatus === "pending" ? "active" : ""}" data-action="filter-penalty" data-status="pending">待完成</button>
          <button class="tab ${ui.penaltyStatus === "completed" ? "active" : ""}" data-action="filter-penalty" data-status="completed">已完成</button>
        </div>
        <span class="badge">${penalties.length} 条记录</span>
      </div>

      ${
        penalties.length
          ? `<section class="card card-pad">
              <div class="penalty-ledger">
                ${penalties
                  .map((penalty) => {
                    const student = getStudent(penalty.studentId);
                    const completedMeters = penaltyCompletedMeters(penalty);
                    const targetMeters = penaltyTargetMeters(penalty);
                    const progressPercent = targetMeters ? Math.min(100, (completedMeters / targetMeters) * 100) : 0;
                    return `
                      <div class="penalty-ledger-row clickable" data-penalty-id="${esc(penalty.id)}" tabindex="0" role="link" aria-label="查看 ${esc(student?.name || "学生")} 的惩罚详情">
                        <div class="record-name">
                          <strong>${esc(student?.name || "已删除学生")} · ${esc(penalty.stroke)} ${esc(penalty.distance)} 米 × ${esc(penalty.count)}</strong>
                          <p>已完成 ${completedMeters} / ${targetMeters} 米 · ${esc(formatDate(penalty.date, true))}${penalty.note ? ` · ${esc(penalty.note)}` : ""}</p>
                          <div class="penalty-row-progress"><i style="width:${progressPercent}%"></i></div>
                        </div>
                        ${penaltyStatusTag(penalty.status)}
                        <div class="row-actions">
                          <button class="row-action" data-action="add-penalty-progress" data-id="${esc(penalty.id)}" aria-label="记录完成量">${ICONS.plus}</button>
                          <button class="row-action" data-action="edit-penalty" data-id="${esc(penalty.id)}" aria-label="编辑惩罚">${ICONS.edit}</button>
                          <button class="row-action danger" data-action="delete-penalty" data-id="${esc(penalty.id)}" aria-label="删除惩罚">${ICONS.trash}</button>
                        </div>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </section>`
          : emptyState("flag", "没有匹配的惩罚记录", "切换完成状态，或为学生新增一条惩罚记录。", `<button class="button button-primary" data-action="add-penalty">${ICONS.plus}新增惩罚</button>`)
      }
    </div>
  `;
}

function renderAccountsPage() {
  if (!isAdmin()) {
    return `
      <div class="page">
        ${emptyState("lock", "没有管理员权限", "只有管理员账号可以访问账户管理。", '<button class="button button-primary" data-route="dashboard">返回总览</button>')}
      </div>
    `;
  }
  const activeAccounts = adminUsers.filter((user) => user.status === "active");
  const adminAccounts = adminUsers.filter((user) => user.role === "admin");
  const totalStudents = adminUsers.reduce((sum, user) => sum + Number(user.dataSummary?.students || 0), 0);
  const totalRecords = adminUsers.reduce((sum, user) => sum + Number(user.dataSummary?.records || 0), 0);

  return `
    <div class="page accounts-page">
      <div class="detail-breadcrumb">
        <button class="back-link" data-route="settings">${ICONS.back}<span>返回数据与设置</span></button>
        <span>ADMIN CONSOLE / 账号与权限</span>
      </div>
      ${pageHeader(
        "ADMIN CONSOLE",
        "账户管理",
        "创建队员账号、分配管理员权限、停用账号或重置密码。每个账号的数据完全独立。",
        `<button class="button button-primary" data-action="add-account">${ICONS.plus}<span>创建账号</span></button>`,
      )}
      <section class="account-stats">
        <article><span>账号总数</span><strong>${adminUsers.length}</strong><small>${activeAccounts.length} 个启用</small></article>
        <article><span>管理员</span><strong>${adminAccounts.length}</strong><small>含当前账号</small></article>
        <article><span>学生档案</span><strong>${totalStudents}</strong><small>全部账号合计</small></article>
        <article><span>成绩记录</span><strong>${totalRecords}</strong><small>全部账号合计</small></article>
      </section>
      <div class="section-head">
        <div>
          <h2>账号列表</h2>
          <p>停用账号后，该用户将立即无法继续登录</p>
        </div>
        <button class="section-link" data-action="refresh-accounts">刷新数据</button>
      </div>
      ${
        adminUsers.length
          ? `<section class="account-list">
              ${adminUsers
                .map((user) => {
                  const isSelf = user.id === currentSession.id;
                  return `
                    <article class="account-card ${user.status !== "active" ? "is-disabled" : ""}">
                      <div class="account-card-main">
                        <div class="account-avatar">${esc(accountInitials(user))}</div>
                        <div class="account-identity">
                          <strong>${esc(user.displayName)} ${isSelf ? '<span class="tag aqua">当前账号</span>' : ""}</strong>
                          <p>@${esc(user.username)} · 创建于 ${esc(formatTimestampDate(user.createdAt, true))}</p>
                        </div>
                        <div class="account-badges">
                          <span class="badge ${user.role === "admin" ? "aqua" : ""}">${user.role === "admin" ? "管理员" : "普通账号"}</span>
                          <span class="badge ${user.status === "active" ? "green" : "gray"}">${user.status === "active" ? "已启用" : "已停用"}</span>
                        </div>
                      </div>
                      <div class="account-data-row">
                        <div><span>学生</span><strong>${user.dataSummary?.students || 0}</strong></div>
                        <div><span>成绩</span><strong>${user.dataSummary?.records || 0}</strong></div>
                        <div><span>惩罚</span><strong>${user.dataSummary?.penalties || 0}</strong></div>
                        <div><span>最近登录</span><strong>${user.lastLoginAt ? esc(formatTimestampDate(user.lastLoginAt)) : "从未登录"}</strong></div>
                      </div>
                      <div class="account-card-actions">
                        <button class="button button-small button-ghost" data-action="edit-account" data-id="${esc(user.id)}">${ICONS.edit}编辑账号</button>
                        ${
                          isSelf
                            ? `<button class="button button-small button-ghost" data-action="change-password">${ICONS.lock}修改自己的密码</button>`
                            : `<button class="button button-small button-ghost" data-action="reset-account-password" data-id="${esc(user.id)}">${ICONS.lock}重置密码</button>`
                        }
                        ${
                          isSelf
                            ? ""
                            : `<button class="button button-small button-danger" data-action="delete-account" data-id="${esc(user.id)}">${ICONS.trash}删除</button>`
                        }
                      </div>
                    </article>
                  `;
                })
                .join("")}
            </section>`
          : emptyState(
              "users",
              "还没有账号",
              "创建第一个队员账号，或检查服务器连接后刷新。",
              `<button class="button button-primary" data-action="add-account">${ICONS.plus}创建账号</button>`,
            )
      }
    </div>
  `;
}

function renderSettingsPage() {
  const storageSize = new Blob([JSON.stringify(state)]).size;
  const backupMeta = getBackupMeta();
  const standalone = isStandaloneMode();
  const backupState = backupNeedsAttention()
    ? { label: "建议备份", className: "coral" }
    : backupMeta.lastBackupAt
      ? { label: "已有备份", className: "green" }
      : { label: "尚未备份", className: "gray" };
  return `
    <div class="page">
      ${pageHeader(
        "APP SETTINGS",
        "数据与设置",
        "单机模式：所有数据只保存在当前手机或浏览器，不上传服务器。",
      )}
      <section class="settings-account-card">
        <div class="settings-account-main">
          <div class="account-avatar large">S</div>
          <div>
            <span class="eyebrow">LOCAL DEVICE</span>
            <h2>单机存储</h2>
            <p>无需登录 · 离线可用 · 数据只在此设备</p>
          </div>
        </div>
        <span class="badge green">数据不上传</span>
      </section>
      <div class="settings-grid">
        <section class="setting-card backup-card">
          <div class="setting-icon" style="background:var(--sun-soft);color:#9c6b16">${ICONS.shield}</div>
          <div class="setting-card-heading">
            <h2>备份状态</h2>
            <span class="badge ${backupState.className}">${backupState.label}</span>
          </div>
          <p>
            ${
              backupMeta.lastBackupAt
                ? `最近一次备份：${esc(formatBackupDate(backupMeta.lastBackupAt))}。`
                : "当前数据还没有导出过备份。"
            }
            ${
              backupMeta.dirtySinceBackup
                ? "此后又有数据修改，建议重新备份。"
                : "备份会生成可重新导入的 JSON 文件。"
            }
          </p>
          <div class="inline-actions">
            <button class="button button-small button-primary" data-action="export-data">${ICONS.download}导出备份</button>
            <button class="button button-small button-ghost" data-action="share-data">分享备份</button>
          </div>
        </section>

        <section class="setting-card">
          <div class="setting-icon">${ICONS.download}</div>
          <h2>导出数据备份</h2>
          <p>将 ${state.students.length} 名学生、${state.records.length} 条成绩和 ${state.penalties.length} 条惩罚记录保存为 JSON 文件。</p>
          <button class="button button-primary" data-action="export-data">${ICONS.download}下载 JSON 备份</button>
        </section>

        <section class="setting-card">
          <div class="setting-icon">${ICONS.upload}</div>
          <h2>导入数据备份</h2>
          <p>选择此前导出的 JSON 文件。导入会替换当前设备上的数据，请在操作前先备份现有内容。</p>
          <button class="button button-ghost" data-action="import-data">${ICONS.upload}选择备份文件</button>
          <input id="importFile" type="file" accept=".json,application/json" hidden />
        </section>

        <section class="setting-card">
          <div class="setting-icon" style="background:var(--navy-soft);color:var(--navy)">${ICONS.settings}</div>
          <h2>本机数据状态</h2>
          <p id="appDataSize">应用数据约 ${formatBytes(storageSize)}。清除浏览器网站数据会同时删除这些内容，请定期导出备份。</p>
          <div class="storage-meter" aria-hidden="true"><span id="storageMeterFill"></span></div>
          <p id="deviceStorageText" class="storage-detail">正在读取浏览器存储额度…</p>
          <div class="inline-actions">
            <span class="badge aqua">${state.students.length} 名队员</span>
            <span class="badge">${state.records.length} 条成绩</span>
            <span class="badge">v${APP_VERSION}</span>
          </div>
        </section>

        <section class="setting-card">
          <div class="setting-icon" style="background:var(--coral-soft);color:var(--coral)">${ICONS.trash}</div>
          <h2>数据清理</h2>
          <p>可以清空为空白队伍，也可以重新载入演示数据。两种操作都不可撤销，请先导出当前备份。</p>
          <div class="inline-actions">
            <button class="button button-small button-danger" data-action="clear-data">${ICONS.trash}清空全部数据</button>
            <button class="button button-small button-ghost" data-action="reset-demo">恢复示例数据</button>
          </div>
        </section>
      </div>

      <section class="card card-pad" style="margin-top:18px">
        <div class="section-head">
          <div>
            <h2>安装到手机</h2>
            <p>${standalone ? "当前已作为独立应用运行" : "部署到 HTTPS 地址后，可作为独立应用使用"}</p>
          </div>
          <span class="badge ${standalone ? "green" : "aqua"}">${standalone ? "已安装" : "PWA"}</span>
        </div>
        <p style="margin:0;color:var(--ink-soft);font-size:11px;line-height:1.8">
          iPhone：在 Safari 中打开应用，点击“分享”，选择“添加到主屏幕”。<br />
          Android：使用 Chrome 打开，选择“安装应用”或“添加到主屏幕”。<br />
          数据不会在手机和电脑之间同步；每台设备拥有独立数据。
        </p>
        ${
          standalone
            ? ""
            : `<div class="inline-actions" style="margin-top:14px"><button class="button button-primary button-small" data-action="install-app">${ICONS.download}安装到当前设备</button></div>`
        }
      </section>
    </div>
  `;
}

function openModal({
  title,
  body,
  submitText = "保存",
  danger = false,
  onSubmit,
  hideSubmit = false,
  wide = false,
}) {
  const modal = document.querySelector("#modal");
  const form = document.querySelector("#modalForm");
  modal.classList.toggle("modal-wide", wide);
  document.querySelector("#modalTitle").textContent = title;
  document.querySelector("#modalBody").innerHTML = body;
  const submit = document.querySelector("#modalSubmit");
  submit.textContent = submitText;
  submit.className = `button ${danger ? "button-danger" : "button-primary"}`;
  submit.hidden = hideSubmit;
  form.reset();
  modalSubmitHandler = onSubmit;
  modal.showModal();
  requestAnimationFrame(() => {
    const firstInput = modal.querySelector(
      "input:not([type=hidden]):not([hidden]), select, textarea",
    );
    firstInput?.focus();
  });
}

function closeModal() {
  const modal = document.querySelector("#modal");
  if (modal.open) modal.close();
  modal.classList.remove("modal-wide");
  modalSubmitHandler = null;
}

async function compressCoachAvatar(file) {
  if (!file || !file.type.startsWith("image/")) {
    throw new Error("请选择图片文件");
  }
  if (file.size > 20 * 1024 * 1024) {
    throw new Error("图片不能超过 20 MB");
  }
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = await new Promise((resolve, reject) => {
      const element = new Image();
      element.onload = () => resolve(element);
      element.onerror = () => reject(new Error("无法读取这张图片，请换一张重试"));
      element.src = objectUrl;
    });
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    context.fillStyle = "#f4f7f8";
    context.fillRect(0, 0, size, size);
    const scale = Math.max(size / image.naturalWidth, size / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    context.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);
    return canvas.toDataURL("image/jpeg", 0.84);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function openCoachModal() {
  const coach = state.coach || { name: "李教练", title: "主教练", avatar: "" };
  openModal({
    title: "教练资料与头像",
    submitText: "保存教练资料",
    body: `
      <div class="coach-avatar-editor">
        <div class="coach-avatar-preview" id="coachAvatarPreview" data-avatar="${esc(coach.avatar || "")}">
          ${
            coach.avatar
              ? `<img src="${esc(coach.avatar)}" alt="${esc(coach.name)}头像" />`
              : `<span>${esc(String(coach.name || "李").replace(/教练|老师/g, "").slice(0, 1) || "李")}</span>`
          }
        </div>
        <div class="coach-avatar-editor-copy">
          <strong>教练头像</strong>
          <p>从手机相册选择照片，保存时会自动裁剪为正方形并压缩。</p>
          <div class="inline-actions">
            <button class="button button-small button-ghost" type="button" id="chooseCoachAvatar">${ICONS.upload}从相册选择</button>
            <button class="button button-small button-ghost" type="button" id="removeCoachAvatar">移除头像</button>
          </div>
        </div>
      </div>
      <input id="coachAvatarFile" type="file" accept="image/*" hidden />
      <div class="form-grid" style="margin-top:16px">
        <div class="field">
          <label for="coachName">教练姓名 *</label>
          <input id="coachName" name="coachName" required maxlength="40" value="${esc(coach.name || "李教练")}" />
        </div>
        <div class="field">
          <label for="coachTitle">教练职务</label>
          <input id="coachTitle" name="coachTitle" maxlength="40" value="${esc(coach.title || "主教练")}" />
        </div>
      </div>
      <p class="field-hint" style="margin-top:9px">头像仅保存在当前账号的数据空间中。</p>
      <p class="form-error" id="formError" hidden></p>
    `,
    onSubmit: (formData) => {
      const name = String(formData.get("coachName") || "").trim();
      if (!name) {
        showFormError("请填写教练姓名。");
        return false;
      }
      const preview = document.querySelector("#coachAvatarPreview");
      state.coach = {
        name,
        title: String(formData.get("coachTitle") || "").trim() || "主教练",
        avatar: preview?.dataset.avatar || "",
      };
      saveState();
      showToast("教练资料已更新");
      render();
      return true;
    },
  });

  const fileInput = document.querySelector("#coachAvatarFile");
  const preview = document.querySelector("#coachAvatarPreview");
  document.querySelector("#chooseCoachAvatar").addEventListener("click", () => fileInput.click());
  document.querySelector("#removeCoachAvatar").addEventListener("click", () => {
    preview.dataset.avatar = "";
    preview.innerHTML = "<span>李</span>";
  });
  fileInput.addEventListener("change", async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    try {
      const avatar = await compressCoachAvatar(file);
      preview.dataset.avatar = avatar;
      preview.innerHTML = `<img src="${avatar}" alt="教练头像预览" />`;
      showToast("头像已准备好，点击保存生效");
    } catch (error) {
      showFormError(error.message);
    } finally {
      fileInput.value = "";
    }
  });
}

function openStudentModal(studentId = null) {
  const student = studentId ? getStudent(studentId) : null;
  openModal({
    title: student ? "编辑学生资料" : "添加学生",
    submitText: student ? "保存修改" : "添加学生",
    body: `
      <input type="hidden" name="id" value="${esc(student?.id || "")}" />
      <div class="form-grid">
        <div class="field">
          <label for="studentName">姓名 *</label>
          <input id="studentName" name="name" required maxlength="30" value="${esc(student?.name || "")}" placeholder="学生姓名" />
        </div>
        <div class="field">
          <label for="studentGender">性别</label>
          <select id="studentGender" name="gender">
            <option value="">未填写</option>
            <option value="女" ${student?.gender === "女" ? "selected" : ""}>女</option>
            <option value="男" ${student?.gender === "男" ? "selected" : ""}>男</option>
          </select>
        </div>
        <div class="field">
          <label for="studentBirthDate">出生日期</label>
          <input id="studentBirthDate" name="birthDate" type="date" value="${esc(student?.birthDate || "")}" />
        </div>
        <div class="field">
          <label for="studentJoinedAt">入队日期</label>
          <input id="studentJoinedAt" name="joinedAt" type="date" value="${esc(student?.joinedAt || todayISO())}" />
        </div>
        <div class="field">
          <label for="studentGroup">训练分组</label>
          <input id="studentGroup" name="group" list="groupSuggestions" maxlength="30" value="${esc(student?.group || "基础组")}" placeholder="例如：竞赛 A 组" />
          <datalist id="groupSuggestions">
            ${[...new Set(state.students.map((item) => item.group).filter(Boolean))]
              .map((group) => `<option value="${esc(group)}"></option>`)
              .join("")}
          </datalist>
        </div>
        <div class="field">
          <label for="studentStatus">训练状态</label>
          <select id="studentStatus" name="status">
            <option value="active" ${student?.status !== "paused" ? "selected" : ""}>在队训练</option>
            <option value="paused" ${student?.status === "paused" ? "selected" : ""}>离队</option>
          </select>
        </div>
        <div class="field">
          <label for="studentGuardian">家长 / 联系人</label>
          <input id="studentGuardian" name="guardian" maxlength="30" value="${esc(student?.guardian || "")}" placeholder="联系人姓名" />
        </div>
        <div class="field">
          <label for="studentPhone">联系电话</label>
          <input id="studentPhone" name="phone" type="tel" maxlength="30" value="${esc(student?.phone || "")}" placeholder="仅保存在本机" />
        </div>
        <div class="field full">
          <label for="studentNotes">训练备注</label>
          <textarea id="studentNotes" name="notes" maxlength="500" placeholder="主项、近期目标、健康注意事项等">${esc(student?.notes || "")}</textarea>
        </div>
      </div>
      ${
        student
          ? `<button class="button button-danger" style="margin-top:16px" type="button" data-action="delete-student" data-id="${esc(student.id)}">${ICONS.trash}删除这名学生</button>`
          : ""
      }
      <p class="form-error" id="formError" hidden></p>
    `,
    onSubmit: (formData) => {
      const name = String(formData.get("name") || "").trim();
      if (!name) {
        showFormError("请填写学生姓名。");
        return false;
      }
      const payload = {
        name,
        gender: String(formData.get("gender") || ""),
        birthDate: String(formData.get("birthDate") || ""),
        joinedAt: String(formData.get("joinedAt") || todayISO()),
        group: String(formData.get("group") || "").trim(),
        status: String(formData.get("status") || "active"),
        guardian: String(formData.get("guardian") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        notes: String(formData.get("notes") || "").trim(),
      };
      if (student) {
        Object.assign(student, payload);
        showToast("学生资料已更新");
      } else {
        const newStudent = {
          id: uid("student"),
          ...payload,
          createdAt: new Date().toISOString(),
        };
        state.students.push(newStudent);
        showToast("学生已添加");
      }
      saveState();
      render();
      return true;
    },
  });
}

function openAccountModal(userId = null, passwordOnly = false) {
  if (!isAdmin()) {
    showToast("需要管理员权限");
    return;
  }
  const user = userId ? adminUsers.find((item) => item.id === userId) : null;
  if (userId && !user) {
    showToast("账号信息不存在，请刷新列表");
    return;
  }
  const isSelf = user?.id === currentSession.id;
  openModal({
    title: passwordOnly ? "重置账号密码" : user ? "编辑账号" : "创建账号",
    submitText: passwordOnly ? "重置密码" : user ? "保存账号" : "创建账号",
    body: `
      <input type="hidden" name="id" value="${esc(user?.id || "")}" />
      ${
        passwordOnly
          ? `<div class="account-modal-identity">
              <span>${esc(accountInitials(user))}</span>
              <div><strong>${esc(user.displayName)}</strong><p>@${esc(user.username)}</p></div>
            </div>`
          : `<div class="form-grid">
              <div class="field">
                <label for="accountUsername">登录账号 *</label>
                <input id="accountUsername" name="username" required minlength="3" maxlength="32" value="${esc(user?.username || "")}" ${user ? "readonly" : ""} placeholder="例如：linxiaoyu" autocomplete="off" />
                <p class="field-hint">仅支持字母、数字、下划线、点和横线，创建后不能修改。</p>
              </div>
              <div class="field">
                <label for="accountDisplayName">显示名称 *</label>
                <input id="accountDisplayName" name="displayName" required maxlength="40" value="${esc(user?.displayName || "")}" placeholder="例如：林教练" />
              </div>
              <div class="field">
                <label for="accountRole">账号角色</label>
                <select id="accountRole" name="role" ${isSelf ? "disabled" : ""}>
                  <option value="user" ${user?.role !== "admin" ? "selected" : ""}>普通账号</option>
                  <option value="admin" ${user?.role === "admin" ? "selected" : ""}>管理员</option>
                </select>
              </div>
              <div class="field">
                <label for="accountStatus">账号状态</label>
                <select id="accountStatus" name="status" ${isSelf ? "disabled" : ""}>
                  <option value="active" ${user?.status !== "paused" ? "selected" : ""}>启用</option>
                  <option value="paused" ${user?.status === "paused" ? "selected" : ""}>停用</option>
                </select>
              </div>
            </div>`
      }
      <div class="field full" style="margin-top:14px">
        <label for="accountPassword">${passwordOnly ? "新密码 *" : user ? "重置密码（留空不修改）" : "初始密码 *"}</label>
        <input id="accountPassword" name="password" type="password" minlength="8" maxlength="128" ${passwordOnly || !user ? "required" : ""} placeholder="至少 8 个字符" autocomplete="new-password" />
        <p class="field-hint">密码会经过加盐哈希后存储，管理员也无法查看原密码。</p>
      </div>
      <p class="form-error" id="formError" hidden></p>
    `,
    onSubmit: async (formData) => {
      const password = String(formData.get("password") || "");
      try {
        if (user) {
          const body = passwordOnly
            ? { password }
            : {
                displayName: String(formData.get("displayName") || "").trim(),
                role: formData.get("role") || user.role,
                status: formData.get("status") || user.status,
                ...(password ? { password } : {}),
              };
          const result = await apiRequest(`/api/admin/users/${encodeURIComponent(user.id)}`, {
            method: "PATCH",
            body,
          });
          if (user.id === currentSession.id) {
            currentSession = { ...currentSession, ...result.user };
          }
          if (passwordOnly) showToast("该账号密码已重置");
          else showToast("账号信息已更新");
        } else {
          await apiRequest("/api/admin/users", {
            method: "POST",
            body: {
              username: String(formData.get("username") || "").trim(),
              displayName: String(formData.get("displayName") || "").trim(),
              role: formData.get("role") || "user",
              password,
            },
          });
          showToast("账号已创建");
        }
        await loadAdminUsers();
        render();
        return true;
      } catch (error) {
        showFormError(error.message);
        return false;
      }
    },
  });
}

function deleteAccount(userId) {
  const user = adminUsers.find((item) => item.id === userId);
  if (!user) {
    showToast("账号不存在");
    return;
  }
  openModal({
    title: "删除账号？",
    submitText: "确认删除",
    danger: true,
    body: `<p class="delete-copy">将永久删除账号 <strong>${esc(user.displayName)}（@${esc(user.username)}）</strong> 及其全部独立数据。<br /><br />此操作不可撤销，建议先让该账号导出备份。</p>`,
    onSubmit: async () => {
      try {
        await apiRequest(`/api/admin/users/${encodeURIComponent(user.id)}`, {
          method: "DELETE",
        });
        await loadAdminUsers();
        showToast("账号已删除");
        render();
        return true;
      } catch (error) {
        showFormError(error.message);
        return false;
      }
    },
  });
}

function openChangePasswordModal() {
  openModal({
    title: "修改登录密码",
    submitText: "更新密码",
    body: `
      <div class="form-grid">
        <div class="field full">
          <label for="currentPassword">当前密码 *</label>
          <input id="currentPassword" name="currentPassword" type="password" required autocomplete="current-password" />
        </div>
        <div class="field">
          <label for="newPassword">新密码 *</label>
          <input id="newPassword" name="newPassword" type="password" minlength="8" maxlength="128" required autocomplete="new-password" placeholder="至少 8 个字符" />
        </div>
        <div class="field">
          <label for="confirmPassword">确认新密码 *</label>
          <input id="confirmPassword" name="confirmPassword" type="password" minlength="8" maxlength="128" required autocomplete="new-password" />
        </div>
      </div>
      <p class="form-error" id="formError" hidden></p>
    `,
    onSubmit: async (formData) => {
      if (formData.get("newPassword") !== formData.get("confirmPassword")) {
        showFormError("两次输入的新密码不一致。");
        return false;
      }
      try {
        await apiRequest("/api/account/password", {
          method: "POST",
          body: {
            currentPassword: String(formData.get("currentPassword") || ""),
            newPassword: String(formData.get("newPassword") || ""),
          },
        });
        showToast("密码已更新");
        return true;
      } catch (error) {
        showFormError(error.message);
        return false;
      }
    },
  });
}

function eventOptions(selectedEvent = "free100") {
  return ALL_STROKES.map(
    (stroke) => `
      <optgroup label="${stroke}">
        ${EVENTS.filter((event) => event.stroke === stroke)
          .map((event) => `<option value="${event.key}" ${selectedEvent === event.key ? "selected" : ""}>${esc(event.label)}</option>`)
          .join("")}
      </optgroup>
    `,
  ).join("");
}

function studentOptions(selectedId = "") {
  return state.students
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"))
    .map(
      (student) =>
        `<option value="${esc(student.id)}" ${selectedId === student.id ? "selected" : ""}>${esc(student.name)} · ${esc(student.group || "未分组")}</option>`,
    )
    .join("");
}

function openRecordModal(recordId = null, presetStudentId = null) {
  if (!state.students.length) {
    showToast("请先添加一名学生");
    openStudentModal();
    return;
  }
  const record = recordId ? state.records.find((item) => item.id === recordId) : null;
  const selectedStudent = record?.studentId || presetStudentId || state.students[0].id;
  openModal({
    title: record ? "编辑成绩" : "录入成绩",
    submitText: record ? "保存修改" : "保存成绩",
    body: `
      <input type="hidden" name="id" value="${esc(record?.id || "")}" />
      <div class="form-grid">
        <div class="field full">
          <label for="recordStudent">学生 *</label>
          <select id="recordStudent" name="studentId" required>${studentOptions(selectedStudent)}</select>
        </div>
        <div class="field">
          <label for="recordEvent">比赛项目 *</label>
          <select id="recordEvent" name="eventKey" required>${eventOptions(record?.eventKey || "free100")}</select>
        </div>
        <div class="field">
          <label for="recordDate">测试日期 *</label>
          <input id="recordDate" name="date" type="date" required value="${esc(record?.date || todayISO())}" />
        </div>
        <div class="field full">
          <label for="recordTime">完成时间 *</label>
          <input class="time-input" id="recordTime" name="time" required value="${record ? formatTime(record.seconds) : ""}" placeholder="1:05.24" inputmode="decimal" autocomplete="off" />
          <p class="field-hint">支持“30.64”秒或“1:05.24”分:秒格式，毫秒统一保留两位。</p>
        </div>
        <div class="field full">
          <label for="recordNote">备注</label>
          <input id="recordNote" name="note" maxlength="120" value="${esc(record?.note || "")}" placeholder="例如：队内测试、正式比赛" />
        </div>
      </div>
      <p class="form-error" id="formError" hidden></p>
    `,
    onSubmit: (formData) => {
      const seconds = parseTime(formData.get("time"));
      if (!seconds) {
        showFormError("请输入有效成绩，例如 30.64 或 1:05.24。");
        return false;
      }
      const studentId = String(formData.get("studentId") || "");
      if (!getStudent(studentId)) {
        showFormError("请选择有效学生。");
        return false;
      }
      const payload = {
        studentId,
        eventKey: String(formData.get("eventKey") || ""),
        date: String(formData.get("date") || todayISO()),
        seconds,
        note: String(formData.get("note") || "").trim(),
      };
      if (!EVENT_MAP[payload.eventKey]) {
        showFormError("请选择有效项目。");
        return false;
      }
      if (record) {
        Object.assign(record, payload);
        showToast("成绩已更新");
      } else {
        state.records.push({
          id: uid("record"),
          ...payload,
          technical: emptyTechnical(),
          createdAt: new Date().toISOString(),
        });
        showToast("成绩已保存");
      }
      saveState();
      render();
      return true;
    },
  });
}

function openTechnicalModal(recordId) {
  const record = state.records.find((item) => item.id === recordId);
  if (!record) {
    showToast("成绩记录不存在");
    return;
  }
  const event = EVENT_MAP[record.eventKey];
  const technical = getTechnical(record);
  const splitMap = new Map(technical.splits.map((split) => [split.distance, split]));
  const splitRows = checkpointDistances(event.distance);

  openModal({
    title: "成绩技术详情",
    submitText: "保存技术数据",
    wide: true,
    body: `
      <div class="technical-form-summary">
        <strong>${esc(getStudent(record.studentId)?.name || "学生")} · ${esc(event.label)}</strong>
        <span>${esc(formatDate(record.date, true))} · 成绩 ${formatTime(record.seconds)}</span>
      </div>
      <div class="form-grid">
        <div class="field">
          <label for="techUnderwaterKicks">跳发后水下腿次数</label>
          <input id="techUnderwaterKicks" name="underwaterKicks" type="number" min="0" max="30" step="1" value="${technical.underwaterKicks ?? ""}" placeholder="例如：4" />
        </div>
        <div class="field">
          <label for="techBreakoutTime">出水时间</label>
          <input id="techBreakoutTime" name="breakoutTime" value="${technical.breakoutTime !== null ? formatTime(technical.breakoutTime) : ""}" placeholder="例如：8.20" inputmode="decimal" />
        </div>
        <div class="field">
          <label for="techBreakoutDistance">出水距离（米）</label>
          <input id="techBreakoutDistance" name="breakoutDistance" type="number" min="0" max="${event.distance}" step="0.5" value="${technical.breakoutDistance ?? ""}" placeholder="例如：7.5" />
        </div>
        <div class="field">
          <label>记录方式</label>
          <div class="input-readonly">每 25 米累计用时 + 本段 SWOF</div>
        </div>
      </div>

      <div class="technical-split-editor">
        <div class="section-head">
          <div>
            <h3>每 25 米分段</h3>
            <p>累计用时是同一起点到该 25 米节点的总时间；SWOF 填写该段划手次数</p>
          </div>
          <span class="badge aqua">${splitRows.length} 个节点</span>
        </div>
        <div class="split-editor-head">
          <span>距离</span>
          <span>累计用时</span>
          <span>SWOF</span>
        </div>
        <div class="split-editor-body">
          ${splitRows
            .map((distance) => {
              const split = splitMap.get(distance);
              const isFifty = distance % 50 === 0;
              return `
                <div class="split-editor-row ${isFifty ? "is-fifty" : ""}">
                  <div class="split-editor-distance">
                    <strong>${distance} 米</strong>
                    ${isFifty ? '<span class="badge">50M</span>' : ""}
                  </div>
                  <input name="splitTime_${distance}" value="${split?.timeSeconds !== null && split?.timeSeconds !== undefined ? formatTime(split.timeSeconds) : ""}" placeholder="${formatTime((record.seconds * distance) / event.distance)}" inputmode="decimal" aria-label="${distance} 米累计用时" />
                  <input name="splitSwolf_${distance}" type="number" min="1" max="200" step="1" value="${split?.swolf ?? ""}" placeholder="次数" aria-label="${distance} 米 SWOF" />
                </div>
              `;
            })
            .join("")}
        </div>
      </div>

      <div class="field" style="margin-top:16px">
        <label for="technicalNote">技术观察 / 教练备注</label>
        <textarea id="technicalNote" name="technicalNote" maxlength="500" placeholder="例如：第 2 个 25 米水下腿略少，出水后第一划衔接顺。">${esc(technical.note || "")}</textarea>
      </div>
      <p class="form-error" id="formError" hidden></p>
    `,
    onSubmit: (formData) => {
      const kicksRaw = String(formData.get("underwaterKicks") || "").trim();
      const breakoutTimeRaw = String(formData.get("breakoutTime") || "").trim();
      const breakoutDistanceRaw = String(formData.get("breakoutDistance") || "").trim();
      const underwaterKicks = kicksRaw ? Number(kicksRaw) : null;
      const breakoutTime = breakoutTimeRaw ? parseTime(breakoutTimeRaw) : null;
      const breakoutDistance = breakoutDistanceRaw ? Number(breakoutDistanceRaw) : null;

      if (underwaterKicks !== null && (!Number.isInteger(underwaterKicks) || underwaterKicks < 0 || underwaterKicks > 30)) {
        showFormError("水下腿次数必须是 0–30 之间的整数。");
        return false;
      }
      if (breakoutTimeRaw && breakoutTime === null) {
        showFormError("出水时间格式不正确，请使用 8.20 或 0:08.20。");
        return false;
      }
      if (breakoutTime !== null && breakoutTime >= record.seconds) {
        showFormError("出水时间必须小于本场总成绩。");
        return false;
      }
      if (
        breakoutDistance !== null &&
        (!Number.isFinite(breakoutDistance) || breakoutDistance < 0 || breakoutDistance > event.distance)
      ) {
        showFormError(`出水距离必须在 0–${event.distance} 米之间。`);
        return false;
      }

      const splits = [];
      for (const distance of splitRows) {
        const timeRaw = String(formData.get(`splitTime_${distance}`) || "").trim();
        const swolfRaw = String(formData.get(`splitSwolf_${distance}`) || "").trim();
        const timeSeconds = timeRaw ? parseTime(timeRaw) : null;
        const swolf = swolfRaw ? Number(swolfRaw) : null;
        if (timeRaw && timeSeconds === null) {
          showFormError(`${distance} 米的累计用时格式不正确。`);
          return false;
        }
        if (timeSeconds !== null && timeSeconds > record.seconds + 0.01) {
          showFormError(`${distance} 米累计用时不能大于本场总成绩 ${formatTime(record.seconds)}。`);
          return false;
        }
        if (swolf !== null && (!Number.isInteger(swolf) || swolf < 1 || swolf > 200)) {
          showFormError(`${distance} 米 SWOF 必须是 1–200 之间的整数。`);
          return false;
        }
        if (timeSeconds !== null || swolf !== null) {
          splits.push({ distance, timeSeconds, swolf });
        }
      }

      let previousTime = 0;
      for (const split of splits) {
        if (split.timeSeconds === null) continue;
        if (split.timeSeconds <= previousTime) {
          showFormError("累计用时必须随着距离增加而递增，请检查分段数据。");
          return false;
        }
        previousTime = split.timeSeconds;
      }

      record.technical = {
        underwaterKicks,
        breakoutTime,
        breakoutDistance,
        splits,
        note: String(formData.get("technicalNote") || "").trim(),
        updatedAt: new Date().toISOString(),
      };
      saveState();
      showToast("技术数据已保存");
      render();
      return true;
    },
  });
}

function openPenaltyModal(penaltyId = null, presetStudentId = null) {
  if (!state.students.length) {
    showToast("请先添加一名学生");
    openStudentModal();
    return;
  }
  const penalty = penaltyId ? state.penalties.find((item) => item.id === penaltyId) : null;
  const selectedStudent = penalty?.studentId || presetStudentId || state.students[0].id;
  const selectedStroke = penalty?.stroke || "自由泳";
  openModal({
    title: penalty ? "编辑惩罚记录" : "新增惩罚",
    submitText: penalty ? "保存修改" : "添加惩罚",
    body: `
      <input type="hidden" name="id" value="${esc(penalty?.id || "")}" />
      <div class="form-grid">
        <div class="field full">
          <label for="penaltyStudent">学生 *</label>
          <select id="penaltyStudent" name="studentId" required>${studentOptions(selectedStudent)}</select>
        </div>
        <div class="field">
          <label for="penaltyStroke">泳姿 *</label>
          <select id="penaltyStroke" name="stroke" required>
            ${ALL_STROKES.map((stroke) => `<option value="${stroke}" ${stroke === selectedStroke ? "selected" : ""}>${stroke}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label for="penaltyDistance">单趟距离（米）*</label>
          <input
            id="penaltyDistance"
            name="distance"
            type="number"
            inputmode="numeric"
            required
            min="1"
            max="100000"
            step="1"
            value="${esc(penalty?.distance || (selectedStroke === "自由泳" ? 800 : 400))}"
            placeholder="例如：250"
          />
          <span class="field-hint">可填写任意正整数距离，不限于常见比赛项目</span>
        </div>
        <div class="field">
          <label for="penaltyCount">惩罚数量 *</label>
          <input id="penaltyCount" name="count" type="number" required min="1" max="999" step="1" value="${esc(penalty?.count || 1)}" />
        </div>
        <div class="field">
          <label for="penaltyDate">记录日期 *</label>
          <input id="penaltyDate" name="date" type="date" required value="${esc(penalty?.date || todayISO())}" />
        </div>
        <div class="field full">
          <label for="penaltyNote">原因 / 备注</label>
          <textarea id="penaltyNote" name="note" maxlength="300" placeholder="例如：转身技术练习未达标">${esc(penalty?.note || "")}</textarea>
        </div>
      </div>
      <div class="modal-summary" id="penaltySummary">${esc(selectedStroke)} · ${esc(penalty?.distance || (selectedStroke === "自由泳" ? 800 : 400))} 米 × ${esc(penalty?.count || 1)} 趟 = ${Number(penalty?.distance || (selectedStroke === "自由泳" ? 800 : 400)) * Number(penalty?.count || 1)} 米</div>
      <p class="field-hint" style="margin-top:7px">完成状态会根据累计记录自动计算，无需手动切换。</p>
      <p class="form-error" id="formError" hidden></p>
    `,
    onSubmit: (formData) => {
      const count = Number(formData.get("count"));
      if (!Number.isInteger(count) || count < 1) {
        showFormError("惩罚数量必须是大于 0 的整数。");
        return false;
      }
      const stroke = String(formData.get("stroke") || "");
      const distance = Number(formData.get("distance"));
      if (!ALL_STROKES.includes(stroke)) {
        showFormError("请选择有效的泳姿。");
        return false;
      }
      if (!Number.isInteger(distance) || distance < 1 || distance > 100000) {
        showFormError("单趟距离必须是 1–100000 之间的整数米。");
        return false;
      }
      const studentId = String(formData.get("studentId") || "");
      if (!getStudent(studentId)) {
        showFormError("请选择有效学生。");
        return false;
      }
      const payload = {
        studentId,
        count,
        stroke,
        distance,
        date: String(formData.get("date") || todayISO()),
        note: String(formData.get("note") || "").trim(),
      };
      if (penalty) {
        Object.assign(penalty, payload);
        syncPenaltyStatus(penalty);
        showToast("惩罚记录已更新");
      } else {
        state.penalties.push({
          id: uid("penalty"),
          ...payload,
          status: "pending",
          progress: [],
          createdAt: new Date().toISOString(),
        });
        showToast("惩罚记录已添加");
      }
      saveState();
      render();
      return true;
    },
  });

  const strokeSelect = document.getElementById("penaltyStroke");
  const distanceInput = document.getElementById("penaltyDistance");
  const countInput = document.getElementById("penaltyCount");
  const updatePenaltySummary = () => {
    const distance = Number(distanceInput.value);
    const count = Number(countInput.value || 1);
    document.querySelector("#penaltySummary").textContent =
      distance > 0
        ? `${strokeSelect.value} · ${distance} 米 × ${count} 趟 = ${distance * count} 米`
        : `${strokeSelect.value} · 请输入单趟距离`;
  };
  strokeSelect.addEventListener("change", updatePenaltySummary);
  distanceInput.addEventListener("input", updatePenaltySummary);
  countInput.addEventListener("input", updatePenaltySummary);
}

function openPenaltyProgressModal(penaltyId, progressId = null) {
  const penalty = state.penalties.find((item) => item.id === penaltyId);
  if (!penalty) {
    showToast("惩罚记录不存在");
    return;
  }
  penalty.progress ||= [];
  const progressItem = progressId ? penalty.progress.find((item) => item.id === progressId) : null;
  const targetMeters = penaltyTargetMeters(penalty);
  const completedMeters = penaltyCompletedMeters(penalty);
  const remainingMeters = penaltyRemainingMeters(penalty);
  const effectiveRemaining = Math.max(
    0,
    targetMeters - (completedMeters - Number(progressItem?.meters || 0)),
  );

  openModal({
    title: progressItem ? "编辑完成量" : "记录本次完成量",
    submitText: progressItem ? "保存完成量" : "计入累计进度",
    body: `
      <div class="progress-modal-summary">
        <div>
          <span>${esc(getStudent(penalty.studentId)?.name || "学生")} · ${esc(penalty.stroke)} ${esc(penalty.distance)} 米 × ${esc(penalty.count)}</span>
          <strong>${completedMeters} <small>/ ${targetMeters} 米</small></strong>
        </div>
        <div class="progress-modal-remaining">
          <span>录入前剩余</span>
          <strong>${effectiveRemaining} 米</strong>
        </div>
      </div>
      <div class="progress-amount-field">
        <label for="progressMeters">本次完成距离 *</label>
        <div class="progress-meter-input">
          <input id="progressMeters" name="meters" type="number" min="1" max="100000" step="1" required value="${progressItem?.meters ?? ""}" placeholder="例如：600" />
          <span>米</span>
        </div>
        <p class="field-hint">游多少就填多少，可以少于剩余距离。例如剩余 ${remainingMeters || effectiveRemaining} 米，本次游了 600 米，就记录 600。</p>
      </div>
      <div class="quick-amounts" aria-label="快捷完成距离">
        ${[...new Set([100, 200, 400, Number(penalty.distance), effectiveRemaining].filter((value) => value > 0))]
          .slice(0, 6)
          .map((meters) => `<button type="button" data-quick-meters="${meters}">${meters} 米</button>`)
          .join("")}
      </div>
      <div class="form-grid" style="margin-top:16px">
        <div class="field">
          <label for="progressDate">完成日期 *</label>
          <input id="progressDate" name="date" type="date" required value="${esc(progressItem?.date || todayISO())}" />
        </div>
        <div class="field">
          <label for="progressNote">训练备注</label>
          <input id="progressNote" name="note" maxlength="160" value="${esc(progressItem?.note || "")}" placeholder="例如：训练课后半程完成" />
        </div>
      </div>
      <p class="form-error" id="formError" hidden></p>
    `,
    onSubmit: (formData) => {
      const meters = Number(formData.get("meters"));
      if (!Number.isInteger(meters) || meters <= 0 || meters > 100000) {
        showFormError("完成距离必须是 1–100000 之间的整数米。");
        return false;
      }
      const payload = {
        meters,
        date: String(formData.get("date") || todayISO()),
        note: String(formData.get("note") || "").trim(),
      };
      if (progressItem) {
        Object.assign(progressItem, payload);
        showToast("完成量已更新");
      } else {
        penalty.progress.push({
          id: uid("penalty-progress"),
          ...payload,
          createdAt: new Date().toISOString(),
        });
        showToast(
          penaltyCompletedMeters(penalty) >= targetMeters
            ? "累计目标已完成"
            : `已累计 ${penaltyCompletedMeters(penalty)} 米`,
        );
      }
      syncPenaltyStatus(penalty);
      saveState();
      render();
      return true;
    },
  });

  document.querySelectorAll("[data-quick-meters]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.querySelector("#progressMeters");
      input.value = button.dataset.quickMeters;
      input.focus();
    });
  });
}

function showFormError(message) {
  const error = document.querySelector("#formError");
  if (error) {
    error.textContent = message;
    error.hidden = false;
  }
}

function confirmDelete(kind, id) {
  const currentModal = document.querySelector("#modal");
  if (currentModal?.open) {
    currentModal.close();
    modalSubmitHandler = null;
  }
  const mapping = {
    student: {
      title: "删除学生档案？",
      copy: "这名学生的资料、全部成绩和惩罚记录都会被删除，且无法恢复。",
      target: () => getStudent(id),
      name: () => getStudent(id)?.name || "该学生",
      remove: () => {
        state.students = state.students.filter((student) => student.id !== id);
        state.records = state.records.filter((record) => record.studentId !== id);
        state.penalties = state.penalties.filter((penalty) => penalty.studentId !== id);
      },
    },
    record: {
      title: "删除这条成绩？",
      copy: "删除后，进退步曲线和个人最好成绩会立即重新计算。",
      target: () => state.records.find((record) => record.id === id),
      name: () => {
        const record = state.records.find((item) => item.id === id);
        return record ? `${getStudent(record.studentId)?.name || "学生"} · ${EVENT_MAP[record.eventKey]?.label || "成绩"}` : "该成绩";
      },
      remove: () => {
        state.records = state.records.filter((record) => record.id !== id);
      },
    },
    penalty: {
      title: "删除这条惩罚记录？",
      copy: "删除后，该学生的待完成惩罚数量会相应减少，且无法恢复。",
      target: () => state.penalties.find((penalty) => penalty.id === id),
      name: () => {
        const penalty = state.penalties.find((item) => item.id === id);
        return penalty ? `${getStudent(penalty.studentId)?.name || "学生"} · ${penalty.stroke} ${penalty.distance} 米` : "该惩罚";
      },
      remove: () => {
        state.penalties = state.penalties.filter((penalty) => penalty.id !== id);
      },
    },
  };
  const config = mapping[kind];
  if (!config?.target()) {
    showToast("记录不存在或已被删除");
    return;
  }
  openModal({
    title: config.title,
    submitText: "确认删除",
    danger: true,
    body: `<p class="delete-copy">将删除 <strong>${esc(config.name())}</strong>。<br />${esc(config.copy)}</p>`,
    onSubmit: () => {
      config.remove();
      saveState();
      showToast("记录已删除");
      if (kind === "student" && routeInfo().name === "student") navigate("students");
      else render();
      return true;
    },
  });
}

function deletePenaltyProgress(penaltyId, progressId) {
  const penalty = state.penalties.find((item) => item.id === penaltyId);
  const progressItem = penalty?.progress?.find((item) => item.id === progressId);
  if (!penalty || !progressItem) {
    showToast("完成记录不存在");
    return;
  }
  openModal({
    title: "删除这条完成记录？",
    submitText: "确认删除",
    danger: true,
    body: `<p class="delete-copy">将删除 <strong>${esc(progressItem.meters)} 米</strong>的完成记录。删除后，剩余距离和完成状态会重新计算。</p>`,
    onSubmit: () => {
      penalty.progress = penalty.progress.filter((item) => item.id !== progressId);
      syncPenaltyStatus(penalty);
      saveState();
      showToast("完成记录已删除");
      render();
      return true;
    },
  });
}

function createBackupArtifact() {
  const data = {
    app: "省实游泳队 · 队伍管理",
    appVersion: APP_VERSION,
    version: 4,
    exportedAt: new Date().toISOString(),
    ...state,
  };
  const filename = `省实游泳队-备份-${todayISO()}.json`;
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  return {
    blob,
    file: new File([blob], filename, { type: "application/json" }),
    filename,
  };
}

function exportData() {
  const { blob, filename } = createBackupArtifact();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  markBackupComplete("download");
  showToast("备份文件已导出");
  if (routeInfo().name === "settings") render();
}

async function shareDataBackup() {
  const { file } = createBackupArtifact();
  if (!navigator.share || !navigator.canShare?.({ files: [file] })) {
    exportData();
    showToast("当前浏览器不支持分享文件，已改为下载备份");
    return;
  }
  try {
    await navigator.share({
      title: "省实游泳队数据备份",
      text: `备份包含 ${state.students.length} 名学生和 ${state.records.length} 条成绩。`,
      files: [file],
    });
    markBackupComplete("share");
    showToast("备份已分享");
    if (routeInfo().name === "settings") render();
  } catch (error) {
    if (error.name !== "AbortError") {
      console.warn("分享备份失败。", error);
      showToast("分享失败，请改用下载备份");
    }
  }
}

function clearAllData() {
  openModal({
    title: "清空全部数据？",
    submitText: "确认清空",
    danger: true,
    body: '<p class="delete-copy">当前设备上的全部学生、成绩、惩罚和教练头像都会被删除，队伍会变成空白状态。此操作无法撤销，建议先导出备份。</p>',
    onSubmit: () => {
      state = emptyDataState();
      saveState();
      showToast("全部数据已清空");
      render();
      return true;
    },
  });
}

async function handleImportFile(file) {
  if (!file) return;
  try {
    const text = await file.text();
    pendingImport = normaliseState(JSON.parse(text));
    openModal({
      title: "替换当前数据？",
      submitText: "确认导入",
      danger: true,
      body: `
        <p class="delete-copy">
          备份中包含 <strong>${pendingImport.students.length} 名学生</strong>、
          <strong>${pendingImport.records.length} 条成绩</strong>和
          <strong>${pendingImport.penalties.length} 条惩罚</strong>。
          <br /><br />导入后将覆盖当前设备上的全部数据。建议先导出当前备份。
        </p>
      `,
      onSubmit: () => {
        state = pendingImport;
        pendingImport = null;
        saveState();
        markBackupComplete("import");
        showToast("数据导入成功");
        render();
        return true;
      },
    });
  } catch (error) {
    pendingImport = null;
    showToast("无法读取该文件，请选择有效的省实游泳队备份");
    console.warn(error);
  }
}

function resetDemoData() {
  openModal({
    title: "恢复示例数据？",
    submitText: "确认恢复",
    danger: true,
    body: '<p class="delete-copy">当前设备上的全部学生、成绩和惩罚记录会被示例数据替换。此操作无法撤销，建议先导出备份。</p>',
    onSubmit: () => {
      state = seedState();
      saveState();
      showToast("已恢复示例数据");
      render();
      return true;
    },
  });
}

function isStandaloneMode() {
  return (
    window.matchMedia?.("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function installApp() {
  if (isStandaloneMode()) {
    showToast("当前已经作为独立应用运行");
    return;
  }
  if (installPromptEvent) {
    const prompt = installPromptEvent;
    installPromptEvent = null;
    prompt.prompt();
    prompt.userChoice
      .then((choice) => {
        if (choice.outcome === "accepted") {
          showToast("应用已添加到设备");
          render();
        }
      })
      .catch(() => {});
    return;
  }
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  openModal({
    title: "安装到手机",
    hideSubmit: true,
    body: isIOS
      ? `<p class="delete-copy">请使用 Safari 打开本页，点击底部的“分享”按钮，然后选择 <strong>“添加到主屏幕”</strong>。<br /><br />从主屏幕启动后，应用会以独立窗口运行。</p>`
      : `<p class="delete-copy">请使用 Chrome 或 Edge 打开本页，在浏览器菜单中选择 <strong>“安装应用”</strong> 或 <strong>“添加到主屏幕”</strong>。<br /><br />首次打开后，应用文件会被缓存，可离线使用。</p>`,
  });
}

async function refreshStorageEstimate() {
  const text = document.querySelector("#deviceStorageText");
  const meter = document.querySelector("#storageMeterFill");
  if (!text || !meter) return;
  if (!navigator.storage?.estimate) {
    text.textContent = "当前浏览器不提供设备存储额度信息。";
    return;
  }
  try {
    const estimate = await navigator.storage.estimate();
    storageEstimate = estimate;
    const usage = Number(estimate.usage) || 0;
    const quota = Number(estimate.quota) || 0;
    const percentage = quota > 0 ? Math.min(100, (usage / quota) * 100) : 0;
    text.textContent = `浏览器共使用 ${formatBytes(usage)}，可用额度约 ${formatBytes(quota)}。`;
    meter.style.width = `${Math.max(percentage, usage > 0 ? 1.5 : 0)}%`;
    meter.classList.toggle("warning", percentage >= 70);
    meter.classList.toggle("danger", percentage >= 90);
  } catch {
    text.textContent = "无法读取浏览器存储额度。";
  }
}

function showRuntimeNotice({
  kind = "info",
  message,
  actionLabel = "",
  onAction = null,
  onDismiss = null,
  dismissible = true,
}) {
  const notice = document.querySelector("#runtimeNotice");
  if (!notice) return;
  runtimeNoticeKind = kind;
  runtimeNoticeAction = onAction;
  notice.dataset.kind = kind;
  notice.querySelector("#runtimeNoticeText").textContent = message;
  const action = notice.querySelector("#runtimeNoticeAction");
  action.hidden = !actionLabel;
  action.textContent = actionLabel;
  const close = notice.querySelector("#runtimeNoticeClose");
  close.hidden = !dismissible;
  close.dataset.onDismiss = onDismiss ? "true" : "false";
  notice._onDismiss = onDismiss;
  notice.hidden = false;
}

function hideRuntimeNotice() {
  const notice = document.querySelector("#runtimeNotice");
  if (!notice) return;
  notice.hidden = true;
  notice._onDismiss = null;
  runtimeNoticeAction = null;
  runtimeNoticeKind = "";
}

function maybeShowBackupReminder() {
  if (!backupNeedsAttention()) return;
  if (runtimeNoticeKind === "offline" || runtimeNoticeKind === "update") return;
  showRuntimeNotice({
    kind: "warning",
    message: "数据目前只在当前设备上，近期修改还没有生成新的备份。",
    actionLabel: "立即导出",
    onAction: exportData,
    dismissible: true,
    onDismiss: () => {
      const remindAt = new Date(Date.now() + 3 * 86_400_000).toISOString();
      updateBackupMeta({ backupSnoozedUntil: remindAt });
    },
  });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function handleAction(action, element) {
  switch (action) {
    case "add-student":
      openStudentModal();
      break;
    case "edit-coach":
      openCoachModal();
      break;
    case "edit-student":
      openStudentModal(element.dataset.id);
      break;
    case "delete-student":
      confirmDelete("student", element.dataset.id);
      break;
    case "add-record":
      openRecordModal(null, element.dataset.studentId || null);
      break;
    case "edit-record":
      openRecordModal(element.dataset.id);
      break;
    case "edit-technical":
      openTechnicalModal(element.dataset.id);
      break;
    case "delete-record":
      confirmDelete("record", element.dataset.id);
      break;
    case "add-penalty":
      openPenaltyModal(null, element.dataset.studentId || null);
      break;
    case "edit-penalty":
      openPenaltyModal(element.dataset.id);
      break;
    case "delete-penalty":
      confirmDelete("penalty", element.dataset.id);
      break;
    case "add-penalty-progress":
      openPenaltyProgressModal(element.dataset.id);
      break;
    case "edit-penalty-progress":
      openPenaltyProgressModal(element.dataset.id, element.dataset.progressId);
      break;
    case "delete-penalty-progress":
      deletePenaltyProgress(element.dataset.id, element.dataset.progressId);
      break;
    case "chart-event":
      ui.chartEventByStudent[element.dataset.studentId] = element.dataset.event;
      render();
      break;
    case "filter-penalty":
      ui.penaltyStatus = element.dataset.status;
      render();
      break;
    case "clear-student-filters":
      ui.studentSearch = "";
      ui.studentGroup = "all";
      ui.studentStatus = "all";
      render();
      break;
    case "export-data":
      exportData();
      break;
    case "share-data":
      shareDataBackup();
      break;
    case "import-data":
      document.querySelector("#importFile")?.click();
      break;
    case "clear-data":
      clearAllData();
      break;
    case "reset-demo":
      resetDemoData();
      break;
    case "install-app":
      installApp();
      break;
    case "add-account":
      openAccountModal();
      break;
    case "edit-account":
      openAccountModal(element.dataset.id);
      break;
    case "reset-account-password":
      openAccountModal(element.dataset.id, true);
      break;
    case "delete-account":
      deleteAccount(element.dataset.id);
      break;
    case "change-password":
      openChangePasswordModal();
      break;
    case "logout":
      logout();
      break;
    case "refresh-accounts":
      loadAdminUsers()
        .then(() => {
          render();
          showToast("账号列表已刷新");
        })
        .catch((error) => showToast(error.message));
      break;
    case "open-admin-users":
      navigate("accounts");
      break;
    default:
      break;
  }
}

document.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (actionElement) {
    event.preventDefault();
    event.stopPropagation();
    handleAction(actionElement.dataset.action, actionElement);
    return;
  }

  const routeElement = event.target.closest("[data-route]");
  if (routeElement) {
    event.preventDefault();
    navigate(routeElement.dataset.route);
    return;
  }

  const studentCardElement = event.target.closest("[data-student-id].student-card");
  if (studentCardElement) {
    navigate(`student/${studentCardElement.dataset.studentId}`);
    return;
  }

  const recordRowElement = event.target.closest("[data-record-id].record-row");
  if (recordRowElement) {
    navigate(`record/${recordRowElement.dataset.recordId}`);
    return;
  }

  const penaltyRowElement = event.target.closest("[data-penalty-id].penalty-ledger-row");
  if (penaltyRowElement) {
    navigate(`penalty/${penaltyRowElement.dataset.penaltyId}`);
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && document.activeElement?.classList.contains("student-card")) {
    event.preventDefault();
    navigate(`student/${document.activeElement.dataset.studentId}`);
    return;
  }
  if (
    (event.key === "Enter" || event.key === " ") &&
    document.activeElement?.matches("[data-record-id].record-row")
  ) {
    event.preventDefault();
    navigate(`record/${document.activeElement.dataset.recordId}`);
    return;
  }
  if (
    (event.key === "Enter" || event.key === " ") &&
    document.activeElement?.matches("[data-penalty-id].penalty-ledger-row")
  ) {
    event.preventDefault();
    navigate(`penalty/${document.activeElement.dataset.penaltyId}`);
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.id === "studentGroup") {
    ui.studentGroup = target.value;
    render();
  } else if (target.id === "studentStatus") {
    ui.studentStatus = target.value;
    render();
  } else if (target.id === "recordEvent") {
    ui.recordEvent = target.value;
    render();
  } else if (target.id === "chartEvent") {
    ui.chartEventByStudent[target.dataset.studentId] = target.value;
    render();
  } else if (target.id === "importFile") {
    handleImportFile(target.files?.[0]);
    target.value = "";
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.id === "studentSearch") {
    ui.studentSearch = target.value;
    render("studentSearch");
  } else if (target.id === "recordSearch") {
    ui.recordSearch = target.value;
    render("recordSearch");
  }
});

document.querySelector("#modalClose").addEventListener("click", closeModal);
document.querySelector("#modalCancel").addEventListener("click", closeModal);
document.querySelector("#modal").addEventListener("cancel", (event) => {
  event.preventDefault();
  closeModal();
});
document.querySelector("#modalForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!modalSubmitHandler) return;
  const formData = new FormData(event.currentTarget);
  const submit = document.querySelector("#modalSubmit");
  const originalText = submit.textContent;
  submit.disabled = true;
  submit.textContent = "处理中…";
  let shouldClose = false;
  try {
    shouldClose = await modalSubmitHandler(formData);
  } catch (error) {
    showFormError(error.message || "操作失败，请稍后重试");
  } finally {
    submit.disabled = false;
    submit.textContent = originalText;
  }
  if (shouldClose) closeModal();
});

document.querySelector("#mobileQuickAdd").addEventListener("click", () => {
  const route = routeInfo().name;
  if (route === "penalties") openPenaltyModal();
  else if (route === "students") openStudentModal();
  else if (route === "student") openRecordModal(null, routeInfo().id);
  else openRecordModal();
});

document.querySelector("#runtimeNoticeAction").addEventListener("click", () => {
  const action = runtimeNoticeAction;
  hideRuntimeNotice();
  action?.();
});

document.querySelector("#runtimeNoticeClose").addEventListener("click", () => {
  const notice = document.querySelector("#runtimeNotice");
  const onDismiss = notice?._onDismiss;
  hideRuntimeNotice();
  onDismiss?.();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPromptEvent = event;
});

window.addEventListener("appinstalled", () => {
  installPromptEvent = null;
  showToast("省实游泳队已安装到设备");
  if (routeInfo().name === "settings") render();
});

window.addEventListener("online", updateConnectionNotice);
window.addEventListener("offline", updateConnectionNotice);

window.addEventListener("hashchange", async () => {
  if (!currentSession) {
    showAuthPage(authMode);
    return;
  }
  if (routeInfo().name === "accounts" && isAdmin()) {
    try {
      await loadAdminUsers();
    } catch (error) {
      console.warn("刷新账号列表失败。", error);
    }
  }
  render();
  document.querySelector("#app").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateConnectionNotice() {
  if (!navigator.onLine) {
    showRuntimeNotice({
      kind: "offline",
      message: "当前处于离线状态。现有功能仍可使用，数据会继续保存在本机。",
      dismissible: false,
    });
  } else if (runtimeNoticeKind === "offline") {
    hideRuntimeNotice();
    window.setTimeout(maybeShowBackupReminder, 600);
  }
}

function showUpdateNotice(registration) {
  showRuntimeNotice({
    kind: "update",
    message: "应用有新版本，更新后可继续离线使用。",
    actionLabel: "立即更新",
    dismissible: true,
    onAction: () => {
      if (registration?.waiting) {
        waitingForUpdateActivation = true;
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      } else {
        window.location.reload();
      }
    },
  });
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !location.protocol.startsWith("http")) return;
  try {
    const registration = await navigator.serviceWorker.register("./sw.js");
    serviceWorkerRegistration = registration;
    if (registration.waiting && navigator.serviceWorker.controller) {
      showUpdateNotice(registration);
    }
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) {
          showUpdateNotice(registration);
        }
      });
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (waitingForUpdateActivation && !reloadingForUpdate) {
        reloadingForUpdate = true;
        window.location.reload();
      }
    });
  } catch (error) {
    console.warn("离线缓存注册失败。", error);
  }
}

async function requestPersistentStorage() {
  if (!navigator.storage?.persist) return;
  try {
    const alreadyPersisted = await navigator.storage.persisted?.();
    if (!alreadyPersisted) await navigator.storage.persist();
  } catch (error) {
    console.warn("无法申请持久化存储。", error);
  }
}

window.addEventListener("beforeunload", () => {
  if (LOCAL_ONLY_MODE || !currentSession || !activeDataKey) return;
  fetch("/api/data", {
    method: "PUT",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
    keepalive: true,
  }).catch(() => {});
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && currentSession && !LOCAL_ONLY_MODE) {
    flushRemoteSave().catch(() => {});
  }
});

async function bootstrap() {
  if (LOCAL_ONLY_MODE) {
    document.body.classList.remove("auth-mode");
    state = loadState(LOCAL_DATA_KEY);
    if (localStorage.getItem(LOCAL_DATA_KEY) === null) saveState();
    if (["#login", "#accounts"].includes(location.hash) || !location.hash) {
      history.replaceState(null, "", "#dashboard");
    }
    render();
    updateConnectionNotice();
    refreshStorageEstimate();
    registerServiceWorker();
    requestPersistentStorage();
    window.setTimeout(maybeShowBackupReminder, 1200);
    return;
  }
  try {
    const result = await apiRequest("/api/session");
    if (result.authenticated) {
      if (location.hash === "#login" || !location.hash) {
        history.replaceState(null, "", result.user.role === "admin" ? "#accounts" : "#dashboard");
      }
      await enterSession(result.user);
    } else {
      showAuthPage("user");
    }
  } catch (error) {
    console.warn("读取登录状态失败。", error);
    showAuthPage("user");
    showToast("无法连接账号服务器，请确认服务已启动");
  }
}

bootstrap();
