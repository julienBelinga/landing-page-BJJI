"use client";

import { useState } from "react";

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 pb-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Support utilisateur
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Besoin d'aide ? Posez vos questions ici ou écrivez-nous directement
            à{" "}
            <a
              href="mailto:julienboinga.pro@gmail.com"
              className="text-blue-600 underline"
            >
              julienboinga.pro@gmail.com
            </a>
          </p>
        </div>
        <div className="p-6">
          <form
            action="https://formsubmit.co/julienbelinga.pro@gmail.com"
            method="POST"
            className="space-y-4"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Anti-spam honeypot */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="Nouveau message de support"
            />
            <input
              type="hidden"
              name="_next"
              value="https://bjj-insight.vercel.app/support/success"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              required
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
            />
            <textarea
              name="message"
              placeholder="Décrivez votre problème ou votre question"
              required
              rows={4}
              className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
