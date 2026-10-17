/* WhatsApp-style Android phone for the "Choose chats to back up" teardown.
   Independent concept prototype: not affiliated with WhatsApp or Meta. */
(function () {
const I = {
  back:'<path d="M20 12H5M11 18l-6-6 6-6"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
  more:'<circle cx="12" cy="5" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.3" fill="currentColor" stroke="none"/>',
  cam:'<path d="M4 8h3.2l1.8-2.6h6L16.8 8H20v11H4z"/><circle cx="12" cy="13.2" r="3.4"/>',
  cloud:'<path d="M7 18.5h10.5a4 4 0 0 0 .4-8A6 6 0 0 0 6.3 9.6 4.5 4.5 0 0 0 7 18.5z"/>',
  cloudoff:'<path d="M8.5 18.5h9.2M20.6 15.6A4 4 0 0 0 17.9 10.5 6 6 0 0 0 9.6 5.3M6.6 8.6A4.5 4.5 0 0 0 7 18.5"/><path d="M3 3l18 18"/>',
  chats:'<path d="M4 5.5h16v11H9l-5 3.5z"/>',
  upd:'<circle cx="12" cy="12" r="8.5" stroke-dasharray="6 2.4"/><circle cx="12" cy="12" r="3.6"/>',
  comm:'<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M3 19c0-3.3 2.8-5.2 6-5.2s6 1.9 6 5.2M15.6 14.6c2.8 0 5.4 1.3 5.4 4.4"/>',
  call:'<path d="M5.5 4h3.6l1.7 4.4-2.3 1.4a11 11 0 0 0 5.7 5.7l1.4-2.3 4.4 1.7v3.6a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4 5.6 1.5 1.5 0 0 1 5.5 4z"/>',
  video:'<rect x="3" y="6.5" width="12.5" height="11" rx="2.2"/><path d="M15.5 10.4 21 7.5v9l-5.5-2.9"/>',
  key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l8.5-8.5M16.5 6.5l3 3"/>',
  list:'<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="4.6" cy="6.5" r=".9" fill="currentColor"/><circle cx="4.6" cy="12" r=".9" fill="currentColor"/><circle cx="4.6" cy="17.5" r=".9" fill="currentColor"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  ticks:'<path d="M2 12.5l4 4L14 8.5M10 16.5l1 0L19 8.5"/>',
  phone:'<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  newchat:'<path d="M4 5.5h16v11H9l-5 3.5z"/><path d="M12 8.2v5.6M9.2 11h5.6"/>',
  pencil:'<path d="M4 20h4l11-11-4-4L4 16z"/>',
  mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
  send:'<path d="M4 20l17-8L4 4l2.5 8z" fill="currentColor" stroke="none"/>',
  clip:'<path d="M20 11.5l-8 8a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L9.7 17a1.7 1.7 0 0 1-2.4-2.4L15 7"/>',
  emoji:'<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14.2a4.2 4.2 0 0 0 7 0"/><circle cx="9.3" cy="10" r=".8" fill="currentColor"/><circle cx="14.7" cy="10" r=".8" fill="currentColor"/>',
  bell:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15zM10 20.5h4"/>',
  img:'<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M20.5 16l-5-5-9 8.5"/>',
  lock:'<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
  timer:'<circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 2M9.5 2.5h5"/>',
  shield:'<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.1-7.5 9.5-4.3-1.4-7.5-4.9-7.5-9.5V6z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5"/>',
  users:'<circle cx="9" cy="8.5" r="3.4"/><path d="M2.8 19.5c0-3.4 2.8-5.4 6.2-5.4s6.2 2 6.2 5.4"/><circle cx="17" cy="9.5" r="2.6"/><path d="M16.5 14.2c2.8.2 4.8 1.8 4.8 4.6"/>',
  globe:'<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 3 2.6 14 0 17M12 3.5c-2.6 3-2.6 14 0 17"/>',
  help:'<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.5a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.6v.4M12 16.8v.2"/>',
  heart:'<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.2 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
  data:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M8.5 13l3.5 3.5 3.5-3.5"/>',
  a11y:'<circle cx="12" cy="5" r="1.8"/><path d="M5 9l7 1.5L19 9M12 10.5V15l-3 5M12 15l3 5"/>',
  star:'<path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z"/>',
  archive:'<rect x="3.5" y="4.5" width="17" height="4" rx="1"/><path d="M5 8.5v11h14v-11M10 12.5h4"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  verified:'<path d="M12 2.5l2.3 1.7 2.8-.2.9 2.7 2.4 1.5-.9 2.7.9 2.7-2.4 1.5-.9 2.7-2.8-.2L12 21.5l-2.3-1.7-2.8.2-.9-2.7-2.4-1.5.9-2.7-.9-2.7 2.4-1.5.9-2.7 2.8.2z" fill="currentColor" stroke="none"/><path d="M8.5 12.2l2.4 2.3 4.6-4.8" stroke="#fff"/>',
  inarr:'<path d="M17 7L7 17M7 9v8h8"/>', outarr:'<path d="M7 17L17 7M9 7h8v8"/>',
  doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>',
  play:'<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
  trash:'<path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  laptop:'<rect x="4.5" y="5" width="15" height="10" rx="1.5"/><path d="M2.5 19h19"/>',
  sub:'<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4l-5.3 3 1.2-6L3.4 9.3l6-.7z"/>'
};
const ic = (n, cls='ic', extra='') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" ${extra}>${I[n]}</svg>`;
const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const GB = g => g < 0.995 ? Math.max(1, Math.round(g*1000)) + ' MB' : g.toFixed(1) + ' GB';

const STORAGE = 15, OTHER = 9.1, FREE = +(STORAGE - OTHER).toFixed(1);  // Google storage (GB): total, Gmail + Photos
const WA_FREE = 2;   // WhatsApp's own cloud storage, reported free tier (GB)
// Media forwarded into more than one chat is stored once in the backup.
const SHARED = [{a: 'college', b: 'family', gb: .15}, {a: 'society', b: 'family', gb: .05}];
const ME = 'Pritesh Kabra';
const AUC = ['#e65100','#1565c0','#2e7d32','#ad1457','#6a1b9a','#00838f','#c62828'];
const grads = ['linear-gradient(135deg,#f6a35b,#c2410c)','linear-gradient(135deg,#60a5fa,#1e3a8a)','linear-gradient(135deg,#86efac,#15803d)','linear-gradient(135deg,#f9a8d4,#9d174d)','linear-gradient(135deg,#fcd34d,#a16207)','linear-gradient(135deg,#a5b4fc,#4338ca)','linear-gradient(135deg,#5eead4,#0f766e)'];

// [type, author, text, time, me]   type: t=text p=photo v=video d=doc a=voice
const SEED = [
 {id:'college',name:'College Batch 2017',kind:'group',members:214,gb:2.10,vs:.55,col:'#7b5ea7',init:'CB',unread:38,time:'10:42',
  msgs:[['day','','Today'],['t','Sneha','Reunion on 23 Nov, Koregaon Park. Who’s in?','09:58'],['p','Akshay','','10:05'],['t','Kunal','In! 🙌','10:12'],['v','Sneha','Goa 2019 throwback 😂','10:30'],['v','Akshay','','10:42']]},
 {id:'society',name:'Shree Ganesh Society',kind:'group',members:96,gb:1.30,vs:.10,col:'#c0763a',init:'SG',unread:12,time:'09:15',
  msgs:[['day','','Today'],['t','Secretary','Water supply off on Sunday, 10 am to 2 pm.','08:40'],['d','Secretary','Maintenance bill Oct.pdf|2 pages · 380 kB','09:10'],['t','Secretary','Diwali decoration: ₹500 per flat by 25 Oct 🪔','09:15']]},
 {id:'aai',name:'Aaisaheb ❤️',kind:'person',gb:.45,vs:.30,col:'#5a8f5c',init:'A',time:'08:02',fav:true,
  msgs:[['day','','Today'],['t','Aaisaheb ❤️','Jevlas ka?','08:01'],['t','Aaisaheb ❤️','Diwali la kadhi yetos?','08:02']]},
 {id:'office',name:'Finance Team – Pune',kind:'group',members:18,gb:.90,vs:.05,col:'#3a7ca5',init:'FT',time:'Yesterday',
  msgs:[['day','','Yesterday'],['d','Neha','Q2 closing checklist.xlsx|Spreadsheet · 1.2 MB','18:20'],['t','Neha','Please update your rows by Friday.','18:21'],['t','','Done 👍','18:40',true]]},
 {id:'family',name:'Kabra Family',kind:'group',members:11,gb:.70,vs:.40,col:'#d0566d',init:'KF',unread:3,time:'Yesterday',fav:true,
  msgs:[['day','','Yesterday'],['p','Aaisaheb ❤️','','17:02'],['v','Papa ❤️','Ganpati visarjan 🙏','17:30'],['t','Aaisaheb ❤️','Pritesh, call kar','21:15'],['t','Bhaiyaji ❤️','Diwali la sagle ghari ya 🪔','21:20']]},
 {id:'bhajan',name:'Bhajan Mandal',kind:'community',gb:.35,vs:.20,col:'#b48a1e',init:'BM',time:'Mon',groups:3,
  msgs:[['day','','Monday'],['t','Joshi Kaka','Saturday bhajan at 7 pm, Vitthal Mandir hall.','19:04'],['a','Joshi Kaka','0:42','19:06']]},
 {id:'chhavi',name:'Chhavi Jain',kind:'person',gb:.32,vs:.25,col:'#0e7490',init:'CJ',unread:2,time:'Yesterday',
  msgs:[['day','','Yesterday'],['t','','Did you get the GMAT prep book?','19:40',true],['t','Chhavi Jain','Yes! Sending you the notes too 📚','20:05'],['d','Chhavi Jain','GMAT quant notes.pdf|18 pages · 2.4 MB','20:06']]},
 {id:'riya',name:'Riya',kind:'person',gb:.25,vs:.20,col:'#c25b9c',init:'R',time:'Sun',
  msgs:[['day','','Sunday'],['t','Riya','Movie at 6?','16:10'],['t','','yes, booking now','16:12',true],['t','Riya','see you at 6 then','16:13']]},
 {id:'trek',name:'Sahyadri Trekkers',kind:'group',members:64,gb:.18,vs:.50,col:'#4f6fb0',init:'ST',time:'Sat',
  msgs:[['day','','Saturday'],['p','Omkar','Rajmachi sunrise ⛰️','07:12'],['t','Omkar','Next trek: Harihar, 2 Nov','07:15']]},
 {id:'mart',name:'Pune Fresh Mart',kind:'business',gb:.12,vs:0,col:'#2f8f86',init:'PF',time:'Sat',verified:true,
  msgs:[['day','','Saturday'],['t','Pune Fresh Mart','Order #4821 confirmed: 12 items, ₹864.','11:02'],['t','Pune Fresh Mart','Your order is out for delivery 🛵','12:40']]},
 {id:'flat',name:'Baner Flat 302',kind:'group',members:4,gb:.06,vs:.30,col:'#6b7280',init:'B3',time:'Aug',archived:true,
  msgs:[['day','','12 Aug'],['t','Varun','Deposit returned, all settled.','20:10']]},
 {id:'zumba',name:'Zumba Batch Jan',kind:'group',members:30,gb:.04,vs:.60,col:'#a3a3a3',init:'ZB',time:'Mar',archived:true,
  msgs:[['day','','4 Mar'],['t','Trainer','Last class tomorrow!','07:00']]}
];
const HIDDEN = [
 {id:'bh-sat',name:'Saturday Bhajan',kind:'group',members:42,col:'#b48a1e',init:'SB',msgs:[['t','Joshi Kaka','Harmonium needs tuning before Saturday.','Mon']]},
 {id:'bh-pra',name:'Prasad Seva',kind:'group',members:20,col:'#b48a1e',init:'PS',msgs:[['t','Kulkarni Kaku','I will bring sheera this week.','Mon']]}
];
const CONTACTS = ['Aaisaheb ❤️','Akshay Patil','Bhaiyaji ❤️','Chhavi Jain','Kunal Shinde','Neha Kulkarni','Omkar Jadhav','Papa ❤️','Riya','Sneha Gokhale','Varun Mehta'];
const STATUSES = [{id:'s-riya',name:'Riya',col:'#c25b9c',init:'R',time:'25 minutes ago',txt:'Diwali shopping done ✨',bg:'#7c3aed'},{id:'s-akshay',name:'Akshay Patil',col:'#7b5ea7',init:'AP',time:'Today, 08:14',txt:'Reunion countdown: 38 days',bg:'#0f766e'}];
const CHANNELS = [
 {id:'ch-traffic',name:'Pune Traffic Updates',col:'#ea580c',init:'PT',time:'10:20',posts:['University Chowk flyover: one lane shut till 8 pm.','Heavy rain alert for Pune ghat section tonight.'],followers:'182K'},
 {id:'ch-cricket',name:'Cricket Live Scores',col:'#0284c7',init:'CL',time:'09:02',posts:['India 287/4 after 50 overs.','Toss: India elect to bat.'],followers:'4.1M'},
 {id:'ch-suvichar',name:'Roj Suvichar',col:'#ca8a04',init:'RS',time:'06:00',posts:['Pratyek divas ek navi sandhi aahe.'],followers:'96K'}
];
const CALLS = [['aai','in','Today, 08:10',false],['riya','missed','Yesterday, 21:40',true],['Akshay Patil','out','Yesterday, 13:02',false],['office','in','Mon, 11:30',true]];

const PAGES = {
 account:['Account',[['shield','Security notifications'],['key','Passkeys'],['user','Email address'],['lock','Two-step verification'],['phone','Change number'],['doc','Request account info'],['plus','Add account'],['trash','Delete account']]],
 privacy:['Privacy',[['','Last seen and online','Nobody'],['','Profile photo','My contacts'],['','About','Everyone'],['','Status','My contacts'],['','Read receipts','On'],['','Default message timer','Off'],['','Groups','Everyone'],['','Blocked contacts','2'],['','Advanced','Protect IP address in calls']]],
 avatar:['Avatar',[['user','Create your avatar']]],
 lists:['Lists',[['','Unread'],['','Favourites','Aai, Kabra Family'],['','Groups']]],
 notif:['Notifications',[['','Conversation tones','On'],['','Messages','Notification tone: Default'],['','Groups','Notification tone: Default'],['','Calls','Ringtone: Default']]],
 a11y:['Accessibility',[['','Increase contrast','Off'],['','Animation','System default']]],
 lang:['App language',[['','English','Device language'],['','मराठी','Marathi'],['','हिन्दी','Hindi']]],
 help:['Help and feedback',[['help','Help Center'],['doc','Terms and Privacy Policy'],['','Channel reports'],['','App info']]],
 plus:['WhatsApp Plus',[['','Themes and app icons','Included with Plus'],['','Pin up to 20 chats','Included with Plus'],['','₹79 a month','First month free']]],
 linked:['Linked devices',[['laptop','Windows · Chrome','Active now'],['plus','Link a device']]],
 starred:['Starred',[['star','No starred messages','Tap and hold a message, then tap the star to find it here later.']]],
 network:['Network usage',[['','Total sent','1.4 GB'],['','Total received','9.8 GB']]],
 transfer:['Transfer chats',[['phone','Transfer chats to a new phone','Scan a QR code on your new phone. Both phones stay on the same Wi-Fi.']]],
 history:['Chat history',[['','Export chat'],['','Archive all chats'],['','Clear all chats'],['trash','Delete all chats']]],
 broadcast:['Broadcast lists',[['users','No broadcast lists','Send a message to many contacts at once.']]]
};

function mount(root, opts = {}) {
  const S = {};
  const listeners = [];
  function fresh(preset) {
    Object.assign(S, {
      chats: JSON.parse(JSON.stringify(SEED)), hidden: JSON.parse(JSON.stringify(HIDDEN)),
      excluded: new Set(), incVideos: true, cellular: false, freq: 'Daily', provider: 'Google', e2e: false,
      backup: 'failed', lastOk: '9 Oct, 2:00 am', tab: 'chats', filter: 'All', q: '', stack: [{s:'home'}],
      overlay: null, toast: null, newphone: false, restored: false, following: new Set(['ch-traffic']), seen: new Set(),
      hint: null, chatToggles: {}, call: null, sameDevice: false, transfer: null, deleted: new Set(), bannerHidden: false, restoring: false,
      meta: {id:'meta',name:'Meta AI',kind:'person',col:'#6366f1',init:'AI',msgs:[['day','','Today'],['t','Meta AI','Hi Pritesh! Ask me anything.','09:00']]}
    });
    if (preset === 'later') { S.excluded.add('college'); S.backup = 'done'; S.lastOk = 'Today, 2:00 am'; }
    if (preset === 'newphone') { S.excluded.add('college'); S.backup = 'done'; S.lastOk = 'Today, 2:00 am'; }
    if (preset === 'almost') { S.backup = 'done'; S.lastOk = 'Today, 2:00 am'; }
    S.snap = makeSnap();   // the last successful backup: 9 Oct for "Backup has stopped", today for the others
    if (S.backup === 'failed') S.snap.size = Math.min(S.snap.size, FREE);   // chats have grown since 9 Oct; that backup filled the free space
    if (preset === 'almost') S.snap.size = 5.7;   // last night it just fit; today's new media tips it over
    S.local = makeSnap(true); S.local.when = 'Today, 2:00 am';   // the phone's own nightly backup: every chat, whatever the switches say
    if (preset === 'newphone') { S.newphone = true; S.sameDevice = false; S.stack = [{s:'restore'}]; }
  }

  const all = () => S.chats.concat(S.hidden, [S.meta]);
  const chat = id => all().find(c => c.id === id);
  const size = c => S.incVideos ? c.gb : +(c.gb * (1 - c.vs)).toFixed(3);
  const listed = () => S.chats.filter(c => !(S.newphone && S.restored && S.excluded.has(c.id)));
  // Size of a backup holding these chats: each chat's media, with media shared between two included chats counted once.
  const sizeOf = ids => { const set = new Set(ids); return S.chats.filter(c => set.has(c.id)).reduce((a, c) => a + size(c), 0) - SHARED.filter(x => set.has(x.a) && set.has(x.b)).reduce((a, x) => a + x.gb, 0); };
  const total = () => sizeOf(S.chats.map(c => c.id));
  const kept = () => sizeOf(S.chats.filter(c => !S.excluded.has(c.id)).map(c => c.id));
  const room = () => S.provider === 'WhatsApp' ? WA_FREE : FREE;
  const fits = () => kept() <= room();
  // What leaving one more chat out would free: its size minus anything it shares with a chat that stays.
  const saving = id => kept() - sizeOf(S.chats.filter(c => !S.excluded.has(c.id) && c.id !== id).map(c => c.id));
  const sharedWith = id => SHARED.filter(x => (x.a === id || x.b === id)).map(x => ({other: chat(x.a === id ? x.b : x.a), gb: x.gb})).filter(x => x.other && !S.excluded.has(x.other.id));
  const starred = c => c.msgs.filter(m => m[5]).length;
  const top = () => S.stack[S.stack.length - 1];
  const inLast = id => !!(S.snap && S.snap.chats.some(c => c.id === id));   // is this chat in the last backup that finished?
  const exited = id => !!(chat(id) && chat(id).exited);
  const locked = id => !!(S.chatToggles[id] && S.chatToggles[id].lock);
  const kindLabel = c => c.kind === 'community' ? 'Community · ' + c.groups + ' groups' : c.kind === 'person' ? 'Personal chat' : c.kind === 'business' ? 'Business' : 'Group · ' + c.members + ' members';
  const av = (c, cls = '') => `<div class="av ${c.kind === 'community' ? 'sq' : ''} ${cls}" style="background:${c.col}">${esc(c.init)}</div>`;
  const H = k => S.hint === k ? 'pulse' : '';
  const tg = (on, a, v, label, hint='') => `<button class="tg ${hint}" role="switch" aria-checked="${on}" aria-label="${esc(label)}" data-a="${a}" data-v="${v || ''}"></button>`;
  const bar = (title, right = '') => `<div class="tb"><button class="ib" data-a="back" aria-label="Back">${ic('back')}</button><h3>${title}</h3>${right}</div>`;

  function go(s, extra = {}) { S.overlay = null; S.stack.push(Object.assign({s}, extra)); render(true); }
  function back() {
    if (S.overlay) { S.overlay = null; return render(); }
    if (S.stack.length > 1) { S.stack.pop(); render(); }
  }
  function toast(t) { S.toast = t; render(); clearTimeout(S._tt); S._tt = setTimeout(() => { S.toast = null; render(); }, 2200); }
  const later = () => toast('Not part of this prototype');

  /* ---------------- screens ---------------- */
  function lastLine(c) {
    const m = c.msgs.filter(x => x[0] !== 'day' && x[0] !== 'note').slice(-1)[0];
    if (!m) return '';
    const who = c.kind !== 'person' && m[1] && !m[4] && c.kind !== 'business' ? esc(m[1].split(' ')[0]) + ': ' : '';
    const me = m[4] ? ic('ticks', 'ticks') : '';
    const body = m[0] === 'p' ? '📷 ' + (m[2] || 'Photo') : m[0] === 'v' ? '🎥 ' + (m[2] || 'Video') : m[0] === 'd' ? '📄 ' + m[2].split('|')[0] : m[0] === 'a' ? '🎤 Voice message (' + m[2] + ')' : m[2];
    return me + `<span style="overflow:hidden;text-overflow:ellipsis">${who}${esc(body)}</span>`;
  }
  function chatRow(c) {
    const off = S.excluded.has(c.id) && !(S.newphone && S.restored);
    return `<button class="row ${c.id === 'college' ? H('row-college') : ''} ${c.id === 'bhajan' ? H('row-bhajan') : ''}" data-a="chat" data-v="${c.id}">${av(c)}<div class="mid"><div class="nm"><span>${esc(c.name)}</span>${c.verified ? ic('verified', 'ver') : ''}${off ? `<svg class="co" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-label="Not backed up">${I.cloudoff}</svg>` : ''}</div><div class="sb">${lastLine(c)}</div></div><div class="mt ${c.unread ? 'unr' : ''}"><span>${c.time}</span>${c.unread ? `<span class="badge">${c.unread}</span>` : '<span style="height:20px"></span>'}</div></button>`;
  }
  function home() {
    const t = S.tab;
    let body = '', fabs = '';
    if (t === 'chats') {
      const q = S.q.trim().toLowerCase();
      let list = listed().filter(c => !c.archived && !locked(c.id));
      if (S.filter === 'Unread') list = list.filter(c => c.unread);
      if (S.filter === 'Favourites') list = list.filter(c => c.fav);
      if (S.filter === 'Groups') list = list.filter(c => c.kind === 'group' || c.kind === 'community');
      if (q) list = listed().filter(c => !locked(c.id) && c.name.toLowerCase().includes(q));
      const arch = listed().filter(c => c.archived).length, lockedN = listed().filter(c => locked(c.id)).length;
      const failed = S.backup === 'failed' && !S.newphone && !S.bannerHidden;
      const soon = !failed && S.backup !== 'running' && !fits() && S.freq !== 'Never' && !S.newphone && !S.bannerHidden;
      body = `<div class="tb home"><h3>WhatsApp</h3><button class="ib" data-a="camera" aria-label="Camera">${ic('cam')}</button><button class="ib ${H('menu')}" data-a="menu" data-v="home" aria-label="More options">${ic('more')}</button></div>
      <label class="srch">${ic('search')}<input id="wa-q" type="search" placeholder="Ask Meta AI or Search" value="${esc(S.q)}" autocomplete="off"></label>
      ${q ? '' : `<div class="chips">${['All','Unread','Favourites','Groups'].map(x => `<button class="chip ${S.filter === x ? 'on' : ''}" data-a="filter" data-v="${x}">${x}${x === 'Unread' ? ' ' + listed().filter(c => c.unread).length : ''}</button>`).join('')}<button class="chip" data-a="later" aria-label="New list">${ic('plus','ic','style="width:16px;height:16px;vertical-align:-3px"')}</button></div>`}
      ${failed && !q && fits() ? `<div class="ban"><b>Chats ready to back up</b><span>The chats you chose now fit in your Google Account storage.</span><div class="acts"><button class="lk ${H('banner-go')}" data-a="backupnow">Back up now</button><button class="lk" data-a="dismiss">Not now</button></div></div>` : ''}
      ${failed && !q && !fits() ? `<div class="ban"><b>Couldn\u2019t back up chats</b><span>Your Google Account storage is full. Choose which chats to back up to keep your backup going.</span><div class="acts"><button class="lk ${H('banner')}" data-a="open" data-v="choose">Choose chats</button><button class="lk" data-a="dismiss">Not now</button></div></div>` : ''}
      ${soon && !q ? `<div class="ban"><b>Google Account storage almost full</b><span>Your next backup may not complete. Choose which chats to back up.</span><div class="acts"><button class="lk" data-a="open" data-v="choose">Choose chats</button><button class="lk" data-a="dismiss">Not now</button></div></div>` : ''}
      ${lockedN && !q && S.filter === 'All' ? `<button class="row" data-a="open" data-v="lockedlist"><div style="width:50px;display:grid;place-items:center;color:var(--w-sub)">${ic('lock')}</div><div class="mid"><div class="nm" style="font-weight:400">Locked chats</div></div><div class="mt">${lockedN}</div></button>` : ''}
      ${arch && !q && S.filter === 'All' ? `<button class="row" data-a="open" data-v="archived"><div style="width:50px;display:grid;place-items:center;color:var(--w-sub)">${ic('archive')}</div><div class="mid"><div class="nm" style="font-weight:400">Archived</div></div><div class="mt unr">${arch}</div></button>` : ''}
      ${list.map(chatRow).join('') || `<div class="note" style="text-align:center;padding-top:40px">No chats</div>`}
      <div style="height:90px"></div>`;
      fabs = `<div class="fabs"><button class="fab ai" data-a="open" data-v="meta" aria-label="Meta AI"><i></i></button><button class="fab" data-a="open" data-v="newchat" aria-label="New chat">${ic('newchat')}</button></div>`;
    } else if (t === 'updates') {
      body = `<div class="tb home plain"><h3>Updates</h3><button class="ib" data-a="later" aria-label="Search">${ic('search')}</button><button class="ib" data-a="menu" data-v="home" aria-label="More options">${ic('more')}</button></div>
      <div class="sec" style="color:var(--w-ink);font-size:19px;font-weight:500;padding-top:6px">Status</div>
      <div style="display:flex;gap:12px;padding:6px 16px 10px;overflow-x:auto">
        <button class="row" style="flex-direction:column;width:auto;padding:0;gap:6px" data-a="camera"><div class="av" style="background:var(--w-chip);color:var(--w-sub)">${ic('plus')}</div><span style="font-size:12.5px">Add status</span></button>
        ${STATUSES.map(s => `<button class="row" style="flex-direction:column;width:auto;padding:0;gap:6px" data-a="story" data-v="${s.id}"><div class="av ${S.seen.has(s.id) ? '' : 'ring'}" style="background:${s.col}">${s.init}</div><span style="font-size:12.5px">${esc(s.name.split(' ')[0])}</span></button>`).join('')}
      </div>
      <div class="sec" style="color:var(--w-ink);font-size:19px;font-weight:500;display:flex;justify-content:space-between">Channels <button class="lk" data-a="later">Explore</button></div>
      ${CHANNELS.map(c => `<button class="row" data-a="channel" data-v="${c.id}"><div class="av" style="background:${c.col}">${c.init}</div><div class="mid"><div class="nm"><span>${esc(c.name)}</span>${ic('verified','ver')}</div><div class="sb">${esc(c.posts[0])}</div></div><div class="mt">${c.time}</div></button>`).join('')}
      <div style="height:90px"></div>`;
      fabs = `<div class="fabs"><button class="fab ai" data-a="later" aria-label="Write text status" style="border-radius:12px">${ic('pencil','ic','style="width:20px;height:20px;color:var(--w-ink)"')}</button><button class="fab" data-a="camera" aria-label="Camera">${ic('cam')}</button></div>`;
    } else if (t === 'communities') {
      const b = chat('bhajan');
      body = `<div class="tb home plain"><h3>Communities</h3><button class="ib" data-a="menu" data-v="home" aria-label="More options">${ic('more')}</button></div>
      <button class="row" data-a="later"><div class="av sq" style="background:var(--w-chip);color:var(--w-ink)">${ic('users')}</div><div class="mid"><div class="nm">New community</div></div></button>
      <div class="blk"></div>
      <button class="row" data-a="community" data-v="bhajan">${av(b)}<div class="mid"><div class="nm" style="font-size:17.5px">Bhajan Mandal</div></div></button>
      <button class="row" data-a="chat" data-v="bhajan"><div class="av sm sq" style="background:var(--w-pill);color:var(--w-green-ink);margin-left:5px">${ic('bell','ic','style="width:20px;height:20px"')}</div><div class="mid"><div class="nm"><span>Announcements</span></div><div class="sb">${lastLine(b)}</div></div><div class="mt">Mon</div></button>
      ${S.hidden.map(g => `<button class="row" data-a="chat" data-v="${g.id}">${av(g,'sm')}<div class="mid"><div class="nm"><span>${esc(g.name)}</span></div><div class="sb">${lastLine(g)}</div></div><div class="mt">Mon</div></button>`).join('')}
      <button class="row" data-a="community" data-v="bhajan"><div style="width:40px"></div><div class="mid" style="color:var(--w-sub)">View all</div></button>`;
    } else {
      body = `<div class="tb home plain"><h3>Calls</h3><button class="ib" data-a="later" aria-label="Search">${ic('search')}</button><button class="ib" data-a="menu" data-v="home" aria-label="More options">${ic('more')}</button></div>
      <div class="sec" style="color:var(--w-ink);font-size:17px">Favourites</div>
      <button class="row" data-a="call" data-v="aai">${av(chat('aai'))}<div class="mid"><div class="nm">Aai</div></div>${ic('call')}</button>
      <div class="sec" style="color:var(--w-ink);font-size:17px">Recent</div>
      ${CALLS.map(([id, dir, when, vid]) => { const c = chat(id) || {name:id,col:'#7b5ea7',init:id.split(' ').map(w=>w[0]).join(''),kind:'person'}; return `<button class="row" data-a="call" data-v="${esc(id)}${vid ? '|v' : ''}">${av(c)}<div class="mid"><div class="nm ${dir === 'missed' ? 'red' : ''}"><span>${esc(c.name)}</span></div><div class="sb">${ic(dir === 'out' ? 'outarr' : 'inarr','ic',`style="width:15px;height:15px;color:${dir === 'missed' ? 'var(--w-red)' : 'var(--w-green)'}"`)}${when}</div></div>${ic(vid ? 'video' : 'call')}</button>`; }).join('')}
      <div style="height:90px"></div>`;
      fabs = `<div class="fabs"><button class="fab" data-a="open" data-v="newchat" aria-label="New call">${ic('call')}</button></div>`;
    }
    const unread = S.chats.filter(c => c.unread).length;
    const tabs = `<nav class="tabs">${[['chats','Chats','chats'],['updates','Updates','upd'],['communities','Communities','comm'],['calls','Calls','call']].map(([k, l, i]) => `<button class="tab ${S.tab === k ? 'on' : ''} ${k === 'chats' ? H('tab-chats') : ''}" data-a="tab" data-v="${k}"><span class="pl">${ic(i)}</span>${l}${k === 'chats' && unread ? `<span class="dot">${unread}</span>` : ''}${k === 'updates' && S.seen.size < 2 ? '<span class="dot" style="min-width:9px;height:9px;padding:0;top:9px"></span>' : ''}</button>`).join('')}</nav>`;
    return {body, after: tabs, fabs};
  }
  function msgHtml(m, c, i) {
    if (m[0] === 'day') return `<div class="day">${esc(m[2])}</div>`;
    if (m[0] === 'note') return `<div class="sys" style="background:var(--w-chip);color:var(--w-sub)">${esc(m[2])}</div>`;
    const me = !!m[4];
    const au = !me && c.kind !== 'person' && c.kind !== 'business' && m[1] ? `<div class="au" style="color:${AUC[m[1].length % AUC.length]}">${esc(m[1])}</div>` : '';
    const tm = `<span class="tm">${m[5] ? '\u2605 ' : ''}${m[3]}${me ? ic('ticks','ticks') : ''}</span>`;
    const gone = S.deleted.has(c.id) && (m[0] === 'p' || m[0] === 'v');
    let inner = '';
    if (m[0] === 'p' || m[0] === 'v') inner = gone ? `<div class="sb wrap" style="font-style:italic">${m[0] === 'p' ? '📷 Photo' : '🎥 Video'} deleted from this phone</div>` : `<div class="media" style="background:${grads[i % grads.length]}">${m[0] === 'v' ? ic('play') : ic('img')}${m[0] === 'v' ? '<span style="position:absolute;left:8px;bottom:6px;font-size:12px">0:' + (18 + i * 7) + '</span>' : ''}</div>${m[2] ? esc(m[2]) : ''}`;
    else if (m[0] === 'd') { const [n, d] = m[2].split('|'); inner = `<div class="doc">${ic('doc','ic','style="color:var(--w-red)"')}<div><b>${esc(n)}</b><small>${esc(d)}</small></div></div>`; }
    else if (m[0] === 'a') inner = `<div class="voice">${ic('play','ic','style="color:var(--w-sub)"')}<div class="wave"></div><small style="color:var(--w-sub)">${m[2]}</small></div>`;
    else inner = esc(m[2]);
    return `<div class="bub ${me ? 'me' : ''}" data-a="star" data-v="${c.id}|${i}" title="Tap to star" style="cursor:pointer">${au}${inner}${tm}<span style="clear:both;display:block"></span></div>`;
  }
  function chatScreen(id) {
    const c = chat(id);
    const ai = id === 'meta';
    const sub = ai ? 'with Llama' : c.kind === 'person' ? 'last seen today at 08:02' : c.kind === 'business' ? 'Business account' : c.kind === 'community' ? 'Announcements · ' + c.groups + ' groups' : 'tap here for group info';
    const off = S.excluded.has(id) && !S.newphone && !(c && c.returned);
    const body = `<div class="ctb"><button class="ib" data-a="back" aria-label="Back">${ic('back')}</button>
      <button class="who ${H('chat-header')}" data-a="${ai ? 'later' : 'info'}" data-v="${id}">${ai ? '<div class="av sm" style="background:conic-gradient(#3b82f6,#a855f7,#22d3ee,#3b82f6)"></div>' : av(c,'sm')}<div class="mid"><div class="nm"><span>${esc(ai ? 'Meta AI' : c.name)}</span>${c && c.verified ? ic('verified','ver') : ''}</div><div class="sb">${sub}</div></div></button>
      ${ai ? '' : `<button class="ib" data-a="call" data-v="${id}|v" aria-label="Video call">${ic('video')}</button><button class="ib" data-a="call" data-v="${id}" aria-label="Voice call">${ic('call')}</button>`}<button class="ib" data-a="menu" data-v="chat" aria-label="More options">${ic('more')}</button></div>
      <div class="conv" id="wa-conv">
        <div class="sys">🔒 Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.</div>
        ${c.msgs.map((m, i) => msgHtml(m, c, i)).join('')}
      </div>
      ${c && c.exited ? '<div class="inbar"><div class="sb wrap" style="padding:12px;text-align:center;width:100%">You can\u2019t send messages to this group because you\u2019re no longer a member.</div></div>' : ''}
      <div class="inbar" style="${c && c.exited ? 'display:none' : ''}"><div class="inbox"><button class="ib" data-a="later" aria-label="Emoji">${ic('emoji')}</button><input id="wa-msg" placeholder="${ai ? 'Ask Meta AI anything' : 'Message'}" autocomplete="off"><button class="ib" data-a="later" aria-label="Attach">${ic('clip')}</button><button class="ib wa-cam" data-a="camera" aria-label="Camera">${ic('cam')}</button></div>
      <button class="send" data-a="send" data-v="${id}" aria-label="Send">${ic('mic')}</button></div>`;
    return {body, full: true};
  }
  function infoScreen(id) {
    const c = chat(id), on = !S.excluded.has(id), isG = c.kind === 'group' || c.kind === 'community';
    const t = S.chatToggles[id] || {};
    return {body: `${bar('', `<button class="ib" data-a="later" aria-label="More options">${ic('more')}</button>`)}
      <div class="hero">${av(c,'xl')}<h3>${esc(c.name)}</h3><div class="sb wrap">${kindLabel(c)}</div></div>
      <div class="qa">${c.kind === 'community' ? '' : `<button data-a="call" data-v="${id}">${ic('call')}<span>Voice</span></button><button data-a="call" data-v="${id}|v">${ic('video')}<span>Video</span></button>`}${isG ? `<button data-a="later">${ic('plus')}<span>Add</span></button>` : ''}<button data-a="later">${ic('search')}<span>Search</span></button></div>
      <div class="blk"></div>
      <button class="set" data-a="later"><div class="mid"><div class="nm" style="font-size:15px">Media, links and docs</div></div><span class="sb num">${S.deleted.has(id) ? '12' : Math.round(c.gb * 180)} ›</span></button>
      <div class="thumbs">${S.deleted.has(id) ? '' : grads.slice(0, 4).map(g => `<i style="background:${g}"></i>`).join('')}</div>
      <div class="blk"></div>
      <button class="set" data-a="later">${ic('bell')}<div class="mid"><div class="nm">Notifications</div></div></button>
      <div class="set static">${ic('img')}<div class="mid"><div class="nm">Media visibility</div><div class="sb">Show newly downloaded media in your phone’s gallery</div></div>${tg(t.vis !== false, 'ctog', id + '|vis', 'Media visibility')}</div>
      <div class="blk"></div>
      <div class="set static">${on ? ic('cloud') : `<svg class="ic" viewBox="0 0 24 24">${I.cloudoff}</svg>`}<div class="mid"><div class="nm">Include in backup</div><div class="sb">${on ? `Included in your next backup \u00b7 ${GB(size(c))}` : 'Not included in backup'}</div></div>${tg(on, 'tog', id, 'Include ' + c.name + ' in backup', H('info-tog'))}</div>
      <button class="set" data-a="later">${ic('timer')}<div class="mid"><div class="nm">Disappearing messages</div><div class="sb">Off</div></div></button>
      <div class="set static">${ic('lock')}<div class="mid"><div class="nm">Chat lock</div><div class="sb">Lock and hide this chat on this device.</div></div>${tg(!!t.lock, 'ctog', id + '|lock', 'Chat lock')}</div>
      <div class="set static">${ic('shield')}<div class="mid"><div class="nm">Advanced chat privacy</div><div class="sb">Stop others exporting this chat or auto-saving its media.</div></div>${tg(!!t.adv, 'ctog', id + '|adv', 'Advanced chat privacy')}</div>
      <button class="set" data-a="later">${ic('lock')}<div class="mid"><div class="nm">Encryption</div><div class="sb">Messages and calls are end-to-end encrypted. Tap to verify.</div></div></button>
      ${isG ? `<div class="blk"></div><div class="sec">${c.kind === 'community' ? c.groups + ' groups' : c.members + ' members'}</div>
        ${(c.kind === 'community' ? ['Announcements','Saturday Bhajan','Prasad Seva'] : ['You','Akshay Patil','Sneha Gokhale','Kunal Shinde']).map((n, i) => `<button class="row" data-a="later"><div class="av sm" style="background:${['#5a8f5c','#7b5ea7','#c25b9c','#3a7ca5'][i]}">${n[0]}</div><div class="mid"><div class="nm" style="font-size:15.5px">${n}</div></div>${i === 0 && c.kind !== 'community' ? '<span class="sb">Admin</span>' : ''}</button>`).join('')}` : ''}
      <div class="blk"></div>
      ${isG && !c.exited ? `<button class="set red" data-a="exit" data-v="${id}">${ic('back','ic','style="color:var(--w-red)"')}<div class="mid"><div class="nm red">Exit ${c.kind === 'community' ? 'community' : 'group'}</div></div></button>` : isG ? `<div class="set static"><div class="mid"><div class="sb wrap">You\u2019re no longer a member. The chat stays on this phone${S.excluded.has(id) ? '' : ' and in your backup'}.</div></div></div>` : `<button class="set red" data-a="later"><div class="mid"><div class="nm red">Block ${esc(c.name)}</div></div></button>`}
      <button class="set red" data-a="later"><div class="mid"><div class="nm red">Report ${c.kind === 'person' ? esc(c.name) : c.kind === 'business' ? 'business' : 'group'}</div></div></button><div style="height:24px"></div>`};
  }
  function settings() {
    const rows = [['key','Account','Security notifications, change number','account'],['lock','Privacy','Block contacts, disappearing messages','privacy'],['user','Avatar','Create, edit, profile photo','avatar'],['list','Lists','Manage people and groups','lists'],['chats','Chats','Theme, wallpapers, chat history','chats'],['bell','Notifications','Message, group and call tones','notif'],['data','Storage and data','Network usage, auto-download','storage'],['a11y','Accessibility','Increase contrast, animation','a11y'],['globe','App language',"English (device's language)",'lang'],['help','Help and feedback','Help centre, contact us, privacy policy','help'],['users','Invite a friend','','invite'],['sub','WhatsApp Plus','Themes, app icons and more','plus']];
    return {body: `${bar('Settings', `<button class="ib" data-a="later" aria-label="Search">${ic('search')}</button>`)}
      <button class="row" data-a="later" style="padding:12px 16px 16px"><div class="av" style="background:#0f766e;width:60px;height:60px">PK</div><div class="mid"><div class="nm" style="font-size:19px">${ME}</div><div class="sb">Hey there! I am using WhatsApp.</div></div></button>
      <div class="blk"></div>
      ${rows.map(([i, t, d, k]) => `<button class="set ${k === 'chats' ? H('set-chats') : ''}" data-a="${k === 'invite' ? 'later' : 'page'}" data-v="${k}">${ic(i)}<div class="mid"><div class="nm">${t}</div>${d ? `<div class="sb">${d}</div>` : ''}</div></button>`).join('')}
      <div class="note" style="text-align:center">from Meta</div>`};
  }
  function chatsSettings() {
    return {body: `${bar('Chats')}
      <div class="sec">Display</div>
      <button class="set" data-a="later"><span style="width:24px"></span><div class="mid"><div class="nm">Theme</div><div class="sb">System default</div></div></button>
      <button class="set" data-a="later"><span style="width:24px"></span><div class="mid"><div class="nm">Default chat theme</div></div></button>
      <div class="sec">Chat settings</div>
      <div class="set static"><span style="width:24px"></span><div class="mid"><div class="nm">Enter is send</div><div class="sb">Enter key will send your message</div></div>${tg(!!S.enter, 'stog', 'enter', 'Enter is send')}</div>
      <div class="set static"><span style="width:24px"></span><div class="mid"><div class="nm">Media visibility</div><div class="sb">Show newly downloaded media in your phone’s gallery</div></div>${tg(S.mvis !== false, 'stog', 'mvis', 'Media visibility')}</div>
      <button class="set" data-a="later"><span style="width:24px"></span><div class="mid"><div class="nm">Font size</div><div class="sb">Medium</div></div></button>
      <div class="sec">Archived chats</div>
      <div class="set static"><span style="width:24px"></span><div class="mid"><div class="nm">Keep chats archived</div><div class="sb">Archived chats will remain archived when you receive a new message</div></div>${tg(S.keepArch !== false, 'stog', 'keepArch', 'Keep chats archived')}</div>
      <div class="blk"></div>
      <button class="set ${H('set-backup')}" data-a="open" data-v="backup">${ic('cloud')}<div class="mid"><div class="nm">Chat backup</div>${S.backup === 'failed' ? '<div class="sb red">Last backup didn’t finish</div>' : ''}</div></button>
      <button class="set" data-a="page" data-v="transfer">${ic('phone')}<div class="mid"><div class="nm">Transfer chats</div></div></button>
      <button class="set" data-a="page" data-v="history">${ic('timer')}<div class="mid"><div class="nm">Chat history</div></div></button>`};
  }
  function storageData() {
    return {body: `${bar('Storage and data')}
      <button class="set ${H('manage')}" data-a="open" data-v="manage">${ic('archive')}<div class="mid"><div class="nm">Manage storage</div><div class="sb num">${GB(S.chats.reduce((a, c) => a + c.gb, 0) + .42)}</div></div></button>
      <button class="set" data-a="page" data-v="network">${ic('data')}<div class="mid"><div class="nm">Network usage</div><div class="sb">11.2 GB sent · 9.8 GB received</div></div></button>
      <div class="set static"><span style="width:24px"></span><div class="mid"><div class="nm">Use less data for calls</div></div>${tg(!!S.lessData, 'stog', 'lessData', 'Use less data for calls')}</div>
      <button class="set" data-a="later"><span style="width:24px"></span><div class="mid"><div class="nm">Proxy</div><div class="sb">Off</div></div></button>
      <div class="sec">Media upload quality</div>
      <button class="set" data-a="later"><span style="width:24px"></span><div class="mid"><div class="nm">Photo and video upload quality</div><div class="sb">Standard quality</div></div></button>
      <div class="sec">Media auto-download</div>
      ${[['When using mobile data','Photos'],['When connected on Wi-Fi','All media'],['When roaming','No media']].map(([a, b]) => `<button class="set" data-a="later"><span style="width:24px"></span><div class="mid"><div class="nm">${a}</div><div class="sb">${b}</div></div></button>`).join('')}`};
  }
  function manage() {
    const list = S.chats.slice().sort((a, b) => b.gb - a.gb);
    const used = S.chats.reduce((a, c) => a + c.gb, 0) + .42;
    return {body: `${bar('Manage storage', `<button class="ib" data-a="later" aria-label="Search">${ic('search')}</button>`)}
      <div style="padding:6px 18px 4px"><div style="display:flex;justify-content:space-between;font-size:14px"><span><b class="num" style="color:var(--w-green-ink);font-size:18px">${GB(used)}</b> used</span><span class="num" style="color:var(--w-sub)">41.2 GB free</span></div>
      <div class="meter"><i style="width:${used / 64 * 100}%;background:var(--w-green)"></i><i style="width:20%;background:var(--w-sub);opacity:.4"></i></div><div class="lg"><span style="--c:var(--w-green)">WhatsApp</span><span style="--c:var(--w-sub)">Other apps</span></div></div>
      <button class="ban" style="border:0;text-align:left;cursor:pointer;background:var(--w-chip);color:var(--w-ink);width:calc(100% - 24px)" data-a="open" data-v="choose"><b>Backup too large?</b><span style="color:var(--w-sub)">Choose which chats to back up.</span></button>
      <div class="sec">Review and delete items</div>
      <div style="display:flex;gap:10px;padding:0 16px 8px"><button class="boxl" style="cursor:pointer;background:none;color:inherit" data-a="later"><b>Larger than 5 MB</b><span class="sb num">1.1 GB</span></button><button class="boxl" style="cursor:pointer;background:none;color:inherit" data-a="later"><b>Forwarded many times</b><span class="sb num">380 MB</span></button></div>
      <div class="sec">Chats</div>
      ${list.map(c => `<button class="row" data-a="mchat" data-v="${c.id}">${av(c,'sm')}<div class="mid"><div class="nm" style="font-size:15.5px"><span>${esc(c.name)}</span></div></div><span class="sb num">${GB(c.gb)}</span></button>`).join('')}<div style="height:16px"></div>`};
  }
  function manageChat(id) {
    const c = chat(id), n = S.deleted.has(id) ? 0 : Math.max(6, Math.round(c.gb * 18));
    return {body: `${bar(esc(c.name), n ? `<button class="ib" data-a="delmedia" data-v="${id}" aria-label="Delete all media">${ic('trash')}</button>` : '')}
      <div class="sb wrap" style="padding:0 18px 10px"><span class="num">${GB(c.gb)}</span> on this phone · sorted by newest</div>
      ${n ? `<div class="grid">${Array.from({length: Math.min(n, 30)}, (_, i) => `<i style="background:${grads[(i * 3 + id.length) % grads.length]}"></i>`).join('')}</div>` : '<div class="ctr"><p>No media in this chat.</p></div>'}`};
  }
  function backupScreen() {
    const k = kept(), off = S.excluded.size, running = S.backup === 'running';
    const status = S.backup === 'failed' ? `<div class="sb wrap red">Couldn’t complete backup. Your Google Account storage is full.</div>` : '';
    const last = running ? `<div class="sb wrap">${S.phase === 'remove' ? 'Preparing backup…' : `Uploading… <span class="num">${GB(k)}</span>`}</div><div class="prog"><i id="wa-prog"></i></div>`
      : `<div class="sb wrap">Google Account: ${S.lastOk}</div><div class="sb wrap">Local: ${S.local ? S.local.when : S.lastOk}</div><div class="sb">Size: <span class="num">${GB(S.snap.size)}</span></div>`;
    return {body: `${bar('Chat backup', `<button class="ib" data-a="later" aria-label="Help">${ic('help')}</button>`)}
      <div class="set static" style="align-items:flex-start">${ic('cloud')}<div class="mid"><div class="nm">Back up to Google Account</div><div class="sb">Back up your messages and media to your Google Account. You can restore them when you reinstall WhatsApp. Your messages will also back up to your phone’s internal storage.</div>
        <div style="margin-top:14px;display:grid;gap:2px"><div class="nm" style="font-size:15px">Last backup</div>${status}${last}</div>
        ${running ? '' : `<div style="margin-top:14px"><button class="btn ${H('backup-btn')}" data-a="backupnow">Back up</button></div>`}</div></div>
      <div class="blk"></div>
      <button class="set" data-a="later"><span style="width:24px"></span><div class="mid"><div class="nm">Google Account</div><div class="sb">priteshvijaykabra@gmail.com</div></div></button>
      <button class="set" data-a="later"><span style="width:24px"></span><div class="mid"><div class="nm">Manage Google storage</div></div></button>
      <button class="set" data-a="freq"><span style="width:24px"></span><div class="mid"><div class="nm">Frequency</div><div class="sb">${S.freq}</div></div></button>
      <div class="set static"><span style="width:24px"></span><div class="mid"><div class="nm">Back up using cellular</div></div>${tg(S.cellular, 'stog', 'cellular', 'Back up using cellular')}</div>
      <button class="set ${H('choose-row')}" data-a="open" data-v="choose"><span style="width:24px"></span><div class="mid"><div class="nm">Chats to back up <span class="new">NEW</span></div><div class="sb">${off ? `${S.chats.length - off} of ${S.chats.length} chats` : 'All chats'}</div></div></button>
      <div class="set static"><span style="width:24px"></span><div class="mid"><div class="nm">Include videos</div></div>${tg(S.incVideos, 'vid', '', 'Include videos')}</div>
      <button class="set" data-a="provider"><span style="width:24px"></span><div class="mid"><div class="nm">Cloud backup</div><div class="sb">${S.provider}</div></div></button>
      <button class="set" data-a="e2e">${ic('key')}<div class="mid"><div class="nm">End-to-end encrypted backup</div><div class="sb">${S.e2e ? 'On' : 'Off'}</div></div></button>
      <div style="height:16px"></div>`};
  }
  function choose() {
    const k = kept(), t = total(), f = fits();
    const types = ['All','Groups','Communities','Personal','Business','Archived'];
    const F = top().f || 'All';
    const match = c => F === 'All' ? true : F === 'Groups' ? c.kind === 'group' && !c.archived : F === 'Communities' ? c.kind === 'community' : F === 'Personal' ? c.kind === 'person' : F === 'Business' ? c.kind === 'business' : c.archived;
    const list = S.chats.filter(match).sort((a, b) => size(b) - size(a));
    return {body: `${bar('Chats to back up')}
      <div style="padding:6px 18px 4px"><div style="display:flex;justify-content:space-between;font-size:14px"><span><b class="num" style="color:${f ? 'var(--w-green-ink)' : 'var(--w-red)'};font-size:18px">${GB(k)}</b> backup size</span><span class="num" style="color:var(--w-sub)">${room()} GB available</span></div>
        <div class="meter"><i style="width:${Math.min(100, k / room() * 100)}%;background:${f ? 'var(--w-green)' : 'var(--w-red)'}"></i></div>
        ${f ? '' : `<div class="sb wrap red" style="margin-top:8px">Your backup is larger than your available Google Account storage.</div>`}</div>
      <div class="note" style="padding-top:6px">Chats you turn off stay on this phone but aren’t backed up.</div>
      <div class="chips">${types.map(x => `<button class="chip ${F === x ? 'on' : ''}" data-a="cfilter" data-v="${x}">${x}</button>`).join('')}</div>
      <div class="sec">Sorted by size</div>
      ${list.map(c => { const on = !S.excluded.has(c.id); if (locked(c.id)) return `<div class="row" style="cursor:default"><div class="av sm" style="background:var(--w-chip);color:var(--w-sub)">${ic('lock')}</div><div class="mid"><div class="nm" style="font-size:15.5px"><span>Locked chat</span></div><div class="sb">Change this in the chat</div></div></div>`; return `<div class="row" style="cursor:default">${av(c,'sm')}<div class="mid"><div class="nm" style="font-size:15.5px"><span>${esc(c.name)}</span></div><div class="sb num">${on ? GB(size(c)) : 'Not backed up'}</div></div>${tg(on, 'tog', c.id, 'Back up ' + c.name, c.id === 'college' ? H('tog-college') : '')}</div>`; }).join('')}
      <div style="height:16px"></div>`};
  }
  function genericPage(key) {
    const [title, rows] = PAGES[key];
    return {body: `${bar(title)}${rows.map(([i, t, d]) => `<button class="set" data-a="later">${i ? ic(i) : '<span style="width:24px"></span>'}<div class="mid"><div class="nm">${esc(t)}</div>${d ? `<div class="sb">${esc(d)}</div>` : ''}</div></button>`).join('')}`};
  }
  function starredPage() {
    const list = S.chats.flatMap(c => c.msgs.map((m, i) => ({c, m, i})).filter(x => x.m[5]));
    return {body: `${bar('Starred')}${list.length ? list.map(({c, m, i}) => `<button class="row" data-a="chat" data-v="${c.id}">${av(c,'sm')}<div class="mid"><div class="nm" style="font-size:15px"><span>${esc(c.name)}</span></div><div class="sb">\u2605 ${esc(m[0] === 't' ? m[2] : m[0] === 'p' ? 'Photo' : m[0] === 'v' ? 'Video' : m[0] === 'd' ? m[2].split('|')[0] : 'Voice message')}</div></div><span class="sb">${m[3]}</span></button>`).join('') : '<div class="ctr"><p>No starred messages. Tap a message in a chat to star it.</p></div>'}`};
  }
  function transferScreen() {
    const x = S.transfer, n = S.excluded.size;
    if (!x) return {body: `${bar('Transfer chats')}<div class="ctr" style="padding-top:30px">${ic('phone','ic','style="width:56px;height:56px;color:var(--w-green-ink)"')}<h3>Transfer chats to a new phone</h3><p>Transfer your chat history straight to your new phone. Keep both phones nearby and on the same Wi-Fi.</p><button class="btn" data-a="xfer" data-v="qr">Start</button></div>`};
    if (x === 'qr') return {body: `${bar('Transfer chats')}<div class="ctr" style="padding-top:24px"><p>Scan this code on your new phone.</p><div style="width:180px;height:180px;background:repeating-conic-gradient(var(--w-ink) 0 25%,var(--w-bg) 0 50%) 0 0/24px 24px;border:10px solid var(--w-bg);outline:1px solid var(--w-line)"></div><button class="btn" data-a="xfer" data-v="moving">New phone scanned it</button></div>`};
    if (x === 'moving') return {body: `${bar('Transfer chats')}<div class="ctr" style="padding-top:100px"><h3>Transferring</h3><p class="num">${GB(S.chats.reduce((a, c) => a + c.gb, 0))} · ${S.chats.length} chats</p><div class="prog"><i id="wa-prog"></i></div></div>`};
    return {body: `${bar('Transfer chats')}<div class="ctr" style="padding-top:60px"><div class="okc">${ic('check','ic','style="width:36px;height:36px"')}</div><h3>Transfer complete</h3><p>Your chat history is on your new phone.</p><button class="btn" data-a="xferdone">Continue on the new phone</button></div>`};
  }
  function newChat() {
    return {body: `${bar('Select contact<div class="sb" style="font-size:13px;margin-top:2px">' + CONTACTS.length + ' contacts</div>', `<button class="ib" data-a="later" aria-label="Search">${ic('search')}</button>`)}
      ${[['users','New group'],['user','New contact'],['comm','New community'],['sub','New broadcast']].map(([i, t]) => `<button class="row" data-a="later"><div class="av" style="background:var(--w-green);color:#fff">${ic(i)}</div><div class="mid"><div class="nm">${t}</div></div></button>`).join('')}
      <div class="sec">Contacts on WhatsApp</div>
      ${CONTACTS.map((n, i) => `<button class="row" data-a="contact" data-v="${esc(n)}"><div class="av" style="background:${['#5a8f5c','#7b5ea7','#b45309','#0e7490','#3a7ca5','#c0763a','#4f6fb0','#1d4ed8','#c25b9c','#0f766e','#6b7280'][i]}">${n.split(' ').filter(w => /^[A-Za-z]/.test(w)).map(w => w[0]).join('')}</div><div class="mid"><div class="nm">${esc(n)}</div><div class="sb">${['Busy','Available','🙏','Learning every day','Hey there! I am using WhatsApp.','At work','Trekking 🏔️','Jai Shri Ram','📍 Pune','Urgent calls only','At the gym'][i]}</div></div></button>`).join('')}`};
  }
  function archived() {
    return {body: `${bar('Archived')}<div class="note" style="text-align:center">These chats stay archived when new messages arrive.</div>${listed().filter(c => c.archived).map(chatRow).join('')}`};
  }
  function community(id) {
    const c = chat(id);
    return {body: `${bar('')}<div class="hero">${av(c,'xl')}<h3>${esc(c.name)}</h3><div class="sb wrap">Community · ${c.groups} groups</div></div>
      <div class="blk"></div>
      <button class="row" data-a="chat" data-v="${id}"><div class="av sm sq" style="background:var(--w-pill);color:var(--w-green-ink)">${ic('bell','ic','style="width:20px;height:20px"')}</div><div class="mid"><div class="nm">Announcements</div><div class="sb">${lastLine(c)}</div></div></button>
      <div class="sec">Groups you’re in</div>
      ${S.hidden.map(g => `<button class="row" data-a="chat" data-v="${g.id}">${av(g,'sm')}<div class="mid"><div class="nm">${esc(g.name)}</div><div class="sb">${lastLine(g)}</div></div></button>`).join('')}
      <div class="blk"></div><button class="set" data-a="info" data-v="${id}">${ic('help')}<div class="mid"><div class="nm">Community info</div><div class="sb">Members, settings and backup</div></div></button>`};
  }
  function channel(id) {
    const c = CHANNELS.find(x => x.id === id), f = S.following.has(id);
    return {body: `<div class="ctb"><button class="ib" data-a="back" aria-label="Back">${ic('back')}</button><button class="who" data-a="later"><div class="av sm" style="background:${c.col}">${c.init}</div><div class="mid"><div class="nm"><span>${esc(c.name)}</span>${ic('verified','ver')}</div><div class="sb">${c.followers} followers</div></div></button><button class="btn ${f ? 'gh' : ''}" style="padding:7px 14px;margin-right:6px" data-a="follow" data-v="${id}">${f ? 'Following' : 'Follow'}</button></div>
      <div class="conv"><div class="day">Today</div>${c.posts.slice().reverse().map((p, i) => `<div class="bub" style="max-width:88%">${esc(p)}<span class="tm">${['08:40', c.time][i] || c.time}</span><span style="clear:both;display:block"></span><div style="margin-top:4px;font-size:13px">👍 ${120 + i * 37}  ❤️ ${40 + i * 11}</div></div>`).join('')}</div>`, full: true};
  }
  function camera() {
    return {body: `<div class="dark"><div style="display:flex;justify-content:space-between;padding:10px"><button class="ib" style="color:#fff" data-a="back" aria-label="Close">${ic('close')}</button><button class="ib" style="color:#fff" data-a="later" aria-label="Flash">⚡</button></div>
      <div style="flex:1;margin:0 10px;border-radius:14px;background:linear-gradient(160deg,#1e293b,#0f172a 60%,#111827);display:grid;place-items:center;color:#94a3b8;font-size:13px">Camera preview</div>
      <div style="display:flex;justify-content:space-around;align-items:center;padding:24px 10px 18px"><button class="ib" style="color:#fff" data-a="later" aria-label="Gallery">${ic('img')}</button><button data-a="shutter" aria-label="Take photo" style="width:70px;height:70px;border-radius:50%;border:4px solid #fff;background:transparent;cursor:pointer"></button><button class="ib" style="color:#fff" data-a="later" aria-label="Switch camera">⟲</button></div>
      <div style="text-align:center;padding-bottom:12px;font-size:13px;color:#fff">Video &nbsp; <b style="background:rgba(255,255,255,.18);padding:4px 12px;border-radius:12px">Photo</b></div></div>`, full: true, dark: true};
  }
  function callScreen() {
    const c = S.call;
    return {body: `<div class="call"><div><div style="font-size:13px;opacity:.8">🔒 End-to-end encrypted</div>${av(c.c,'xl')}<h3>${esc(c.c.name)}</h3><div style="opacity:.85" id="wa-callst">${c.video ? 'Video calling…' : 'Calling…'}</div></div>
      <div style="display:flex;gap:18px;align-items:center"><button class="ib" style="color:#fff;background:rgba(255,255,255,.14);width:52px;height:52px" data-a="later" aria-label="Speaker">🔈</button><button class="ib" style="color:#fff;background:rgba(255,255,255,.14);width:52px;height:52px" data-a="later" aria-label="Video">${ic('video')}</button><button class="ib" style="color:#fff;background:rgba(255,255,255,.14);width:52px;height:52px" data-a="later" aria-label="Mute">${ic('mic')}</button><button class="endc" data-a="back" aria-label="End call">${ic('call','ic','style="transform:rotate(135deg)"')}</button></div></div>`, full: true, dark: true};
  }
  function restore() {
    const sn = S.snap, n = sn.chats.reduce((a, c) => a + c.msgs.length * 37, 0) + 1120;
    if (!S.restored) {
      if (S.restoring) return {body: `<div class="ctr" style="padding-top:110px"><h3>Restoring messages</h3><p>Please wait…</p><div class="prog"><i id="wa-prog"></i></div></div>`};
      return {body: `<div class="ctr" style="padding-top:70px;text-align:left;justify-items:stretch"><div style="color:var(--w-green-ink);justify-self:center">${ic('cloud','ic','style="width:56px;height:56px"')}</div><h3 style="text-align:center">Restore backup</h3>
        <p>Restore your messages and media from your Google Account. If you don’t restore now, you won’t be able to restore later.</p>
        <p class="num" style="color:var(--w-ink)">Last backup: ${sn.when}<br>Size: ${GB(sn.size)}</p>
        <div style="display:flex;justify-content:space-between;margin-top:40px"><button class="lk" data-a="later">Skip</button><button class="btn ${H('restore-btn')}" data-a="restorego">Restore</button></div></div>`};
    }
    return {body: `<div class="ctr" style="padding-top:90px"><div class="okc">${ic('check','ic','style="width:36px;height:36px"')}</div><h3>Messages restored</h3>
      <p class="num">${n.toLocaleString('en-IN')} messages restored</p>
      <button class="btn ${H('restore-next')}" data-a="restoredone">Next</button></div>`};
  }

  /* ---------------- overlays ---------------- */
  function overlay() {
    const o = S.overlay; if (!o) return '';
    if (o.t === 'confirm') { const c = chat(o.id); return `<div class="scrim mid" data-a="close"><div class="dlg" role="dialog" aria-modal="true" data-stop="1"><h4>Turn off backup for this chat?</h4><p>Messages and media in “${esc(c.name)}” will stay on this phone but won’t be backed up. You won’t be able to restore them if you change phones or reinstall WhatsApp.${c.kind === 'community' ? ' This includes all groups in this community.' : ''}</p><div class="acts2"><button class="lk" data-a="close">Cancel</button><button class="lk ${H('leave-out')}" data-a="leaveout" data-v="${o.id}">Turn off</button></div></div></div>`; }
    if (o.t === 'freq') return `<div class="scrim mid" data-a="close"><div class="dlg" role="dialog" aria-modal="true" data-stop="1"><h4>Back up to Google Account</h4>${['Never','Only when I tap “Back up”','Daily','Weekly','Monthly'].map(x => `<button class="radio ${S.freq === x ? 'on' : ''}" data-a="setfreq" data-v="${esc(x)}"><i></i>${esc(x)}</button>`).join('')}<div class="acts2"><button class="lk" data-a="close">Cancel</button></div></div></div>`;
    if (o.t === 'exit') { const c = chat(o.id); return `<div class="scrim mid" data-a="close"><div class="dlg" role="dialog" aria-modal="true" data-stop="1"><h4>Exit \u201c${esc(c.name)}\u201d?</h4><p>Only group admins will be notified. The chat stays on this phone${S.excluded.has(o.id) ? '' : ' and in your backup'}.</p><div class="acts2"><button class="lk" data-a="close">Cancel</button><button class="lk red" data-a="exitok" data-v="${o.id}">Exit</button></div></div></div>`; }
    if (o.t === 'provwa') return `<div class="scrim mid" data-a="close"><div class="dlg" role="dialog" aria-modal="true" data-stop="1"><h4>Save to WhatsApp instead?</h4><p>2 GB free. Only you can read it.</p><p>${kept() > WA_FREE ? 'Your chats need ' + GB(kept()) + '. Turn off a few big chats so they fit.' : 'Your chats fit.'}</p><div class="acts2"><button class="lk" data-a="close">Cancel</button><button class="lk" data-a="provwaok">Switch</button></div></div></div>`;
    if (o.t === 'provider') return `<div class="scrim mid" data-a="close"><div class="dlg" role="dialog" aria-modal="true" data-stop="1"><h4>Cloud backup</h4><p>Choose where your backup is stored.</p>${[['Google','Uses your Google Account storage'],['WhatsApp','Always end-to-end encrypted']].map(([x, d]) => `<button class="radio ${S.provider === x ? 'on' : ''}" data-a="setprov" data-v="${x}"><i></i><span><span style="display:block">${x}</span><span class="sb wrap" style="font-size:13px">${d}</span></span></button>`).join('')}<div class="acts2"><button class="lk" data-a="close">Cancel</button></div></div></div>`;
    if (o.t === 'delmedia') { const c = chat(o.id); return `<div class="scrim mid" data-a="close"><div class="dlg" role="dialog" aria-modal="true" data-stop="1"><h4>Delete all media?</h4><p><span class="num">${GB(c.gb)}</span> of photos, videos and files from “${esc(c.name)}” will be deleted from this phone. They leave your backup at the next backup.</p><div class="acts2"><button class="lk" data-a="close">Cancel</button><button class="lk red" data-a="delok" data-v="${o.id}">Delete</button></div></div></div>`; }
    if (o.t === 'clear' || o.t === 'delchat') { const c = chat(o.id); const del = o.t === 'delchat'; return `<div class="scrim mid" data-a="close"><div class="dlg" role="dialog" aria-modal="true" data-stop="1"><h4>${del ? 'Delete this chat?' : 'Clear this chat?'}</h4><p>${del ? 'Messages and media in \u201c' + esc(c.name) + '\u201d will be deleted from this phone, and the chat leaves your chat list.' : 'All messages in \u201c' + esc(c.name) + '\u201d will be deleted from this phone. The chat stays in your chat list.'}</p><div class="acts2"><button class="lk" data-a="close">Cancel</button><button class="lk red" data-a="${del ? 'delchatok' : 'clearok'}" data-v="${o.id}">${del ? 'Delete chat' : 'Clear chat'}</button></div></div></div>`; }
    if (o.t === 'menu') {
      const items = o.where === 'home' ? [['New group','later'],['New community','later'],['Broadcast lists','page:broadcast'],['Linked devices','page:linked'],['Starred','page:starred'],['Read all','readall'],['Settings','open:settings']]
        : [['View contact / group info','info'],['Search','later'],['Media, links and docs','later'],['Mute notifications','later'],['Disappearing messages','later'],['Wallpaper','later'],['Clear chat','clear'],['Delete chat','delchat']];
      return `<div class="scrim" style="background:transparent" data-a="close"><div class="menu" data-stop="1">${items.map(([l, a]) => `<button data-a="mi" data-v="${a}" class="${a === 'open:settings' ? H('mi-settings') : ''}">${l}</button>`).join('')}</div></div>`;
    }
    if (o.t === 'story') { const s = STATUSES.find(x => x.id === o.id); return `<div class="story" style="background:${s.bg}" data-a="close"><div class="bars"><i><b></b></i></div><div style="display:flex;align-items:center;gap:10px;padding:10px 12px"><div class="av sm" style="background:${s.col}">${s.init}</div><div><div style="font-weight:500">${esc(s.name)}</div><div style="font-size:12px;opacity:.85">${s.time}</div></div></div><div class="txt">${esc(s.txt)}</div><div style="text-align:center;padding:14px;font-size:13px;opacity:.8">Tap to close</div></div>`; }
    return '';
  }

  /* ---------------- render ---------------- */
  const keyOf = t => JSON.stringify(t);
  let lastKey = null;
  function render(newScreen) {
    const t = top();
    const scr = root.querySelector('.scr'), conv = root.querySelector('#wa-conv');
    const keep = {s: scr ? scr.scrollTop : 0, c: conv ? conv.scrollTop : 0};
    const focused = document.activeElement && root.contains(document.activeElement) ? document.activeElement.id : null;
    const msgVal = root.querySelector('#wa-msg') ? root.querySelector('#wa-msg').value : '';
    let v;
    switch (t.s) {
      case 'home': v = home(); break;
      case 'chat': v = chatScreen(t.id); break;
      case 'meta': v = chatScreen('meta'); break;
      case 'info': v = infoScreen(t.id); break;
      case 'settings': v = settings(); break;
      case 'chats': v = chatsSettings(); break;
      case 'storage': v = storageData(); break;
      case 'manage': v = manage(); break;
      case 'mchat': v = manageChat(t.id); break;
      case 'backup': v = backupScreen(); break;
      case 'choose': v = choose(); break;
      case 'page': v = t.id === 'starred' ? starredPage() : genericPage(t.id); break;
      case 'transfer': v = transferScreen(); break;
      case 'newchat': v = newChat(); break;
      case 'archived': v = archived(); break;
      case 'lockedlist': v = {body: `${bar('Locked chats')}<div class="note" style="text-align:center">Unlocked with your fingerprint (simulated).</div>${listed().filter(c => locked(c.id)).map(chatRow).join('')}`}; break;
      case 'community': v = community(t.id); break;
      case 'channel': v = channel(t.id); break;
      case 'camera': v = camera(); break;
      case 'callscr': v = callScreen(); break;
      case 'restore': v = restore(); break;
      default: v = home();
    }
    const dark = v.dark;
    root.className = 'wa';
    root.innerHTML = `<div class="st" style="${dark ? 'background:#000;color:#fff' : ''}"><span>9:41</span><span>5G ▮▮▮ 82%</span></div>
      <div class="scr" style="${v.full ? 'overflow:hidden' : ''}">${v.body}</div>${v.after || ''}${v.fabs || ''}${overlay()}
      ${S.toast ? `<div class="toast" role="status">${esc(S.toast)}</div>` : ''}
      <button class="gest" data-a="back" aria-label="Back" style="${dark ? 'background:#000' : ''}"><i></i></button>`;
    const k = keyOf(t);
    const nscr = root.querySelector('.scr'), nconv = root.querySelector('#wa-conv');
    if (k === lastKey && !newScreen) { if (nscr) nscr.scrollTop = keep.s; if (nconv) nconv.scrollTop = keep.c; }
    else if (nconv) nconv.scrollTop = nconv.scrollHeight;
    lastKey = k;
    const m = root.querySelector('#wa-msg'); if (m && msgVal) { m.value = msgVal; syncSend(); }
    if (focused) { const f = root.querySelector('#' + focused); if (f) { f.focus(); if (f.setSelectionRange && f.value) f.setSelectionRange(f.value.length, f.value.length); } }
    const h = root.querySelector('.pulse'); if (h && opts.scrollHint !== false) { const sc = root.querySelector('.scr'); if (sc && sc.contains(h)) { const r = h.getBoundingClientRect(), sr = sc.getBoundingClientRect(); if (r.top < sr.top || r.bottom > sr.bottom) sc.scrollTop += r.top - sr.top - sr.height / 3; } }
    listeners.forEach(fn => fn(S));
  }
  function syncSend() {
    const m = root.querySelector('#wa-msg'), b = root.querySelector('.send'); if (!m || !b) return;
    const has = !!m.value.trim();
    b.innerHTML = ic(has ? 'send' : 'mic');
    const cam = root.querySelector('.wa-cam'); if (cam) cam.style.display = has ? 'none' : '';
  }
  function nowT() { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
  function sendMsg(id) {
    const m = root.querySelector('#wa-msg'); const txt = m ? m.value.trim() : '';
    if (!txt) return toast('Hold to record a voice message');
    const c = chat(id);
    if (id.startsWith('c-') && !S.chats.includes(c)) { S.hidden = S.hidden.filter(x => x !== c); Object.assign(c, {gb: .001, vs: 0, time: nowT()}); S.chats.unshift(c); }
    c.msgs.push(['t', '', txt, nowT(), true]); c.time = nowT(); m.value = '';
    render(); syncSend();
    if (id === 'meta') setTimeout(() => {
      const q = txt.toLowerCase();
      const a = /backup|back up|storage|google/.test(q) ? 'Go to Settings › Chats › Chat backup › Chats to back up, and turn off chats you don\u2019t need backed up. They stay on your phone.' : 'I’m a stand-in for Meta AI in this prototype. Try asking about your chat backup.';
      S.meta.msgs.push(['t', 'Meta AI', a, nowT()]); if (top().s === 'meta') render();
    }, 700);
  }
  const _chat = chat;

  // A backup is one package that replaces the previous one, and only once it finishes.
  // It holds the chats switched on, plus, for chats switched off, only their ID, name and whether they had messages.
  const hasMsgs = c => c.msgs.some(m => m[0] !== 'day' && m[0] !== 'note');
  function makeSnap(everything) {
    const inc = S.chats.filter(c => everything || !S.excluded.has(c.id)), out = everything ? [] : S.chats.filter(c => S.excluded.has(c.id));
    return {when: S.lastOk, provider: S.provider, size: sizeOf(inc.map(c => c.id)), chats: JSON.parse(JSON.stringify(inc)), offSettings: [...S.excluded],
      off: Object.fromEntries(out.map(c => [c.id, hasMsgs(c)])),
      offMeta: out.map(c => ({id: c.id, name: c.name, kind: c.kind, members: c.members, groups: c.groups, col: c.col, init: c.init, exited: !!c.exited}))};
  }
  function finishRestore() {
    // Reinstalling wipes the phone's copy. What comes back is exactly the last successful backup.
    const sn = S.snap;
    if (S.fromLocal) {
      // The phone's local backup has every chat and the switches, so left-out chats come back with full history.
      S.chats = JSON.parse(JSON.stringify(S.local.chats)); S.hidden = JSON.parse(JSON.stringify(HIDDEN)); S.deleted = new Set();
      S.excluded = new Set(S.local.offSettings.filter(id => S.chats.some(c => c.id === id))); S.fromLocal = false;
      S.newphone = false; S.stack = [{s: 'home'}]; S.tab = 'chats'; render(true); return;
    }
    S.chats = JSON.parse(JSON.stringify(sn.chats)); S.hidden = JSON.parse(JSON.stringify(HIDDEN)); S.deleted = new Set();
    // A group that was switched off still has you as a member: its next message brings the chat back, from today.
    // A group you've exited sends you nothing, so it doesn't come back.
    sn.offMeta.filter(m => m.kind !== 'person' && m.kind !== 'business' && !m.exited).forEach(m => {
      const t = nowT(), had = sn.off[m.id];
      S.chats.unshift(Object.assign({}, m, {gb: .001, vs: 0, unread: 1, time: t, fresh: had, returned: true,
        msgs: [...(had ? [['note', '', 'Older messages of this chat were not included in backup.']] : []), ['day', '', 'Today'], ['t', 'Akshay', 'Venue confirmed: Koregaon Park, 23 Nov, 7 pm 🎉', t]]}));
    });
    // The switched-off list comes back too, so the choice carries over and the note shows only in those chats.
    S.excluded = new Set(Object.keys(sn.off)); S.lastOk = sn.when; S.backup = 'done';
    S.newphone = false; S.stack = [{s: 'home'}]; S.tab = 'chats'; render(true);
  }
  /* ---------------- events ---------------- */
  root.addEventListener('click', e => {
    const el = e.target.closest('[data-a]'); if (!el || !root.contains(el)) return;
    if (el.classList.contains('scrim') && e.target.closest('[data-stop]')) return;
    const a = el.dataset.a, v = el.dataset.v;
    switch (a) {
      case 'back': if (S.stack.length === 1 && S.tab !== 'chats' && !S.overlay) { S.tab = 'chats'; render(); } else back(); break;
      case 'close': S.overlay = null; render(); break;
      case 'later': toast('Not part of this prototype'); break;
      case 'tab': S.tab = v; S.q = ''; render(true); break;
      case 'filter': S.filter = v; render(); break;
      case 'cfilter': top().f = v; render(); break;
      case 'dismiss': S.bannerHidden = true; toast('You’ll find it in Settings › Chats › Chat backup'); break;
      case 'open': go(v); break;
      case 'page': if (v === 'chats') go('chats'); else if (v === 'storage') go('storage'); else if (v === 'transfer') { S.transfer = null; go('transfer'); } else go('page', {id: v}); break;
      case 'chat': { const c = _chat(v); if (c && c.unread) c.unread = 0; go('chat', {id: v}); break; }
      case 'info': go('info', {id: v || top().id}); break;
      case 'community': go('community', {id: v}); break;
      case 'channel': go('channel', {id: v}); break;
      case 'mchat': go('mchat', {id: v}); break;
      case 'camera': go('camera'); break;
      case 'shutter': toast('Photo taken'); break;
      case 'contact': { const ex = S.chats.find(c => c.name === v); if (ex) go('chat', {id: ex.id}); else { let h = S.hidden.find(c => c.name === v); if (!h) { h = {id: 'c-' + v.replace(/\W/g, ''), name: v, kind: 'person', col: '#3a7ca5', init: v.split(' ').filter(w => /^[A-Za-z]/.test(w)).map(w => w[0]).join(''), msgs: []}; S.hidden.push(h); } go('chat', {id: h.id}); } break; }
      case 'call': { const [id, vid] = v.split('|'); const c = _chat(id) || {name: id, col: '#7b5ea7', init: id.split(' ').filter(w => /^[A-Za-z]/.test(w)).map(w => w[0]).join(''), kind: 'person'}; S.call = {c, video: !!vid}; go('callscr'); setTimeout(() => { const s = root.querySelector('#wa-callst'); if (s) s.textContent = 'Ringing…'; }, 1500); break; }
      case 'story': S.overlay = {t: 'story', id: v}; S.seen.add(v); render(); setTimeout(() => { if (S.overlay && S.overlay.id === v) { S.overlay = null; render(); } }, 4000); break;
      case 'follow': S.following.has(v) ? S.following.delete(v) : S.following.add(v); render(); break;
      case 'menu': S.overlay = {t: 'menu', where: v}; render(); break;
      case 'mi': { S.overlay = null; const [x, y] = v.split(':'); if (x === 'open') go(y); else if (x === 'page') go('page', {id: y}); else if (x === 'readall') { S.chats.forEach(c => c.unread = 0); toast('All chats marked as read'); } else if (x === 'info') go('info', {id: top().id});
        else if (x === 'clear') { S.overlay = {t: 'clear', id: top().id}; render(); }
        else if (x === 'delchat') { S.overlay = {t: 'delchat', id: top().id}; render(); } else toast('Not part of this prototype'); break; }
      case 'readall': break;
      case 'tog': if (S.excluded.has(v)) { S.excluded.delete(v); render(); if (S.backup === 'running') toast('Changes will apply to your next backup'); } else { S.overlay = {t: 'confirm', id: v}; render(); } break;
      case 'lockedtap': toast('Locked chats stay hidden. Open the chat to change this.'); break;
      case 'leaveout': S.excluded.add(v); S.overlay = null; if (S.backup === 'done') S.backup = 'pending'; render(); if (S.backup === 'running') toast('Changes will apply to your next backup'); break;
      case 'ctog': { const [id, k] = v.split('|'); const t = S.chatToggles[id] = S.chatToggles[id] || {}; t[k] = k === 'vis' ? t[k] === false : !t[k]; render(); if (k === 'lock' && t[k]) toast('Chat locked on this device'); break; }
      case 'stog': S[v] = v === 'mvis' || v === 'keepArch' ? S[v] === false : !S[v]; render(); break;
      case 'vid': S.incVideos = !S.incVideos; render(); toast(S.incVideos ? 'Videos will be backed up again' : 'Videos from every chat, including Aai and family, won’t be backed up'); break;
      case 'freq': S.overlay = {t: 'freq'}; render(); break;
      case 'setfreq': S.freq = v; S.overlay = null; render(); break;
      case 'provider': S.overlay = {t: 'provider'}; render(); break;
      case 'setprov': if (v === S.provider) { S.overlay = null; render(); } else if (v === 'WhatsApp') { S.overlay = null; render(); toast('WhatsApp cloud storage isn\u2019t available on your account yet'); } else { S.provider = 'Google'; S.overlay = null; S.backup = 'pending'; render(); render(); } break;
      case 'provwaok': S.provider = 'WhatsApp'; S.e2e = true; S.overlay = null; S.backup = 'pending'; render(); toast('Your chats will now be saved to WhatsApp.'); break;
      case 'e2e': toast(S.e2e ? 'Encrypted backup is on' : 'Set up with a passkey, password or 64-digit key'); break;
      case 'backupnow':
        S.local = makeSnap(true); S.local.when = 'Today, ' + nowT();   // the local copy on the phone is made either way
        if (!fits()) { S.backup = 'failed'; render(); toast('Couldn\u2019t complete backup. Your Google Account storage is full.'); break; }
        { const pending = makeSnap();
          // Space is freed first: media used only by chats now switched off is deleted from the cloud copy,
          // then new messages and media are uploaded. That is what lets a full account recover.
          const prevIds = new Set(S.snap.chats.map(c => c.id));
          const prevIncl = S.chats.filter(c => prevIds.has(c.id)).map(c => c.id);
          S.freeing = Math.max(0, sizeOf(prevIncl) - sizeOf(prevIncl.filter(id => !S.excluded.has(id))));
          S.phase = S.freeing > 0 ? 'remove' : 'upload'; S.backup = 'running'; render();
          if (S.phase === 'remove') setTimeout(() => { if (S.backup === 'running') { S.phase = 'upload'; render(); requestAnimationFrame(() => requestAnimationFrame(() => { const p = root.querySelector('#wa-prog'); if (p) p.style.width = '100%'; })); } }, 900);
        requestAnimationFrame(() => requestAnimationFrame(() => { const p = root.querySelector('#wa-prog'); if (p) p.style.width = '100%'; }));
        setTimeout(() => { S.backup = 'done'; S.lastOk = 'Today, ' + nowT(); pending.when = S.lastOk; S.snap = pending; render(); toast('Backup complete'); }, S.phase === 'remove' ? 2300 : 1500); } break;
      case 'delmedia': S.overlay = {t: 'delmedia', id: v}; render(); break;
      case 'delok': { const c = _chat(v); c.gb = 0.02; S.deleted.add(v); S.overlay = null; render(); toast('Media deleted from this phone'); break; }
      case 'restorego': S.restoring = true; render(); requestAnimationFrame(() => requestAnimationFrame(() => { const p = root.querySelector('#wa-prog'); if (p) p.style.width = '100%'; })); setTimeout(() => { S.restoring = false; S.restored = true; render(); }, 1500); break;
      case 'restoredone': finishRestore(); break;
      case 'restorelocal': S.fromLocal = true; S.restoring = true; render(); requestAnimationFrame(() => requestAnimationFrame(() => { const p = root.querySelector('#wa-prog'); if (p) p.style.width = '100%'; })); setTimeout(() => { S.restoring = false; S.restored = true; render(); }, 1500); break;
      case 'send': sendMsg(v); break;
      case 'star': { const [id, i] = v.split('|'); const m = _chat(id).msgs[+i]; if (!m || m[0] === 'day' || m[0] === 'note') break; while (m.length < 5) m.push(m.length === 4 ? false : ''); m[5] = !m[5]; render(); toast(m[5] ? 'Message starred' : 'Removed from starred'); break; }
      case 'xfer': S.transfer = v; render(); if (v === 'moving') { requestAnimationFrame(() => requestAnimationFrame(() => { const p = root.querySelector('#wa-prog'); if (p) p.style.width = '100%'; })); setTimeout(() => { S.transfer = 'done'; render(); }, 1500); } break;
      case 'xferdone': { const n = S.excluded.size; S.transfer = null; S.stack = [{s: 'home'}]; S.tab = 'chats'; render(true); break; }
      case 'exit': S.overlay = {t: 'exit', id: v}; render(); break;
      case 'exitok': { const c = _chat(v); c.exited = true; c.msgs.push(['note', '', 'You left']); S.overlay = null; render(); break; }
      case 'clearok': { const c = _chat(v); c.msgs = []; c.gb = .001; c.unread = 0; S.overlay = null; render(); toast('Chat cleared'); break; }
      case 'delchatok': { S.chats = S.chats.filter(c => c.id !== v); S.excluded.delete(v); S.overlay = null; S.stack = [{s: 'home'}]; render(true); toast('Chat deleted'); break; }
    }
  });
  root.addEventListener('input', e => {
    if (e.target.id === 'wa-q') { S.q = e.target.value; render(); }
    if (e.target.id === 'wa-msg') syncSend();
  });
  root.addEventListener('keydown', e => {
    if (e.target.id === 'wa-msg' && e.key === 'Enter') { e.preventDefault(); sendMsg(top().s === 'meta' ? 'meta' : top().id); }
    if (e.key === 'Escape') back();
  });
  // chat() lookup also covers Meta AI
  fresh(opts.preset);
  render(true);

  return {
    state: S, kept, fits, total, FREE, saving,
    reset(preset) { fresh(preset); lastKey = null; render(true); },
    set(patch) { Object.assign(S, patch); render(true); },
    hint(k) { S.hint = k; render(); },
    finishRestore() { S.restored = true; finishRestore(); },
    reinstall() {
      S.sameDevice = true; S.fromLocal = false; S.newphone = true; S.restored = false; S.restoring = false; S.overlay = null; S.stack = [{s: 'restore'}]; render(true); return true;
    },
    onChange(fn) { listeners.push(fn); },
    top
  };
}
window.WA = {mount};
})();
