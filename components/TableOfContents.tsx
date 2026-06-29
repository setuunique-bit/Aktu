import { List, ChevronRight } from "lucide-react";

type TocItem = {
  title: string;
  href: string;
};

interface TableOfContentsProps {
  items: TocItem[];
  buttonUrl?: string;
  buttonText?: string;
}

export default function TableOfContents({
  items,
  buttonUrl,
  buttonText,
}: TableOfContentsProps) {
  return (
    <aside className="hidden xl:block w-72 shrink-0">
      <div className="sticky top-24">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <List className="h-5 w-5 text-blue-600" />
            <h3 className="font-bold text-[#003366]">
              On This Page
            </h3>
          </div>

          <nav>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-start gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all"
                  >
                    <ChevronRight className="h-4 w-4 mt-0.5 text-gray-400 group-hover:text-blue-600 shrink-0" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {buttonUrl && (
            <div className="mt-5 pt-5 border-t border-gray-200">
              <a
                href={buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                {buttonText || "Visit Portal"}
              </a>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}