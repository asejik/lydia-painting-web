"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";
import { Loader2 } from "lucide-react";

// Dynamically import react-quill-new to avoid SSR issues
const ReactQuill = dynamic(async () => {
  const { default: RQ } = await import("react-quill-new");
  const Quill = RQ.Quill;
  const Parchment = Quill.import("parchment") as any;

  // Create custom block-level style attributors
  const lineHeightStyle = new Parchment.StyleAttributor("lineheight", "line-height", {
    scope: Parchment.Scope.BLOCK,
    whitelist: ["1.0", "1.2", "1.5", "1.75", "2.0", "2.5"]
  });
  Quill.register(lineHeightStyle, true);

  const spacingStyle = new Parchment.StyleAttributor("paragraphspacing", "margin-bottom", {
    scope: Parchment.Scope.BLOCK,
    whitelist: ["0px", "0.5em", "1.0em", "1.5em", "2.0em", "2.5em"]
  });
  Quill.register(spacingStyle, true);

  return ({ forwardedRef, ...props }: any) => <RQ ref={forwardedRef} {...props} />;
}, { 
  ssr: false, 
  loading: () => <div className="h-64 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-lg"><Loader2 className="w-6 h-6 animate-spin text-brand-orange" /></div>
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [
          { lineheight: ["1.0", "1.2", "1.5", "1.75", "2.0", "2.5"] },
          { paragraphspacing: ["0px", "0.5em", "1.0em", "1.5em", "2.0em", "2.5em"] }
        ],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image", "video"],
        ["clean"],
      ],
    }),
    []
  );

  return (
    <div className="bg-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="h-64 mb-12" // mb-12 to account for the toolbar and bottom padding
      />
    </div>
  );
}
