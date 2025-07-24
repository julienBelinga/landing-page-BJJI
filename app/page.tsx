export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Page en cours de développement
        </h1>
        <p className="text-gray-600 mb-6">
          Cette page n’est pas encore disponible. Nous travaillons activement pour vous offrir la meilleure expérience possible. 🚧
        </p>
        <p className="text-gray-500 text-sm">
          Pour toute question ou besoin de support, contactez-nous à{" "}
          <a
            href="mailto:julienboinga.pro@gmail.com"
            className="text-blue-600 underline"
          >
            julienbelinga.pro@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
