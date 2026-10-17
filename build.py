"""Builds index.html and walkthrough.html from src/ (inlines CSS and JS into single files)."""
import pathlib
root = pathlib.Path(__file__).parent
src = root / 'src'
page = (src / 'page.css').read_text()
phone = (src / 'phone.css').read_text()
app = (src / 'app.js').read_text()
HEAD = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
        '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);'
        'padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}'
        '[hidden]{display:none!important}</style></head><body>')
for name in ['index', 'walkthrough']:
    s = (src / f'{name}.src.html').read_text()
    s = s.replace('/*PAGECSS*/', page).replace('/*PHONECSS*/', phone).replace('/*APPJS*/', app)
    (root / f'{name}.html').write_text(HEAD + s + '</body></html>')
    print(f'{name}.html', len(s))
