import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LooxMaxxing — Terms of Use | BalkanBit",
  description:
    "Terms of use for the LooxMaxxing mobile application, including subscription and auto-renewal terms.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-[#8ca0c8]">
        {children}
      </div>
    </section>
  );
}

export default function LooxMaxxingTerms() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-white/[0.07]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="font-mono text-lg font-bold">
            <span className="text-[#4f8fff]">Balkan</span>Bit
          </Link>
          <span className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase">
            Legal
          </span>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase mb-4">
          LooxMaxxing
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Terms of Use
        </h1>
        <p className="text-sm text-[#8ca0c8] mb-12">
          Effective date: July 3, 2026 · Applies to the LooxMaxxing mobile
          application for iOS and Android
        </p>

        <Section title="1. Agreement">
          <p>
            These Terms of Use are an agreement between you and
            &ldquo;Pazaruvai Umno&rdquo; EOOD, UIC 206373314, Sofia, Bulgaria
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the LooxMaxxing
            application (&ldquo;the App&rdquo;) you accept these terms. On
            iOS, Apple&rsquo;s standard Licensed Application End User License
            Agreement also applies to the extent it is not in conflict with
            these terms.
          </p>
        </Section>

        <Section title="2. The service">
          <p>
            The App generates appearance-related trait scores from photos you
            provide, plus self-improvement routines and stylized avatar
            renders. Scores are estimates produced by an AI model for
            entertainment and self-improvement purposes only. They are not
            medical, psychological, or professional advice, and no outcome is
            guaranteed.
          </p>
          <p>
            You must be at least 17 years old to use the App. You may only
            submit photos of yourself, and you are responsible for the content
            you submit.
          </p>
        </Section>

        <Section title="3. Subscriptions">
          <p>
            Premium features require the &ldquo;Looksmaxxing Pro&rdquo;
            auto-renewing subscription, purchased through the Apple App Store
            or Google Play:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Payment is charged to your App Store or Google Play account at
              confirmation of purchase.
            </li>
            <li>
              The subscription renews automatically unless cancelled at least
              24 hours before the end of the current period.
            </li>
            <li>
              You can manage or cancel your subscription anytime in your App
              Store or Google Play account settings, or via the in-app
              subscription management screen.
            </li>
            <li>
              Refunds are handled by Apple or Google under their respective
              store policies.
            </li>
          </ul>
        </Section>

        <Section title="4. Acceptable use">
          <p>
            You may not reverse engineer the App, use it to harass or demean
            others, submit photos of third parties without their consent, or
            attempt to circumvent scan limits or subscription entitlements.
          </p>
        </Section>

        <Section title="5. Privacy">
          <p>
            How we handle your photos and other data is described in the{" "}
            <Link
              href="/looxmaxxing/privacy-policy"
              className="text-[#4f8fff] hover:underline"
            >
              Privacy Policy
            </Link>
            , which forms part of these terms.
          </p>
        </Section>

        <Section title="6. Liability">
          <p>
            The App is provided &ldquo;as is&rdquo;. To the maximum extent
            permitted by law, we are not liable for indirect or consequential
            damages arising from your use of the App. Nothing in these terms
            limits rights you have as a consumer under Bulgarian or EU law.
          </p>
        </Section>

        <Section title="7. Changes and contact">
          <p>
            We may update these terms; material changes will be announced in
            the App. Continued use after changes take effect constitutes
            acceptance. Contact:{" "}
            <a
              href="mailto:privacy@balkanbit.app"
              className="text-[#4f8fff] hover:underline"
            >
              privacy@balkanbit.app
            </a>
            . These terms are governed by the law of the Republic of Bulgaria.
          </p>
        </Section>

        <footer className="pt-8 border-t border-white/[0.07] text-sm text-[#8ca0c8]">
          <p>
            &ldquo;Pazaruvai Umno&rdquo; EOOD · UIC 206373314 · Sofia,
            Bulgaria ·{" "}
            <Link
              href="/looxmaxxing/privacy-policy"
              className="text-[#4f8fff] hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
