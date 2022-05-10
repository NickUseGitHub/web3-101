export const { CONTRACT_ADDRESS } = process.env;
export const CONTRACT_ABI = (function () {
  try {
    return JSON.parse(process.env.CONTRACT_ABI);
  } catch {
    return null;
  }
})();
