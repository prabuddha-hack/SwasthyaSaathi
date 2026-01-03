import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className=" grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <h2 className="text-lg font-bold">SwasthyaSaathi</h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            Revolutionizing Rural Healthcare
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="mb-4 text-sm font-medium">Solutions</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["SwasthyaMitra AI", "/health-check"],
              ["SwasthyaConnect", "/find-doctor"],
              ["Map", "/map"],
              ["SwasthyaPulse", "/news-help"],
              ["SwasthyaView", "/health-insights"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-sm font-medium">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/our-team"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                SwasthyaParivar
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="mb-4 text-sm font-medium">Connect</h3>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/prabuddha-hack"
              aria-label="GitHub"
              className="rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/prabuddhaxdev/"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SwasthyaSaathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
