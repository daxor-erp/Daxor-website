import * as React from "react";
import { format } from "date-fns";
import { X, CalendarCheck } from "lucide-react";
import { CalendarScheduler } from "@/components/ui/calendar-scheduler";
import { Button } from "@/components/ui/button";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  plan?: string;
}

export function BookingModal({ open, onClose, plan }: BookingModalProps) {
  const [confirmed, setConfirmed] = React.useState<{ date?: Date; time?: string } | null>(null);

  React.useEffect(() => {
    if (!open) setConfirmed(null);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border bg-background shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
              {plan ? `${plan} — ` : ""}Book a session
            </p>
            <h2 className="text-xl font-bold">Schedule a Demo</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Pick a date and time that works for you. Our team will confirm within 1 hour.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {confirmed ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <CalendarCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">You're booked!</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Demo confirmed for{" "}
                <span className="font-medium text-foreground">
                  {confirmed.date ? format(confirmed.date, "MMMM d, yyyy") : ""} at {confirmed.time}
                </span>
                . We'll send a calendar invite to your email shortly.
              </p>
              <Button className="rounded-full mt-2" onClick={onClose}>Done</Button>
            </div>
          ) : (
            <CalendarScheduler
              onConfirm={(val) => setConfirmed(val)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
