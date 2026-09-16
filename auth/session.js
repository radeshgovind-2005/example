// Placeholder session-handling logic for tiering test purposes.
function createSession(userId) {
  return { userId, token: Math.random().toString(36).slice(2), createdAt: Date.now() };
}

module.exports = { createSession };
