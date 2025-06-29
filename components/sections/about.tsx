import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function About() {
    const t = useTranslations("AboutPage.About");

    return (
        <section className="pb-16 pt-32 md:pb-32 md:pt-48">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">{t("title")}</h2>
                    <div className="space-y-6">
                        <p>{t("description")}</p>

                        <Button asChild variant="secondary" size="sm" className="gap-1 pe-1.5">
                            <Link href="/contact">
                                <span>{t("cta")}</span>
                                <ChevronRight className="size-2 rtl:hidden" />
                                <ChevronLeft className="size-2 ltr:hidden" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
