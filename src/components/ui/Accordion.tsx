import React from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="group border border-neutral-200 rounded-lg bg-white overflow-hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-neutral-900 hover:bg-neutral-50 min-h-[44px]">
            {item.question}
            <span className="transform transition-transform group-open:rotate-180 text-neutral-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </summary>
          <div className="p-5 pt-0 text-neutral-700 leading-relaxed border-t border-neutral-100">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
