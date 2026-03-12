import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Brain, Layers, RefreshCw, GraduationCap,
  BarChart3, Zap, Database, Users, FileText,
  ShieldCheck, HelpCircle, Phone,
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
  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);
  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);
  return scrolled;
}

// ─── Section scroll hook ──────────────────────────────────────────────────────
function useSectionScroll() {
  const navigate = useNavigate();
  return React.useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  }, [navigate]);
}

// ─── Nav data ─────────────────────────────────────────────────────────────────
const productLinks: LinkItem[] = [
  { title: 'Daxor ERP', sectionId: 'product', icon: Brain, description: 'AI-native ERP platform for modern enterprises' },
  { title: 'AI Assistant', sectionId: 'product', icon: Zap, description: 'Your 24×7 virtual CFO/COO powered by AI' },
  { title: 'Data Assistant', sectionId: 'product', icon: Database, description: 'Natural language queries across all modules' },
  { title: 'Analytics', sectionId: 'product', icon: BarChart3, description: 'Real-time dashboards and predictive insights' },
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
];

const companyLinks2: LinkItem[] = [
  { title: 'Help Center', href: '#', icon: HelpCircle },
  { title: 'Contact Sales', sectionId: 'contact', icon: Phone },
];

// ─── ListItem ─────────────────────────────────────────────────────────────────
function ListItem({
  title, description, icon: Icon, sectionId, href, onClick,
}: LinkItem & { onClick?: () => void }) {
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

  const cls = "w-full flex flex-row gap-x-3 hover:bg-accent hover:text-accent-foreground rounded-sm p-2 cursor-pointer transition-colors";

  if (href) {
    return <Link to={href} className={cls}>{inner}</Link>;
  }
  return (
    <button className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

// ─── Mobile portal menu ───────────────────────────────────────────────────────
type MobileMenuProps = React.ComponentProps<'div'> & { open: boolean };

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;
  return createPortal(
    <div
      id="mobile-menu"
      className="bg-background/95 backdrop-blur-lg fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn('data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out size-full p-4', className)}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const scrollTo = useSectionScroll();

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (sectionId?: string) => {
    setOpen(false);
    if (sectionId) scrollTo(sectionId);
  };

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-200',
      scrolled && 'bg-background/95 backdrop-blur-lg border-border supports-[backdrop-filter]:bg-background/80',
    )}>
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">

        {/* Left: logo + desktop nav */}
        <div className="flex items-center gap-5">
          <Link to="/" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
            DaxorAI<span className="text-muted-foreground">.</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>

              {/* Product */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm">Product</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1">
                  <ul className="bg-popover grid w-[480px] grid-cols-2 gap-1 rounded-md border p-2 shadow">
                    {productLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <ListItem {...item} onClick={() => handleNav(item.sectionId)} />
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="p-2 pt-1">
                    <p className="text-muted-foreground text-xs">
                      Interested?{' '}
                      <button onClick={() => handleNav('contact')} className="text-foreground font-medium hover:underline">
                        Schedule a demo
                      </button>
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm">Services</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1">
                  <ul className="bg-popover grid w-[480px] grid-cols-2 gap-1 rounded-md border p-2 shadow">
                    {servicesLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <ListItem {...item} onClick={() => handleNav(item.sectionId)} />
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm">Company</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1">
                  <div className="grid w-[420px] grid-cols-2 gap-2">
                    <ul className="bg-popover space-y-1 rounded-md border p-2 shadow">
                      {companyLinks.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <ListItem {...item} onClick={() => handleNav(item.sectionId)} />
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-1 p-2">
                      {companyLinks2.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <ListItem {...item} onClick={() => handleNav(item.sectionId)} />
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing — direct link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/pricing" className="px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors block">
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm">Log in</Button>
          <Button size="sm" className="rounded-full px-5" onClick={() => handleNav('contact')}>
            Request Demo
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2 py-1">Product</p>
          {productLinks.map((l) => <ListItem key={l.title} {...l} onClick={() => handleNav(l.sectionId)} />)}
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2 py-1 mt-2">Services</p>
          {servicesLinks.map((l) => <ListItem key={l.title} {...l} onClick={() => handleNav(l.sectionId)} />)}
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2 py-1 mt-2">Company</p>
          {[...companyLinks, ...companyLinks2].map((l) => <ListItem key={l.title} {...l} onClick={() => handleNav(l.sectionId)} />)}
          <Link to="/pricing" onClick={() => setOpen(false)} className="flex items-center gap-3 px-2 py-2 text-sm font-medium hover:bg-accent rounded-sm transition-colors mt-1">
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
