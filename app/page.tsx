export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4">
      {/* Hero */}
      <section className="w-full max-w-3xl text-center pt-24 pb-16">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Slack Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-route urgent Slack threads<br className="hidden sm:block" /> to the right people
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SlackRouter uses AI to analyze thread content for urgency and keywords, then instantly mentions the right team members — so nothing critical falls through the cracks.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with any Slack workspace.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-1">Real-time Analysis</h3>
            <p className="text-sm text-[#8b949e]">Webhook processes every Slack message instantly using OpenAI to detect urgency and topic.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🎯</div>
            <h3 className="text-white font-semibold mb-1">Smart Routing Rules</h3>
            <p className="text-sm text-[#8b949e]">Configure keyword-to-person mappings. The AI learns context so routing stays accurate over time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🔒</div>
            <h3 className="text-white font-semibold mb-1">Slack OAuth Secure</h3>
            <p className="text-sm text-[#8b949e]">Connects via official Slack OAuth. No message storage — analysis happens in-flight only.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full max-w-sm pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited Slack workspaces</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI urgency + keyword detection</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Configurable routing rules</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time webhook processing</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-2xl pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does SlackRouter connect to my workspace?</h3>
            <p className="text-sm text-[#8b949e]">Via Slack's official OAuth flow. You authorize the app with the minimum required scopes — we never store message content.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I customize who gets mentioned for what topics?</h3>
            <p className="text-sm text-[#8b949e]">Yes. You define routing rules — keywords, channels, urgency levels — and map them to specific team members or groups.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What happens if I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Your routing stops immediately and the Slack app is deauthorized. No data is retained after cancellation.</p>
          </div>
        </div>
      </section>

      <footer className="pb-10 text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} SlackRouter. All rights reserved.
      </footer>
    </main>
  );
}
