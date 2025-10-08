import Link from 'next/link';

// Define the props interface for the Footer component
interface FooterProps {
  copyright: string;
  links: { label: string; href: string }[];
}

export const Footer = ({ copyright, links }: FooterProps) => {
  return (
    <footer className="bg-ink text-paper py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0 font-inter text-slate">
          {copyright}
        </p>
        <nav>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate hover:text-paper font-inter transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};