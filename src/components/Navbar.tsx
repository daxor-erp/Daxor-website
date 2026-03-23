import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { cn } from '@/lib/utils';
import {
  Brain, Layers, RefreshCw, GraduationCap,
  BarChart3, Zap, Database, Users, FileText,
  ShieldCheck, HelpCircle, Phone, ChevronDown,
  type LucideIcon,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
type LinkItem = {
  title: string;
  sectionId?: string;
  href?: string;
  icon: LucideIcon;
  description?: string;
};

// ─── Scroll hook ──────────────────────────────────────────────────────────────
function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);
  const onScroll = React.useCallback(() => setScrolled(window.scrollY > threshold), [threshold]);
  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);
  return scrolled;
}

// ─── Section scroll ───────────────────────────────────────────────────────────
function useSectionScroll() {
  const navigate = useNavigate();
  return React.useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    }
  }, [navigate]);
}

// ─── Nav data ─────────────────────────────────────────────────────────────────
const productLinks: LinkItem[] = [
  { title: 'Daxor AI', href: '/product', icon: Brain, description: 'AI Assistant, forecasting & anomaly detection' },
  { title: 'AI Assistant', href: '/product', icon: Zap, description: 'Your 24×7 virtual CFO/COO powered by AI' },
  { title: 'Data Assistant', href: '/product', icon: Database, description: 'Natural language queries across all modules' },
  { title: 'Analytics', href: '/product', icon: BarChart3, description: 'Real-time dashboards and predictive insights' },
];

const servicesLinks: LinkItem[] = [
  { title: 'Cloud Consulting', sectionId: 'services', icon: Layers, description: 'AWS, Azure & Snowflake strategy' },
  { title: 'Data Migration', sectionId: 'migration', icon: RefreshCw, description: 'Informatica → Microsoft Fabric & beyond' },
  { title: 'Corporate Training', sectionId: 'training', icon: GraduationCap, description: 'Hands-on data engineering programmes' },
  { title: 'AI/ML Integration', sectionId: 'services', icon: Brain, description: 'Embed AI into your existing workflows' },
];

const companyLinks: LinkItem[] = [
  { title: 'About Us', sectionId: 'contact', icon: Users, description: 'Our story, team and mission' },
  { title: 'Case Studies', sectionId: 'testimonials', icon: FileText, description: "How we've helped enterprises succeed" },
  { title: 'Security', sectionId: 'contact', icon: ShieldCheck, description: 'Enterprise-grade data security' },
  { title: 'Help Center', href: '#', icon: HelpCircle },
  { title: 'Contact Sales', sectionId: 'contact', icon: Phone },
];

