import { cn } from "@/lib/utils";

interface CodeWindowProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeWindow = ({ code, language = "typescript", className }: CodeWindowProps) => {
  const colorize = (line: string) => {
    return line
      .replace(/(\/\/.*)$/gm, '<span style="color:#6b7280">$1</span>')
      .replace(/\b(const|let|var|function|return|import|from|export|default|if|else|async|await)\b/g, '<span style="color:#a78bfa">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span style="color:#fbbf24">$1</span>')
      .replace(/(["'`])(.*?)\1/g, '<span style="color:#34d399">$1$2$1</span>')
      .replace(/\b(\d+)\b/g, '<span style="color:#fcd34d">$1</span>');
  };

  return (
    <div className={cn("rounded-lg bg-graphite overflow-hidden shadow-lg", className)}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ef4444" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#eab308" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#22c55e" }} />
        <span className="ml-2 text-xs font-mono" style={{ color: "#9ca3af" }}>{language}</span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed" style={{ color: "#d1d5db" }}>
          <code dangerouslySetInnerHTML={{ __html: colorize(code) }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeWindow;
