const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Pavun\\.gemini\\antigravity\\brain\\8d90588d-affd-41b0-ac41-540a5420b455';
const destDir = path.join(__dirname, 'public');

const files = [
  { prefix: 'vcb_panels', name: 'vcb_panels.png' },
  { prefix: 'db_boxes', name: 'db_boxes.png' },
  { prefix: 'cable_trays', name: 'cable_trays.png' },
  { prefix: 'busbar_processor', name: 'busbar_processor.png' },
  { prefix: 'electrical_spares', name: 'electrical_spares.png' },
  { prefix: 'substation_scada', name: 'substation_scada.png' }
];

const allFiles = fs.readdirSync(srcDir);

for (const request of files) {
  const match = allFiles.find(f => f.startsWith(request.prefix) && f.endsWith('.png'));
  if (match) {
    fs.copyFileSync(path.join(srcDir, match), path.join(destDir, request.name));
    console.log(`Copied ${match} to ${request.name}`);
  } else {
    console.error(`Could not find file for ${request.prefix}`);
  }
}
