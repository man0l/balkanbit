import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Axend — Support | BalkanBit",
  description:
    "Support for the Axend mobile application: contact us, manage or cancel your subscription, restore purchases, and delete your data.",
};

const SUPPORT_EMAIL = "manol@balkanbit.app";

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

function MailLink() {
  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}`}
      className="text-[#4f8fff] hover:underline"
    >
      {SUPPORT_EMAIL}
    </a>
  );
}

export default function AxendSupport() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-white/[0.07]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="font-mono text-lg font-bold">
            <span className="text-[#4f8fff]">Balkan</span>Bit
          </Link>
          <span className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase">
            Support
          </span>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase mb-4">
          Axend
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Support
        </h1>
        <p className="text-sm text-[#8ca0c8] mb-12">
          Help with the Axend mobile application for iOS and Android
        </p>

        <div className="mb-12 rounded-lg border border-white/[0.07] bg-white/[0.02] p-6">
          <h2 className="text-lg font-semibold text-white mb-2">
            Contact us
          </h2>
          <p className="text-[15px] leading-relaxed text-[#8ca0c8]">
            Email <MailLink /> and we will reply within 2 business days. Tell
            us your device model and iOS or Android version and we can help
            faster.
          </p>
        </div>

        <Section title="Getting started">
          <p>
            Axend builds a grooming and self-care routine from a couple of
            guided photos. You choose the areas you want to work on — skin,
            hair, jawline, posture, smile — and the app turns them into daily
            routines you can keep, plus a baseline you can track over time.
          </p>
          <p>
            Scores are a personal starting point for measuring your own
            progress. They are not a ranking against other people.
          </p>
        </Section>

        <Section title="Scanning and photos">
          <p>
            <strong className="text-white">
              My scan failed or the score looks wrong.
            </strong>{" "}
            Even, bright lighting and a straight-on photo make the biggest
            difference. Avoid strong shadows, hats, and heavy filters. Retake
            the scan and the reading should settle.
          </p>
          <p>
            <strong className="text-white">Where are my photos stored?</strong>{" "}
            Your scans stay on your device. Photos are sent to our scoring
            service only to generate your plan and are not retained there
            afterwards. See the{" "}
            <Link
              href="/axend/privacy-policy"
              className="text-[#4f8fff] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <p>
            <strong className="text-white">How do I delete my photos?</strong>{" "}
            Open <em>Profile → Privacy → Delete my photos</em> in the app. This
            removes the stored photos from your device immediately.
          </p>
        </Section>

        <Section title="Subscriptions and billing">
          <p>
            <strong className="text-white">Managing or cancelling.</strong>{" "}
            Subscriptions are billed by Apple or Google, not by us. On iOS,
            open the Settings app, tap your name, then{" "}
            <em>Subscriptions</em>. On Android, open the Play Store, then{" "}
            <em>Payments &amp; subscriptions → Subscriptions</em>. Cancel at
            least 24 hours before the period ends to avoid renewal.
          </p>
          <p>
            <strong className="text-white">Restoring a purchase.</strong> If
            you reinstalled the app or changed device, open{" "}
            <em>Profile → Restore purchases</em>. Use the same Apple ID or
            Google account you originally purchased with.
          </p>
          <p>
            <strong className="text-white">Refunds.</strong> Purchases are
            processed by the app stores, so refunds are handled by them. On
            iOS, use{" "}
            <a
              href="https://reportaproblem.apple.com"
              className="text-[#4f8fff] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              reportaproblem.apple.com
            </a>
            . On Android, request a refund through Google Play. Email us if you
            need help with the request.
          </p>
        </Section>

        <Section title="Account and data">
          <p>
            Axend does not require an account or sign-in, so there is nothing
            to log into and no password to reset. Your data lives on your
            device.
          </p>
          <p>
            To have any data associated with your app installation deleted,
            email <MailLink /> from the address you want us to act on and we
            will confirm once it is done.
          </p>
        </Section>

        <Section title="Health and medical questions">
          <p>
            Axend is a cosmetic self-care tool. It is not a medical or
            diagnostic service, it does not assess health, and individual
            results vary. For anything concerning your skin, hair, or health,
            please speak with a qualified professional.
          </p>
        </Section>

        <Section title="Reporting a problem">
          <p>
            Found a bug, or something in the app that does not look right?
            Email <MailLink /> with a short description and a screenshot if you
            have one. We read every message.
          </p>
        </Section>

        <footer className="pt-8 border-t border-white/[0.07] text-sm text-[#8ca0c8]">
          <p>
            &ldquo;Pazaruvai Umno&rdquo; EOOD · UIC 206373314 · Sofia,
            Bulgaria ·{" "}
            <Link
              href="/axend/privacy-policy"
              className="text-[#4f8fff] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link
              href="/axend/terms"
              className="text-[#4f8fff] hover:underline"
            >
              Terms of Use
            </Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
