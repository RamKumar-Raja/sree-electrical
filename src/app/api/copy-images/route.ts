import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const srcDir = 'C:\\Users\\Pavun\\.gemini\\antigravity\\brain\\8d90588d-affd-41b0-ac41-540a5420b455';
    const destDir = path.join(process.cwd(), 'public');

    const filesToCopy = [
      { prefix: 'vcb_panels', name: 'vcb_panels.png' },
      { prefix: 'db_boxes', name: 'db_boxes.png' },
      { prefix: 'cable_trays', name: 'cable_trays.png' },
      { prefix: 'busbar_processor', name: 'busbar_processor.png' },
      { prefix: 'electrical_spares', name: 'electrical_spares.png' },
      { prefix: 'substation_scada', name: 'substation_scada.png' },
      { prefix: 'corporate_office', name: 'corporate_office.png' }
    ];

    const allFiles = fs.readdirSync(srcDir);
    let copied = [];

    for (const req of filesToCopy) {
      const match = allFiles.find(f => f.startsWith(req.prefix) && f.endsWith('.png'));
      if (match) {
        fs.copyFileSync(path.join(srcDir, match), path.join(destDir, req.name));
        copied.push(`Copied ${match} to ${req.name}`);
      } else {
        copied.push(`Missing ${req.prefix}`);
      }
    }

    return NextResponse.json({ success: true, copied });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