// ─── ListItem ─────────────────────────────────────────────────────────────────
function ListItem({ title, description, icon: Icon, href, onClick }: LinkItem & { onClick?: () => void }) {
  const cls = "w-full flex flex-row gap-x-3 hover:bg-accent hover:text-accent-foreground rounded-sm p-2 cursor-pointer transition-colors";
  const inner = (
    <>
      <div className="bg-background/40 flex aspect-square size-10 items-center justify-center rounded-md border shadow-sm flex-shrink-0">
        <Icon className="text-foreground size-4" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="font-medium text-sm">{title}</span>
        {description && <span className="text-muted-foreground text-xs leading-snug">{description}</span>}
      </div>
    </>
  );
  if (href) return <Link to={href} className={cls} onClick={onClick}>{inner}</Link>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

// ─── Click-only Dropdown ──────────────────────────────────────────────────────
function Dropdown({ label, open, onToggle, onClose, children }: {
  label: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className={cn(
          'inline-flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          open && 'bg-accent/50',
        )}
      >
        {label}
        <ChevronDown className={cn('h-3 w-3 transition-transform duration-200', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1.5 z-50 rounded-md border bg-popover text-popover-foreground shadow-lg overflow-hidden animate-in zoom-in-95 fade-in duration-150 origin-top-left">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Mobile portal menu ───────────────────────────────────────────────────────
function MobileMenu({ open, children }: { open: boolean; children: React.ReactNode }) {
  if (!open || typeof window === 'undefined') return null;
  return createPortal(
    <div
      id="mobile-menu"
      className="bg-background/95 backdrop-blur-lg fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"
    >
      <div className="animate-in zoom-in-97 ease-out size-full p-4 flex flex-col justify-between gap-2 overflow-y-auto">
        {children}
      </div>
    </div>,
    document.body,
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const scrolled = useScroll(10);
  const scrollTo = useSectionScroll();

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggle = (name: string) => setActiveDropdown((p) => (p === name ? null : name));
  const closeAll = () => setActiveDropdown(null);

  const handleNav = (sectionId?: string) => {
    setMobileOpen(false);
    closeAll();
    if (sectionId) scrollTo(sectionId);
  };

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-200',
      scrolled && 'bg-background/95 backdrop-blur-lg border-border supports-[backdrop-filter]:bg-background/80',
    )}>
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">

        {/* Logo + desktop nav */}
        <div className="flex items-center gap-5">
          <Link to="/" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
            DaxorAI<span className="text-muted-foreground">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Dropdown label="Product" open={activeDropdown === 'product'} onToggle={() => toggle('product')} onClose={closeAll}>
              <div className="p-2 w-[480px]">
                <div className="grid grid-cols-2 gap-1">
                  {productLinks.map((item) => <ListItem key={item.title} {...item} onClick={closeAll} />)}
                </div>
                <div className="px-2 pt-2 pb-1 border-t border-border mt-1">
                  <p className="text-muted-foreground text-xs">
                    Interested?{' '}
                    <button onClick={() => handleNav('contact')} className="text-foreground font-medium hover:underline">
                      Schedule a demo
                    </button>
                  </p>
                </div>
              </div>
            </Dropdown>

            <Dropdown label="Services" open={activeDropdown === 'services'} onToggle={() => toggle('services')} onClose={closeAll}>
              <div className="p-2 w-[480px] grid grid-cols-2 gap-1">
                {servicesLinks.map((item) => <ListItem key={item.title} {...item} onClick={() => handleNav(item.sectionId)} />)}
              </div>
            </Dropdown>

            <Dropdown label="Company" open={activeDropdown === 'company'} onToggle={() => toggle('company')} onClose={closeAll}>
              <div className="p-2 w-[360px] grid grid-cols-1 gap-1">
                {companyLinks.map((item) => <ListItem key={item.title} {...item} onClick={() => handleNav(item.sectionId)} />)}
              </div>
            </Dropdown>

            <Link to="/pricing" className="px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors" onClick={closeAll}>
              Pricing
            </Link>
          </div>
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm">Log in</Button>
          <Button size="sm" className="rounded-full px-5" onClick={() => handleNav('contact')}>
            Request Demo
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={mobileOpen} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu open={mobileOpen}>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2 py-1">Product</p>
          {productLinks.map((l) => <ListItem key={l.title} {...l} onClick={() => setMobileOpen(false)} />)}
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2 py-1 mt-2">Services</p>
          {servicesLinks.map((l) => <ListItem key={l.title} {...l} onClick={() => handleNav(l.sectionId)} />)}
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2 py-1 mt-2">Company</p>
          {companyLinks.map((l) => <ListItem key={l.title} {...l} onClick={() => handleNav(l.sectionId)} />)}
          <Link to="/pricing" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-2 py-2 text-sm font-medium hover:bg-accent rounded-sm transition-colors mt-1">
            Pricing
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <Button variant="outline" className="w-full">Log in</Button>
          <Button className="w-full rounded-full" onClick={() => handleNav('contact')}>Request Demo</Button>
        </div>
      </MobileMenu>
    </header>
  );
};

export default Navbar;
