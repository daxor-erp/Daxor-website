import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  buttonText: string;
  buttonIcon?: "arrow" | "phone";
  buttonVariant?: "default" | "outline";
  onButtonClick?: () => void;
}

interface PricingCardsProps {
  plans: PricingPlan[];
  badge?: string;
  title?: string;
  subtitle?: string;
}

function PricingCards({ plans, badge = "Pricing", title = "Prices that make sense!", subtitle }: PricingCardsProps) {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>{badge}</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">{title}</h2>
            {subtitle && <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">{subtitle}</p>}
          </div>

          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {plans.map((plan) => (
              <Card key={plan.name} className={`w-full rounded-md ${plan.highlighted ? "shadow-2xl" : ""}`}>
                <CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">{plan.name}</span>
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <p className="flex flex-row items-center gap-2 text-xl">
                      <span className="text-4xl">{plan.price}</span>
                      <span className="text-sm text-muted-foreground"> {plan.period}</span>
                    </p>
                    <div className="flex flex-col gap-4 justify-start">
                      {plan.features.map((f, i) => (
                        <div key={i} className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
                          <div className="flex flex-col">
                            <p>{f.title}</p>
                            <p className="text-muted-foreground text-sm">{f.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant={plan.buttonVariant ?? (plan.highlighted ? "default" : "outline")}
                      className="gap-4"
                      onClick={plan.onButtonClick}
                    >
                      {plan.buttonText}
                      {plan.buttonIcon === "phone"
                        ? <PhoneCall className="w-4 h-4" />
                        : <MoveRight className="w-4 h-4" />
                      }
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { PricingCards };
export type { PricingPlan, PricingFeature };
