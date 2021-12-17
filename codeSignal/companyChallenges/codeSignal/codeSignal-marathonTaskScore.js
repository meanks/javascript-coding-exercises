function marathonTaskScore(
  marathonLength,
  maxScore,
  submissions,
  successfulSubmissionTime
) {
  if (successfulSubmissionTime < 0) return 0;
  const failedSubmisstionPenalty = 10 * (submissions - 1);
  const additionalMinutePenalty =
    successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength);
  const finalScore =
    maxScore - additionalMinutePenalty - failedSubmisstionPenalty;
  return (finalScore > maxScore / 2 && finalScore) || maxScore / 2;
}
console.log(marathonTaskScore(100, 400, 4, 30));
