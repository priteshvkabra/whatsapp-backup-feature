# WhatsApp Backup: choose which chats to back up

A product teardown and working prototype by **Pritesh Kabra**.

When free Google storage fills up, WhatsApp on Android stops backing up, and the only fixes today are to pay for more storage or delete photos and chats. This concept adds one control WhatsApp doesn't have: **choose which chats go into the backup**. Nothing is deleted from the phone, and Include videos, frequency and encryption work as they do today.

## Try it

- **Prototype** (`index.html`): a fully tappable WhatsApp for Android with the feature built in. Use **Reinstall WhatsApp** to test a restore and **Start over** to reset.
- **Guided walkthrough** (`walkthrough.html`): the core flow in 8 short steps.

Open either file in a browser, or turn on GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

## What's in the feature

| # | Screen | What changes |
|---|---|---|
| 1 | Chats tab | A notice when the backup stops, with **Choose chats** |
| 2 | Chats to back up | Every chat sorted by size, each with a switch |
| 3 | Turn off dialog | Says the chat stays on this phone but can't be restored |
| 4 | Ready to back up | The chosen chats fit, with **Back up now** |
| 5 | Chat backup settings | One new row: **Chats to back up** |
| 6 | Chat info | **Include in backup**, beside Chat lock |
| 7 | Chats list | A small mark on chats that aren't backed up |
| 8 | After restore | One line: "Older messages of this chat were not included in backup." |

Screenshots are in [`screenshots/`](screenshots).

## Project structure

```
index.html          built prototype (single file)
walkthrough.html    built guided walkthrough (single file)
src/app.js          phone engine: state, screens, backup and restore model
src/phone.css       WhatsApp Android styling, light and dark
src/page.css        page layout around the phone
src/*.src.html      page templates
build.py            inlines src/ into the two HTML files: python3 build.py
```

## Disclaimer

Unofficial concept. Independent product teardown, not affiliated with WhatsApp or Meta. Names, chats and sizes are examples.
