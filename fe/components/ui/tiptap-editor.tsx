"use client";

// components
import { Toggle } from "@/components/ui/toggle";

// tiptap
import HeadingTiptap from "@tiptap/extension-heading";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// lib
import { cn } from "@/lib/utils";

// icons
import { Bold, Heading1, Italic, List, ListOrdered } from "lucide-react";

interface ITiptapEditor {
  description: string;
  onChange: (richText: string) => void;
  className?: string;
}

const TiptapEditor = ({
  description,
  className,
  onChange,
  ...props
}: ITiptapEditor) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: "pl-8 list-disc",
          },
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: "pl-8 list-decimal",
          },
        },
      }),
      HeadingTiptap.configure({
        HTMLAttributes: {
          class: "text-2xl font-medium",
          levels: [1],
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: cn(
          "rounded-lg text-base border-default focus:border-muted focus:outline-none focus:ring-none overflow-auto text-muted placeholder:text-muted-light h-[16rem] p-2",
          className
        ),
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col justify-stretch min-h-[16rem] gap-2">
      <div className="py-2 flex gap-1">
        {/* Heading */}
        <Toggle
          pressed={editor.isActive("heading")}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className="border-default"
        >
          <Heading1 className="h-6 w-6" />
        </Toggle>

        {/* Bold */}
        <Toggle
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          className="border-default"
        >
          <Bold className="h-6 w-6" />
        </Toggle>

        {/* Italic */}
        <Toggle
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          className="border-default"
        >
          <Italic className="h-6 w-6" />
        </Toggle>

        {/* Bullet List */}
        <Toggle
          pressed={editor.isActive("bulletList")}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className="border-default"
        >
          <List className="h-6 w-6" />
        </Toggle>

        {/* Numbered List */}
        <Toggle
          pressed={editor.isActive("orderedList")}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          className="border-default"
        >
          <ListOrdered className="h-6 w-6" />
        </Toggle>
      </div>

      <EditorContent editor={editor} {...props} />
    </div>
  );
};

export default TiptapEditor;
