import type { Metadata } from "next";
import Link from "next/link";
import { Diamond } from "@/components";

export const metadata: Metadata = {
  title: "Mathly — Privacy Policy | BalkanBit",
  description:
    "Privacy policy for the Mathly mobile application: what data we collect, how problem photos are processed and deleted, and your rights under the GDPR.",
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
      <h2 className="text-h3 font-semibold text-text-1 mb-4">{title}</h2>
      <div className="space-y-4 text-body text-text-3">
        {children}
      </div>
    </section>
  );
}

export default function MathlyPrivacyPolicy() {
  return (
    <main id="main" className="min-h-screen">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2.5 font-extrabold text-lg tracking-tight">
            <Diamond className="bg-accent-brand" />
            BalkanBit
          </Link>
          <span className="text-label font-semibold uppercase tracking-[0.08em] text-accent">
            Legal
          </span>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-label font-semibold uppercase tracking-[0.08em] text-accent mb-4">
          Mathly
        </p>
        <h1 className="text-h2 md:text-h1 font-bold text-text-1 mb-3">
          Privacy Policy
        </h1>
        <p className="text-small text-text-3 mb-12">
          Effective date: August 24, 2026 · Applies to the Mathly mobile
          application for iOS and Android (com.balkanbit.mathly)
        </p>

        <Section title="1. Who we are">
          <p>
            The Mathly application (&ldquo;the App&rdquo;) is published by
            &ldquo;Pazaruvai Umno&rdquo; EOOD (&ldquo;ПАЗАРУВАЙ УМНО&rdquo;
            ЕООД), a company registered in the Republic of Bulgaria with
            Unified Identification Code (UIC/ЕИК) 206373314, with registered
            address at Sofia 1343, Lyulin 2, bl. 235, vh. V, et. 2, ap. 81,
            Republic of Bulgaria (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;). We are the Data Controller under the EU General
            Data Protection Regulation (GDPR) and the Bulgarian Law on Personal
            Data Protection (PDPA). The App is developed and operated through
            the BalkanBit venture studio.
          </p>
          <p>
            Questions about this policy or your data:{" "}
            <a
              href="mailto:manol@balkanbit.app"
              className="text-accent hover:text-accent-link-hover hover:underline"
            >
              manol@balkanbit.app
            </a>
            .
          </p>
        </Section>

        <Section title="2. What the App does with your problem photos">
          <p>
            Mathly reads a math or science problem from a photo you capture
            with your camera or select from your photo library, then returns a
            step-by-step solution. Photos are handled as minimally as possible:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A photo is sent over an encrypted HTTPS connection to our solving
              service only when you explicitly scan a problem.
            </li>
            <li>
              Our service passes the image to our AI provider,{" "}
              <strong className="text-text-1">OpenAI</strong>, which reads and
              solves the problem — the same third-party AI service disclosed
              inside the App before your first submission.{" "}
              <strong className="text-text-1">
                We keep no copy of the photo once your solution is returned
              </strong>
              . OpenAI holds it briefly for abuse monitoring — up to 30 days —
              and then deletes it. Only the resulting text solution comes back
              to your device.
            </li>
            <li>
              The solution and the problem are then stored{" "}
              <strong className="text-text-1">locally on your device</strong> so
              you can find them in History. You can remove all of it at any time
              in <em>Settings → Delete all my data</em>.
            </li>
            <li>
              Photos are <strong className="text-text-1">never</strong> used to
              identify you, sold, shared for advertising, or used to train AI
              models.
            </li>
          </ul>
          <p>
            Please do not photograph documents containing personal information
            about you or others — the App only needs the problem itself.
          </p>
        </Section>

        <Section title="3. Categories of data we process">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-1">Problem photos and typed
              problems</strong> — processed transiently as described in
              Section 2.
            </li>
            <li>
              <strong className="text-text-1">Solutions, chats, and onboarding
              answers</strong> — your solved problems, follow-up conversations,
              subjects, level, goal, and explanation-style preferences are
              stored only on your device. They are removed when you delete your
              data in the App or uninstall the App. We keep no server-side copy
              of your history.
            </li>
            <li>
              <strong className="text-text-1">Preferences sent with a
              request</strong> — your level and explanation style accompany a
              scan so the answer is pitched correctly. They are used to produce
              the response and are not stored against any profile.
            </li>
            <li>
              <strong className="text-text-1">Anonymous app identifier</strong> —
              a random identifier generated by our subscription provider
              (RevenueCat) to associate your subscription with your device and
              to enforce fair-use limits. It is not linked to your name, email,
              or any account — the App has no user accounts.
            </li>
            <li>
              <strong className="text-text-1">Purchase data</strong> — if you
              subscribe, Apple or Google processes the payment. We and our
              processor RevenueCat receive the anonymous identifier, product
              purchased, subscription status, device platform, and locale. We
              never receive your payment card details.
            </li>
          </ul>
          <p>
            We do <strong className="text-text-1">not</strong> collect your name,
            email address, phone number, contacts, or location. The App contains
            no advertising and no third-party analytics SDKs, and it does not
            track you across other companies&rsquo; apps or websites.
          </p>
        </Section>

        <Section title="4. Lawful bases for processing">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-1">Performance of a contract (Art.
              6(1)(b) GDPR)</strong> — to read and solve the problems you submit
              and to manage your subscription and purchases.
            </li>
            <li>
              <strong className="text-text-1">Consent (Art. 6(1)(a)
              GDPR)</strong> — for access to your camera and photo library. You
              grant this through the operating system prompts and each scan is
              started only by your explicit action. You may withdraw consent at
              any time in your device settings.
            </li>
            <li>
              <strong className="text-text-1">Legitimate interest (Art. 6(1)(f)
              GDPR)</strong> — to prevent fraud and abuse of the solving service
              and to keep the service secure.
            </li>
            <li>
              <strong className="text-text-1">Legal obligation (Art. 6(1)(c)
              GDPR)</strong> — to keep transaction records required by tax and
              accounting law.
            </li>
          </ul>
        </Section>

        <Section title="5. Service providers">
          <p>
            We use a small number of processors, each bound by data processing
            agreements and receiving only what is necessary:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-1">OpenAI</strong> — our AI inference
              provider: processes the problem photo or text to produce a
              solution. Your content is <strong className="text-text-1">
              not</strong> used to train their models. It is retained only for
              abuse monitoring, for up to 30 days, and then deleted.
            </li>
            <li>
              <strong className="text-text-1">Cloud hosting provider</strong> —
              hosts our solving API.
            </li>
            <li>
              <strong className="text-text-1">RevenueCat, Inc.</strong> —
              subscription management (anonymous identifier, purchase and
              entitlement data).
            </li>
            <li>
              <strong className="text-text-1">Apple App Store / Google
              Play</strong> — payment processing under their own privacy
              policies.
            </li>
          </ul>
          <p>
            Where a provider processes data outside the European Economic Area,
            transfers are protected by the European Commission&rsquo;s Standard
            Contractual Clauses or an adequacy decision (including the EU–US
            Data Privacy Framework where applicable).
          </p>
        </Section>

        <Section title="6. Retention">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-1">Photos and problems</strong> — we
              keep no copy once your solution is returned. Our AI provider
              retains them for abuse monitoring for up to 30 days, then deletes
              them.
            </li>
            <li>
              <strong className="text-text-1">Solutions, chats, and answers on
              your device</strong> — kept until you delete them in the App or
              uninstall the App.
            </li>
            <li>
              <strong className="text-text-1">Purchase records</strong> — kept
              for the duration of your subscription and thereafter up to 10
              years where required by Bulgarian tax and accounting law.
            </li>
          </ul>
        </Section>

        <Section title="7. Your rights">
          <p>Under the GDPR you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>access the personal data we hold about you and receive a copy in a portable format;</li>
            <li>rectify inaccurate data and restrict or object to processing;</li>
            <li>withdraw consent at any time, without affecting prior processing;</li>
            <li>erasure (&ldquo;right to be forgotten&rdquo;), subject to legal retention duties.</li>
          </ul>
          <p>
            Because we hold no account data about you, most data lives only on
            your device: choosing{" "}
            <em>Settings → Delete all my data</em> or uninstalling the App
            removes it. For anything else — including deletion of purchase
            records associated with your anonymous identifier — email{" "}
            <a
              href="mailto:manol@balkanbit.app"
              className="text-accent hover:text-accent-link-hover hover:underline"
            >
              manol@balkanbit.app
            </a>{" "}
            and we will respond within one month.
          </p>
        </Section>

        <Section title="8. Children">
          <p>
            Mathly is a study tool suitable for general audiences and asks for
            no personal information from any user, including children. We do not
            knowingly collect personal data from children, and the App contains
            no advertising and no cross-app tracking. Under the Bulgarian PDPA,
            consent of a person under 14 is valid only if given by a parent or
            guardian; if we learn we have processed a child&rsquo;s data without
            valid consent, we will delete it immediately.
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            All data in transit is encrypted with HTTPS/TLS. Problem images are
            processed transiently and are not written to long-term storage.
            Requests are authorized per device, and data on your device is
            protected by your device&rsquo;s operating system sandbox.
          </p>
        </Section>

        <Section title="10. Complaints">
          <p>
            You have the right to lodge a complaint with the Bulgarian
            Commission for Personal Data Protection (CPDP):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Address: 2 Prof. Tsvetan Lazarov Blvd., 1592 Sofia, Bulgaria</li>
            <li>Fax: +359 2 915 3525</li>
            <li>
              Email (qualified electronic signature required):{" "}
              <a
                href="mailto:kzld@cpdp.bg"
                className="text-accent hover:text-accent-link-hover hover:underline"
              >
                kzld@cpdp.bg
              </a>
            </li>
            <li>
              Web:{" "}
              <a
                href="https://www.cpdp.bg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-link-hover hover:underline"
              >
                https://www.cpdp.bg
              </a>
            </li>
          </ul>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We may update this policy as the App evolves. Material changes will
            be announced in the App before they take effect, and the effective
            date above will always reflect the current version.
          </p>
        </Section>

        <footer className="pt-8 border-t border-border text-small text-text-3">
          <p>
            &ldquo;Pazaruvai Umno&rdquo; EOOD · UIC 206373314 · Sofia,
            Bulgaria ·{" "}
            <Link
              href="/mathly/terms"
              className="text-accent hover:text-accent-link-hover hover:underline"
            >
              Terms of Use
            </Link>{" "}
            ·{" "}
            <Link
              href="/mathly/support"
              className="text-accent hover:text-accent-link-hover hover:underline"
            >
              Support
            </Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
