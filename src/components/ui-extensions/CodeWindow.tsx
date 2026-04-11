import { cn } from "@/lib/utils";

interface CodeWindowProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeWindow = ({ code, language = "typescript", className }: CodeWindowProps) => {
  const colorize = (line: string) => {
    return line
      .replace(/(\/\/.*)$/gm, '<span class="text-gray-500">$1</span>')
      .replace(/\b(const|let|var|function|return|import|from|export|default|if|else|async|await)\b/g, '<span class="text-purple-400">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-amber-400">$1</span>')
      .replace(/(["'`])(.*?)\1/g, '<span class="text-emerald-400">$1$2$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-amber-300">$1</span>');
  };

  return (
    <div className={cn("rounded-lg bg-graphite overflow-hidden shadow-lg", className)}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-gray-400 font-mono">{language}</span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed text-gray-300">
          <code dangerouslySetInnerHTML={{ __html: colorize(code) }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeWindow;
