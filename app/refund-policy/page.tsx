import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <p className="mb-4">
        We want you to be satisfied with your purchase. If you encounter issues
        or are not happy with the service, please contact us within 14 days of
        purchase.
      </p>
      <p className="mb-4">
        Refunds are considered on a case-by-case basis, depending on usage and
        support engagement. We do not guarantee refunds for digital services
        after significant usage.
      </p>
      <p>
        To request a refund, email us at{" "}
        <Link href="mailto:julienbelinga.pro@gmail.com">
          julienbelinga.pro@gmail.com
        </Link>{" "}
        with your account details and reason.
      </p>
    </div>
  );
}
