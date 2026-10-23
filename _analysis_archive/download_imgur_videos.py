import urllib.request
import subprocess

videos = [
    ('video1_imgur.mp4', 'https://i.imgur.com/186Bh01.mp4'),
    ('video2_imgur.mp4', 'https://i.imgur.com/GnmcWC0.mp4')
]

headers = {'User-Agent': 'Mozilla/5.0'}

for fn, url in videos:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
        with open(fn, 'wb') as f:
            f.write(data)
        print(f'Downloaded {fn} ({len(data)} bytes)')

# Check ffmpeg info and generate poster thumbnails
for fn, poster in [('video1_imgur.mp4', 'poster1_imgur.jpg'), ('video2_imgur.mp4', 'poster2_imgur.jpg')]:
    cmd = f'ffmpeg -i {fn} -vframes 1 -q:v 2 {poster} -y'
    subprocess.run(cmd, shell=True)
    print(f'Generated {poster}')
