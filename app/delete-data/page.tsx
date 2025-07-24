"use client";

import { useState } from "react";

export default function DeleteDataPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 pb-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Suppression de données
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Demandez la suppression de vos données personnelles.
          </p>
        </div>
        <div className="p-6">
          <form
            action="https://formsubmit.co/julienbelinga.pro@gmail.com"
            method="POST"
            className="space-y-4"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Anti-spam / configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="Demande de suppression de données"
            />
            <input
              type="hidden"
              name="_next"
              value="https://bjj-insight.vercel.app/delete-data/success"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              required
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
            >
              {isSubmitting ? "Envoi en cours..." : "Demander la suppression"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
