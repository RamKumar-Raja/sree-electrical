import os
import re

directory = r"d:\my projects\electrical\sres-website\src\app"

replacements = [
    (r'blue-950', 'brand-dark'),
    (r'blue-900', 'brand-dark'),
    (r'blue-800', 'brand-dark'),
    (r'blue-700', 'brand-dark'),
    (r'blue-600', 'brand-primary'),
    (r'blue-500', 'brand-primary'),
    (r'blue-400', 'brand-primary'),
    (r'blue-300', 'brand-secondary'),
    (r'blue-200', 'brand-primary/40'),
    (r'blue-100', 'brand-primary/20'),
    (r'blue-50', 'brand-primary/10'),
    (r'indigo-700', 'brand-dark'),
    (r'indigo-600', 'brand-secondary'),
    (r'indigo-500', 'brand-secondary'),
    (r'indigo-400', 'brand-secondary'),
    (r'from-blue', 'from-brand-primary'),
    (r'via-blue', 'via-brand-primary'),
    (r'to-blue', 'to-brand-primary'),
    (r'from-indigo', 'from-brand-secondary'),
    (r'to-indigo', 'to-brand-secondary'),
]

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old_patt, new_patt in replacements:
                # To prevent replacing standard text, we can just do simple string replacements
                # for tailwind classes like 'bg-blue-600' -> 'bg-brand-primary'
                # but 'blue-600' is unique enough
                new_content = re.sub(r'(?<!\w)' + old_patt + r'(?!\w)', new_patt, new_content)
                new_content = new_content.replace(old_patt + '/', new_patt + '/')
            
            # Additional targeted fix for layout.tsx's selection text
            new_content = new_content.replace('selection:bg-brand-primary', 'selection:bg-brand-primary selection:text-black')
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
