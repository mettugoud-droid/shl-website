const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();

const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX) || 5;
const RATE_LIMIT_WINDOW = Number(process.env.RATE_LIMIT_WINDOW) || 60000; // 1 minute

export function rateLimit(identifier: string): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now - record.lastRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(identifier, { count: 1, lastRequest: now });
    return { success: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  record.lastRequest = now;
  rateLimitMap.set(identifier, record);

  return { success: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now - value.lastRequest > RATE_LIMIT_WINDOW * 2) {
      rateLimitMap.delete(key);
    }
  }
}, 300000);
