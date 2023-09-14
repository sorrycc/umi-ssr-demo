import type { UmiApiRequest, UmiApiResponse } from 'umi';

// TODO: not enabled yet
export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  if (req.method === 'GET') {
    const data = ['todo1', 'todo2'];
    res.status(200).json({ success: true, data });
  }
}