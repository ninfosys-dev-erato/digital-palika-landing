// Using standard <a> tags instead of Next.js Link to resolve bundling issue.

// Define the props interface for the Footer component
interface FooterProps {
  copyright: string;
  links: { label: string; href: string }[];
  onOfficesClick: () => void; // Add this prop to handle the click
}

export const Footer = ({ copyright, links, onOfficesClick }: FooterProps) => {
  return (
    <footer className="bg-ink text-paper py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-8">
        <p className="font-inter text-slate text-center md:text-left">
          {copyright}
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <nav>
            <ul className="flex items-center space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate hover:text-paper font-inter transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="hidden md:block w-px h-6 bg-slate/30"></div>
          
          {/* Add a button to open the offices modal */}
          <button
            onClick={onOfficesClick}
            className="text-slate hover:text-paper font-inter transition-colors"
          >
            Our Offices
          </button>
        </div>
      </div>
    </footer>
  );
};