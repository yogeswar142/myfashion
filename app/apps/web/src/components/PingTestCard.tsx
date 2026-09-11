'use client';

import { useState, useEffect } from 'react';
import { pingWorker, getWorkerBaseUrl } from '@/lib/api-client';
import { PingResponse } from '@myfashion/shared-types';
import { Activity, CheckCircle2, AlertCircle, RefreshCw, Server, Send } from 'lucide-react';

export function PingTestCard() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<PingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [echoText, setEchoText] = useState('hello-worker');

  const triggerPing = async () => {
    setLoading(true);
    setError(null);
    const start = performance.now();
    try {
      const data = await pingWorker(echoText || undefined);
      setLatencyMs(Math.round(performance.now() - start));
      setResponse(data);
    } catch (err: any) {
      setLatencyMs(Math.round(performance.now() - start));
      setError(err?.message || 'Failed to connect to Worker');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    triggerPing();
  }, []);

  const workerUrl = getWorkerBaseUrl();

  return (
    <div className="bg-neutral-900/90 rounded-xl p-4 border border-neutral-800 shadow-lg mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Server size={18} className="text-amber-400" />
          <h2 className="text-sm font-semibold tracking-wide text-neutral-200">
            Worker Connection Status
          </h2>
        </div>
        {loading ? (
          <span className="flex items-center text-xs text-amber-400">
            <RefreshCw size={12} className="animate-spin mr-1" /> Testing...
          </span>
        ) : response ? (
          <span className="flex items-center text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
            <CheckCircle2 size={12} className="mr-1" /> Connected ({latencyMs}ms)
          </span>
        ) : (
          <span className="flex items-center text-xs text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-800/60">
            <AlertCircle size={12} className="mr-1" /> Disconnected
          </span>
        )}
      </div>

      <p className="text-xs text-neutral-400 mb-3 font-mono break-all">
        Target: <span className="text-neutral-300">{workerUrl}/api/ping</span>
      </p>

      {/* Interactive Echo & Test Button */}
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={echoText}
          onChange={(e) => setEchoText(e.target.value)}
          placeholder="Echo parameter (optional)"
          className="flex-1 bg-neutral-950 text-neutral-200 text-xs px-3 py-2 rounded-lg border border-neutral-800 focus:outline-none focus:border-amber-400/60"
        />
        <button
          onClick={triggerPing}
          disabled={loading}
          className="flex items-center gap-1.5 px-3 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-lg text-xs font-medium border border-amber-500/30 transition-colors disabled:opacity-50"
        >
          <Send size={12} />
          <span>Ping</span>
        </button>
      </div>

      {/* Response Display */}
      {response && (
        <div className="mt-2 bg-neutral-950 rounded-lg p-3 border border-neutral-800/80">
          <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1 border-b border-neutral-800 pb-1">
            <span>GET /api/ping 200 OK</span>
            <span className="text-neutral-400">env: {response.environment}</span>
          </div>
          <pre className="text-[11px] font-mono text-emerald-300 whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

      {error && (
        <div className="mt-2 bg-rose-950/30 border border-rose-900/50 rounded-lg p-3">
          <div className="text-xs text-rose-300 font-medium mb-1">Connection Error</div>
          <p className="text-[11px] text-rose-400 font-mono break-all">{error}</p>
          <p className="text-[10px] text-neutral-500 mt-2">
            Tip: Ensure Cloudflare Worker is running locally on port 8787 via{' '}
            <code className="text-neutral-400">npm run dev:worker</code> or{' '}
            <code className="text-neutral-400">wrangler dev</code>.
          </p>
        </div>
      )}
    </div>
  );
}
