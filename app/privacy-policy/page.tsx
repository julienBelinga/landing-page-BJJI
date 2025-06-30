export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal data when using our application
        and services.
      </p>

      <p className="mb-4">
        We collect minimal personal data needed to operate effectively and
        provide you the best experience. This may include your name, email
        address, and training preferences.
      </p>

      <p className="mb-4">
        We do not sell or share your personal data with third parties. All data
        is stored securely and used only for service improvement and
        communication purposes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Microphone Access</h2>
      <p className="mb-4">
        Our app uses your device's microphone solely for the purpose of
        recording and sending voice messages to other users. These voice
        messages are stored securely in Firebase Storage and are deleted
        automatically when a conversation is deleted by the user.
      </p>

      <p className="mb-4">
        We do not use microphone data for analytics, advertising, or any
        background listening. Microphone access is only triggered when the user
        explicitly chooses to record a message.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">User Consent</h2>
      <p className="mb-4">
        By using our app, you consent to the collection and use of your data as
        described in this Privacy Policy. If you have any questions or wish to
        delete your data, please contact us.
      </p>
    </div>
  );
}
