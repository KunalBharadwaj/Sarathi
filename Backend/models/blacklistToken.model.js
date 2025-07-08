const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // 24 hours in seconds
  }
});

// Static method to check if a token is blacklisted
blacklistTokenSchema.statics.isTokenBlacklisted = async function(token) {
  const tokenExists = await this.findOne({ token });
  return !!tokenExists;
};

// Static method to add a token to blacklist
blacklistTokenSchema.statics.blacklistToken = async function(token) {
  try {
    return await this.findOneAndUpdate(
      { token }, 
      { token }, 
      { upsert: true, new: true }
    );
  } catch (error) {
    console.error('Error blacklisting token:', error);
    return true;
  }
};

const BlacklistToken = mongoose.model('BlacklistTokens', blacklistTokenSchema);

module.exports = BlacklistToken;

