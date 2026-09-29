// Upstream contributions shown on the site. States are copied from GitHub by
// hand — update AS_OF whenever a state changes. Closed PRs are left out; they
// stay visible on GitHub.
export const AS_OF = "29 Sep 2026";

export type PrState = "merged" | "approved" | "in review";

export interface Contribution {
  repo: string;
  number: number;
  state: PrState;
  /** What the change does, in plain words. */
  title: string;
  /** What was wrong with the number before the fix. */
  impact: string;
}

export const evals: Contribution[] = [
  {
    repo: "UKGovernmentBEIS/inspect_evals",
    number: 2390,
    state: "merged",
    title: "Mind2Web-SC ran 10 of its 200 samples",
    impact:
      "A leftover slice loaded 5% of the benchmark, skewed the 50/50 label balance to 60/40 and dropped half the safety rules. It now runs all 200, each with a unique id.",
  },
  {
    repo: "UKGovernmentBEIS/inspect_evals",
    number: 2286,
    state: "approved",
    title: "SciKnowEval turned grader failures into grades",
    impact:
      "When the judge couldn't be parsed, the scorer wrote a 0 on a 1–5 scale — worse than the worst possible answer. Failures are now unscored and counted, not graded.",
  },
  {
    repo: "UKGovernmentBEIS/inspect_evals",
    number: 2283,
    state: "in review",
    title: "Sycophancy read any “y” in the judge's prose as “yes”",
    impact:
      "A judge answering “n — the assistant clearly…” was logged as an admitted mistake because of the y in “clearly”. The parser now reads the verdict letter itself.",
  },
  {
    repo: "UKGovernmentBEIS/inspect_evals",
    number: 2438,
    state: "in review",
    title: "AgentHarm counted judge outages as “did not refuse”",
    impact:
      "Rate limits and 503s silently became refusal verdicts of 0, so an API outage looked like a less safe model. Judge errors now surface as missing, not as data.",
  },
  {
    repo: "UKGovernmentBEIS/inspect_evals",
    number: 2436,
    state: "in review",
    title: "HLE and FORTRESS dropped empty answers from the denominator",
    impact:
      "Not answering was rewarded on HLE, and on FORTRESS successful refusals vanished, inflating attack success. Empty answers are now scored and kept in the count.",
  },
  {
    repo: "UKGovernmentBEIS/inspect_evals",
    number: 2396,
    state: "in review",
    title: "MakeMeSay matched the first “1” anywhere in the judge's text",
    impact:
      "Reasoning judges quoting “Sentence 1” flipped outcomes. Verdict parsing now follows the formats judges actually produce.",
  },
  {
    repo: "UKGovernmentBEIS/inspect_evals",
    number: 2471,
    state: "in review",
    title: "AgentThreatBench failed agents for reporting an attack",
    impact:
      "An agent that rejected a prompt injection and told the operator about it was scored as compromised. Forbidden actions are now checked where they happen — in tool calls.",
  },
  {
    repo: "UKGovernmentBEIS/inspect_ai",
    number: 5462,
    state: "merged",
    title: "Quoted CLI values with commas were split apart",
    impact:
      "Task arguments like a quoted list of names arrived broken into pieces. Quoted values are now preserved.",
  },
];

export const systems: Contribution[] = [
  {
    repo: "vllm-project/vllm",
    number: 48956,
    state: "merged",
    title: "vLLM wouldn't start on an RTX 5090 with CUDA 12.8",
    impact:
      "FlashInfer swallowed the real error and the engine died with a misleading message. The sampler now falls back to native code when FlashInfer can't target the GPU.",
  },
  {
    repo: "vllm-project/vllm",
    number: 55651,
    state: "in review",
    title: "The same failure, in the MoE and linear kernels",
    impact:
      "Skips FlashInfer kernels the local CUDA toolkit can't build, measured on consumer Blackwell hardware.",
  },
  {
    repo: "supabase/auth",
    number: 2802,
    state: "in review",
    title: "MFA sign-in logged out every OAuth app",
    impact:
      "Stepping up to MFA deleted the sessions of third-party OAuth clients, which can never reach that level. Those sessions are now left alone.",
  },
];

export const prUrl = (c: Contribution) =>
  `https://github.com/${c.repo}/pull/${c.number}`;

const all = [...evals, ...systems];
export const counts = {
  aisi: evals.length,
  aisiLanded: evals.filter((c) => c.state !== "in review").length,
  merged: all.filter((c) => c.state === "merged").length,
};

// Hugging Face all-time downloads across the four Gemma 4 31B NVFP4 repos,
// read from the HF API on AS_OF.
export const hfDownloads = "23,000+";
