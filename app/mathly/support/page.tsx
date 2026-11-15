import type { Metadata } from "next";
import Link from "next/link";
import { Diamond } from "@/components";

export const metadata: Metadata = {
  title: "Mathly — Support | BalkanBit",
  description:
    "Support for the Mathly mobile application: contact us, scanning tips, manage or cancel your subscription, restore purchases, and delete your data.",
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
      <h2 className="text-h3 font-semibold text-text-1 mb-4">{title}</h2>
      <div className="space-y-4 text-body text-text-3">
        {children}
      </div>
    </section>
  );
}

function MailLink() {
  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}`}
      className="text-accent hover:text-accent-link-hover hover:underline"
    >
      {SUPPORT_EMAIL}
    </a>
  );
}

export default function MathlySupport() {
  return (
    <main id="main" className="min-h-screen">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2.5 font-extrabold text-lg tracking-tight">
            <Diamond className="bg-accent-brand" />
            BalkanBit
          </Link>
          <span className="text-label font-semibold uppercase tracking-[0.08em] text-accent">
            Support
          </span>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-label font-semibold uppercase tracking-[0.08em] text-accent mb-4">
          Mathly
        </p>
        <h1 className="text-h2 md:text-h1 font-bold text-text-1 mb-3">
          Support
        </h1>
        <p className="text-small text-text-3 mb-12">
          Help with the Mathly mobile application for iOS and Android
        </p>

        <div className="mb-12 rounded-lg border border-border bg-surface-1 p-6">
          <h2 className="text-lg font-semibold text-text-1 mb-2">Contact us</h2>
          <p className="text-body text-text-3">
            Email <MailLink /> and we will reply within 2 business days. Tell us
            your device model and iOS or Android version — and, if a solution
            looked wrong, the problem you scanned — and we can help faster.
          </p>
        </div>

        <Section title="Getting started">
          <p>
            Mathly solves math and science problems from a photo. Point the
            camera at a problem — printed or handwritten — and the app reads it,
            works through the solution one step at a time, plots a graph where
            it helps, and answers your follow-up questions.
          </p>
          <p>
            The short onboarding quiz sets your subjects, level, and preferred
            explanation style. You can retake it at any time from Settings.
          </p>
        </Section>

        <Section title="Scanning problems">
          <p>
            <strong className="text-text-1">
              The app misread my problem.
            </strong>{" "}
            Fill the frame with just the problem, keep the page flat, and avoid
            shadows across the text. If handwriting is being misread, retake the
            photo straight on. You can also type the problem instead of scanning
            it.
          </p>
          <p>
            <strong className="text-text-1">A step looks wrong.</strong> Mathly
            checks each answer before showing it, but AI can still make
            mistakes. Ask a follow-up question in the chat — it will rework the
            step — and please email us the problem so we can improve it.
          </p>
          <p>
            <strong className="text-text-1">Where do my photos go?</strong> They
            are sent over an encrypted connection to our solving service, used
            only to produce your solution, and not retained afterwards. Your
            solutions and history stay on your device. See the{" "}
            <Link
              href="/mathly/privacy-policy"
              className="text-accent hover:text-accent-link-hover hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </Section>

        <Section title="Subscriptions and billing">
          <p>
            <strong className="text-text-1">What Mathly Pro includes.</strong>{" "}
            Unlimited solving and follow-up chat, billed yearly ($39.99, with a
            3-day free trial for new subscribers) or weekly ($6.99). Full terms
            are on the{" "}
            <Link
              href="/mathly/terms"
              className="text-accent hover:text-accent-link-hover hover:underline"
            >
              Terms of Use
            </Link>{" "}
            page.
          </p>
          <p>
            <strong className="text-text-1">Managing or cancelling.</strong>{" "}
            Subscriptions are billed by Apple or Google, not by us. On iOS, open
            the Settings app, tap your name, then <em>Subscriptions</em>. On
            Android, open the Play Store, then{" "}
            <em>Payments &amp; subscriptions → Subscriptions</em>. Cancel at
            least 24 hours before the period ends to avoid renewal — including
            during a free trial.
          </p>
          <p>
            <strong className="text-text-1">Restoring a purchase.</strong> If you
            reinstalled the app or changed device, open{" "}
            <em>Settings → Restore purchases</em>. Use the same Apple ID or
            Google account you originally purchased with.
          </p>
          <p>
            <strong className="text-text-1">Refunds.</strong> Purchases are
            processed by the app stores, so refunds are handled by them. On iOS,
            use{" "}
            <a
              href="https://reportaproblem.apple.com"
              className="text-accent hover:text-accent-link-hover hover:underline"
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
            Mathly does not require an account or sign-in, so there is nothing
            to log into and no password to reset. Your solved problems, chats,
            and preferences live on your device.
          </p>
          <p>
            To erase everything, open <em>Settings → Delete all my data</em> in
            the app. To have any data associated with your app installation
            deleted, email <MailLink /> from the address you want us to act on
            and we will confirm once it is done.
          </p>
        </Section>

        <Section title="Using Mathly for schoolwork">
          <p>
            Mathly is a study aid built to show the method, not just the answer.
            Your school or institution sets its own rules on what help is
            allowed on assignments and exams — please follow them.
          </p>
        </Section>

        <Section title="Reporting a problem">
          <p>
            Found a bug, or something in the app that does not look right? Email{" "}
            <MailLink /> with a short description and a screenshot if you have
            one. We read every message.
          </p>
        </Section>

        <footer className="pt-8 border-t border-border text-small text-text-3">
          <p>
            &ldquo;Pazaruvai Umno&rdquo; EOOD · UIC 206373314 · Sofia,
            Bulgaria ·{" "}
            <Link
              href="/mathly/privacy-policy"
              className="text-accent hover:text-accent-link-hover hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link
              href="/mathly/terms"
              className="text-accent hover:text-accent-link-hover hover:underline"
            >
              Terms of Use
            </Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
