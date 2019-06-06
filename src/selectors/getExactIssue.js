const getExactIssue = (issues, issueId) =>
  Object.values(issues)
    .reduce((acc, v) => [...acc, ...v], [])
    .filter(i => i.id === Number.parseInt(issueId, 10));

export default getExactIssue;
