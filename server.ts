/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Secure Proxy of Instagram Data
  app.get('/api/instagram', async (req, res) => {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      // Guide configuration details to showcase in UI when unconfigured
      return res.json({
        success: false,
        configured: false,
        message: 'INSTAGRAM_ACCESS_TOKEN not detected in environment variables.',
        instructions: 'Please configure INSTAGRAM_ACCESS_TOKEN in AI Studio secrets panel to fetch Live API metrics.',
        fallbackData: {
          username: 'nakula_hari21',
          followers_count: 852,
          follows_count: 460,
          media_count: 32,
          name: 'Nakula Hari'
        }
      });
    }

    try {
      // Instagram Graph API Node call for creator or business profiles:
      // https://graph.instagram.com/v19.0/me?fields=id,username,followers_count,media_count,name&access_token=...
      const requestUrl = `https://graph.instagram.com/me?fields=id,username,followers_count,follows_count,media_count,name&access_token=${accessToken}`;
      
      const response = await fetch(requestUrl);
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Instagram API responded with status ${response.status}: ${errText}`);
      }

      const data = await response.json();
      return res.json({
        success: true,
        configured: true,
        username: data.username || 'nakula_hari21',
        followers_count: data.followers_count || 852,
        follows_count: data.follows_count || 460,
        media_count: data.media_count || 32,
        name: data.name || 'Nakula Hari'
      });

    } catch (err: any) {
      console.error('Error fetching Instagram Graph API:', err);
      return res.status(500).json({
        success: false,
        configured: true,
        error: err.message || 'Server error querying Instagram credentials',
        message: 'Could not connect to Instagram Graph Node. Check your Access Token.',
        fallbackData: {
          username: 'nakula_hari21',
          followers_count: 852,
          follows_count: 460,
          media_count: 32,
          name: 'Nakula Hari'
        }
      });
    }
  });

  // Serve Vite assets dynamically
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server launched on http://localhost:${PORT}`);
  });
}

startServer();
