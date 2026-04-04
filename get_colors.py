from PIL import Image
import collections

try:
    img = Image.open(r"d:\my projects\electrical\sres-website\public\logo.png")
    img = img.resize((150, 150))
    img = img.convert("RGBA")
    
    pixels = img.getdata()
    counter = collections.Counter()
    
    for r, g, b, a in pixels:
        # Ignore fully transparent pixels
        if a < 255:
            continue
        # Also let's ignore pure white and pure black (often background colors) to find the brand colors
        # Except if they are the ONLY colors
        counter[(r, g, b)] += 1
        
    print("Top 10 opaque colors:")
    for (r, g, b), count in counter.most_common(10):
        print(f"#{r:02x}{g:02x}{b:02x} - {count} pixels")
        
except Exception as e:
    print(f"Error: {e}")
