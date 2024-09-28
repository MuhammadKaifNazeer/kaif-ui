import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filePath } = req.query;
  
  if (!filePath) {
    return res.status(400).json({ message: 'File path is required' });
  }

  const absolutePath = path.join(process.cwd(), filePath as string);

  try {
    const code = fs.readFileSync(absolutePath, 'utf-8');
    res.status(200).send(code);
  } catch (error) {
    res.status(500).json({ message: 'Error reading file' });
  }
}
