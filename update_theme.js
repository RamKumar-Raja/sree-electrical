const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src', 'app');

const replacements = [
    { old: /blue-950/g, new: 'brand-dark' },
    { old: /blue-900/g, new: 'brand-dark' },
    { old: /blue-800/g, new: 'brand-dark' },
    { old: /blue-700/g, new: 'brand-dark' },
    { old: /blue-600/g, new: 'brand-primary' },
    { old: /blue-500/g, new: 'brand-primary' },
    { old: /blue-400/g, new: 'brand-primary' },
    { old: /blue-300/g, new: 'brand-secondary' },
    { old: /blue-200/g, new: 'brand-primary/40' },
    { old: /blue-100/g, new: 'brand-bg/50' },
    { old: /blue-50/g, new: 'brand-bg/20' },
    { old: /indigo-700/g, new: 'brand-dark' },
    { old: /indigo-600/g, new: 'brand-secondary' },
    { old: /indigo-500/g, new: 'brand-secondary' },
    { old: /indigo-400/g, new: 'brand-secondary' },
    { old: /from-blue/g, new: 'from-brand-primary' },
    { old: /via-blue/g, new: 'via-brand-primary' },
    { old: /to-blue/g, new: 'to-brand-primary' },
    { old: /from-indigo/g, new: 'from-brand-secondary' },
    { old: /to-indigo/g, new: 'to-brand-secondary' },
    { old: /selection:bg-blue-600\b/g, new: 'selection:bg-brand-primary selection:text-black' },
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content;
            
            for (const { old, new: replacement } of replacements) {
                newContent = newContent.replace(old, replacement);
            }
            
            // Fix any weird outputs from chained replaces
            newContent = newContent.replace(/from-brand-primary-[0-9]+/g, 'from-brand-primary');
            newContent = newContent.replace(/to-brand-primary-[0-9]+/g, 'to-brand-primary');
            newContent = newContent.replace(/via-brand-primary-[0-9]+/g, 'via-brand-primary');
            newContent = newContent.replace(/from-brand-secondary-[0-9]+/g, 'from-brand-secondary');
            newContent = newContent.replace(/to-brand-secondary-[0-9]+/g, 'to-brand-secondary');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(directory);
console.log('Update complete.');
