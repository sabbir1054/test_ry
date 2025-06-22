// 7. QuantificationPanel.jsx
export default function QuantificationPanel() {
  return (
    <section className="py-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <svg
              className="h-5 w-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          📊 Quantified Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuantCard color="yellow" label="Etioplast Area" value="12.8 µm²" />
          <QuantCard color="purple" label="PLB Area" value="3.4 µm²" />
          <QuantCard color="red" label="Prothylakoid Count" value="4" />
          <QuantCard
            color="red"
            label="Total Prothylakoid Length"
            value="52.6 µm"
          />
          <QuantCard color="blue" label="Plastoglobule Count" value="24" />
          <QuantCard
            color="blue"
            label="Avg. Plastoglobule Diameter"
            value="0.28 µm"
          />
        </div>
      </div>
    </section>
  );
}

function QuantCard({ color, label, value }) {
  return (
    <div
      className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-4 rounded-xl border border-${color}-200`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={`color-dot bg-${color}-500`}></div>
        <p className={`text-sm font-medium text-${color}-800`}>{label}</p>
      </div>
      <p className={`text-2xl font-bold text-${color}-900`}>{value}</p>
    </div>
  );
}
