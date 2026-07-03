import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LooxMaxxing — Privacy Policy | BalkanBit",
  description:
    "Privacy policy for the LooxMaxxing mobile application: what data we collect, how photos are processed and deleted, and your rights under the GDPR.",
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

export default function LooxMaxxingPrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-[#8ca0c8] mb-12">
          Effective date: July 3, 2026 · Applies to the LooxMaxxing mobile
          application for iOS and Android (com.balkanbit.looxmaxxing)
        </p>

        <Section title="1. Who we are">
          <p>
            The LooxMaxxing application (&ldquo;the App&rdquo;) is published by
            &ldquo;Pazaruvai Umno&rdquo; EOOD (&ldquo;ПАЗАРУВАЙ УМНО&rdquo;
            ЕООД), a company registered in the Republic of Bulgaria with
            Unified Identification Code (UIC/ЕИК) 206373314, with registered
            address at Sofia 1343, Lyulin 2, bl. 235, vh. V, et. 2, ap. 81,
            Republic of Bulgaria (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;). We are the Data Controller under the EU General
            Data Protection Regulation (GDPR) and the Bulgarian Law on
            Personal Data Protection (PDPA). The App is developed and operated
            through the BalkanBit venture studio.
          </p>
          <p>
            Questions about this policy or your data:{" "}
            <a
              href="mailto:privacy@balkanbit.app"
              className="text-[#4f8fff] hover:underline"
            >
              privacy@balkanbit.app
            </a>
            .
          </p>
        </Section>

        <Section title="2. What the App does with your photos">
          <p>
            LooxMaxxing generates appearance trait scores from two photos of
            your face (a front photo and a profile photo) that you capture
            with your camera or select from your photo library. Because your
            face is sensitive data, we designed the App to handle photos as
            minimally as possible:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Photos are stored <strong className="text-white">locally on your
              device</strong>. You can delete them at any time in{" "}
              <em>Profile → Privacy → Delete my photos</em>.
            </li>
            <li>
              When you run a scan, your photos are uploaded over encrypted
              HTTPS connections using single-use, signed upload links to our
              secure cloud storage.
            </li>
            <li>
              Our scoring service analyzes the photos with an AI model to
              produce your trait scores, and{" "}
              <strong className="text-white">
                deletes both photos from our servers immediately after scoring
              </strong>
              . Only the numeric scores are returned to your device.
            </li>
            <li>
              If you use the avatar feature, your reference photo is uploaded
              the same way to generate a stylized image; the generated image
              is served from a temporary link that expires automatically.
            </li>
            <li>
              Your photos are <strong className="text-white">never</strong>{" "}
              used to identify you, sold, shared for advertising, or used to
              train AI models.
            </li>
          </ul>
        </Section>

        <Section title="3. Categories of data we process">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Face photos</strong> — front and
              profile photos, processed transiently as described in Section 2.
            </li>
            <li>
              <strong className="text-white">Scan results and onboarding
              answers</strong> — your trait scores, selected concerns, and
              goals are stored only on your device. They are removed when you
              delete the App.
            </li>
            <li>
              <strong className="text-white">Anonymous app identifier</strong>{" "}
              — a random identifier generated by our subscription provider
              (RevenueCat). It is sent with scan requests to enforce fair-use
              limits and to associate your subscription with your device. It
              is not linked to your name, email, or any account — the App has
              no user accounts.
            </li>
            <li>
              <strong className="text-white">Purchase data</strong> — if you
              subscribe, Apple or Google processes the payment. We and our
              processor RevenueCat receive the anonymous identifier, product
              purchased, subscription status, device platform, and locale. We
              never receive your payment card details.
            </li>
          </ul>
          <p>
            We do <strong className="text-white">not</strong> collect your
            name, email address, phone number, contacts, or location. The App
            contains no advertising and no third-party analytics SDKs, and it
            does not track you across other companies&rsquo; apps or websites.
          </p>
        </Section>

        <Section title="4. Lawful bases for processing">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Consent (Art. 6(1)(a) and Art.
              9(2)(a) GDPR)</strong> — for capturing and processing your face
              photos. You grant camera and photo library access through the
              operating system prompts, and each scan is started only by your
              explicit action. You may withdraw consent at any time by
              deleting your photos and not running further scans.
            </li>
            <li>
              <strong className="text-white">Performance of a contract (Art.
              6(1)(b) GDPR)</strong> — to deliver the scoring service and
              manage your subscription and purchases.
            </li>
            <li>
              <strong className="text-white">Legitimate interest (Art. 6(1)(f)
              GDPR)</strong> — to prevent fraud and abuse of the scanning
              service and to keep the service secure.
            </li>
            <li>
              <strong className="text-white">Legal obligation (Art. 6(1)(c)
              GDPR)</strong> — to keep transaction records required by tax and
              accounting law.
            </li>
          </ul>
        </Section>

        <Section title="5. Service providers">
          <p>
            We use a small number of processors, each bound by data
            processing agreements and receiving only what is necessary:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">RevenueCat, Inc.</strong> —
              subscription management (anonymous identifier, purchase and
              entitlement data).
            </li>
            <li>
              <strong className="text-white">Cloud hosting and storage
              providers</strong> — host our scoring API and the temporary
              photo storage described in Section 2.
            </li>
            <li>
              <strong className="text-white">AI inference provider</strong> —
              processes photos transiently to compute trait scores; photos are
              not retained or used for model training.
            </li>
            <li>
              <strong className="text-white">Apple App Store / Google
              Play</strong> — payment processing under their own privacy
              policies.
            </li>
          </ul>
          <p>
            Where a provider processes data outside the European Economic
            Area, transfers are protected by the European Commission&rsquo;s
            Standard Contractual Clauses or an adequacy decision (including
            the EU–US Data Privacy Framework where applicable).
          </p>
        </Section>

        <Section title="6. Retention">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Photos on our servers</strong> —
              deleted immediately after scoring; generated avatar images
              expire automatically.
            </li>
            <li>
              <strong className="text-white">Photos, scores, and answers on
              your device</strong> — kept until you delete them in the App or
              uninstall the App.
            </li>
            <li>
              <strong className="text-white">Purchase records</strong> — kept
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
            your device: deleting your photos in{" "}
            <em>Profile → Privacy</em> or uninstalling the App removes it. For
            anything else — including deletion of purchase records associated
            with your anonymous identifier — email{" "}
            <a
              href="mailto:privacy@balkanbit.app"
              className="text-[#4f8fff] hover:underline"
            >
              privacy@balkanbit.app
            </a>{" "}
            and we will respond within one month.
          </p>
        </Section>

        <Section title="8. Children">
          <p>
            The App is intended for users aged 17 and over and includes an age
            gate at onboarding. We do not knowingly process personal data of
            children. Under the Bulgarian PDPA, consent of a person under 14
            is valid only if given by a parent or guardian; if we learn we
            have processed a child&rsquo;s data without valid consent, we will
            delete it immediately.
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            All data in transit is encrypted with HTTPS/TLS. Photo uploads use
            single-use signed URLs, server-side photo storage is
            access-controlled and short-lived, and scan requests are
            authorized per device. Data on your device is protected by your
            device&rsquo;s operating system sandbox.
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
                className="text-[#4f8fff] hover:underline"
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
                className="text-[#4f8fff] hover:underline"
              >
                https://www.cpdp.bg
              </a>
            </li>
          </ul>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We may update this policy as the App evolves. Material changes
            will be announced in the App before they take effect, and the
            effective date above will always reflect the current version.
          </p>
        </Section>

        <footer className="pt-8 border-t border-white/[0.07] text-sm text-[#8ca0c8]">
          <p>
            &ldquo;Pazaruvai Umno&rdquo; EOOD · UIC 206373314 · Sofia,
            Bulgaria ·{" "}
            <Link
              href="/looxmaxxing/terms"
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
