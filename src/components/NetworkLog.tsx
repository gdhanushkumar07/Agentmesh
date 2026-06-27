// src/components/NetworkLog.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { subscribeToApiLogs, ApiLog, clearApiLogs } from "../lib/aicoo";
import { Terminal, Trash2, ChevronDown, ChevronRight, CheckCircle2, AlertTriangle } from "lucide-react";

export default function NetworkLog() {
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return subscribeToApiLogs((newLogs) => {
      setLogs(newLogs);
    });
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedLogId(expandedLogId === id ? null : id);
  };

  return (
    <div className="flex flex-col bg-charcoal text-cream border border-charcoal rounded-2xl h-full shadow-sm overflow-hidden min-h-[300px]">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-white/10 bg-charcoal-light">
        <div className="flex items-center gap-2">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow bg-yellow/10 px-2 py-0.5 rounded font-bold">S-02</span>
          <div className="flex items-center gap-1.5 text-xs font-syne uppercase font-bold text-cream">
            <Terminal className="w-4 h-4 text-yellow" />
            <span>Aicoo API Protocol Logs</span>
          </div>
        </div>
        <button
          onClick={clearApiLogs}
          className="text-white/50 hover:text-yellow p-1 hover:bg-white/5 rounded transition-all"
          title="Clear Logs"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Logs list */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-[11px] leading-relaxed space-y-2 grid-bg-dark bg-charcoal max-h-[400px]">
        {logs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-white/30 py-12 text-center">
            <Terminal className="w-8 h-8 opacity-20 mb-2" />
            <p className="font-syne text-xs uppercase tracking-wider">Awaiting API transaction...</p>
            <p className="text-[10px] mt-1 opacity-70">Trigger a scenario to initiate communication.</p>
          </div>
        ) : (
          logs.map((log) => {
            const isExpanded = expandedLogId === log.id;
            const isSuccess = log.status >= 200 && log.status < 300;
            return (
              <div key={log.id} className="border border-white/5 rounded-lg bg-charcoal-light/60 overflow-hidden">
                {/* Log summary row */}
                <div 
                  onClick={() => toggleExpand(log.id)}
                  className="flex items-center justify-between p-2.5 hover:bg-white/5 cursor-pointer transition-all select-none"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {isSuccess ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    )}
                    <span className="text-[10px] text-white/40 shrink-0">{log.timestamp}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                      log.method === 'POST' ? 'bg-yellow/15 text-yellow' : log.method === 'DELETE' ? 'bg-red-950/40 text-red-400' : 'bg-blue-950/40 text-blue-400'
                    }`}>
                      {log.method}
                    </span>
                    <span className="font-bold text-cream truncate">{log.endpoint}</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-2">
                    <span className={`text-[10px] font-bold ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                      {log.status}
                    </span>
                    {isExpanded ? <ChevronDown className="w-3 h-3 opacity-60" /> : <ChevronRight className="w-3 h-3 opacity-60" />}
                  </div>
                </div>

                {/* Log detail block */}
                {isExpanded && (
                  <div className="p-3 border-t border-white/5 bg-charcoal/80 space-y-2.5 text-white/80 overflow-x-auto">
                    {log.payload && Object.keys(log.payload).length > 0 && (
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-yellow/70 mb-1 font-bold">Request Payload:</div>
                        <pre className="text-[10px] p-2 bg-black/40 rounded border border-white/5 text-yellow-50/90 whitespace-pre-wrap">
                          {JSON.stringify(log.payload, null, 2)}
                        </pre>
                      </div>
                    )}
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-green-400/80 mb-1 font-bold">Aicoo Gateway Response:</div>
                      <pre className="text-[10px] p-2 bg-black/40 rounded border border-white/5 text-green-50/90 whitespace-pre-wrap">
                        {JSON.stringify(log.response, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
        <div ref={logEndRef} />
      </div>
    </div>
  );
}
