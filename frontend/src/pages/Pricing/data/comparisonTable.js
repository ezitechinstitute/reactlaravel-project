/* ===========================================================
   COMPARISON TABLE
   Each row: 5 feature labels on the left, then how many of
   them are covered by the Basic vs Team plan. `basicChecks` /
   `teamChecks` preserve the exact (uneven) checkmark counts
   from the original hand-typed markup — Basic rows show fewer
   checks than there are labels, Team rows always show 4.
=========================================================== */

export const COMPARISON_ROWS = [
  {
    labels: [
      'AI Pricing Insights',
      'Dynamic Cost Adjustments',
      'Predictive Pricing Models',
      'Automated Price Optimization',
      'Real-time Market Analysis',
    ],
    basicValue: '10',
    basicChecks: 2,
    teamValue: 'Unlimited',
    teamChecks: 4,
  },
  {
    labels: [
      'Rule-based Automation',
      'Custom Pricing Rules',
      'Bulk Price Updates',
      'Scheduled Adjustments',
      'Fail-safe Price Limits',
    ],
    basicValue: '5 Rules',
    basicChecks: 2,
    teamValue: 'Unlimited Rules',
    teamChecks: 4,
  },
  {
    labels: [
      'Performance Analytics',
      'Revenue Impact Tracking',
      'Competitor Price Monitoring',
      'Historical Price Reports',
      'Exportable Data Insights',
    ],
    basicValue: 'Basic Reports',
    basicChecks: 1,
    teamValue: 'Advanced Reports',
    teamChecks: 4,
  },
];
